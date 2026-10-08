import type { SiteMessages } from "./types";

export const ko: SiteMessages = {
  nav: {
    home: "홈",
    startBuilding: "실습 시작",
    glossary: "용어집",
    about: "소개",
  },
  picker: {
    pickPath: "🧭 실습 경로 선택",
    pickAltitude: "비행 고도 선택",
    altitudeHelp:
      "팀에서 사용할 도구를 선택합니다. 실제로 무언가를 만들어 낼 수 있는, 자신에게 맞는 고도를 고르세요.",
    compare: "고도 비교하기 →",
    pickScenario: "시나리오 선택",
    startBuilding: "실습 시작 →",
    reset: "초기화",
  },
  sidebar: {
    switchScenario: "↔ 다른 시나리오 선택",
    scenarios: "시나리오",
    reference: "참고 자료",
    academy: "AI Flight Academy",
    altitudeGuide: "나에게 맞는 비행 고도는?",
    startHere: "여기서 시작",
  },
  components: {
    switchPath: "다른 경로 선택",
    choosePath: "이 경로 선택 →",
    chooseDifferentPath: "← 다른 경로 선택",
    firstMinutes: "처음 10분 동안 할 일",
    trySaying: "다음과 같이 요청해 보세요",
    copied: "복사됨",
    copy: "복사",
  },
  status: {
    ready: "",
    wip: "",
    soon: "준비 중",
  },
  tracks: {
    cowork: {
      label: "Cowork",
      tool: "Microsoft Copilot + Cowork",
      buildsVerb: "사용 도구",
      desc:
        "**Copilot Cowork** - 필요한 것을 말로 설명하기만 하면 됩니다. **Work IQ**가 업무 컨텍스트를 자동으로 가져옵니다.",
    },
    scout: {
      label: "Scout",
      tool: "Microsoft Scout",
      buildsVerb: "사용 도구",
      desc:
        "**Microsoft Scout** - 원하는 것을 설명하면 Scout가 만들어 줍니다. **Work IQ**로 업무 컨텍스트를 활용하고 **GitHub Copilot CLI**를 기반으로 실행됩니다.",
    },
    code: {
      label: "Code",
      tool: "VS Code + GitHub Copilot",
      buildsVerb: "사용 도구",
      desc:
        "**VS Code, Copilot CLI 또는 GitHub Copilot app 중 원하는 환경에서 GitHub Copilot을 사용합니다.** 에이전트를 직접 만들고 프롬프트가 아닌 도구에서 가드레일을 적용합니다.",
    },
  },
  scenarios: {
    "scenario-0": {
      label: "시나리오 0",
      name: "비행 전 체크리스트",
      sub: "실습 전 준비 상태 확인",
    },
    "scenario-1": {
      label: "시나리오 1",
      name: "The Digital Twin",
      sub: "나의 업무 방식을 담은 이식 가능한 명세",
    },
    "scenario-2": {
      label: "시나리오 2",
      name: "Dispatch",
      sub: "여러 팀의 관점으로 스킬링 요청을 배정하는 공간",
    },
    "scenario-3": {
      label: "시나리오 3",
      name: "The Ambassador",
      sub: "다른 사람의 성장을 돕는 사람을 근거와 함께 찾기",
    },
  },
};
