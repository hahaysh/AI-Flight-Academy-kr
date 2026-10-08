---
title: 앰배서더 - Scout
---

<!-- markdownlint-disable MD013 MD025 MD033 -->

# 앰배서더

## 목표

Contoso의 AI 스킬링 앰배서더 프로그램은 본업과 함께 오피스 아워 운영, 멘토링, 질문 응답, 모두가 참고하는 가이드 작성을 하며 동료들의 사내 AI 도구 활용을 돕는 자원봉사자 모임입니다. 프로그램은 매 회차마다 9개 지역에서 이미 이런 일을 비공식적으로 해 온 사람들 중 8명을 새 앰배서더로 선발합니다.

**Ambassador skill**은 회차 운영자의 업무를 덜기 위해 만들어졌지만 아직 완성되지 않았습니다. 프로그램이 원하는 인재상을 짧게 서술한 글을 읽고 모든 후보자에게 적용한 뒤, 각 사유와 함께 8명의 이름을 반환합니다. 빠르고 자신 있게 답하지만 근거를 전혀 보여 주지 못해 그 사유가 타당한지 누구도 확인할 수 없습니다.

이 활동에서는 스킬을 실행하고 평가 기준을 바꾼 다음 기능을 확장하기 시작합니다. 세 단계로 진행합니다.

| | 단계 | 완료 조건 |
| --- | --- | --- |
| **1** | **가져오고 실행하기** | Scout가 프로그램 데이터에서 8명의 이름을 반환합니다. |
| **2** | **평가 기준 바꾸기** | 다른 정의로 다른 최종 후보 목록을 얻습니다. |
| **3** | **확장하기** | 스킬이 이전에는 할 수 없던 일을 수행합니다. |

3단계가 핵심 빌드이며 한 번의 변경으로 끝나지 않습니다. 스킬을 확장하고, 다시 실행해 무엇이 달라졌는지 본 다음, 다시 확장하세요.

**스킬은 제안하고, 사람은 결정합니다.** 8명의 이름은 누군가가 실제로 조치해야 하는 추천안입니다. 모든 변경은 더 많은 근거를 화면에 표시하고, 추론을 명확히 하며, 사람이 더 빠르게 번복할 수 있도록 의사결정자의 일을 쉽게 만들어야 합니다.

::: details 용어집

- **Skill:** Scout가 로드하고 따르는 일반 텍스트 지침 폴더입니다. 읽고 편집할 수 있습니다.
- **Cohort:** 프로그램이 매 회차 선발하는 8명의 그룹입니다. 다음 그룹을 고르는 것이 과제입니다.
- **Candidate:** 프로그램이 선발할 수 있는 자원봉사자 중 한 명입니다. 지원자와는 다릅니다. 72명 중 31명은 자원하지 않았습니다.
- **Definition:** 프로그램이 찾는 인재상을 적은 설명입니다. 스킬은 이를 모든 후보자에게 적용합니다. 이 파일을 편집하면 결과가 바뀝니다.
- **Shortlist:** 스킬이 반환하는 8명의 이름입니다. 사람이 검토할 제안이지 결정이 아닙니다.
- **Evidence:** 주장을 뒷받침하는 기록으로, 누군가가 운영한 활동, 받은 피드백, 기여한 내용입니다.

더 많은 정의는 [용어집](/ko/glossary)을 참고하세요.

:::

## 시작하기 전에

아래 두 파일을 다운로드해 같은 폴더에 보관하세요.

<div class="lab-grid lab-grid-2">
  <a class="lab-card" href="/AI-Flight-Academy-kr/downloads/ambassador-skill.zip" download>
    <span class="lab-card-emoji">🎖️</span>
    <span class="lab-card-title">Ambassador skill</span>
    <span class="lab-card-desc">프로그램이 다음 8명을 선발하는 방식과 원하는 인재상에 대한 세 가지 대안 정의입니다. 변경 후 비교할 기준인 "이전" 버전입니다.</span>
    <span class="lab-card-cta">.zip 다운로드 →</span>
  </a>
  <a class="lab-card" href="/AI-Flight-Academy-kr/downloads/ambassador-program-data.zip" download>
    <span class="lab-card-emoji">🗂️</span>
    <span class="lab-card-title">프로그램 데이터</span>
    <span class="lab-card-desc">9개 파일에 담긴 후보자 72명과 약 2,000개의 근거 기록입니다. 실제 인물 데이터 대신 사용하세요.</span>
    <span class="lab-card-cta">.zip 다운로드 →</span>
  </a>
