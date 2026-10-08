---
title: Dispatch - Code
---

# Dispatch

<div class="scene">

![헤드셋을 쓴 운영 엔지니어가 빛나는 모니터로 가득한 넓은 공항 운영 콘솔 앞에 서 있고, 보라색 데이터 선이 해 질 녘 활주로를 가로질러 게이트에 주기된 항공기들로 뻗어 나갑니다.](/img/scenario-2-dispatch-code-hero.png)

<p class="scene-cap">보드 뒤로 들어가 보세요.</p>

</div>

이미 작동하는 라우팅 대시보드에서 시작합니다. 이를 원하는 대로 바꾸고, 불명확한 요청을 AI가 라우팅하기 전에 찾아내는 코드 검사를 추가합니다. 그런 다음 더 발전시킬 경로를 선택합니다.

![스타터 프로젝트인 The Dispatch Dashboard의 스크린샷입니다.](/build/media/the-dispatch-dashboard.png)

## 목표

스킬링 요청은 하루 종일 들어옵니다. 일반적으로 한 사람(*분류 담당자*)이 각 요청을 읽고 한 팀에 보냅니다. 하지만 같은 요청도 팀마다 서로 다른 업무를 의미할 수 있습니다. 예를 들어 제품 출시 전 에이전트 거버넌스 교육 요청은 자기 주도형 학습 경로, 라이브 워크숍, 파트너 출시 프로그램이 될 수 있습니다. 가장 좋은 계획은 한 번 만들고 모든 팀이 재사용하는 것입니다.

보드는 각 요청을 **팀들의 방**으로 보내고, AI 모델이 각 팀의 입장을 결정합니다. 하지만 AI 모델은 준비되지 않은 요청을 라우팅하기도 합니다. 그래서 요청에 대상이 명시되어 있는지처럼 코드가 셀 수 있는 사실을 검사하는 코드를 추가합니다. 요청이 준비되지 않았다면 보드에서 **"먼저 구체화"**라고 표시합니다.

다섯 단계는 혼자 진행하며, 각 단계의 빌드를 Copilot Chat이 도와줍니다.

| | 단계 | 완료 조건 |
| --- | --- | --- |
| **1** | **보드 시작하기** | `http://localhost:4173`이 실행되고 Copilot CLI에 로그인되어 있습니다. |
| **2** | **요청을 디스패치하고 각 팀의 관점 듣기** | 각 팀이 같은 요청에 대해 각자의 입장을 카드에 근거한 이유와 함께 제시합니다. 아직 코드는 작성하지 않습니다. |
| **3** | **고유한 관점이 있는 팀 배치하기** | 여러분의 팀(`council/`의 새 파일)이 같은 요청에 대해 각자의 입장을 카드에 근거한 이유와 함께 제시합니다. |
| **4** | **접수 게이트 연결하기** | 접수 게이트(`check_content.py`)가 방에서 라우팅하기 전에 초안 아이디어에 "먼저 구체화"라고 표시합니다. |
| **5** | **경로 선택하기** | 경로 A(보드의 좌석 편집기) 또는 경로 B(방의 결정을 인계 파일에 저장)를 완료합니다. |

더 하고 싶다면 **MCP 보너스**를 통해 다른 에이전트도 방을 사용할 수 있습니다.

::: details 용어집

- **분류 담당자(Triager):** 요청을 읽고 어느 팀이 맡을지 결정하는 사람입니다.
- **라우팅(Route):** 요청을 작업을 수행할 팀(또는 팀들)에 보내는 것입니다.
- **팀 카드(Team card):** 팀에 대한 짧은 설명입니다. 팀의 담당 영역, 대상, 선호하는 업무 유형을 나타냅니다. *헌장(charter)*이라고도 합니다.
- **방(Room):** 같은 요청을 함께 살펴보는 팀들의 모임입니다.
- **좌석(Seat):** 방 안에서 한 팀이 차지하는 자리입니다. 팀을 *배치한다(seat)*는 것은 그 팀을 방에 추가한다는 뜻입니다. 이 프로젝트에서 각 좌석은 `council/` 폴더의 파일 하나입니다.
- **디스패치(Dispatch):** 하나의 요청을 방 안의 모든 팀에 동시에 보내는 것입니다.
- **입장(Position):** 팀 카드를 바탕으로 요청에 내놓는 팀의 답변입니다.
- **초안 아이디어(Rough idea):** 중요한 세부 정보가 빠진 요청입니다. 누군가 라우팅하기 전에 *구체화(sharpen)*해야 합니다.

