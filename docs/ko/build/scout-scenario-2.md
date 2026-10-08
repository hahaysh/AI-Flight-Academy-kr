---
title: Dispatch - Scout
---

# Dispatch

먼저 채팅에서 방을 운영합니다. 그런 다음 지켜볼 수 있는 라이브 보드로 바꿉니다.

<div class="scene">

![편안한 차림의 남성이 한 페이지짜리 스킬링 요청서를 빛나는 파란색 에이전트 콘솔 쪽으로 밀자 부스의 파란 조명이 켜집니다.](/img/scenario-2-dispatch-scout-hero.png)

<p class="scene-cap">Scout에게 맡기세요.</p>

</div>

## 목표

스킬링 요청은 하루 종일 들어옵니다. 일반적으로 한 사람(*분류 담당자*)이 각 요청을 읽고 한 팀에 보냅니다. 하지만 같은 요청도 팀마다 서로 다른 업무를 의미할 수 있습니다. 예를 들어 제품 출시 전 에이전트 거버넌스 교육 요청은 자기 주도형 학습 경로, 라이브 워크숍, 파트너 출시 프로그램이 될 수 있습니다. 가장 좋은 계획은 한 번 만들고 모든 팀이 재사용하는 것입니다.

이 활동에서는 각 요청을 함께 살펴보는 **팀들의 방**을 만듭니다. 그런 다음 방을 라이브 보드에 올려 계획을 볼 수 있게 합니다. 다음 네 단계는 혼자 진행합니다.

| | 단계 | 완료 조건 |
| --- | --- | --- |
| **1** | **가져오고 로드하기** | Scout에 Dispatch 스킬과 데이터 팩이 로드되었습니다. |
| **2** | **서로 다른 관점을 가진 세 팀 배치** | 세 팀이 같은 요청에 대해 각자의 입장을 카드에 근거한 이유와 함께 채팅에서 제시합니다. 아직 아무것도 빌드하지 않습니다. |
| **3** | **방을 보드에 올리기** | 라이브 대시보드에 요청을 놓으면 팀별 입장과 그 근거가 표시됩니다. |
| **4** | **한 단계로 시작되게 만들기** | 여러분(또는 팀원)이 명령 하나로 또는 일정에 따라 보드를 시작할 수 있습니다. |

3단계와 4단계가 주요 빌드 작업입니다. 분류 담당자 한 명의 결과는 절대 바뀌지 않으므로 방의 결과와 비교할 수 있습니다. 대부분의 단계에는 붙여 넣을 수 있는 프롬프트가 있습니다. **원하는 대로 바꾸세요. 시작점일 뿐 정답은 아닙니다.**

::: details 용어집

- **분류 담당자(Triager):** 요청을 읽고 어느 팀이 맡을지 결정하는 사람입니다.
- **라우팅(Route):** 요청을 작업을 수행할 팀(또는 팀들)에 보내는 것입니다.
- **팀 카드(Team card):** 팀에 대한 짧은 설명입니다. 팀의 담당 영역, 대상, 선호하는 업무 유형을 나타냅니다. *헌장(charter)*이라고도 합니다.
- **방(Room):** 같은 요청을 함께 살펴보는 팀들의 모임입니다.
- **좌석(Seat):** 방 안에서 한 팀이 차지하는 자리입니다. 팀을 *배치한다(seat)*는 것은 그 팀을 방에 추가한다는 뜻입니다.
- **디스패치(Dispatch):** 하나의 요청을 방 안의 모든 팀에 동시에 보내는 것입니다.
- **입장(Position):** 팀 카드를 바탕으로 요청에 내놓는 팀의 답변입니다.
- **초안 아이디어(Rough idea):** 중요한 세부 정보가 빠진 요청입니다. 누군가 라우팅하기 전에 *구체화(sharpen)*해야 합니다.

더 많은 정의는 [용어집](/ko/glossary)을 참조하세요.

:::

## 시작하기 전에

두 파일을 모두 다운로드하여 같은 폴더에 보관하세요.

<div class="lab-grid lab-grid-2">
	<a class="lab-card" href="/AI-Flight-Academy-kr/downloads/the-dispatch.zip" download>
		<span class="lab-card-emoji">🔵</span>
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

