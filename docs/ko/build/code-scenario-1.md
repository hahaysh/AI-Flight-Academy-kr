---
title: 디지털 트윈 - Code
---

<!-- markdownlint-disable MD013 MD025 MD033 -->

# 디지털 트윈

## 목표

여러분은 자신이 어떻게 일하는지 이미 알고 있습니다. 두 사안이 충돌할 때 어떤 절충안을 선택하는지, 약속하기 전에 무엇을 확인하는지, 파트너 팀과 자신의 팀에 따라 표현을 어떻게 바꾸는지 알고 있습니다.

하지만 에이전트가 접근할 수 있는 곳에는 그 어떤 것도 기록되어 있지 않습니다. 따라서 여러분이 직접 참여해 적용할 때만 이러한 방식이 반영됩니다.

여기서는 이를 에이전트가 로드할 수 있는 스킬로 만듭니다. 에이전트가 트윈에 접근할 수 있게 되면 커밋 시점, 일정에 따른 실행 시점, 작업 도중에 트윈에게 질문하고 여러분이 했을 법한 답변을 받을 수 있습니다.

이 활동에서는 트윈을 설정하고, 답변하는지 확인한 다음, 확장합니다. 세 단계로 진행합니다.

| | 단계 | 완료 기준 |
| --- | --- | --- |
| **1** | **설정하기** | `copilot skill list`의 Project skills 아래에 `my-twin`이 표시됩니다. |
| **2** | **트윈에게 질문하기** | `python twin.py "..."`가 입장과 그 근거가 된 `persona.md` 규칙을 반환합니다. |
| **3** | **확장하기** | 트윈이 이전에는 할 수 없던 일을 수행합니다. |

1단계와 2단계는 빠르게 진행되며, 합쳐서 약 15분이 걸립니다. 3단계가 핵심 빌드입니다. 한 번만 변경하고 끝내지 말고, 확장하고 다시 실행하여 무엇이 달라졌는지 본 다음 또 확장하세요.

::: details 용어집

- **디지털 트윈:** 에이전트가 여러분처럼 답하기 위해 알아야 할 정보, 즉 의사 결정 방식, 글쓰기 방식, 업무를 판단하는 기준입니다. 여러분이 소유하고 편집할 수 있는 몇 개의 텍스트 파일에 저장됩니다.
- **스킬:** Copilot 환경이 불러와 따르는 일반 텍스트 지침이 담긴 폴더입니다. 여러분의 트윈도 하나의 스킬이며 `.github/skills/`에 있습니다.
- **`persona.md`:** 여러분이 누구를 지원하는지, 우선순위가 충돌할 때 무엇을 앞세우는지, 약속하기 전에 무엇을 확인하는지 담습니다.
- **`standards.md`:** 업무를 판단하는 기준입니다. 자신의 도메인에 맞는 내용으로 바꾸세요.
- **`ask_json()`:** *프로그램*이 답변을 읽을 때 사용하는 호출입니다. 파싱된 개체를 반환합니다. 파서에는 산문이 쓸모없습니다.

더 많은 정의는 [용어집](/ko/glossary)을 참조하세요.

:::

## 시작하기 전에

VS Code, Copilot CLI, GitHub Copilot 앱 중 원하는 GitHub Copilot 환경에서 빌드하세요.

::: warning 트윈에는 가상 데이터가 미리 채워져 있습니다
오늘 직접 페르소나를 작성할 필요는 없습니다. 스타터에는 가상의 회사에서 일하는 가상의 엔지니어 **Jordan Reyes**가 포함되어 있어 첫 명령부터 답변하며, 공유 실습에는 여러분의 정보가 전혀 들어가지 않습니다. 아래 선택 단계를 진행하여 자신의 정보를 사용하지 않는 한, 모든 빌드는 Jordan을 기준으로 실행됩니다.

스타터의 `DISCLAIMER.md`에는 만들어 낸 항목과 세션 후 트윈을 자신의 업무에 연결하는 방법이 나와 있습니다.
:::

아래 스타터를 다운로드하세요.