더 많은 정의는 [용어집](/ko/glossary)을 참조하세요.

:::

## 시작하기 전에

아래의 세 파일을 모두 다운로드하여 같은 폴더에 압축을 풉니다. `the-dispatch-starter`, `the-dispatch`, `dispatch-data`를 **서로 나란히** 두세요. 보드는 해당 위치에서 이 폴더들을 찾습니다.

::: warning 폴더 안의 폴더에 주의하세요
각 zip에는 자체 폴더가 이미 들어 있으므로 Windows의 **Extract All**을 사용하면 두 번째 폴더로 감싸져 `the-dispatch-starter\the-dispatch-starter\`가 됩니다. 안쪽 폴더를 밖으로 끌어낸 다음 바깥쪽 폴더를 삭제하세요. 세 폴더를 모두 나란히 두지 않으면 대시보드가 데이터를 찾지 못합니다.
:::

<div class="lab-grid lab-grid-3">
	<a class="lab-card" href="/AI-Flight-Academy-kr/downloads/the-dispatch-starter.zip" download>
		<span class="lab-card-emoji">📦</span>
		<span class="lab-card-title">스타터 리포지토리</span>
		<span class="lab-card-desc">대시보드, 팀이 이미 배치된 방, 접수 게이트, MCP 서버입니다. 직접 빌드할 부분에는 TODO 주석이 표시되어 있습니다.</span>
		<span class="lab-card-cta">.zip 다운로드 →</span>
	</a>
	<a class="lab-card" href="/AI-Flight-Academy-kr/downloads/the-dispatch.zip" download>
		<span class="lab-card-emoji">🟢</span>
		<span class="lab-card-title">Dispatch 스킬</span>
		<span class="lab-card-desc">방이 요청을 라우팅하는 방식과 분류 담당자 한 명의 결정을 담고 있습니다. 비교 기준이 되는 "이전" 상태이며 절대 바뀌지 않습니다.</span>
		<span class="lab-card-cta">.zip 다운로드 →</span>
	</a>
	<a class="lab-card" href="/AI-Flight-Academy-kr/downloads/dispatch-data-pack.zip" download>
		<span class="lab-card-emoji">🗂️</span>
		<span class="lab-card-title">데이터 팩</span>
		<span class="lab-card-desc">샘플 요청, Global Skilling 팀 카드, 라우팅 규칙입니다. 실제 업무 데이터 대신 사용하세요.</span>
		<span class="lab-card-cta">.zip 다운로드 →</span>
	</a>
</div>

세 가지 도구가 필요합니다. Windows에서는 **관리자 권한으로 실행**하여 연 터미널에서 `winget`으로 설치하는 것이 가장 빠릅니다.

```powershell
winget install OpenJS.NodeJS.LTS     # Node - runs the board
winget install Python.Python.3.12    # Python 3 - runs the intake gate
winget install GitHub.Copilot        # GitHub Copilot CLI - the board calls it
```

그런 다음 새 도구를 찾을 수 있도록 터미널을 다시 엽니다. `copilot`을 한 번 실행하고 로그인합니다.

설치 관리자를 선호한다면 [Node.js](https://nodejs.org/)와 [Python 3](https://www.python.org/downloads/)를 다운로드하세요. macOS 또는 Linux에서는 `npm install -g @github/copilot`으로 GitHub Copilot CLI를 설치합니다.

VS Code, Copilot CLI, GitHub Copilot 앱 등 어떤 GitHub Copilot 도구로든 빌드할 수 있습니다. 보드가 백그라운드에서 사용하므로 **Copilot CLI**에는 로그인된 상태를 유지하세요.

보드를 시작하려면 **Node**가 필요합니다. **Python 3**은 접수 게이트를 연결하는 4단계와 MCP 보너스에서만 필요합니다. 그전까지 보드는 정상적으로 실행되고 게이트에는 "빌드되지 않음"이 표시됩니다. 준비되면 VS Code에서 **the-dispatch-starter** 프로젝트를 여세요.

---

## 시작점

프로젝트를 준비했습니다. 이제 빌드할 시간입니다.

::: tip 보드에서 빌드할 부분을 알려 줍니다
접수 배지와 **Act on this decision**에서 황색 **"연결되지 않음"** 표시를 찾으세요. 각 표시는 직접 빌드할 항목입니다. 보드는 특정 모델(`claude-sonnet-5`)을 사용합니다. 계정에서 해당 모델을 사용할 수 없으면 보드는 CLI의 기본 모델을 대신 사용합니다. 다른 모델을 선택하려면 `DISPATCH_MODEL`을 설정하세요.
:::

### 1 · 보드 시작하기

터미널을 열고 파일의 압축을 푼 폴더로 이동합니다.

```powershell
cd the-dispatch-starter/dashboard
npm install
npm start
```

`http://localhost:4173`을 엽니다. 서버가 시작되면 출력의 첫 줄에서 Copilot CLI를 찾았는지와 로그인 여부를 알려 줍니다. 찾지 못했다면 CLI를 설치하고 로그인한 뒤 서버를 다시 시작하세요.

