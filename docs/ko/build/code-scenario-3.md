---
title: 앰배서더 - Code
---

<!-- markdownlint-disable MD013 MD025 MD033 -->

# 앰배서더

## 목표

Contoso의 AI 스킬링 앰배서더 프로그램은 본업과 함께 오피스 아워 운영, 멘토링, 질문 응답, 모두가 참고하는 가이드 작성을 하며 동료들의 사내 AI 도구 활용을 돕는 자원봉사자 모임입니다. 프로그램은 매 회차마다 9개 지역에서 이미 이런 일을 비공식적으로 해 온 사람들 중 8명을 새 앰배서더로 선발합니다.

`cohort.py`는 회차 운영자의 업무를 덜기 위해 만들어졌지만 아직 완성되지 않았습니다. 프로그램이 원하는 인재상을 짧게 서술한 글을 읽고 모든 후보자를 모델에 보낸 뒤, 각 사유와 함께 8명의 이름을 반환합니다. 빠르고 자신 있게 답하지만 근거를 전혀 보여 주지 못해 그 사유가 타당한지 누구도 확인할 수 없습니다.

이 활동에서는 이를 실행하고 평가 기준을 바꾼 다음 기능을 확장하기 시작합니다. 세 단계로 진행합니다.

| | 단계 | 완료 조건 |
| --- | --- | --- |
| **1** | **실행하기** | `python cohort.py`가 프로그램 데이터에서 8명의 이름을 반환합니다. |
| **2** | **평가 기준 바꾸기** | 프로그램이 원하는 인재상 설명을 교체하고 다시 실행해 다른 이름이 반환되는 것을 확인합니다. |
| **3** | **확장하기** | `cohort.py`가 이전에는 할 수 없던 일을 수행합니다. |

3단계가 핵심 빌드이며 한 번의 변경으로 끝나지 않습니다. 확장하고, 다시 실행해 무엇이 달라졌는지 본 다음, 다시 확장하세요.

**cohort.py는 제안하고, 사람은 결정합니다.** 8명의 이름은 누군가가 실제로 조치해야 하는 추천안입니다. 모든 변경은 더 많은 근거를 화면에 표시하고, 추론을 명확히 하며, 사람이 더 빠르게 번복할 수 있도록 의사결정자의 일을 쉽게 만들어야 합니다.

::: details 용어집

- **Cohort:** 프로그램이 매 회차 선발하는 8명의 그룹입니다. 다음 그룹을 고르는 것이 과제입니다.
- **Candidate:** 프로그램이 선발할 수 있는 자원봉사자 중 한 명입니다. 지원자와는 다릅니다. 72명 중 31명은 자원하지 않았습니다.
- **Definition:** 프로그램이 찾는 인재상을 적은 설명입니다. `cohort.py`는 이를 모든 후보자에게 적용합니다. 이 파일을 편집하면 결과가 바뀝니다.
- **Shortlist:** 실행이 반환하는 8명의 이름입니다. 사람이 검토할 제안이지 결정이 아닙니다.
- **Evidence:** 주장을 뒷받침하는 기록으로, 누군가가 운영한 활동, 받은 피드백, 기여한 내용입니다.
- **Agent:** Copilot에 역할과 사용할 모델을 지정하는 `.github/agents/` 아래의 Markdown 파일입니다. `challenger.agent.md`는 완성된 예시입니다. 서비스가 아니라 텍스트 파일이며 아무것도 배포되지 않습니다.

더 많은 정의는 [용어집](/ko/glossary)을 참고하세요.

:::

## 시작하기 전에

아래 스타터를 다운로드하세요.

<a class="lab-card" href="/AI-Flight-Academy/downloads/ambassador-starter.zip" download style="max-width:30rem">
  <span class="lab-card-emoji">📦</span>
  <span class="lab-card-title">스타터</span>
  <span class="lab-card-desc">작동하는 코호트 스크립트, 세 가지 대안 정의, 9개 데이터 파일입니다.</span>
  <span class="lab-card-cta">.zip 다운로드 →</span>
</a>

VS Code, Copilot CLI, GitHub Copilot 앱 중 원하는 GitHub Copilot 환경에서 빌드하세요. 단, 스타터가 내부적으로 **Copilot CLI**를 호출하므로 로그인 상태를 유지하세요. **Python 3.10+**도 필요합니다.

