import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = resolve(root, "localization", "ko-manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const update = process.argv.includes("--update");

const changed = [];
const missingSources = [];
const missingTranslations = [];
const currentHashes = {};

for (const [source, entry] of Object.entries(manifest.pages)) {
  const sourcePath = resolve(root, source);
  const translationPath = resolve(root, entry.translation);

  if (!existsSync(sourcePath)) {
    missingSources.push(source);
    continue;
  }
  if (!existsSync(translationPath)) {
    missingTranslations.push(entry.translation);
  }

  const hash = createHash("sha256")
    .update(readFileSync(sourcePath))
    .digest("hex");
  currentHashes[source] = hash;
  if (hash !== entry.sourceHash) {
    changed.push(source);
  }
}

if (missingSources.length) {
  console.error("Missing source pages:");
  missingSources.forEach((path) => console.error(`- ${path}`));
}
if (missingTranslations.length) {
  console.error("Missing Korean translations:");
  missingTranslations.forEach((path) => console.error(`- ${path}`));
}
if (changed.length && !update) {
  console.error("Korean translation update required:");
  changed.forEach((path) => console.error(`- ${path}`));
}

const failures =
  missingSources.length + missingTranslations.length + changed.length;
if (update && !missingSources.length && !missingTranslations.length) {
  for (const [source, hash] of Object.entries(currentHashes)) {
    manifest.pages[source].sourceHash = hash;
  }
  manifest.sourceRevision = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: root,
    encoding: "utf8",
  }).trim();
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `Updated Korean translation baseline (${Object.keys(manifest.pages).length} pages).`
  );
} else if (failures) {
  process.exitCode = 1;
} else {
  console.log(
    `Korean translations are synchronized (${Object.keys(manifest.pages).length} pages).`
  );
}