Microsoft Scout를 엽니다. 1단계에서 Dispatch 스킬을 추가합니다. 3단계의 대시보드는 **GitHub Copilot CLI**와 **Node**도 사용합니다. Scout가 앱에 필요한 항목을 설치하지만, Copilot CLI에 로그인되어 있고 정상적으로 작동하는지는 직접 확인해야 합니다.

---

## 1 · 가져오고 로드하기

**완료 조건:** Scout에 Dispatch 스킬과 데이터 팩이 로드되었습니다.

1. `the-dispatch.zip`을 다운로드하고 압축을 풉니다. Scout에서 **Extensions → Import**로 이동한 뒤, 안에 `SKILL.md`가 있는 `the-dispatch` 폴더를 끌어다 놓습니다.

   ::: warning 먼저 the-dispatch.zip의 압축을 푸세요
   Cowork와 달리 Scout에는 zip이 아니라 압축을 푼 Dispatch 스킬 폴더가 필요합니다.
   :::

   ![Microsoft Scout의 Import Skill 대화 상자 창 스크린샷입니다.](/build/media/scout-import-skill-folder.png)

1. Scout에서 **새 채팅**을 시작하고 **dispatch-data-pack.zip**을 채팅 세션에 끌어다 놓거나 업로드합니다. 스킬 파일을 로드하려면 Scout에서 **새 채팅**을 시작하는 것이 중요합니다.

## 2 · 서로 다른 관점을 가진 세 팀 배치

**완료 조건:** 세 팀이 같은 요청에 대해 각자의 입장을 해당 팀 카드에 근거한 이유와 함께 제시합니다. 채팅에서 진행하며 아직 아무것도 빌드하지 않습니다.

**좌석**은 방 안의 팀 하나라는 점을 기억하세요. 각 좌석은 팀이 담당하는 영역, 지원 대상, 요청을 수락하거나 거절하는 조건을 나타냅니다. 목표는 팀을 *나열*하는 데 그치지 않습니다. 각 팀이 **자신의 카드에 근거해 판단**하도록 해야 합니다. 팀 간 차이는 억지로 반대하라는 지시가 아니라 각 팀의 카드에서 나와야 합니다. 어떤 팀이 다른 팀과 모든 요청을 같은 이유로 똑같이 라우팅한다면 복제본입니다.

카드가 가장 뚜렷하게 다르므로 **Content & Insights**, **Delivery & Program Operations**, **Field & Partner** 세 팀으로 시작하세요. Scout에게 이 팀들을 `THE-ROOM.md`에 배치한 다음 **Agent governance training before launch** 요청을 디스패치하도록 요청하세요. 이 요청은 차이를 명확히 보여 줍니다.

한국어:

> *"Dispatch를 사용해 데이터 팩에서 Content & Insights, Delivery & Program Operations, Field & Partner를 배치한 다음, 에이전트 거버넌스 요청을 디스패치하세요."*

English — original:

> *"Use Dispatch to seat Content & Insights, Delivery & Program Operations, and Field & Partner from the data pack, then dispatch the agent governance request."*

**디스패치**가 가장 중요한 부분입니다. 모든 팀이 팀 카드를 바탕으로 같은 요청에 대해 동시에 입장을 제시합니다. 그런 다음 방에서 하나의 결정을 내립니다. 에이전트 거버넌스 요청은 좋은 예입니다. 방은 *담당자(Content & Insights)에 합의*하고 각 팀은 계획에 고유한 부분을 더합니다. 학습 경로를 한 번 만들고 라이브 세션과 각 지역에서 재사용하며, 파트너가 최우선이 되도록 대상을 바꾸는 계획입니다.

| 요청 | 분류 담당자 한 명 | 방 |
|---|---|---|
| **출시 전 에이전트 거버넌스 교육** | Content & Insights로 보냄 | **Content & Insights가 경로를 한 번 만듦 · Delivery & Program Operations와 Field & Partner가 재사용함 · 파트너가 첫 번째 대상임** |

이것이 이 단계의 목표입니다. 요청 하나, 담당자 하나, 세 가지 재사용 방식, 그리고 팀 카드에 근거한 모든 입장입니다. 아무것도 설치하지 않고 채팅에서 어려운 판단을 마쳤습니다. 다음 단계에서는 결과를 눈에 보이고 쉽게 반복할 수 있게 만듭니다.

