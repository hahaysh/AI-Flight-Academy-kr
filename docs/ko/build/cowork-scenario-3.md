---
title: 앰배서더 - Cowork
---

<!-- markdownlint-disable MD013 MD025 MD033 -->

# 앰배서더

## 목표

Contoso의 AI 스킬링 앰배서더 프로그램은 본업과 함께 오피스 아워 운영, 멘토링, 질문 응답, 모두가 참고하는 가이드 작성을 하며 동료들의 사내 AI 도구 활용을 돕는 자원봉사자 모임입니다. 프로그램은 매 회차마다 9개 지역에서 이미 이런 일을 비공식적으로 해 온 사람들 중 8명을 새 앰배서더로 선발합니다.

**Ambassador skill**은 회차 운영자의 업무를 덜기 위해 만들어졌지만 아직 완성되지 않았습니다. 프로그램이 원하는 인재상을 짧게 서술한 글을 읽고 모든 후보자에게 적용한 뒤, 각 사유와 함께 8명의 이름을 반환합니다. 빠르고 자신 있게 답하지만 근거를 전혀 보여 주지 못해, 그 사유가 타당한지 누구도 확인할 수 없습니다.

이 활동에서는 이 스킬을 실행하고, 평가 기준을 바꾼 다음, 기능을 확장하기 시작합니다. 세 단계로 진행합니다.

| | 단계 | 완료 조건 |
| --- | --- | --- |
| **1** | **업로드하고 실행하기** | Cowork에 Ambassador skill이 로드되고 프로그램 데이터에서 8명의 이름을 반환합니다. |
| **2** | **평가 기준 바꾸기** | 프로그램이 원하는 인재상 설명을 교체하고 다시 실행해 다른 이름이 반환되는 것을 확인합니다. |
| **3** | **확장하기** | 스킬이 이전에는 할 수 없던 일을 수행합니다. |

3단계가 핵심 빌드이며 한 번의 변경으로 끝나지 않습니다. 빈틈 하나를 메우고, 다시 실행해 무엇이 달라졌는지 본 다음, 다음 빈틈을 메우세요.

**스킬은 제안하고, 사람은 결정합니다.** 8명의 이름은 누군가가 실제로 조치해야 하는 추천안입니다. 따라서 모든 변경은 더 많은 근거를 화면에 표시하고, 추론을 명확히 하며, 사람이 더 빠르게 번복할 수 있도록 의사결정자의 일을 쉽게 만들어야 합니다.

::: details 용어집

- **Skill:** Cowork가 로드하고 따르는 일반 텍스트 지침 폴더입니다. 읽고 편집할 수 있습니다.
- **Cohort:** 프로그램이 매 회차 선발하는 8명의 그룹입니다. 다음 그룹을 고르는 것이 과제입니다.
- **Candidate:** 프로그램이 선발할 수 있는 자원봉사자 중 한 명입니다. 지원자와는 다릅니다. 72명 중 31명은 자원하지 않았습니다.
- **Definition:** 프로그램이 찾는 인재상을 적은 설명입니다. 스킬은 이를 모든 후보자에게 적용합니다. 이 파일을 편집하면 결과가 바뀝니다.
- **Shortlist:** 스킬이 반환하는 8명의 이름입니다. 사람이 검토할 제안이지 결정이 아닙니다.
- **Evidence:** 주장을 뒷받침하는 기록으로, 누군가가 운영한 활동, 받은 피드백, 기여한 내용입니다.

더 많은 정의는 [용어집](/ko/glossary)을 참고하세요.

:::

## 시작하기 전에

아래 두 파일을 모두 다운로드하세요.

<div class="lab-grid lab-grid-2">
  <a class="lab-card" href="/AI-Flight-Academy/downloads/ambassador-skill.zip" download>
    <span class="lab-card-emoji">🎖️</span>
    <span class="lab-card-title">Ambassador skill</span>
    <span class="lab-card-desc">프로그램이 다음 8명을 선발하는 방식과 원하는 인재상에 대한 세 가지 대안 정의가 들어 있습니다. 변경 후 비교할 기준인 "이전" 버전입니다.</span>
    <span class="lab-card-cta">.zip 다운로드 →</span>
  </a>
  <a class="lab-card" href="/AI-Flight-Academy/downloads/ambassador-program-data.zip" download>
    <span class="lab-card-emoji">🗂️</span>
    <span class="lab-card-title">프로그램 데이터</span>
    <span class="lab-card-desc">9개 파일에 담긴 후보자 72명과 약 2,000개의 근거 기록입니다. 실제 인물 데이터 대신 사용하세요.</span>
    <span class="lab-card-cta">.zip 다운로드 →</span>
  </a>