<a class="lab-card" href="/AI-Flight-Academy/downloads/twin-code-starter.zip" download style="max-width:30rem">
  <span class="lab-card-emoji">📦</span>
  <span class="lab-card-title">스타터</span>
  <span class="lab-card-desc">바로 답변할 수 있는 가상의 트윈입니다. Python에서 호출하는 코드 하나, 코드 및 비코드 작업을 아우르는 완성된 예제 네 개, MCP 서버, 자신에게 맞게 설정하는 인터뷰가 포함되어 있습니다.</span>
  <span class="lab-card-cta">.zip 다운로드 →</span>
</a>

---

## 1 · 설정하기

**완료 기준:** `copilot skill list`의 Project skills 아래에 `my-twin`이 표시됩니다.

1. 스타터의 압축을 풀고 원하는 Copilot 환경에서 폴더를 엽니다. 폴더 안에 터미널도 열어야 합니다. **이 페이지의 모든 명령은 `twin-code-starter/` 안에서 실행합니다.**

   ```bash
   cd twin-code-starter
   copilot skill list
   ```

   **Project skills** 아래에 `my-twin`이 표시됩니다. CLI는 현재 폴더에서 `.github/skills/`를 찾으므로 터미널이 스타터 안에 있을 때만 표시됩니다. 별도로 등록할 필요는 없습니다.

```text
twin-code-starter/
  .github/skills/my-twin/     the twin. Every Copilot surface finds it here
    SKILL.md                  how it answers
    references/
      persona.md              how Jordan decides
      voice.md                how Jordan writes
      standards.md            the bar for judging work (swap for your domain)
      memory.md               a dated log it reads before recurring work, and writes after
  twin.py                     ask the twin, from Python
  onboard.py                  make it yours: an interview that replaces Jordan
  examples/                   review a diff, decide anything, triage an inbox, draft a status
  mcp_server.py               the twin as MCP tools
```

다음 두 위치를 나란히 사용합니다.

| | 용도 |
| --- | --- |
| `twin-code-starter/`의 **터미널** | 코드에서 트윈을 실행합니다(`python twin.py` 및 예제). 채팅 창 없이 작동하는 것이 바로 여기서 빌드할 대상입니다. |
| **Copilot 환경** | Copilot과 함께 코드를 작성하고 변경합니다. |

## 2 · 트윈에게 질문하기

**완료 기준:** `python twin.py "..."`가 입장과 그 근거가 된 규칙을 반환합니다.

1. **터미널에서** 질문 하나를 실행하여 Python, Copilot CLI, 로그인이 모두 작동하는지 확인합니다.

   ```bash
   # 한국어
   python twin.py "내 트윈을 사용해서 답해 줘. 팀원이 내 리뷰를 기다리느라 막혀 있지만 나는 마이그레이션 작업 중이야. 어떻게 해야 할까?"
   # English — original
   python twin.py "Using my twin: a teammate is blocked on my review but I'm mid-migration. What do I do?"
   ```

   `persona.md` 또는 `standards.md`에서 가져온 규칙과 그에 따른 입장을 받게 됩니다. 각 호출에는 20~60초가 걸립니다. 에이전트의 전체 턴이므로 중단된 것이 아닙니다. 이것이 전체 루프입니다. `examples/` 폴더에는 이 루프를 바탕으로 빌드할 수 있는 항목이 있으며, 아래의 각 방향은 그중 하나를 가리킵니다.

::: tip 채팅에서도 질문할 수 있습니다
Copilot 환경의 채팅에서 같은 질문을 해도 트윈이 답합니다. 채팅에서는 `references/memory.md`에 날짜가 포함된 한 줄도 추가합니다. 이는 의도된 동작으로, 다음 호출에서 이전 내용을 기억하기 위한 것입니다. 그래도 위의 터미널 명령이 작동하는지는 반드시 확인하세요. 빌드할 코드도 같은 방식으로 트윈을 호출하므로 터미널에서 작동하면 코드에서도 작동합니다.
:::