**이 데이터는 가상입니다.** 인물, 점수, 피드백 모두 만들어진 것입니다. 실제 인물을 설명하거나 실제 프로그램을 모델링하지 않습니다. 자세한 내용은 `program-data/DISCLAIMER.md`에 있습니다.

::: warning 배포할 것은 없습니다
`AGENTS.md`와 `.github/agents/`는 **인프라가 아니라 지침**입니다. Copilot에 이 저장소의 성격과 맡을 수 있는 역할을 알려 주는 Markdown입니다. 그 자체로 실행되는 것은 없으며 Copilot 환경이 읽고 따릅니다. 따라서 Copilot은 이 프로젝트의 맥락을 가진 상태로 시작하므로 폴더를 열고 바로 요청할 수 있습니다.

서비스, 오케스트레이터, 벡터 저장소, Foundry는 없습니다. `cohort.py`가 디스크의 CSV를 읽어 프롬프트를 만들고 Copilot CLI에 전달합니다. 즉, 스크립트 자체가 에이전트인 것이 아니라 에이전트에 위임합니다. 데이터는 로컬에서 시작하지만 프롬프트와 함께 호스팅된 모델로 전송되며, 각 호출은 보통 20~60초 걸립니다.

이것이 오늘의 의도적으로 낮은 상한선입니다. 일반 텍스트와 작은 스크립트만으로 얼마나 멀리 갈 수 있는지가 핵심입니다.
:::

다운로드의 구성:

```text
ambassador-starter/
  cohort.py         the entry point - picks the cohort
  definition.md     what the program looks for. This is the file you edit
  definitions/      three worked alternatives - reach, depth, rising
  agent.py          ask() and ask_json(), over the GitHub Copilot CLI
  program/data.py   loads the nine data files
  program-data/     72 candidates, ~2,000 evidence records across nine files
  AGENTS.md         what Copilot reads to learn the repo before it helps you
  .github/agents/   role files - challenger.agent.md, wired up by --challenge
  PLAYBOOK.md       how the program describes itself
```

::: tip 막히면 Copilot에 물어보세요
Copilot으로 빌드하고 있으므로 Copilot이 빌드 중인 것을 고칠 수도 있습니다. 오류를 붙여 넣거나 잘못 반환된 내용을 설명하세요. 그래도 해결되지 않으면 현장의 코치에게 도움을 요청하세요.
:::

---

## 1 · 실행하기

**완료 조건:** `cohort.py`가 프로그램 데이터에서 8명의 이름을 반환합니다.

1. 스타터의 압축을 풀고 `cohort.py`가 있는 `ambassador-starter` 폴더에서 터미널을 여세요. `python`을 찾을 수 없다면 `py`를 시도하세요.

   ```bash
   python cohort.py
   ```

   8명의 이름이 표시됩니다. 첫 실행은 전체 에이전트 호출이므로 20~60초 걸립니다.

   **이 8명은 답이 아니라 첫 번째 추측입니다.** 스킬은 7개의 요약 점수만으로 모두를 평가했고, 그 점수는 만들어진 데다 일부는 의도적으로 오해를 유발합니다. 목록의 잘못된 부분을 찾는 것이 나머지 활동입니다.

## 2 · 평가 기준 바꾸기

**완료 조건:** 다른 정의를 사용해 다른 최종 후보 목록을 얻습니다.

`cohort.py`는 프로그램이 원하는 바를 일반 텍스트 몇 문장으로 적은 `definition.md`를 기준으로 모든 후보자를 평가합니다. 이 파일을 교체하면 답이 바뀝니다.

세 가지 대안 정의가 함께 제공됩니다. `reach.md`(재사용되는 작업), `depth.md`(일대일 지원), `rising.md`(현재 위치보다 성장 추세)입니다.

```bash
python cohort.py --definition definitions/depth.md
python cohort.py --definition definitions/rising.md
```

후보자는 같지만 결과는 달라집니다. 코드를 건드리지 않고 텍스트 단락 하나를 교체했을 뿐입니다.

그런 다음 다른 관점이 어떤 영향을 주는지 확인하세요.

```bash
python cohort.py --challenge
```