</div>

Microsoft Scout를 열고 로그인되어 있는지 확인하세요. 아무 질문이나 하고 답이 오는지 확인하면 됩니다. 1단계에서 Ambassador skill을 추가합니다. 파일은 컴퓨터에 남지만 Scout가 파일로 만든 프롬프트는 모델로 전송됩니다.

**이 데이터는 가상입니다.** 인물, 점수, 피드백 모두 만들어진 것입니다. 실제 인물을 설명하거나 실제 프로그램을 모델링하지 않습니다.

스킬의 구성:

```text
ambassador/
  SKILL.md              the instructions Scout loads and follows
  references/
    DEFINITION.md       what the program looks for. This is the file you edit
    PLAYBOOK.md         how the program describes itself
  definitions/          three worked alternatives - reach, depth, rising
```

::: tip 막히면 Scout에 물어보세요
Scout로 빌드하고 있으므로 Scout가 빌드 중인 것을 고칠 수도 있습니다. 오류를 붙여 넣거나 잘못 반환된 내용을 설명하세요. 그래도 해결되지 않으면 현장의 코치에게 도움을 요청하세요.
:::

---

## 1 · 가져오고 실행하기

**완료 조건:** Scout가 프로그램 데이터에서 8명의 이름을 반환합니다.

1. `ambassador-skill.zip`을 다운로드해 압축을 푸세요. Scout에서 **Extensions → Import**로 이동해 `SKILL.md`가 들어 있는 `ambassador` 폴더를 끌어다 놓으세요. 신뢰 경고는 정상이며, 이 파일은 랩 다운로드입니다.

   ::: warning 파일이 아니라 폴더를 가져오세요
   `SKILL.md`만으로는 작동하지 않습니다. 옆의 `references/`에 정의와 플레이북이 있습니다. `.md` 영역이 아니라 **skill folder** 드롭 영역을 사용하세요.
   :::

   ![Microsoft Scout의 Import Skill 대화 상자 스크린샷.](/build/media/scout-import-skill-folder.png)

1. Scout가 접근할 수 있는 위치에 `ambassador-program-data.zip`의 압축을 푸세요. `program-data` 폴더의 전체 경로를 복사해 곧 붙여 넣습니다.

1. Scout에서 **새 채팅**을 시작하세요. 스킬 파일을 로드하려면 반드시 **새 채팅**을 시작해야 합니다.

1. Scout에 실행을 요청하세요. 모든 요청을 *"Using the ambassador skill"*로 시작해야 Scout가 해당 스킬을 호출합니다. 폴더를 둔 경로로 예시 경로를 바꾸세요.

   ```text
   한국어:
   Ambassador skill을 사용해서 다음 코호트에는 누가 포함되어야 할지 알려 주세요. 데이터는 "C:\Users\me\Downloads\ambassador-program-data\program-data"에 있습니다.

   English — original:
   Using the ambassador skill, who should be in the next cohort? The data is in "C:\Users\me\Downloads\ambassador-program-data\program-data".
   ```

   8명의 이름이 표시됩니다.

   **이 8명은 답이 아니라 첫 번째 추측입니다.** 스킬은 7개의 요약 점수만으로 모두를 평가했고, 그 점수는 만들어진 데다 일부는 의도적으로 오해를 유발합니다. 목록의 잘못된 부분을 찾는 것이 나머지 활동입니다.

## 2 · 평가 기준 바꾸기

**완료 조건:** 다른 정의를 사용해 다른 최종 후보 목록을 얻습니다.