</div>

Cowork를 여세요. 1단계에서 Ambassador skill을 추가합니다. 코드는 필요하지 않으며 모든 변경은 채팅에 문장을 입력해 수행합니다. 첨부한 CSV는 프롬프트와 함께 모델로 전송되므로, 이 데이터는 가상으로 만들어졌습니다.

**이 데이터는 가상입니다.** 인물, 점수, 피드백 모두 만들어진 것입니다. 실제 인물을 설명하거나 실제 프로그램을 모델링하지 않습니다.

스킬의 구성:

```text
ambassador/
  SKILL.md              the instructions Cowork loads and follows
  references/
    DEFINITION.md       what the program looks for. This is the file you edit
    PLAYBOOK.md         how the program describes itself
  definitions/          three worked alternatives - reach, depth, rising
```

::: tip 막히면 Cowork에 물어보세요
Cowork로 빌드하고 있으므로 Cowork가 빌드 중인 것을 고칠 수도 있습니다. 오류를 붙여 넣거나 잘못 반환된 내용을 설명하세요. 그래도 해결되지 않으면 현장의 코치에게 도움을 요청하세요.
:::

---

## 1 · 업로드하고 실행하기

**완료 조건:** Cowork가 프로그램 데이터에서 8명의 이름을 반환합니다.

1. Cowork에서 **Customize** → **Add** 옆 화살표 → **Upload**를 열고 `ambassador-skill.zip`을 끌어다 놓으세요(압축을 푼 폴더도 가능).

   ::: warning SKILL.md만이 아니라 전체 zip을 업로드하세요
   `SKILL.md`는 지침일 뿐입니다. zip에는 실행할 정의와 플레이북, 세 가지 대안이 담긴 `references/`와 `definitions/`도 포함되어 있습니다.
   :::

   ![왼쪽 메뉴에 Customize가 있고 Add 드롭다운이 열린 상태에서 Upload가 강조된 Cowork Customize 페이지](/img/cowork-upload-skill.png)

1. **새** Cowork 세션을 시작하세요. 스킬은 세션이 시작될 때만 로드됩니다.

1. `ambassador-program-data.zip`의 압축을 풀고 **9개 CSV 모두**를 세션으로 끌어다 놓으세요. 옆의 Markdown 파일 두 개가 아니라 `.csv` 파일만 추가합니다.