이 명령은 최종 후보 목록을 실행한 뒤 `.github/agents/challenger.agent.md`를 로드하고, 첫 번째 결과에 반론하는 것만을 목적으로 하는 **다른 모델의 두 번째 패스**를 실행합니다. 두 번의 호출, 두 역할, 두 모델, 하나의 스크립트가 `cohort.py` 약 25줄에 담겨 있습니다. 3단계에서 확장할 대상의 가장 작은 작동 예시입니다.

## 3 · 확장하기

**완료 조건:** `cohort.py`가 이전에는 할 수 없던 일을 수행합니다.

`program-data`에는 9개 파일이 있습니다. `cohort.py`는 `CandidateProfiles.csv` 하나로 만든 한 사람당 한 줄의 요약만 모델에 보냅니다. 나머지 8개는 이미 `program/data.py`가 로드하지만 모델에는 전달되지 않습니다. 사람들이 실제로 운영한 활동, 동료의 의견, 남긴 결과물, 지원 여부가 담겨 있습니다. 이 기록들을 대신 보내면 최종 후보 목록이 바뀝니다.

이는 여러 빈틈 중 하나일 뿐입니다.

### 방향 선택하기

아래 카드는 **완성된 빌드가 아니라 시작점**입니다. 아이디어로 활용하거나 무시하고 테이블에서 실제로 원하는 것을 빌드하세요.

<div class="skill-steps">
  <div class="skill-step"><div class="skill-step-num">1</div><div class="skill-step-body"><span class="skill-step-title">함께 이야기하기</span><p>카드에서 아이디어를 훑어보고 테이블 구성원들과 시작점을 정하세요. 이후 원하는 만큼 추가하세요.</p></div></div>
  <div class="skill-step"><div class="skill-step-num">2</div><div class="skill-step-body"><span class="skill-step-title">구상하기</span><p>무엇을 해야 하고 무엇을 읽어야 하는지 2분 동안 구상하세요.</p></div></div>
  <div class="skill-step"><div class="skill-step-num">3</div><div class="skill-step-body"><span class="skill-step-title">대화로 빌드하기</span><p>아이디어는 여러분이 내고 코드는 Copilot이 작성합니다. 원하는 것을 설명하고 실행한 뒤 변경할 내용을 알려 주세요. 막히면 다음과 같이 선택지를 요청하세요. <em>"한국어: 이 대시보드에는 또 무엇을 표시할 수 있을까요? / English — original: what else could this dashboard show?"</em></p></div></div>
  <div class="skill-step"><div class="skill-step-num">4</div><div class="skill-step-body"><span class="skill-step-title">다시 실행하기</span><p>무엇이 달라졌는지 확인하세요. 한 번에 하나씩 바꾸세요. 세 가지를 동시에 바꾸면 어느 변경이 영향을 줬는지 알 수 없습니다.</p></div></div>
</div>