**완료 조건:** 보드가 실행되고, 서버 출력의 첫 줄에서 Copilot CLI에 로그인되어 있음을 확인했습니다.

### 2 · 요청 디스패치하기

요청 파일을 보드에 끌어다 놓거나 **Browse…**를 선택하여 파일을 고릅니다. **Agent governance training before launch**(`dispatch-data/requests/request-agent-governance-before-launch.md`)를 사용하세요. 데이터 팩에는 각 요청에 대한 분류 담당자 한 명의 결정이 포함되어 있습니다. 이 요청에 대해 분류 담당자는 *"Content & Insights로 보내세요."*라고만 할 수 있었습니다.

::: tip 대신 붙여 넣나요?
제목과 필드 표를 포함한 **파일 전체**를 붙여 넣으세요. 인용된 요청 내용만 붙여 넣지 마세요. 보드는 표의 필드를 읽기 때문에 필드가 없으면 완성된 요청도 미완성처럼 보입니다.
:::

방은 담당자에 합의하고 **각 팀은 계획에 고유한 부분을 더합니다**.

- Content & Insights는 거버넌스 학습 경로를 한 번 만듭니다.
- Delivery는 라이브 세션에서 이를 재사용합니다.
- Field & Partner는 각 지역에서 이를 재사용합니다.
- 가장 먼저 필요로 하는 대상은 파트너입니다.

각 입장은 해당 팀의 카드에서 나옵니다. 아직 코드를 작성하지 않았는데도 담당자 한 명이 재사용 계획으로 발전했습니다.

**완료 조건:** 각 팀이 같은 요청에 대해 각자의 입장을 제시하고, 각 입장에는 해당 팀 카드에 근거한 이유가 있습니다.

### 3 · 고유한 관점이 있는 팀 배치하기

**좌석**은 방 안의 팀 하나라는 점을 기억하세요. 팀이 담당하는 영역, 지원 대상, 요청을 수락하거나 거절하는 조건을 나타냅니다. 각 좌석은 `council/` 폴더의 작은 파일입니다. 다섯 팀이 이미 포함되어 있습니다.

여러분이 함께 일하는 팀의 좌석을 추가하세요. 핵심은 팀 카드입니다. 다른 대상이나 선호 형식처럼 팀에 고유한 관점을 부여하세요. 그러면 다른 팀을 복제하는 대신 자체 카드에서 입장이 나옵니다. (어떤 팀이 다른 팀과 모든 요청을 같은 이유로 똑같이 라우팅한다면 복제본입니다.)

파일을 직접 작성할 필요는 없습니다. **Copilot**, **Cowork**, **Scout**처럼 여러분의 업무를 아는 AI 도구를 여세요. 샘플 파일 `council/team.example.json`을 가리키고 다음과 같이 요청합니다.

한국어:

> `team.example.json`과 같은 구조로 _[여러분의 팀]_을 위한 `my-team.json`을 만드세요. 팀의 담당 영역, 지원 대상, 수락 또는 거절 조건, 선호 형식을 포함하세요.

English — original:

