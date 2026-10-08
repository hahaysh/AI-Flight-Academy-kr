import type { SiteMessages } from "./types";

export const en: SiteMessages = {
  nav: {
    home: "Home",
    startBuilding: "Start Building",
    glossary: "Glossary",
    about: "About",
  },
  picker: {
    pickPath: "🧭 Pick your path",
    pickAltitude: "Pick your altitude",
    altitudeHelp:
      "What the team builds with. Fly at the altitude that suits you - pick where you'll actually get something done.",
    compare: "Compare them →",
    pickScenario: "Pick your scenario",
    startBuilding: "Start building →",
    reset: "Reset",
  },
  sidebar: {
    switchScenario: "↔ Switch scenario",
    scenarios: "Scenarios",
    reference: "Reference",
    academy: "AI Flight Academy",
    altitudeGuide: "Which altitude is right for me?",
    startHere: "Start here",
  },
  components: {
    switchPath: "Switch path",
    choosePath: "Choose this path →",
    chooseDifferentPath: "← Choose a different path",
    firstMinutes: "Your first ten minutes",
    trySaying: "Try saying something like",
    copied: "Copied",
    copy: "Copy",
  },
  status: {
    ready: "",
    wip: "",
    soon: "Coming soon",
  },
  tracks: {
    cowork: {
      label: "Cowork",
      tool: "Microsoft Copilot + Cowork",
      buildsVerb: "Builds with",
      desc:
        "**Copilot Cowork** - just describe what you need. **Work IQ** pulls in your work context automatically.",
    },
    scout: {
      label: "Scout",
      tool: "Microsoft Scout",
      buildsVerb: "Builds with",
      desc:
        "**Microsoft Scout** - describe what you want and Scout builds it, grounded in your work through **Work IQ** and running against **GitHub Copilot CLI**.",
    },
    code: {
      label: "Code",
      tool: "VS Code + GitHub Copilot",
      buildsVerb: "Builds in",
      desc:
        "**GitHub Copilot on the surface of your choice - VS Code, the Copilot CLI, or the GitHub Copilot app.** Write the agents yourself and enforce guardrails in the tool rather than the prompt.",
    },
  },
  scenarios: {
    "scenario-0": {
      label: "Scenario 0",
      name: "Pre-Flight Checklist",
      sub: "Your pre-flight readiness check",
    },
    "scenario-1": {
      label: "Scenario 1",
      name: "The Digital Twin",
      sub: "A portable spec of how you work",
    },
    "scenario-2": {
      label: "Scenario 2",
      name: "Dispatch",
      sub: "A room of teams that routes a skilling request",
    },
    "scenario-3": {
      label: "Scenario 3",
      name: "The Ambassador",
      sub: "Find who multiplies others, and show why",
    },
  },
};