<script setup>
const ideas = [
  {
    emoji: "🔍", color: "blue", title: "무시하던 근거 읽기", tag: "가장 쉬움",
    what: "`cohort.py`는 한 사람당 한 줄의 요약을 보냅니다. 실제 기록을 보내도록 바꾸고 누가 추가되는지 확인하세요.",
    start: "요약 한 줄 대신 각 후보자의 실제 PeerFeedback.csv 및 ProgramContributions.csv 행을 보내고, 일회성 칭찬보다 반복되는 패턴에 가중치를 두세요.",
    prompt: "한국어: cohort.py가 한 줄 요약 대신 각 후보자의 전체 PeerFeedback.csv 및 ProgramContributions.csv 행을 보내도록 변경하고, 일회성 칭찬보다 반복되는 패턴에 가중치를 둔 다음, 원래 목록에는 없지만 새 최종 후보 목록에 포함된 사람이 누구인지 보여 주세요.\n\nEnglish — original: Change cohort.py to send each candidate's full PeerFeedback.csv and ProgramContributions.csv rows instead of the one-line summary, weigh a repeated pattern over one-off praise, then show me who's on the new shortlist but not the original.",
  },
  {
    emoji: "🖥️", color: "teal", title: "열어 볼 수 있는 대시보드",
    what: "실행 결과를 8명, 각 근거 기록, 필터, 결정을 기다리는 항목을 담은 로컬 페이지로 만드세요.",
    start: "cohort.py 옆의 작은 스크립트가 실행 결과를 HTML 페이지로 렌더링하고 열게 하세요.",
    prompt: "한국어: 최종 후보 목록을 로컬 HTML 대시보드로 렌더링하고 여는 단계를 추가하세요. 각 이름과 그 근거를 표시하고 지역 및 레벨 필터를 제공하세요.\n\nEnglish — original: Add a step that renders the shortlist as a local HTML dashboard - each name, the evidence behind it, filters for region and level - and opens it.",
  },
  {
    emoji: "🎭", color: "orange", title: "세 번째 관점",
    what: "`--challenge`는 이미 서로 다른 모델의 선발자와 도전자를 제공합니다. 둘 다 읽고 사람이 승인할 최종 집합을 추천하는 심판을 추가하세요.",
    start: "`challenger.agent.md`의 형태를 복사해 심판에 별도 모델을 지정하고 `cohort.py`가 세 역할을 차례로 호출하게 하세요.",
    prompt: "한국어: cohort.py와 .github/agents/challenger.agent.md를 읽고 --challenge가 역할 파일을 두 번째 패스에 연결하는 방식을 확인하세요. 최종 후보 목록과 이의 제기를 모두 읽고 사람이 승인할 최종 집합과 추론을 추천하는 심판 역할을 옆에 다른 모델로 추가하세요. 이를 세 번째 패스로 연결하고 각 단계를 보여 주세요.\n\nEnglish — original: Read cohort.py and .github/agents/challenger.agent.md to see how --challenge wires a role file into a second pass. Add a referee role beside it, on a different model, that reads both the shortlist and the challenge and recommends a final set with its reasoning for a person to sign off. Wire it in as a third pass and show me each stage.",
  },
  {
    emoji: "🤖", color: "pink", title: "같은 질문, 두 모델",
    what: "두 모델에서 최종 후보 선정을 실행하고 비교해, 둘 다 고른 이름만 유지하거나 서로 갈린 부분을 보여 주세요.",
    start: "각 실행에 `AMBASSADOR_MODEL`을 설정하세요. 모델을 사용할 수 없으면 호출은 기본값을 사용합니다. 그런 다음 두 목록을 비교하세요.",
    prompt: "한국어: 매번 AMBASSADOR_MODEL을 설정해 같은 정의를 서로 다른 두 모델로 실행한 다음, 두 모델이 모두 동의한 이름과 의견이 갈린 부분을 보여 주세요.\n\nEnglish — original: Run the same definition through two different models by setting AMBASSADOR_MODEL each time, then show me the names both models agree on and where they split.",
  },
  {
    emoji: "⚖️", color: "purple", title: "매 실행의 공정성 검사",
    what: "cohort.py가 매번 실행하는 검사로, 지역, 레벨 또는 재직 기간별 쏠림과 기록으로 추적할 수 없는 주장을 표시합니다.",
    start: "일회성 검사가 아니라 모든 최종 후보 목록에서 실행되도록 cohort.py에 내장하세요.",
    prompt: "한국어: cohort.py에 공정성 검사를 추가하세요. 모든 실행에서 지역, 레벨 또는 재직 기간별 쏠림과 기록으로 추적할 수 없는 주장을 표시하세요.\n\nEnglish — original: Add a fairness check to cohort.py: every run flags when the list clusters by region, level, or tenure, and any claim it can't trace to a record.",
  },
  {
    emoji: "🔁", color: "green", title: "대규모 일관성",
    what: "모델은 완벽히 일관적이지 않습니다. 같은 정의를 여러 번 실행해 꾸준히 나오는 이름과 운에 따라 달라지는 이름을 확인하세요.",
    start: "실행을 반복하고 최종 후보 목록을 수집해 각 사람이 남는 빈도를 세세요.",
    prompt: "한국어: 같은 정의를 10번 실행하고 최종 후보 목록을 수집한 뒤 각 CandidateId가 선발되는 빈도를 출력하세요. 실행의 절반 미만에 나타나는 사람을 표시하세요.\n\nEnglish — original: Run the same definition ten times, collect the shortlists, and print how often each CandidateId makes the cut. Flag anyone who appears in fewer than half the runs.",
  },
  {
    emoji: "🤝", color: "teal", title: "두 정의 정면 비교",
    what: "같은 후보자에 두 정의를 적용해 서로 다른 부분을 정확히 보여 줍니다.",
    start: "두 정의 파일을 받아 최종 후보 목록의 변경 사항을 보여 주는 비교 모드를 추가하세요.",
    prompt: "한국어: cohort.py에 비교 모드를 추가하세요. 같은 후보자에 두 정의를 적용하고 두 최종 후보 목록이 다른 부분을 이름별로 보여 주세요.\n\nEnglish — original: Add a compare mode to cohort.py: run two definitions over the same candidates and show me where the two shortlists disagree, name by name.",
  },
  {
    emoji: "🧭", color: "blue", title: "우리 프로그램, 우리 규칙",
    what: "추천, 최종 후보, 검토와 비슷한 프로그램에 여기서 배운 내용을 적용해 이런 스크립트가 무엇을 도울 수 있어야 하는지 알아보세요.",
    start: "자신의 프로그램을 Copilot에 설명하고 필요한 정의와 근거 목록을 작성하게 하세요. 실제 이름이나 내보내기 없이 문서상으로만 작업하세요.",
    prompt: "한국어: 저는 [여러분의 프로그램]을 운영합니다. cohort.py의 작동 방식을 활용해 필요한 정의를 작성하고, 수집해야 할 근거를 나열하며, 사람이 반드시 개입해야 하는 지점을 알려 주세요. 문서상으로만 작업하고 실제 이름이나 내보내기는 사용하지 마세요.\n\nEnglish — original: I run [your program]. Using what cohort.py does, help me write the definition it would need, list the evidence I'd have to collect, and name where a person must stay in the loop. Keep it on paper - no real names and no exports.",
  },
  {
    emoji: "✨", color: "gray", title: "직접 만들기",
    what: "테이블에서 생각해 낼 수 있는 가장 야심 찬 것을 만드세요. Python, 에이전트, git, CLI가 있으니 높은 목표를 세우세요.",
    start: "스타터 데이터에서 실행되는 가장 작은 버전으로 시작하세요.",
    prompt: "한국어: 우리 테이블은 [설명]을 빌드하려고 합니다. cohort.py 변경, 새 에이전트, 새 검사 등 필요한 작업을 파악하고 가장 작은 버전을 먼저 실행하세요.\n\nEnglish — original: Our table wants to build [describe it]. Work out what it takes - a change to cohort.py, a new agent, a new check - and get the smallest version running first.",
  },
];
</script>