1. Cowork에 실행을 요청하세요. 모든 요청을 *"Using the ambassador skill"*로 시작해야 Cowork가 해당 스킬을 호출합니다.

   ```text
   한국어:
   Ambassador skill을 사용해서 다음 코호트에는 누가 포함되어야 할지 알려 주세요.

   English — original:
   Using the ambassador skill, who should be in the next cohort?
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

::: tip Cowork가 파일을 변경하기 전에 물어볼 수 있습니다
프롬프트가 Cowork에 정의나 참조 파일을 편집하도록 요청하면, Cowork는 변경 내용을 보여 주고 승인을 기다리는 경우가 많습니다. 승인하지 않으면 변경되지 않습니다. 묻지 않아도 괜찮습니다. 결과를 확인하고 계속 진행하세요.
:::

## 3 · 확장하기

**완료 조건:** 스킬이 이전에는 할 수 없던 일을 수행합니다.

`program-data`에는 9개 파일이 있습니다. 스킬은 그중 한 사람당 7개 점수를 요약한 `CandidateProfiles.csv` 하나만 읽습니다. 나머지 8개에는 사람들이 실제로 운영한 활동, 동료의 의견, 남긴 결과물, 지원 여부가 있지만 사용되지 않습니다. 스킬에 이 파일들도 읽도록 지시하면 최종 후보 목록이 바뀝니다.

이는 여러 빈틈 중 하나일 뿐입니다.

### 방향 선택하기

아래 카드는 **완성된 빌드가 아니라 시작점**입니다. 아이디어로 활용하거나 무시하고 테이블에서 실제로 원하는 것을 빌드하세요.

<div class="skill-steps">
  <div class="skill-step">
    <div class="skill-step-num">1</div>
    <div class="skill-step-body">
      <span class="skill-step-title">함께 이야기하기</span>
      <p>카드에서 아이디어를 훑어보고 테이블 구성원들과 시작점을 정하세요. 이후 원하는 만큼 추가하세요.</p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">2</div>
    <div class="skill-step-body">
      <span class="skill-step-title">구상하기</span>
      <p>무엇을 해야 하고 무엇을 읽어야 하는지 2분 동안 구상하세요.</p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">3</div>
    <div class="skill-step-body">
      <span class="skill-step-title">대화로 빌드하기</span>
      <p>아이디어는 여러분이 내고 빌드는 Cowork가 합니다. 원하는 것을 설명하고 결과를 살핀 뒤 변경할 내용을 알려 주세요. 막히면 다음과 같이 선택지를 요청하세요. <em>"한국어: 이 대시보드에는 또 무엇을 표시할 수 있을까요? / English — original: what else could this dashboard show?"</em></p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">4</div>
    <div class="skill-step-body">
      <span class="skill-step-title">다시 실행하기</span>
      <p>무엇이 달라졌는지 확인하세요. 한 번에 하나씩 바꾸세요. 세 가지를 동시에 바꾸면 어느 변경이 영향을 줬는지 알 수 없습니다.</p>
    </div>
  </div>
</div>

<script setup>
const ideas = [
  {
    emoji: "🖥️", color: "blue", title: "실시간 코호트 대시보드",
    what: "현재 최종 후보 목록을 보여 주는 대화형 페이지로, 각 이름과 근거 기록, 지역 및 레벨 필터를 제공합니다.",
    start: "Cowork가 클릭해 살펴볼 수 있는 페이지로 최종 후보 목록을 렌더링하게 하세요.",
    prompt: "한국어: Ambassador skill을 사용해서 현재 코호트의 대화형 대시보드를 빌드하세요. 각 이름과 그 근거를 표시하고 지역 및 레벨 필터를 제공하세요.\n\nEnglish — original: Using the ambassador skill, build an interactive dashboard of the current cohort - each name, the evidence behind it, and filters for region and level.",
  },
  {
    emoji: "🧠", color: "orange", title: "기억 기능 제공",
    what: "읽을 뿐 아니라 쓰는 파일을 만들어, 사람이 번복한 내용을 포함해 매 실행에서 지난 결정을 알 수 있게 합니다.",
    start: "Cowork가 각 실행과 사람의 판단을 파일에 기록하고 다음 실행에서 다시 읽게 하세요.",
    prompt: "한국어: Ambassador skill에 기억 기능을 추가하세요. 각 실행과 사람의 번복을 파일에 기록하고 다음 실행에서 읽어 결정이 이어지게 하세요.\n\nEnglish — original: Add a memory to the ambassador skill: write each run and any human override to a file, and read it on the next run so decisions carry forward.",
  },
  {
    emoji: "🔍", color: "teal", title: "무시하던 근거 읽기", tag: "가장 쉬움",
    what: "스킬은 요약 점수만으로 평가합니다. 그 아래의 실제 기록을 열도록 가르치세요.",
    start: "요약에 가려진 동료 피드백과 기여를 확인하고 일회성 칭찬보다 반복되는 패턴에 가중치를 두세요.",
    prompt: "한국어: Ambassador skill에 다음을 추가하세요. 요약 점수뿐 아니라 PeerFeedback.csv와 ProgramContributions.csv도 읽고, 일회성 칭찬보다 반복되는 패턴에 가중치를 두세요. 그런 다음 원래 8명에는 없었지만 새로 추가된 사람이 누구인지 보여 주세요.\n\nEnglish — original: Add to the ambassador skill: read PeerFeedback.csv and ProgramContributions.csv, not just the summary scores, and weigh a repeated pattern over one-off praise. Then show me who that adds who wasn't in the original eight.",
  },
  {
    emoji: "⚖️", color: "purple", title: "매 실행의 공정성 검사",
    what: "기억해서 한 번만 실행하는 감사가 아니라, 모든 최종 후보 목록에서 스킬이 수행하는 상시 검사입니다.",
    start: "스킬에 검사를 내장해 쏠림과 근거 없는 주장을 자동으로 표시하세요.",
    prompt: "한국어: Ambassador skill에 공정성 검사를 추가하세요. 모든 최종 후보 목록에서 지역, 레벨 또는 재직 기간별 쏠림과 뒷받침하는 기록이 없는 주장을 표시하세요.\n\nEnglish — original: Add a fairness check to the ambassador skill - every shortlist flags when the list clusters by region, level, or tenure, and any claim with no record behind it.",
  },
  {
    emoji: "📨", color: "green", title: "초대장 초안 작성",
    what: "프로그램의 어조로 각 초대장을 작성하고 선발 근거를 옆에 표시해, 사용 전에 사람이 추론을 확인할 수 있게 합니다.",
    start: "스킬이 각 초대장을 작성하고 각 이름의 근거 기록을 첨부하게 하세요.",
    prompt: "한국어: Ambassador skill에 초대 단계를 추가하세요. 프로그램의 어조로 각 후보자의 초대장 초안을 작성하고, 사용 전에 추론을 확인할 수 있도록 해당 선발의 근거 기록을 초안 옆에 보여 주세요.\n\nEnglish — original: Add an invitation step to the ambassador skill: draft each candidate's invite in the program's voice, and show the records behind that pick alongside the draft so I can check the reasoning before I use it.",
  },
  {
    emoji: "🧭", color: "pink", title: "우리 프로그램, 우리 규칙",
    what: "여러분도 추천, 최종 후보, 검토와 비슷한 프로그램을 운영할 수 있습니다. 여기서 배운 것을 활용해 스킬이 무엇을 도울 수 있어야 하는지 알아보세요.",
    start: "자신의 프로그램을 Cowork에 설명하고 필요한 정의와 근거 목록의 초안을 작성하게 하세요. 실제 이름이나 내보내기 없이 문서상으로만 작업하세요.",
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
    start: "최종 상태를 설명하고 가장 작은 작동 버전을 먼저 화면에 표시하세요.",
    prompt: "한국어: Ambassador skill에 [큰 아이디어]를 추가하고 싶습니다. 필요한 작업을 파악하고 가장 작은 작동 버전을 먼저 화면에 표시하세요.\n\nEnglish — original: I want to add [big idea] to the ambassador skill. Work out what it takes and get the smallest working version on screen first.",
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
| Cowork가 스킬을 무시함 | **새** Cowork 세션을 시작하세요. 스킬은 세션이 시작될 때만 로드됩니다. 요청을 *"한국어: Ambassador skill을 사용해서 / English — original: using the ambassador skill"*로 시작하세요. |
| 업로드가 작동하지 않음 | `SKILL.md`만 주지 말고 zip 또는 압축을 푼 전체 폴더를 제공하세요. |
| Cowork가 데이터를 찾지 못함 | 9개 CSV 모두를 세션에 첨부하세요. Cowork는 첨부한 것만 볼 수 있습니다. |
| 매번 같은 8명이 나옴 | Cowork가 편집한 정의를 읽는지 확인하세요. <span>한국어: 방금 사용한 정의를 보여 주세요. / English — original: show you the definition it just used.</span> |
| 기록으로 뒷받침되지 않는 주장 | <span>한국어: 어느 파일의 몇 번째 행에서 가져왔나요? 답할 수 없다면 추측했다고 밝히세요. / English — original: Ask which file and row it came from. If it can't answer, it guessed - tell it to say so instead.</span> |
| 요청보다 더 많이 변경함 | <span>한국어: 무엇을 왜 변경했는지 알려 주세요. 변경을 거부하고 더 좁은 요청으로 다시 시도하세요. / English — original: Ask what it changed and why. Reject the change and try again with a narrower ask.</span> |

---

[← 시작으로 돌아가기](/ko/)