> Create `my-team.json` for _[your team]_, in the same shape as `team.example.json`: what it owns, who it serves, what makes it say yes or no, and its format bias.

결과를 검토할 때 다음 세 부분을 확인하세요.

- **owns / serves:** 요청이 이 팀에 속하게 하는 조건입니다.
- **says_yes_when / says_no_when:** 팀이 요청을 수락하거나 거절하게 하는 조건입니다. 각 팀의 이유는 이 필드에서 나옵니다.
- **format_bias:** 팀이 선호하는 결과물 유형입니다. 계획에 자주 나타납니다.

새 이름으로 파일을 `council/`에 저장합니다. (기존 이름을 사용하면 해당 팀을 교체합니다.) 그런 다음 보드에서 **Reload room**을 선택합니다.

**완료 조건:** 여러분의 팀이 같은 요청에 대해 고유한 입장을 제시하고, 이유가 팀 카드의 항목을 가리킵니다.

<div class="scene scene--flip">

![엔지니어가 Content, Delivery, Product, Field, MTTs라고 표시된 데스크와 접수 게이트 스위치에 보라색 케이블을 연결합니다.](/img/scenario-2-dispatch-code-wiring.png)

<p class="scene-cap">방을 코드로 만드세요.</p>

</div>

### 4 · 접수 게이트 연결하기

팀의 입장은 AI 모델에서 나옵니다. 모델은 판단에 능하지만 준비되지 않은 요청을 라우팅하기도 합니다. **접수 게이트는 코드가 셀 수 있는 부분입니다.** 요청에 대상, 주제, 결과가 명시되어 있나요? 초안 아이디어(이름이 `rough-idea-`로 시작하는 파일)를 준비된 요청처럼 라우팅해서는 안 됩니다. 먼저 *구체화*해야 합니다. 이는 추측이 아니라 예 또는 아니요로 답하는 검사입니다.

두 가지 작은 작업이 있으며, **둘 다 처음부터 작성하지 않습니다**. 스타터 파일은 절반 정도 완성되어 있고 메모도 포함되어 있으며 GitHub Copilot Chat이 전체를 읽을 수 있습니다. 여러분은 *요청이 언제 라우팅할 준비가 되는지* 결정합니다. Copilot이 코드 작성을 도와줍니다.

1. **게이트를 켭니다.** 스타터 파일 `check_content.py` 하나가 완성되지 않았습니다. 보드에 접수 게이트가 빌드되지 않았다고 표시되는 이유입니다. 파일을 엽니다. 맨 위 메모에는 게이트가 반환하는 `{routable, present, missing, detail}`이 일반 영어로 설명되어 있습니다. `dispatchlib.parse_request`는 이미 요청을 읽습니다. 여러분은 어떤 필수 필드가 있고 어떤 필드가 빠졌는지 결정합니다. Copilot Chat에서 파일을 가리키고 게이트를 완성하도록 요청하세요.

   **한국어:** `check_content.py`의 접수 게이트를 완성하세요.

   **English — original:** finish the gate.

1. **나만의 가드레일을 추가합니다.** 게이트는 *요청*을 검사합니다. 가드레일은 *결정*을 검사합니다. `dispatch-data/policy/ROUTING-RULES.md`에서 규칙 하나를 선택하고 Copilot에게 추가하도록 요청하세요. 예를 들어 *"자격 증명 결과물에는 안정적인 목표가 필요하다"* 또는 *"대상이 파트너라면 Field & Partner가 참여해야 한다"*를 선택합니다.

   **한국어:** 선택한 라우팅 규칙을 가드레일로 추가하세요.

   **English — original:** add it.

::: tip 실제로 해야 할 일
Python 개발자일 필요는 **없습니다**. 스타터와 Copilot Chat이 코드를 작성합니다. 여러분은 *요청이 언제 라우팅할 준비가 되는지* 결정하고 게이트가 작동하는지 확인합니다. `rough-idea-…` 파일에 "먼저 구체화"라는 레이블이 붙고 완성된 `request-…` 파일이 통과하면 완료입니다. 인용된 요청 내용만이 아니라 파일 전체로 테스트하세요.
:::

**완료 조건:** 초안 아이디어 파일을 보드에 놓으면 방에서 라우팅하기 전에 보드가 **"먼저 구체화"**라고 표시합니다.