::: tip Work IQ로 실제 팀 배치하기
Scout는 **Work IQ**를 사용해 여러분의 Microsoft 365 업무를 봅니다. 여러분이 이미 볼 수 있는 것만 볼 수 있습니다. Scout에게 그 업무를 바탕으로 팀 카드 초안을 작성하도록 요청하세요. 예:

한국어:

> *"Scout, Work IQ를 사용해 [함께 일하는 팀]을 위한 팀 카드를 THE-ROOM.md의 카드와 같은 형식으로 작성하세요."*

English — original:

> *"Scout, draft a team card for [a team you work with] from Work IQ that mimics the cards in THE-ROOM.md."*

그런 다음 해당 팀을 잘 아는 사람들과 카드를 검토하고 잘못된 부분을 수정하세요. 결과는 최종본이 아니라 초안으로 취급하세요.
:::

<div class="scene scene--flip">

![로봇 팔들이 파란 조명 아래에서 디스패치 보드를 조립하는 동안 남성이 커피를 들고 느긋하게 앉아 있습니다.](/img/scenario-2-dispatch-scout-build.png)

<p class="scene-cap">Scout가 보드를 만듭니다.</p>

</div>

## 3 · 방을 보드에 올리기

이제 계획을 눈에 보이게 만드세요. Scout에게 내 컴퓨터에서 실행되는 웹 대시보드를 만들어 달라고 요청합니다. 대시보드는 **GitHub Copilot CLI를 백엔드로 사용**해 Dispatch 스킬을 실행합니다.

Scout에게 원하는 것을 알려 주세요.

- 요청을 디스패치하면 각 팀의 입장(in, support, out)을 보여 주는 카드
- 각 팀 카드에 표시되는 한 줄짜리 이유와 그 이유가 나온 팀 카드의 부분
- 각 팀 카드에 표시되는 팀이 제안한 결과물과 이를 재사용하는 팀
- 요청을 놓거나 초안 아이디어를 붙여 넣을 공간
- 한눈에 읽기 쉬운 최종 라우팅 결정(담당자, 대상, 한 번 만들고 어디서나 재사용하는 계획)
- 재미있는 테마 또는 방의 사용자 지정 이름

Scout는 앱을 만들고 Copilot CLI에 연결합니다. 보드에 요청을 주면 CLI가 방을 실행하고 카드가 업데이트됩니다.

::: details 프롬프트에서 막혔나요? 이것으로 시작하세요
이 프롬프트를 Scout에 붙여 넣은 다음 필요에 맞게 바꾸세요.

한국어:

> Dispatch 방을 위한 로컬 웹 대시보드를 만들어 주세요. **GitHub Copilot CLI를 백엔드로 사용**하여 Dispatch 스킬을 실행하세요. `copilot`을 셸에서 실행하는 작은 **Node** 웹 서버와 빌드 단계가 없는 일반 HTML/CSS/JS 프런트엔드를 사용하고, 의존성을 최소화하여 명령 하나로 시작되게 하세요. `THE-ROOM.md`의 각 팀을 위한 카드를 표시하고, 카드에는 입장(in / support / out), 한 줄짜리 이유와 그 이유가 나온 팀 카드의 부분, 제안한 결과물, 모든 재사용 정보를 표시하세요. 요청을 놓거나 초안 아이디어를 붙여 넣을 공간과 최종 라우팅 결정(담당자, 대상, 누가 만들고 누가 재사용하는지가 포함된 결과물 계획)을 보여 주는 패널을 추가하세요. 간단하게 시작하세요. 추가 기능은 제가 요청하겠습니다.

English — original:

> Build me a local web dashboard for the Dispatch room. Use **GitHub Copilot CLI as the backend** to run the Dispatch skill: a small **Node** web server that shells out to `copilot`, with a plain HTML/CSS/JS front-end - no build step, minimal dependencies, so it starts with one command. Show a card for each team in `THE-ROOM.md` with its position (in / support / out), its one-line reason and the part of its team card that the reason comes from, its proposed deliverable, and any reuse. Add a place to drop a request or paste a rough idea, and a panel for the final routing decision - owner, audience, and the plan of deliverables with who builds and who reuses. Start simple - I'll ask for more.

비결은 **작게 시작하여 한 번에 하나씩 추가하는 것**입니다. 먼저 한 요청에 대한 팀 카드의 입장이 표시되게 하세요. 그런 다음 결정 패널, 재사용 맵, 테마처럼 새 기능을 한 번에 하나씩 요청하세요. 프롬프트 하나에 모든 것을 요청하지 마세요.
:::