스킬은 프로그램이 원하는 바를 일반 텍스트 몇 문장으로 적은 `DEFINITION.md`를 기준으로 모든 후보자를 평가합니다. 이 파일을 교체하면 답이 바뀝니다.

세 가지 대안 정의가 함께 제공됩니다. `reach.md`(재사용되는 작업), `depth.md`(일대일 지원), `rising.md`(현재 위치보다 성장 추세)입니다.

```text
한국어:
Ambassador skill을 사용해서 대신 definitions/depth.md를 정의로 사용하세요. 다시 실행하고 어떤 이름이 바뀌었는지 알려 주세요.

English — original:
Using the ambassador skill, use definitions/depth.md as the definition instead. Re-run and tell me which names changed.
```

그런 다음 `definitions/rising.md`를 시도하세요. 후보자는 같지만 결과는 달라집니다. 코드를 건드리지 않고 텍스트 단락 하나를 교체했을 뿐입니다.

## 3 · 확장하기

**완료 조건:** 스킬이 이전에는 할 수 없던 일을 수행합니다.

`program-data`에는 9개 파일이 있습니다. 스킬은 한 사람당 7개 점수를 요약한 `CandidateProfiles.csv` 하나만 읽습니다. 나머지 8개에는 사람들이 실제로 운영한 활동, 동료의 의견, 남긴 결과물, 지원 여부가 있지만 사용되지 않습니다. 스킬에 이 파일들도 읽도록 지시하면 최종 후보 목록이 바뀝니다.

이는 여러 빈틈 중 하나일 뿐입니다.

### 방향 선택하기

아래 카드는 **완성된 빌드가 아니라 시작점**입니다. 아이디어로 활용하거나 무시하고 테이블에서 실제로 원하는 것을 빌드하세요.

<div class="skill-steps">
  <div class="skill-step"><div class="skill-step-num">1</div><div class="skill-step-body"><span class="skill-step-title">함께 이야기하기</span><p>카드에서 아이디어를 훑어보고 테이블 구성원들과 시작점을 정하세요. 이후 원하는 만큼 추가하세요.</p></div></div>
  <div class="skill-step"><div class="skill-step-num">2</div><div class="skill-step-body"><span class="skill-step-title">구상하기</span><p>무엇을 해야 하고 무엇을 읽어야 하는지 2분 동안 구상하세요.</p></div></div>
  <div class="skill-step"><div class="skill-step-num">3</div><div class="skill-step-body"><span class="skill-step-title">대화로 빌드하기</span><p>아이디어는 여러분이 내고 빌드는 Scout가 합니다. 원하는 것을 설명하고 결과를 살핀 뒤 변경할 내용을 알려 주세요. 막히면 다음과 같이 선택지를 요청하세요. <em>"한국어: 이 보드에는 또 무엇을 표시할 수 있을까요? / English — original: what else could this board show?"</em></p></div></div>
  <div class="skill-step"><div class="skill-step-num">4</div><div class="skill-step-body"><span class="skill-step-title">다시 실행하기</span><p>무엇이 달라졌는지 확인하세요. 한 번에 하나씩 바꾸세요. 세 가지를 동시에 바꾸면 어느 변경이 영향을 줬는지 알 수 없습니다.</p></div></div>
</div>