---

## 경로 선택하기

이제 자체 팀이 있는 방과 추측을 라우팅하지 않는 접수 게이트가 있습니다. 이제 더 발전시키세요. **경로 A 또는 B 중 하나를 완료하면 끝입니다.**

- **경로 A는 프런트엔드 작업입니다.** JavaScript와 약간의 Node로 만드는 브라우저 화면입니다.
- **경로 B는 백엔드 작업입니다.** Node와 약간의 파일 작업입니다.

두 경로 모두 명확한 지침이 있으며 어느 쪽이든 Copilot Chat이 빌드를 도와줍니다. 선호하는 빌드 방식에 맞는 경로를 선택하세요. 완료한 뒤 더 진행하고 싶다면 보너스를 시도하세요.

<PathChooser
  a-emoji="🪑"
  a-title="경로 A · 보드에서 방 편집하기"
  a-desc="브라우저에 좌석 편집기를 만들어 보드가 실행되는 동안 팀을 추가, 편집, 제거합니다. 더 이상 JSON을 직접 편집하지 않아도 됩니다. 프런트엔드(JavaScript와 약간의 Node) 작업입니다."
  b-emoji="📤"
  b-title="경로 B · 결정 실행하기"
  b-desc="보드의 Act 버튼으로 결정을 인계합니다. 담당자가 바로 사용할 수 있도록 컴퓨터의 파일에 저장합니다. 방에서 제안하고 사람이 승인합니다. 백엔드(Node) 작업입니다."
>

<template #pathA>

### 경로 A - 보드에서 방 편집하기

현재 팀을 추가하려면 `council/*.json` 파일을 직접 편집해야 합니다. 이 경로에서는 보드에 작은 **좌석 편집기**를 만듭니다. 그러면 누구나 보드가 실행되는 동안 팀을 추가, 편집, 제거할 수 있습니다.

두 부분이 있습니다. **엔드포인트**는 작은 부분입니다. 팀 ID를 정리하여 파일이 `council/` 폴더 외부에 저장되지 않게 합니다. 그런 다음 팀 파일을 저장하거나 삭제합니다.

```js
// dashboard/server.js - POST /api/council/seat (you add this)
const id = String(req.body.team_id).replace(/[^a-z0-9-_]/gi, "");   // stay inside the folder
fs.writeFileSync(path.join(COUNCIL_DIR, `${id}.json`), JSON.stringify(req.body, null, 2));
```

**편집기 화면**은 더 큰 부분입니다. 팀 카드의 필드(담당 영역, 지원 대상, 수락/거절 조건, 선호 형식)가 있는 양식입니다. 양식은 엔드포인트로 데이터를 보냅니다. Copilot Chat에서 `dashboard/public/`을 가리키고 대화 상자를 만들도록 요청한 다음 보드를 다시 로드하세요.

**한국어:** `dashboard/public/`에 팀 좌석 편집기 대화 상자를 만드세요.

**English — original:** build the dialog

**완료 조건:** 브라우저에서 새 팀을 추가하면 다음 요청에 대해 입장을 제시합니다.

</template>

<template #pathB>

### 경로 B - 결정 실행하기

라우팅 결정은 실제 장소로 전달되어야 합니다. 이 경로에서는 보드의 **📤 Act on this decision** 버튼이 작동하게 만듭니다. 현재 버튼은 `501` 오류를 반환합니다. 이는 의도된 동작입니다. 501은 "구현되지 않음"이라는 뜻이며 여러분이 빌드할 부분입니다. 완료하면 버튼이 방의 결정을 담당자가 사용할 수 있는 인계 파일에 저장합니다. 방이 제안하고 사람이 승인합니다. 버튼을 선택하는 것 자체가 승인이므로 보드가 스스로 실행하도록 두지 마세요.

작업에는 이미 결정이 저장되어 있습니다. 이를 수집하여 저장하세요.

```js
// dashboard/server.js - POST /api/dispatch/:id/act (stubbed, returns 501)
const decision = job.result.decision;   // owner, audience, plan[], disposition, next_action
// ...save the decision to a file in dashboard/outbox/, then return { message } with the file path...
```

