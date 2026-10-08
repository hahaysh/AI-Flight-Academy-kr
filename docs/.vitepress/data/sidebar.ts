// Navigation builders. Node-only: this reads markdown off disk to pull each
// build page's steps into the sidebar, so it must never be imported by a Vue
// component or it will drag node:fs into the browser bundle.

import {
  tracks,
  scenarios,
  buildId,
  buildLink,
  statusFor,
  statusLabelFor,
  getTrackForLocale,
  getScenarioForLocale,
  getTracks,
  getScenarios,
  chooserLink,
  SCENARIO_0,
} from "./paths";
import { pageHeadings, type Heading } from "./headings";
import { getMessages, localizedPath, type SiteLocale } from "./locales";

function suffix(
  trackId: string,
  scenarioId: string,
  locale: SiteLocale
): string {
  const label = statusLabelFor(statusFor(trackId, scenarioId), locale);
  return label ? ` (${label})` : "";
}

export function isBuildPage(relativePath: string): boolean {
  return /^(?:ko\/)?build\/(cowork|scout|code)-scenario-\d+\.md$/.test(
    relativePath
  );
}

/**
 * Nest h3 subsections under the h2 step they belong to, so a step with parts
 * reads as one entry you can expand - not as several siblings competing with
 * the numbered steps. An h3 appearing before any h2 stays top level.
 */
function nestSteps(steps: Heading[], link: string) {
  const toItem = (h: Heading) => ({ text: h.text, link: `${link}#${h.anchor}` });
  const out: any[] = [];

  for (const h of steps) {
    if (h.level === 3 && out.length) {
      const parent = out[out.length - 1];
      (parent.items ??= []).push(toItem(h));
      parent.collapsed = true;
      continue;
    }
    out.push(toItem(h));
  }

  return out;
}

/**
 * "Start Building" nav dropdown: one group per scenario, one item per track.
 *
 * Scenario 0 is deliberately absent. It's the pre-event readiness gate, and
 * during the event a stray click on it drops someone into setup instead of the
 * scenarios. Its pages still build and stay reachable by URL - see the SCENARIO_0
 * comment in paths.ts for how to put the links back afterwards.
 */
export function navBuildItems(locale: SiteLocale = "en") {
  const messages = getMessages(locale);
  const localizedTracks = getTracks(locale);
  const localizedScenarios = getScenarios(locale);
  return [
    { text: messages.picker.pickPath, link: chooserLink(locale) },
    ...localizedScenarios.map((s) => ({
      text: `${s.emoji} ${s.label} · ${s.name}`,
      items: localizedTracks.map((t) => ({
        text: `${t.emoji} ${t.label} - ${t.tool}${suffix(t.id, s.id, locale)}`,
        link: buildLink(t.id, s.id, locale),
      })),
    })),
  ];
}

/**
 * The sidebar is scoped to the choice you've made. Once you're in a scenario
 * the other scenarios disappear entirely - you see your scenario's three paths
 * and nothing else, with one link back out. Same for guides once you've picked
 * a track. Before you've chosen, everything is listed.
 *
 * On a build page the page's own steps are nested under your level, so the left
 * rail answers both "which path am I on" and "where am I in it".
 */
export function globalSidebar(
  opts: {
    scenario?: string;
    track?: string;
    steps?: boolean;
    lean?: boolean;
    locale?: SiteLocale;
  } = {}
) {
  const locale = opts.locale ?? "en";
  const messages = getMessages(locale);
  const localizedTracks = getTracks(locale);
  const localizedScenarios = getScenarios(locale);
  const scenario = opts.scenario
    ? getScenarioForLocale(opts.scenario, locale)
    : undefined;
  const track = opts.track
    ? getTrackForLocale(opts.track, locale)
    : undefined;

  const trackItems = (scenarioId: string) =>
    localizedTracks.map((t) => {
      const link = buildLink(t.id, scenarioId, locale);
      const item: any = {
        text: `${t.emoji} ${t.label}${suffix(t.id, scenarioId, locale)}`,
        link,
      };
      if (opts.steps && track && t.id === track.id) {
        const prefix = locale === "ko" ? "ko/" : "";
        const steps = pageHeadings(
          `${prefix}build/${buildId(t.id, scenarioId)}.md`
        );
        if (steps.length) {
          item.items = nestSteps(steps, link);
          item.collapsed = false;
        }
      }
      return item;
    });

  const scenarioSection = scenario
    ? {
        text: `${scenario.emoji} ${scenario.name}`,
        items: [
          ...(scenario.id === SCENARIO_0.id
            ? [{
                text: messages.sidebar.startHere,
                link: localizedPath(`/scenarios/${scenario.id}`, locale),
              }]
            : []),
          ...trackItems(scenario.id),
          ...(scenario.id === SCENARIO_0.id
            ? []
            : [{
                text: messages.sidebar.switchScenario,
                link: chooserLink(locale),
              }]),
        ],
      }
    : {
        text: messages.sidebar.scenarios,
        items: [
          ...localizedScenarios.map((s) => ({
            text: `${s.emoji} ${s.name}`,
            collapsed: true,
            items: [
              ...localizedTracks.map((t) => ({
                text: `${t.emoji} ${t.label}${suffix(t.id, s.id, locale)}`,
                link: buildLink(t.id, s.id, locale),
              })),
            ],
          })),
        ],
      };

  // Everything that isn't a scenario.
  const guidesSection = {
    text: messages.sidebar.reference,
    items: [{
      text: messages.nav.glossary,
      link: localizedPath("/glossary", locale),
    }],
  };

  // A lean rail is just "where am I in this path" - nothing else. Scenario 0 is
  // the pre-event readiness gate, so the site-wide links, guides, and finish
  // line would only be noise on its pages.
  if (opts.lean) {
    return [scenarioSection];
  }

  return [
    {
      text: messages.sidebar.academy,
      items: [
        { text: messages.nav.home, link: localizedPath("/", locale) },
        {
          text: messages.sidebar.altitudeGuide,
          link: localizedPath("/levels/", locale),
        },
      ],
    },
    scenarioSection,
    guidesSection,
  ];
}

/**
 * A sidebar per route, so what you see is already scoped to your choice when
 * you land. Keys with more path segments win, so specific routes beat "/".
 */
export function sidebars(
  locale: SiteLocale = "en"
): Record<string, ReturnType<typeof globalSidebar>> {
  const out: Record<string, any> = {};
  for (const s of [SCENARIO_0, ...scenarios]) {
    if (locale === "ko" && s.id === SCENARIO_0.id) continue;
    for (const t of tracks) {
      out[buildLink(t.id, s.id, locale)] = globalSidebar({
        scenario: s.id,
        track: t.id,
        steps: true,
        lean: s.id === SCENARIO_0.id,
        locale,
      });
    }
    if (s.id === SCENARIO_0.id) {
      out[localizedPath(`/scenarios/${s.id}`, locale)] = globalSidebar({
        scenario: s.id,
        lean: true,
        locale,
      });
    }
  }
  out[localizedPath("/glossary", locale)] = globalSidebar({ locale });
  out[localizedPath("/", locale)] = globalSidebar({ locale });
  return out;
}