::: details 선택 사항 · Jordan 대신 자신의 업무 사용하기(약 10~15분)
바로 빌드하고 싶다면 건너뛰어도 됩니다. 이 페이지의 모든 내용은 Jordan으로도 작동합니다.

1. **인터뷰를 실행합니다.** `python onboard.py`를 실행하세요. 몇 개의 짧은 질문에 답하면 자신의 `persona.md`, `voice.md`, `standards.md`가 작성됩니다. 로컬에서 실행되며 어디에도 전송하지 않습니다. Jordan의 파일은 `*.jordan.md`로 백업되므로 비교하거나 다시 전환할 수 있습니다.
2. **실제 업무를 바탕으로 내용을 보강합니다(선택 사항).** 메일과 일정을 볼 수 있는 Copilot 환경에서 새 파일 중 하나를 열고 다음과 같이 요청하세요. *한국어: "내가 실제로 일하는 방식을 바탕으로 내용이 부족한 섹션을 채워 줘." English — original: "fill in a thin section from how you actually work."* 초안을 확인하고 바로잡으세요.
3. **질문을 다시 실행합니다.** `python twin.py`로 질문을 다시 실행하고 이제 답변이 자신답게 들리는지 확인하세요.

자신의 파일은 로컬에 보관하세요. 개인 정보는 공유 리포지토리에 포함하면 안 됩니다. 자세한 내용은 `DISCLAIMER.md`를 참조하세요.
:::

## 3 · 확장하기

**완료 기준:** 트윈이 이전에는 할 수 없던 일을 수행합니다.

이제 트윈을 개선하세요. 원하는 방식으로 작동하도록 스킬을 확장합니다. 같은 테이블의 참가자들과 방향을 하나 선택하고 작은 단계로 빌드하세요.

::: tip 프롬프트는 스크립트가 아니라 예시입니다
Copilot이 여러분과 함께 코드를 작성합니다. 원하는 것을 설명하고, 실행한 뒤, 결과를 바로잡으세요. 이것이 이 실습의 핵심입니다. 이 페이지에서 프롬프트 형태로 제시된 내용은 모두 시작점일 뿐이므로 원하는 방식으로 말하세요.
:::

### 방향 선택하기

하나를 선택하거나, 두 개를 결합하거나, 직접 정하세요. 버블을 클릭하면 시작 위치와 변경 사항을 빌드한 뒤 테스트하는 예제 프롬프트가 표시됩니다.

<div class="skill-steps">
  <div class="skill-step">
    <div class="skill-step-num">1</div>
    <div class="skill-step-body">
      <span class="skill-step-title">대화로 구체화하기</span>
      <p>카드에서 아이디어를 훑어보고 같은 테이블의 참가자들과 어디서 시작할지 정하세요. 그 지점에서 원하는 만큼 추가하세요.</p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">2</div>
    <div class="skill-step-body">
      <span class="skill-step-title">개요 만들기</span>
      <p>무엇을 해야 하며 무엇을 읽어야 하는지 2분 동안 정리하세요.</p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">3</div>
    <div class="skill-step-body">
      <span class="skill-step-title">대화로 만들기</span>
      <p>여러분이 아이디어를 제공하면 Copilot이 코드를 작성합니다. 원하는 것을 설명하고 실행한 다음, 변경할 내용을 알려 주세요. 막히면 선택지를 요청하세요. <em>한국어: "이 검사는 또 무엇을 찾아낼 수 있을까?" English — original: "what else could this check catch?"</em></p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">4</div>
    <div class="skill-step-body">
      <span class="skill-step-title">다시 실행하기</span>
      <p>무엇이 달라졌는지 확인하세요. 한 번에 하나씩 변경하세요. 세 가지를 동시에 바꾸면 어떤 변경이 효과를 냈는지 알 수 없습니다.</p>
    </div>
  </div>
</div>