요청을 디스패치한 다음 지금 **📤 Act on this decision**을 선택하세요. 보드가 빌드할 부분에 대한 힌트를 표시합니다. 그런 다음 Copilot Chat에게 만들어 달라고 요청하세요.

**한국어:** 결정을 인계 파일에 저장하는 기능을 만드세요.

**English — original:** build it.

**완료 조건:** **📤 Act on this decision**을 선택하면 보드가 파일을 저장한 위치를 표시하고, 파일에 담당자, 대상, 계획, 처리 방식, 다음 작업이 들어 있습니다.

::: tip 더 나아가고 싶나요?
결정을 실제 추적기나 채널에도 보내세요. `DISPATCH_ACT_TARGET`은 해당 대상의 자리 표시자입니다. 실제 대상이 설정된 경우에만 전송하고 로컬 파일은 어느 경우든 유지하세요.
:::

</template>

</PathChooser>

---

## 보너스 - 다른 에이전트가 방을 사용하게 하기(MCP)

보드는 방을 사용하는 한 가지 방법입니다. **MCP 서버**를 사용하면 VS Code의 채팅 에이전트 같은 *다른* 에이전트도 방을 사용할 수 있습니다. 그러면 해당 에이전트도 요청을 디스패치할 수 있습니다. (MCP는 Model Context Protocol의 약자로, AI 에이전트와 도구를 공유하는 표준 방식입니다.)

스타터에는 `mcp_server.py`가 포함되어 있습니다. 간단한 도구(`list_room`, `check_routable`, `routing_rules`)는 이미 작동합니다. `dispatch` 도구에는 TODO 표시가 있습니다.

**1 · 서버용 Python 설정하기.** 서버에는 `mcp`라는 패키지 하나가 필요합니다. 컴퓨터의 다른 항목이 변경되지 않도록 `the-dispatch-starter` 안의 격리된 환경에 설치하세요. `the-dispatch-starter`(`mcp_server.py`와 `requirements.txt`가 있는 폴더)의 터미널에서 다음을 실행합니다.

```powershell
py -3.12 -m venv .venv
.venv\Scripts\python -m pip install -r requirements.txt
```

macOS 또는 Linux에서는 `python3 -m venv .venv`를 실행한 다음 `.venv/bin/python -m pip install -r requirements.txt`를 실행합니다. 모두 되돌리려면 `.venv` 폴더를 삭제하세요.

**2 · VS Code에 연결하기.** 서버를 직접 시작하지 마세요. 터미널에서는 에이전트가 연결될 때까지 아무 메시지 없이 기다릴 뿐입니다. 대신 VS Code에 시작 방법을 알려 주세요. `the-dispatch-starter`를 VS Code 폴더로 열고 `.vscode/mcp.json`을 만듭니다.

```json
{
  "servers": {
    "the-dispatch": {
      "type": "stdio",
      "command": "${workspaceFolder}/.venv/Scripts/python.exe",
      "args": ["${workspaceFolder}/mcp_server.py"]
    }
  }
}
```

macOS 또는 Linux에서는 `command`에 `${workspaceFolder}/.venv/bin/python`을 사용합니다. 파일의 서버 이름 위에서 **Start**를 선택하거나 Command Palette에서 **MCP: List Servers**를 실행하세요. 서버가 4개의 도구와 함께 **Running**으로 표시됩니다.

**3 · 채팅에서 테스트하기.** **Agent** 모드로 Copilot Chat을 열고 도구 선택기에서 `the-dispatch` 도구가 켜져 있는지 확인합니다. 이 테스트에는 디스패치가 필요하지 않습니다. 다음과 같이 요청하세요.

한국어:

> list_room을 사용해 방에 있는 팀들을 보여 주세요.

English — original:

> Use list_room to show me the teams in the room.

5개 팀이 표시됩니다. 그런 다음 다음과 같이 요청하세요.

한국어:

> request-agent-governance-before-launch.md에 check_routable을 사용한 다음, rough-idea-seller-copilot-value.md에도 사용하세요.

English — original:

> Use check_routable on request-agent-governance-before-launch.md, and then on rough-idea-seller-copilot-value.md.

첫 번째 요청은 **ROUTABLE**입니다. 두 번째 요청은 결과가 없으므로 **NOT routable**입니다.