<script setup>
const ideas = [
  {
    emoji: "🖥️", color: "blue", title: "로컬 코호트 보드",
    what: "컴퓨터의 로컬 페이지로, 현재 최종 후보, 각 근거 기록, 필터, 결정을 기다리는 항목 열을 모두 로컬에서 제공합니다.",
    start: "Scout가 실행 결과로 로컬 HTML 보드를 만들고 열게 하세요.",
    prompt: "한국어: Ambassador skill을 사용해서 현재 코호트의 로컬 HTML 보드를 빌드하세요. 각 이름과 그 근거, 지역 및 레벨 필터, 결정을 기다리는 항목 열을 제공하세요.\n\nEnglish — original: Using the ambassador skill, build a local HTML board of the current cohort - each name, the evidence behind it, filters for region and level, and a column for what's waiting on a decision.",
  },
  {
    emoji: "⚖️", color: "orange", title: "매 실행의 공정성 검사",
    what: "모든 최종 후보 목록에서 지역, 레벨 또는 재직 기간별 쏠림과 기록으로 추적할 수 없는 주장을 표시하는 검사입니다.",
    start: "일회성 감사가 아니라 모든 최종 후보 목록에서 실행되도록 스킬에 검사를 내장하세요.",
    prompt: "한국어: Ambassador skill에 공정성 검사를 추가하세요. 모든 최종 후보 목록에서 지역, 레벨 또는 재직 기간별 쏠림과 기록으로 추적할 수 없는 주장을 표시하세요.\n\nEnglish — original: Add a fairness check to the ambassador skill: every shortlist flags when the list clusters by region, level, or tenure, and any claim it can't trace to a record.",
  },
  {
    emoji: "🔍", color: "teal", title: "무시하던 근거 읽기", tag: "가장 쉬움",
    what: "스킬은 요약 점수로 평가합니다. 동료 피드백과 기여 같은 실제 기록을 열고 평가하게 하세요.",
    start: "요약에 가려진 파일을 확인하고 일회성 칭찬보다 반복되는 패턴에 가중치를 두세요.",
    prompt: "한국어: Ambassador skill에 다음을 추가하세요. 요약 점수뿐 아니라 PeerFeedback.csv와 ProgramContributions.csv도 읽고, 일회성 칭찬보다 반복되는 패턴에 가중치를 두세요. 그런 다음 원래 8명에는 없었지만 새로 추가된 사람이 누구인지 보여 주세요.\n\nEnglish — original: Add to the ambassador skill: read PeerFeedback.csv and ProgramContributions.csv, not just the summary scores, and weigh a repeated pattern over one-off praise. Then show me who that adds who wasn't in the original eight.",
  },
  {
    emoji: "🧠", color: "purple", title: "기억 기능 제공",
    what: "읽을 뿐 아니라 쓰는 파일을 만들어, 사람이 번복한 내용을 포함해 매 실행에서 지난 결정을 알 수 있게 합니다.",
    start: "스킬이 각 실행과 사람의 결정을 파일에 기록하고 다음 실행에서 다시 읽게 하세요.",
    prompt: "한국어: Ambassador skill에 기억 기능을 추가하세요. 각 실행과 사람의 번복을 파일에 기록하고 다음 실행에서 읽어 결정이 이어지게 하세요.\n\nEnglish — original: Add a memory to the ambassador skill: write each run and any human override to a file, and read it on the next run so decisions carry forward.",
  },
  {
    emoji: "🛑", color: "pink", title: "중지할 수 있게 하기",
    what: "추측하지 않고 근거가 부족한 항목을 구체적인 질문과 함께 사람에게 전달하는 규칙입니다.",
    start: "근거가 부족한 후보자는 사람의 결정을 기다리도록 스킬에 보류 기능을 내장하세요.",
    prompt: "한국어: Ambassador skill에 규칙을 추가하세요. 후보자의 근거가 부족하면 결정하지 말고 사람이 답해야 할 구체적인 질문을 작성한 뒤 보류하세요.\n\nEnglish — original: Add a rule to the ambassador skill: when a candidate's evidence is thin, don't decide - write the specific question a person should answer, and hold it.",
  },
  {
    emoji: "🧭", color: "green", title: "우리 프로그램, 우리 규칙",
    what: "추천, 최종 후보, 검토와 비슷한 프로그램에 여기서 배운 내용을 적용해 스킬이 무엇을 도울 수 있어야 하는지 알아보세요.",
    start: "자신의 프로그램을 Scout에 설명하고 필요한 정의와 근거 목록을 작성하게 하세요. 실제 이름이나 내보내기 없이 문서상으로만 작업하세요.",
    prompt: "한국어: 저는 [여러분의 프로그램]을 운영합니다. Ambassador skill의 작동 방식을 활용해 필요한 정의를 작성하고, 수집해야 할 근거를 나열하며, 사람이 반드시 개입해야 하는 지점을 알려 주세요. 문서상으로만 작업하고 실제 이름이나 내보내기는 사용하지 마세요.\n\nEnglish — original: I run [your program]. Using what the ambassador skill does, help me write the definition it would need, list the evidence I'd have to collect, and name where a person must stay in the loop. Keep it on paper - no real names and no exports.",
  },
  {
    emoji: "🤝", color: "teal", title: "두 정의 정면 비교",
    what: "같은 후보자에 두 정의를 적용해 서로 다른 부분을 보여 줍니다. 여러분 테이블의 기준과 다른 테이블의 기준을 비교합니다.",
    start: "스킬이 둘 다 실행하고 두 최종 후보 목록의 변경 사항을 보여 주는 비교 단계를 추가하세요.",
    prompt: "한국어: Ambassador skill에 비교 모드를 추가하세요. 같은 후보자에 우리 정의와 다른 테이블의 정의를 적용하고 두 최종 후보 목록이 다른 부분을 보여 주세요.\n\nEnglish — original: Add a compare mode to the ambassador skill: run our definition and another table's over the same candidates, and show me where the two shortlists disagree.",
  },
  {
    emoji: "✨", color: "gray", title: "직접 만들기",
    what: "테이블에서 생각해 낼 수 있는 가장 야심 찬 것으로, 최종 후보 목록에서 새로운 것을 만들거나 스킬의 결정 방식을 바꾸세요.",
    start: "최종 상태를 설명하고 가장 작은 작동 버전을 먼저 실행하세요.",
    prompt: "한국어: Ambassador skill에 [큰 아이디어]를 추가하고 싶습니다. 필요한 작업을 파악하고 가장 작은 작동 버전을 먼저 실행하세요.\n\nEnglish — original: I want to add [big idea] to the ambassador skill. Work out what it takes and get the smallest working version running first.",
  },
];
</script>