<script setup>
const directions = [
  {
    emoji: "🗂️", color: "blue", title: "메모리 구조화",
    what: "자유 형식의 한 줄이 아니라 결정, 맥락, 규칙, 결과, 신뢰도, 날짜를 기록합니다.",
    start: "`twin.py`의 `remember()`는 날짜가 포함된 한 줄을 `references/memory.md`에 작성합니다. 각 항목에 필드를 추가하고 `examples/decide.py --remember`가 필드를 채우게 하세요.",
    prompt: "한국어: twin.py의 remember()를 변경하여 각 메모리 항목이 자유 형식의 한 줄 대신 결정, 맥락, 규칙, 결과, 신뢰도, 날짜를 기록하게 해 줘. 기존 줄은 계속 읽을 수 있게 유지하고 examples/decide.py --remember가 새 필드를 채우도록 업데이트해 줘. English — original: Change remember() in twin.py so each memory entry records the decision, context, rule, outcome, confidence, and date instead of one free-form line. Keep the existing lines readable and update examples/decide.py --remember to fill in the new fields.",
  },
  {
    emoji: "🧪", color: "green", title: "평가 추가",
    what: "예상되는 결정, 인용해야 할 규칙, 어조, 절대 하지 말아야 할 일이 포함된 시나리오입니다.",
    start: "작은 파일에 시나리오 세 개를 작성한 다음, 각 시나리오를 `ask_json()`에 전달하고 통과 또는 실패를 출력하는 스크립트를 작성하세요. 세 개면 충분합니다. 각 호출에는 20~60초가 걸립니다.",
    prompt: "한국어: 예상되는 결정, 내 트윈이 인용해야 할 규칙, 어조, 절대 하지 말아야 할 일 한 가지를 각각 포함하는 세 가지 상황을 evals/scenarios.json에 만들어 줘. 그런 다음 각 상황을 ask_json()으로 내 트윈에 보내고 검사별 통과 또는 실패를 출력하는 evals/run.py를 작성해 줘. 실행하고 결과를 보여 줘. English — original: Create evals/scenarios.json with three situations, each with the expected decision, the rule my twin should cite, the tone, and one thing it must never do. Then write evals/run.py that sends each situation to my twin with ask_json() and prints pass or fail for each check. Run it and show me the results.",
  },
  {
    emoji: "👍", color: "purple", title: "피드백 명령 추가",
    what: "결정을 옳음, 틀림, 일부만 옳음으로 표시하고 이유를 설명합니다.",
    start: "평가와 이유를 `references/memory.md`에 추가하는 작은 `feedback.py`를 만들어 다음 호출에서 학습할 수 있게 하세요.",
    prompt: "한국어: 과거 결정, 평가(correct, wrong, partly right 중 하나), 이유를 인수로 받아 references/memory.md에 날짜가 포함된 새 줄로 추가하는 feedback.py 명령을 만들어 줘. English — original: Add a feedback.py command that takes a past decision, a verdict (correct, wrong, or partly right), and a reason, and appends it as a new dated line in references/memory.md.",
  },
  {
    emoji: "📈", color: "teal", title: "결과 추적",
    what: "과거 결정을 다시 살펴보고 해당 판단이 실제로 효과가 있었는지 기록합니다.",
    start: "`references/memory.md`에서 날짜가 있는 항목을 읽고 각 항목의 결과를 질문하세요. 메모리는 추가 전용이므로 원래 항목을 가리키는 새 줄로 결과를 기록합니다.",
    prompt: "한국어: references/memory.md의 결정을 나열하고, 각 결정이 효과가 있었는지 내게 질문한 뒤, 기존 줄은 절대 편집하지 않고 원래 항목을 가리키는 날짜가 포함된 새 줄로 내 답변을 기록하는 outcomes.py를 작성해 줘. English — original: Write outcomes.py that lists the decisions in references/memory.md, asks me whether each one worked, and records my answer as a new dated line that points back to the original entry - never edit existing lines.",
  },
  {
    emoji: "⚖️", color: "orange", title: "모순 처리",
    what: "새 선호 사항이 기존 선호 사항과 충돌하면 이를 발견하고 어느 쪽을 우선할지 질문합니다.",
    start: "새 규칙을 `persona.md` 또는 `standards.md`에 넣기 전에 트윈이 기존 내용과 대조하게 하세요.",
    prompt: "한국어: 내가 추가하려는 새 선호 사항을 받아 ask_json()으로 내 트윈에게 persona.md 또는 standards.md의 내용과 충돌하는지 묻는 스크립트를 작성해 줘. 충돌한다면 아무것도 저장하기 전에 두 항목을 모두 보여 주고 어느 쪽을 우선할지 물어봐 줘. English — original: Write a script that takes a new preference I want to add, asks my twin with ask_json() whether it conflicts with anything in persona.md or standards.md, and if it does, shows me both and asks which should win before saving anything.",
  },
  {
    emoji: "📚", color: "pink", title: "도메인 표준 추가",
    what: "코드 리뷰, 채용, 글쓰기, 우선순위 설정, 인시던트 대응, 계획을 위한 별도 참조입니다.",
    start: "`standards.md`를 도메인별 파일로 나누어 `references/` 아래에 둔 다음, 작업에 맞는 파일만 읽도록 스킬의 `SKILL.md`를 업데이트하세요.",
    prompt: "한국어: references/standards.md를 코드 리뷰, 글쓰기, 우선순위 설정을 위한 별도 파일로 나누고, 내 트윈이 작업과 일치하는 파일만 읽도록 .github/skills/my-twin/SKILL.md를 업데이트해 줘. English — original: Split references/standards.md into separate files for code review, writing, and prioritization, and update .github/skills/my-twin/SKILL.md so my twin reads only the file that matches the task.",
  },
  {
    emoji: "🔗", color: "teal", title: "실제 업무에 연결(Work IQ)",
    what: "샘플 파일 대신 실제 메일, 일정, Teams, 파일에 트윈을 연결합니다.",
    start: "먼저 Jordan을 자신의 페르소나로 교체하세요. Setup의 선택 단계에 따라 `python onboard.py`를 실행하지 않으면 Work IQ가 가상의 엔지니어에게 실제 메일을 제공하게 됩니다. 그런 다음 기존 Microsoft 서버인 Work IQ MCP 서버를 추가하세요. 별도로 빌드할 필요는 없습니다. 링크는 버블 아래의 Work IQ 설명을 참조하세요.",
    prompt: "한국어: onboard.py를 실행해서 트윈이 내 페르소나를 사용하고 있어. 실제 메일과 일정을 읽을 수 있도록 Work IQ MCP 서버 연결을 도와줘. English — original: I've run onboard.py so the twin uses my own persona. Help me connect the Work IQ MCP server so it can read my real mail and calendar.",
  },
  {
    emoji: "😈", color: "orange", title: "의사 결정 데스크",
    what: "어떤 사안에든 입장을 취하거나, 자신의 규칙을 사용해 반대 입장의 최선의 논리를 제시합니다.",
    start: "`examples/decide.py`는 입장과 규칙을 JSON으로 반환합니다. 결정하기 전에 반론을 제기하는 두 번째 호출을 추가하세요.",
    prompt: "한국어: 내 트윈이 입장을 정한 뒤 두 번째 호출이 같은 규칙을 사용해 반대 입장을 주장하도록 examples/decide.py를 확장해 줘. 내가 선택할 수 있도록 두 입장을 나란히 출력해 줘. English — original: Extend examples/decide.py so that after my twin takes a position, a second call argues the opposite using the same rules. Print both side by side so I can choose.",
  },
  {
    emoji: "🔌", color: "pink", title: "MCP 서버",
    what: "VS Code의 GitHub Copilot, CLI, 다른 트윈 등 어떤 에이전트에서든 접근할 수 있는 도구로 만든 트윈입니다.",
    start: "스타터에서 `pip install -r requirements.txt`를 실행한 다음 `python mcp_server.py`를 실행하세요. VS Code에서 서버가 표시되는지 확인한 후 호출할 가치가 있는 도구 하나를 추가하세요.",
    prompt: "한국어: mcp_server.py를 살펴보고 메시지를 받아 내 트윈이 보낼 답장을 반환하는 draft_reply라는 도구를 추가해 줘. 그런 다음 이 서버를 VS Code에 추가하는 방법을 보여 줘. English — original: Look at mcp_server.py and add a tool called draft_reply that takes a message and returns the reply my twin would send. Then show me how to add this server to VS Code.",
  },
  {
    emoji: "🎯", color: "gray", title: "직접 만들기",
    what: "코드이든 아니든 채팅 창 없이 실행되는 모든 것을 다룹니다.",
    start: "있었으면 하는 명령을 작성하고, 입력 하나를 하드 코딩한 다음, 그 단일 사례가 처음부터 끝까지 작동하게 하세요.",
    prompt: "한국어: [동작 설명]을 수행하는 명령을 원해. 하드 코딩된 입력 하나로 작동하는 가장 작은 버전을 만든 다음 일반화하자. English — original: I want a command that [describe what it does]. Build the smallest version that works for one hard-coded input, then we'll make it general.",
  },
];
</script>