::: warning 앱이 시작되지 않는 경우
컴퓨터마다 설정이 다릅니다. Node 버전, 누락된 패키지, CLI 로그인 모두 문제를 일으킬 수 있습니다. 컴퓨터에서 대시보드가 실행되지 않으면 Scout 채팅에서 계속 진행하세요. 방은 그곳에서도 작동합니다. 보드를 실행해 보되, 문제가 요청 디스패치를 막게 두지는 마세요.
:::

**완료 조건:** 대시보드에 요청을 주면 팀별 입장과 그 근거가 표시됩니다.

## 4 · 한 단계로 시작되게 만들기

팀원이 모든 것을 다시 설정하지 않고 보드를 열 수 있도록 대시보드를 쉽게 시작되게 만드세요. Scout에게 다음 옵션 중 하나를 요청합니다.

- 하나의 **시작 명령**: 한 번 설치한 뒤 명령 하나로 서버를 시작하고 브라우저를 엽니다.
- 보드를 대신 시작하는 **예약된 작업**: 보드가 항상 실행됩니다.

::: tip 무엇을 선택해야 할지 모르겠나요? Scout에게 물어보세요!
Scout에게 상황에 맞는 옵션이 무엇인지 물어보세요. 이 실습의 팀들과 마찬가지로 모두에게 맞는 단 하나의 옵션은 없습니다. 아이러니하지 않나요?
:::

**완료 조건:** 여러분(또는 팀원)이 한 단계로 보드를 시작하고 새 요청을 놓을 수 있습니다.

## 더 나아가기 - 보너스

보드가 실행되면 더 많은 기능을 추가할 수 있습니다. 각 기능을 작게 유지하고 Scout가 만들게 하세요.

- 방에서 라우팅하기 전에 초안 아이디어를 "먼저 구체화"로 표시하는 **접수 게이트** 배지
- 결과물 하나를 한 번 만들어 다른 팀이 재사용하는 방식을 보여 주는 **재사용 맵**
- 요청이 구체화되고 다시 디스패치되면서 어떻게 바뀌는지 볼 수 있는 기록
- 결정의 담당자를 위한 작업 항목을 만드는 버튼
- 방이 판단하는 동안 재생되는 애니메이션

---

<div class="scene">

![파란 디스패치 보드가 스스로 실행되는 동안 남성이 손을 흔들며 걸어 나갑니다.](/img/scenario-2-dispatch-scout-alwayson.png)

<p class="scene-cap">항상 실행되고, 손댈 필요 없습니다.</p>

</div>

## 막혔나요?

| 보이는 현상 | 해결 방법 |
| --- | --- |
| Scout가 스킬을 무시함 | 새 세션을 시작하세요. 스킬은 세션이 시작될 때만 로드됩니다. |
| 모든 팀이 같은 입장을 제시함 | 각 팀의 이유를 확인하세요. 각 이유가 해당 팀의 카드에서 나온다면 합의도 괜찮은 답입니다. 이유가 모호하거나 모두 같다면 팀 카드를 더 구체적으로 만드세요. |
| 대시보드가 시작되지 않음 | GitHub Copilot CLI에 로그인되어 있고 Node가 설치되어 있는지 확인하세요. 수정하는 동안 Scout 채팅에서 계속 디스패치하세요. |
| 보드에 아무것도 표시되지 않음 | 스킬을 가져왔는지 확인한 다음 CLI가 스킬을 단독으로 실행할 수 있는지 확인하세요. |
| 방에서 요청을 볼 수 없음 | Scout에 데이터 팩을 제공하고 보드가 같은 파일을 가리키게 하세요. |

::: details 🎬 처음부터 제대로 해내는 사람은 없습니다
<div class="scene scene--flip">

![남성이 돌아와 끝없이 늘어선 똑같은 파란 디스패치 부스 수십 개를 발견합니다.](/img/scenario-2-dispatch-scout-blooper.png)

<p class="scene-cap">손을 너무 놓았나 봅니다.</p>

</div>

Scout에게 너무 많은 자유를 주면 부스를 마흔 개 만들 수도 있습니다. 너무 많은 일을 했다면 방향을 다시 잡아 주고 실행하세요. 에이전트의 방향을 조정하는 것 자체가 *빌드*입니다.
:::

---

[← 시작으로 돌아가기](/ko/)