**4 · `dispatch(request_path)` 빌드하기.** 각 팀이 입장을 제시한 다음 방에서 하나의 결정을 내립니다. 힌트는 보드가 `dashboard/server.js`에서 사용하는 것과 같은 Copilot CLI 접근 방식을 가리킵니다.

**완료 조건:** Copilot Chat에 **Agent governance training before launch**를 디스패치하도록 요청하면 채팅에 각 팀의 입장과 하나의 라우팅 결정이 표시됩니다.

**한국어:** 출시 전 에이전트 거버넌스 교육 요청을 디스패치하세요.

**English — original:** dispatch **Agent governance training before launch**.

::: tip Scout를 사용하나요?
Scout도 같은 서버를 시작할 수 있습니다. 서버를 **Command** MCP 서버로 추가하고 `.venv` Python 및 `mcp_server.py`의 전체 경로를 사용하세요. 디스패치에는 약 90초가 걸리므로 Scout 설정에서 도구 제한 시간을 늘리세요.
:::

<div class="scene">

![보라색 방이 실행되고 routable / sharpen 접수 게이트가 작동하자 엔지니어가 여유 있게 기대어 지휘합니다.](/img/scenario-2-dispatch-code-running.png)

<p class="scene-cap">접수부터 결정까지, 이제 여러분의 것입니다.</p>

</div>

## 막혔나요?

| 보이는 현상 | 해결 방법 |
| --- | --- |
| 보드가 시작되지 않음 | Node가 설치되어 있는지 확인하세요. 먼저 `dashboard/`에서 `npm install`을 실행하세요. |
| 서버에서 CLI가 없다고 표시함 | GitHub Copilot CLI(Windows: `winget install GitHub.Copilot`)를 설치하고 로그인한 뒤 서버를 다시 시작하세요. |
| 보드에서 방을 찾지 못함 | `the-dispatch-starter`, `the-dispatch`, `dispatch-data`를 같은 폴더에 나란히 두세요. |
| 모든 팀이 같은 입장을 제시함 | 각 팀의 이유를 확인하세요. 각 이유가 해당 팀의 카드에서 나온다면 합의도 괜찮은 답입니다. 이유가 모호하거나 모두 같다면 팀 카드를 더 구체적으로 만드세요. |
| 접수 배지에 "빌드되지 않음"이라고 표시됨 | `check_content.py`를 완료할 때까지 예상되는 동작입니다. 완료 후에는 보드에서 각 요청이 라우팅할 준비가 되었는지 표시합니다. |
| Copilot이 너무 많은 작업 승인을 요청함 | `--allow-all-tools`를 사용하되, 자신의 실습 리포지토리에서만 사용하세요. |
| 완성된 요청에 "먼저 구체화"라고 표시됨 | 파일 전체를 놓거나 찾아서 선택하세요. 붙여 넣는 경우 필드 표를 포함해 모든 내용을 붙여 넣으세요. |
| 디스패치에서 AI의 응답에 문제가 있었다고 표시됨 | 요청을 다시 디스패치하세요. 계속 발생하면 메시지에서 지정한 파일(`dashboard/runs/`에 있음)을 코치에게 보내세요. |
| `python mcp_server.py`가 멈춘 것 같음 | 에이전트 연결을 기다리고 있습니다. 닫은 뒤 VS Code가 `.vscode/mcp.json`에서 시작하도록 하세요(보너스 2단계). |

::: details 🎬 처음부터 제대로 해내는 사람은 없습니다
<div class="scene scene--flip">

![불꽃이 튀고 화면에 빨간 오류가 번쩍이며 디스패치 데스크가 오작동하는 가운데 엔지니어가 불꽃 튀는 케이블을 들고 얼굴을 찡그립니다.](/img/scenario-2-dispatch-code-blooper.png)

<p class="scene-cap">컴파일됩니다. 대부분은요.</p>

</div>

첫 시도가 제대로 작동하는 경우는 드뭅니다. 오류가 끝은 아닙니다. 오류 메시지를 읽고 팀 파일을 수정한 뒤 다시 실행하세요. 결국 마지막 재시도가 성공하면 출시한 것입니다.
:::

---

[← 시작으로 돌아가기](/ko/)