<DirectionBubbles :items="directions" start-label="시작할 위치" />

<div class="callout-bubble">
<span class="callout-bubble-icon">🔗</span>

**Work IQ로 실제 업무를 근거로 활용하세요.** 현재 트윈은 정적 파일을 읽으며, Setup의 선택 단계에 따라 `python onboard.py`를 실행해 자신의 페르소나로 교체하기 전까지 Jordan의 입장에서 답합니다. 이 작업을 먼저 하지 않으면 가상의 엔지니어에게 실제 메일을 제공하게 됩니다. 실제 메일, 일정, Teams, 파일을 바탕으로 답하게 하려면 기존 Microsoft 서버인 [Work IQ MCP 서버](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview)를 연결하세요. 별도로 빌드할 필요는 없습니다. Cowork와 Scout 환경에서 사용하는 것과 같은 Work IQ를 여기서는 도구로 사용할 수 있습니다. 다른 기능이 필요하다면 직접 서버를 작성하기 전에 [MCP Registry](https://github.com/mcp)를 살펴보는 것이 좋습니다.

</div>

::: tip 🎈 작게 시작하세요
완벽하거나 완성된 상태일 필요는 없습니다. 가장 작은 버전을 작동시킨 다음 확장하세요. 실제 제약은 시간과 토큰 예산이므로, 완성할 수 있는 것보다 보여 줄 수 있는 것을 목표로 하세요.
:::

## 문제가 있나요?

| 표시되는 현상 | 해결 방법 |
| --- | --- |
| `copilot: command not found` | Copilot CLI가 설치되어 있지 않거나 로그인되어 있지 않습니다. 스타터가 내부적으로 이를 호출하므로 CLI 없이는 `twin.py`를 실행할 수 없습니다. |
| `copilot skill list`에 `my-twin`이 없음 | 터미널이 `twin-code-starter/` 안에 있지 않습니다. CLI는 현재 폴더에서만 `.github/skills/`를 찾으므로 스타터 폴더로 `cd`하세요. |
| `python: command not found` | Windows에서는 `py`를 사용해 보세요. Python 3.10 이상이 필요합니다. |
| 호출이 중단된 것처럼 보임 | 중단된 것이 아닙니다. 각 호출은 20~60초가 걸리는 에이전트의 전체 턴입니다. 파일별로 호출하거나 루프에서 호출하고 있다면 멈추고 입력 하나로 제한하세요. |
| 스크립트에서 답변을 파싱할 수 없음 | 산문을 반환하는 `ask()`를 사용했습니다. 프로그램에서 결과를 읽을 때는 `ask_json()`을 사용하세요. |
| 답변이 누구의 말투도 아닌 것 같음 | 스타터에 포함된 가상의 엔지니어 Jordan의 답변입니다. `python onboard.py`를 실행하여 자신의 페르소나로 교체하세요. |
| 요청한 것보다 많이 변경함 | Copilot에 무엇을 왜 변경했는지 물어보세요. 원하지 않은 부분을 되돌린 다음 한 번에 하나씩 변경하세요. |

---

[← 시작으로 돌아가기](/ko/)