<DirectionBubbles :items="ideas" start-label="시작할 곳" />

::: tip 🎈 작게 시작하세요
완벽하거나 완성될 필요는 없습니다. 가장 작은 버전을 작동시킨 뒤 확장하세요. 시간과 토큰 예산이 실제 제약이므로, 완성할 수 있는 것보다 보여 줄 수 있는 것을 목표로 하세요.
:::

::: tip 🎛️ 모델을 변경하는 두 가지 방법
`AMBASSADOR_MODEL`은 전체 실행의 모델을 설정합니다. PowerShell에서는 `$env:AMBASSADOR_MODEL = "claude-haiku-4.5"`를 사용합니다. 역할 파일은 해당 단계의 모델을 설정하므로 도전자는 선발자와 다른 모델로 답합니다. 첫 번째 모델과 같은 사각지대를 공유한다면 두 번째 의견의 가치는 떨어집니다.
:::

## 막히셨나요?

| 보이는 현상 | 할 일 |
| --- | --- |
| `python`을 인식하지 못함 | Python 3.10+를 설치하거나 대신 `python3`를 시도하세요. |
| 첫 호출에서 실행 실패 | GitHub Copilot CLI가 설치되고 로그인되어 있는지 확인하세요. `cohort.py`가 내부에서 이를 호출합니다. |
| 한동안 멈춘 것처럼 보임 | 전체 에이전트 호출은 20~60초 걸립니다. 취소하기 전에 1분 기다리세요. |
| 매번 같은 8명이 나옴 | `--definition`을 전달했고 의도한 파일을 편집했는지 확인하세요. |
| 기록으로 뒷받침되지 않는 주장 | <span>한국어: Copilot, 어느 파일의 몇 번째 행에서 가져왔나요? 답할 수 없다면 추측했다고 밝히세요. / English — original: Ask Copilot which file and row it came from. If it can't answer, it guessed - make it say so instead.</span> |
| Copilot이 요청보다 더 많이 변경함 | 변경을 수락하기 전에 검토하세요. 되돌린 다음 한 번에 하나의 변경만 요청하세요. |

---

[← 시작으로 돌아가기](/ko/)
