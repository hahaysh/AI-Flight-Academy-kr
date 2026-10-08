import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  readFileSync(resolve(root, "localization", "ko-manifest.json"), "utf8")
);
const marker = "English — original";
const failures = [];
let promptCount = 0;
let markerCount = 0;

function unescapeQuoted(value) {
  return value.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

function extractInline(line) {
  let value = line.slice(line.indexOf(`${marker}:`) + marker.length + 1).trim();
  value = value.replace(/^\*+\s*/, "");
  if (value.startsWith('"')) {
    let escaped = false;
    for (let i = 1; i < value.length; i++) {
      if (value[i] === '"' && !escaped) {
        return unescapeQuoted(value.slice(1, i));
      }
      escaped = value[i] === "\\" && !escaped;
      if (value[i] !== "\\") escaped = false;
    }
  }
  return unescapeQuoted(
    value
      .replace(/",?\s*$/, "")
      .replace(/<\/[^>]+>\s*.*$/, "")
      .replace(/\*+\s*.*$/, "")
      .replace(/\s*\|\s*$/, "")
      .trim()
  );
}

function extractEnglishPrompts(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const prompts = [];

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed === `**${marker}**`) {
      let next = i + 1;
      while (next < lines.length && !lines[next].trim()) next++;
      if (lines[next]?.trim().startsWith("```")) {
        const content = [];
        while (
          ++next < lines.length &&
          !lines[next].trim().startsWith("```")
        ) {
          content.push(lines[next]);
        }
        prompts.push(content.join("\n").trim().replace(/^>\s*/, ""));
      } else if (next < lines.length) {
        prompts.push(lines[next].trim().replace(/^>\s*/, ""));
      }
      continue;
    }
    if (trimmed === `# ${marker}`) {
      const content = [];
      while (++i < lines.length && !lines[i].trim().startsWith("```")) {
        content.push(lines[i]);
      }
      prompts.push(content.join("\n").trim().replace(/^>\s*/, ""));
      continue;
    }
    if (new RegExp(`${marker}:\\s*$`).test(trimmed)) {
      const content = [];
      let next = i + 1;
      while (next < lines.length && !lines[next].trim()) next++;
      if (lines[next]?.trim().startsWith("```")) {
        while (
          ++next < lines.length &&
          !lines[next].trim().startsWith("```")
        ) {
          content.push(lines[next]);
        }
      } else {
        while (next < lines.length && lines[next].trim()) {
          content.push(lines[next]);
          next++;
        }
      }
      prompts.push(content.join("\n").trim().replace(/^>\s*/, ""));
      continue;
    }
    if (lines[i].includes(`${marker}:`)) {
      const segments = lines[i].split(marker).slice(1);
      segments.forEach((segment) => {
        prompts.push(extractInline(`${marker}${segment}`));
      });
    }
  }

  return prompts.filter(Boolean);
}

for (const [source, entry] of Object.entries(manifest.pages)) {
  if (!source.includes("/build/")) continue;

  const sourceText = readFileSync(resolve(root, source), "utf8").replace(
    /\r\n/g,
    "\n"
  );
  const translation = readFileSync(
    resolve(root, entry.translation),
    "utf8"
  );
  markerCount += translation.split(marker).length - 1;
  const prompts = extractEnglishPrompts(translation);
  promptCount += prompts.length;

  for (const prompt of prompts) {
    if (!sourceText.includes(prompt)) {
      failures.push({
        translation: entry.translation,
        prompt: prompt.slice(0, 100),
      });
    }
  }
}

if (failures.length) {
  console.error("English prompt text differs from its source:");
  failures.forEach(({ translation, prompt }) => {
    console.error(`- ${translation}: ${prompt}`);
  });
  process.exitCode = 1;
} else if (promptCount !== markerCount) {
  console.error(
    `Extracted ${promptCount} English prompts from ${markerCount} original markers.`
  );
  process.exitCode = 1;
} else {
  console.log(`Verified ${promptCount} English prompt originals.`);
}
