export type SiteLocale = "en" | "ko";

export interface TrackMessages {
  label: string;
  tool: string;
  buildsVerb: string;
  desc: string;
}

export interface ScenarioMessages {
  label: string;
  name: string;
  sub: string;
}

export interface SiteMessages {
  nav: {
    home: string;
    startBuilding: string;
    glossary: string;
    about: string;
  };
  picker: {
    pickPath: string;
    pickAltitude: string;
    altitudeHelp: string;
    compare: string;
    pickScenario: string;
    startBuilding: string;
    reset: string;
  };
  sidebar: {
    switchScenario: string;
    scenarios: string;
    reference: string;
    academy: string;
    altitudeGuide: string;
    startHere: string;
  };
  components: {
    switchPath: string;
    choosePath: string;
    chooseDifferentPath: string;
    firstMinutes: string;
    trySaying: string;
    copied: string;
    copy: string;
  };
  status: {
    ready: string;
    wip: string;
    soon: string;
  };
  tracks: Record<string, TrackMessages>;
  scenarios: Record<string, ScenarioMessages>;
}