<DirectionBubbles :items="ideas" start-label="시작할 곳" />

::: tip 🎈 작게 시작하세요
완벽하거나 완성될 필요는 없습니다. 가장 작은 버전을 작동시킨 뒤 확장하세요. 시간과 토큰 예산이 실제 제약이므로, 완성할 수 있는 것보다 보여 줄 수 있는 것을 목표로 하세요.
:::

## 막히셨나요?

| 보이는 현상 | 할 일 |
| --- | --- |
| Scout가 스킬을 무시함 | 새 채팅을 시작하세요. 스킬은 채팅이 시작될 때만 로드됩니다. 요청을 *"한국어: Ambassador skill을 사용해서 / English — original: using the ambassador skill"*로 시작하세요. |
| 가져오기가 작동하지 않음 | 먼저 `ambassador-skill.zip`의 압축을 풀고 zip이나 `SKILL.md`만이 아닌 **폴더**를 가져오세요. |
| Scout가 데이터를 찾지 못함 | 압축을 푼 `program-data` 폴더의 전체 경로(예: `C:\program-data`)를 제공하세요. |
| 매번 같은 8명이 나옴 | Scout가 편집한 정의를 읽는지 확인하세요. <span>한국어: 방금 사용한 정의를 보여 주세요. / English — original: show you the definition it just used.</span> |
| 기록으로 뒷받침되지 않는 주장 | <span>한국어: 어느 파일의 몇 번째 행에서 가져왔나요? 답할 수 없다면 추측했다고 밝히세요. / English — original: Ask which file and row it came from. If it can't answer, it guessed - tell it to say so instead.</span> |
| 요청보다 더 많이 변경함 | <span>한국어: 무엇을 왜 변경했는지 알려 주세요. 원하지 않은 부분은 되돌리고 한 번에 하나씩 변경하세요. / English — original: Ask what it changed and why. Undo the parts you didn't want, then make one change at a time.</span> |

---

[← 시작으로 돌아가기](/ko/)
