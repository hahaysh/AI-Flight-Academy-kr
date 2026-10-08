---
title: 디지털 트윈 - Cowork
---

<!-- markdownlint-disable MD013 MD025 MD033 -->

# 디지털 트윈

## 목표

Copilot은 이미 여러분의 메일, 일정, 파일을 읽을 수 있습니다. 하지만 **여러분처럼** 처리하지는 못합니다. 두 우선순위 중 무엇을 앞세울지 결정하거나, 여러분이라면 먼저 확인할 사항 때문에 결정을 보류하거나, 관리자와 파트너 팀에게 서로 다른 방식으로 글을 쓰지 못합니다. 그래서 작업을 시작할 때마다 다시 설명해야 하고, 받은 결과도 대부분 다시 작성하게 됩니다.

**디지털 트윈**은 바로 그런 여러분의 방식을 글로 정리해 스킬로 저장한 것입니다. 처음부터 직접 작성할 필요는 없습니다. Cowork가 여러분의 메일, 일정, Teams를 바탕으로 초안을 만들면 잘못 파악한 부분을 바로잡으면 됩니다. 그러면 이후 Cowork로 만드는 모든 결과물은 처음부터 여러분을 이해한 상태에서 시작합니다.

이 활동에서는 트윈을 설정하고, 잘못 파악한 점을 바로잡은 다음, 실제 업무에 활용합니다. 세 단계로 진행합니다.

| | 단계 | 완료 기준 |
| --- | --- | --- |
| **1** | **설정하기** | Cowork가 여러분의 업무를 바탕으로 `persona.md`와 `voice.md`를 작성하고, 여러분의 입장에서 실제 질문에 답했습니다. |
| **2** | **바로잡기** | 두세 줄을 수정한 뒤, 그 수정으로 답변이 달라지는 것을 확인했습니다. |
| **3** | **확장하기** | 트윈이 이전에는 할 수 없던 일을 수행합니다. |

1단계와 2단계는 빠르게 진행되며, 합쳐서 약 20분이 걸립니다. 3단계가 핵심 빌드입니다. 한 번만 변경하고 끝내지 말고, 확장하고 다시 실행하여 무엇이 달라졌는지 본 다음 또 확장하세요.

<div class="callout-bubble">
<span class="callout-bubble-icon">🔒</span>

**여러분의 트윈은 여러분의 것입니다.** 트윈은 여러분이 이미 볼 수 있는 항목만 읽으며, 트윈이 작성한 파일은 여러분의 OneDrive에만 보관됩니다. 같은 테이블의 참가자들과 비교할 때는 **메일함이 아니라 효과가 있었던 프롬프트**를 공유하세요. 프롬프트에는 받은 편지함의 내용이 들어 있지 않습니다.

</div>

::: details 용어집

- **디지털 트윈:** Cowork가 여러분처럼 행동하기 위해 알아야 할 정보, 즉 의사 결정 방식, 글쓰기 방식, 응답해야 하는 사람에 관한 정보입니다. 여러분이 소유하고 편집할 수 있는 두 개의 텍스트 파일에 저장됩니다.
- **스킬:** Cowork가 불러와 따르는 일반 텍스트 지침 파일입니다. 여러분의 트윈도 하나의 스킬입니다.
- **`persona.md`:** 여러분이 누구를 지원하는지, 우선순위가 충돌할 때 무엇을 앞세우는지, 약속하기 전에 무엇을 확인하는지 담습니다.
- **`voice.md`:** 여러분의 글쓰기 방식과, 원문 그대로 보관된 몇 개의 실제 메시지를 담습니다.
- **참조:** 지침에서 요구할 때 트윈이 읽는 추가 파일입니다. 3단계에서는 이러한 참조를 추가합니다.

더 많은 정의는 [용어집](/ko/glossary)을 참조하세요.

:::

## 시작하기 전에

**[Cowork](https://copilot.cloud.microsoft/cowork)를 열어 정상적으로 로드되는지 확인하세요.** 로드되지 않으면 코치에게 도움을 요청하세요.

아래 스킬을 다운로드하세요.

<a class="lab-card" href="/AI-Flight-Academy/downloads/my-twin-SKILL.md" download="SKILL.md" style="max-width:30rem">
  <span class="lab-card-emoji">🧬</span>
  <span class="lab-card-title">여러분의 트윈</span>
  <span class="lab-card-desc">여러분의 업무를 읽고 스스로 구축되는 스킬입니다. SKILL.md로 저장되며, Downloads 폴더에 그대로 두세요.</span>
  <span class="lab-card-cta">SKILL.md 다운로드 →</span>
</a>

---

## 1 · 설정하기

**완료 기준:** Cowork가 여러분의 업무를 바탕으로 `persona.md`와 `voice.md`를 작성하고, 여러분의 입장에서 실제 질문에 답했습니다.

1. Cowork 왼쪽 메뉴에서 **Customize**를 엽니다. **Add** 옆의 화살표를 선택한 다음 **Upload**를 선택하고, Downloads 폴더에 있는 `SKILL.md` 파일을 선택합니다.

   ![왼쪽 메뉴에서 Customize가 선택되고 Add 드롭다운이 열린 상태에서 Upload가 강조 표시된 Cowork Customize 페이지](/img/cowork-upload-skill.png)

1. **새 작업**을 시작합니다. 스킬은 작업을 시작할 때 로드됩니다.

1. 트윈에게 자체 설정을 요청합니다.

   ```text
   한국어: 내 트윈을 설정해 줘.
   English — original: Set up my twin.
   ```

   트윈은 읽으려는 항목을 알려 주고 승인을 기다린 다음, 보낸 메일, Teams 메시지, 약 한 달간의 일정을 읽습니다. **액세스 권한은 읽기 전용**입니다. 여러분이 이미 액세스할 수 있는 항목만 볼 수 있으며, 어떤 내용도 보내거나 공유할 권한은 없습니다.

   ::: tip Cowork는 변경하기 전에 확인을 요청합니다
   프롬프트에 따라 Cowork가 페르소나나 참조 같은 파일을 추가하거나 편집할 때는 변경 내용을 보여 주고 승인 또는 거부를 기다립니다. 이는 정상적인 동작이므로 변경을 적용하려면 승인하세요.
   :::

   두 파일의 초안을 보여 준 다음 OneDrive에 자체 파일을 작성합니다.

   ```text
   Documents/Cowork/skills/my-twin/
     SKILL.md          ← the instructions. This is the file you uploaded
     references/
       persona.md      ← who you are and how you decide
       voice.md        ← how you write
       setup.md        ← how far it got, so it can pick up if you get pulled away
   ```

   트윈은 답변하기 전에 `references/`의 모든 항목을 자동으로 읽습니다.

1. 실제 질문으로 테스트합니다.

   ```text
   한국어: 내 트윈을 사용해서, [내가 계속 미뤄 온 일]을 어떻게 해야 할지 알려 줘.
   English — original: Using my twin, what should I do about [the thing you've been putting off]?
   ```

   여러분이 취할 입장을 트윈도 취해야 합니다. 트윈의 이름으로 시작하세요. 예를 들어 *한국어: "내 트윈을 사용해서" 또는 "내 트윈에게 물어봐". English — original: "using my twin" or "ask my twin".*라고 말하지 않으면 Cowork가 스킬을 전혀 호출하지 않을 수 있습니다.

::: details 스킬 작동 방식
스킬은 Cowork가 불러와 따르는 지침이 담긴 일반 텍스트 Markdown 파일인 `SKILL.md`입니다.

파일은 `name`과 `description`이 있는 frontmatter로 시작합니다. Cowork는 요청을 `description`과 대조하여 불러올 스킬을 선택하므로, 이 설명이 스킬의 적용 시점을 정의합니다. frontmatter 아래 본문은 지침입니다.

스킬은 OneDrive의 `Documents/Cowork/skills/<name>/` 아래에 저장됩니다. 스킬에는 추가 `.md` 파일을 두는 `references/` 폴더가 포함될 수 있으며, 지침에서 요구할 때 해당 파일을 읽습니다. 트윈은 자체 참조를 이곳에 작성합니다.

`SKILL.md`는 Agent Skills 공개 표준을 따르므로, 같은 파일을 지원하는 다른 도구(예: VS Code의 GitHub Copilot)에서도 실행할 수 있습니다.
:::

## 2 · 바로잡기

**완료 기준:** 두세 줄을 수정한 뒤 답변이 달라지는 것을 확인했습니다.

트윈이 처음 파악한 여러분의 모습은 비슷하지만 정확하지는 않습니다. 여러분이 스스로 설명하는 모습이 아니라 업무에서 *입증된* 내용을 바탕으로 만들었기 때문입니다.

1. **트윈이 만든 내용을 확인합니다.** 예를 들면 *한국어: "내 persona.md를 보여 줘." English — original: "show me my persona.md."*라고 요청하세요. 틀릴 가능성이 가장 높은 `[inferred]` 또는 `[needs you]` 태그가 붙은 줄부터 살펴보세요.
1. **트윈의 행동을 바꾸는 두세 줄을 수정합니다.** 이름, 날짜, 기준값, 절대 하지 않을 일 등이 좋습니다. *한국어: "서로 충돌하는 우선순위의 균형을 맞춰라." English — original: "Balance competing priorities"*는 아무것도 바꾸지 않습니다. 반면 *한국어: "내부 마감일과 고객의 마감일이 충돌하면 고객의 마감일을 지켜라." English — original: "when an internal deadline and a customer's collide, protect the customer's"*는 행동을 바꿉니다.
1. **테스트한 다음 다음 단계로 넘어갑니다.** 앞에서 했던 질문을 다시 하고 답변이 달라지는지 확인하세요. 아무것도 달라지지 않았다면 해당 줄이 너무 모호한 것입니다.

이 단계에서 완성하려고 하지 마세요. 빌드하는 동안 계속 바로잡게 됩니다.

::: tip 🏷️ 실제로 사용할 이름을 지어 주세요
*한국어: "내 트윈의 이름을 Clippy로 바꿔 줘." English — original: "rename my twin to Clippy"* 또는 원하는 다른 이름을 말한 다음, Cowork가 변경 사항을 인식하도록 새 작업을 시작하세요. 오후 내내 이 트윈과 대화하게 될 텐데 계속 "내 트윈을 사용해서"라고 말하면 지루해집니다.
:::

::: details 더 시도해 볼 사항과 태그의 의미

아래 요청은 모두 트윈의 이름으로 시작하세요. 이름을 빼면 Cowork가 트윈이 아닌 자체 관점으로 답합니다.

| 다음과 같이 질문 | 얻는 결과 |
| --- | --- |
| *한국어: "Clippy, 오늘 들어온 항목을 분류해 줘." English — original: "Clippy, triage what landed today."* | 메일과 Teams를 내 조치 필요, 차단됨, 처리됨, 불필요로 분류하고 초안도 제공 |
| *한국어: "Clippy, [실제 스레드]에 대한 답장을 작성해 줘." English — original: "Clippy, draft a reply to [a real thread]."* | 여러분의 말투로 작성되어 바로 보낼 수 있는 답장 |
| *한국어: "Clippy, 이번 주에 내가 잊고 있는 것은 무엇이야?" English — original: "Clippy, what am I forgetting this week?"* | 일정과 약속을 함께 고려한 답변 |
| *한국어: "Clippy, 내가 일하는 방식에 대해 네가 모르는 것은 무엇이야?" English — original: "Clippy, what don't you know about how I work?"* | 한 달간의 업무를 읽고 스스로 파악한 정보 공백 |

페르소나의 각 섹션에는 트윈이 해당 내용을 얼마나 직접적으로 파악했는지를 나타내는 태그가 붙습니다.

| | |
| --- | --- |
| `[observed]` | 메일, 채팅 또는 일정에서 찾았으며 트윈이 인용할 수 있음 |
| `[inferred]` | 합리적인 해석이지만 여러분이 직접 말한 적은 없음 |
| `[needs you]` | 업무 자료에서 확인할 수 없어 트윈이 시작점을 작성함 |

`[inferred]`와 `[needs you]`는 틀릴 가능성이 가장 높습니다. 여기서 시작하세요.
:::

## 3 · 확장하기

**완료 기준:** 트윈이 이전에는 할 수 없던 일을 수행합니다.

이제 트윈은 여러분의 판단과 말투, 즉 *여러분*을 압니다. 아직 모르는 것은 주변 맥락입니다. 함께 일하는 사람, 이미 내려진 결정, 업무의 목적, 현재 실제로 진행 중인 일은 알지 못합니다. 이러한 맥락을 **참조**로 추가합니다.

### 방향 선택하기

아래 카드는 **완성된 빌드가 아니라 시작점**입니다. 아이디어를 얻는 데 사용하거나 무시하고 실제 업무에 필요한 것을 추가하세요.

<div class="skill-steps">
  <div class="skill-step">
    <div class="skill-step-num">1</div>
    <div class="skill-step-body">
      <span class="skill-step-title">대화로 구체화하기</span>
      <p>카드를 훑어보고 어디서 시작할지 정하세요. 그 지점에서 원하는 만큼 추가하세요.</p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">2</div>
    <div class="skill-step-body">
      <span class="skill-step-title">개요 만들기</span>
      <p>무엇을 담아야 하며 트윈이 언제 읽어야 하는지 2분 동안 정리하세요.</p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">3</div>
    <div class="skill-step-body">
      <span class="skill-step-title">대화로 만들기</span>
      <p>여러분이 아이디어를 제공하면 Cowork가 작성합니다. 원하는 것을 설명하고, 결과를 확인한 다음, 변경할 내용을 알려 주세요. 막히면 선택지를 요청하세요. <em>한국어: "이 참조에는 무엇이 더 들어가야 할까?" English — original: "what else belongs in this reference?"</em></p>
    </div>
  </div>
  <div class="skill-step">
    <div class="skill-step-num">4</div>
    <div class="skill-step-body">
      <span class="skill-step-title">다시 실행하기</span>
      <p>이전 질문을 다시 하고 무엇이 달라졌는지 확인하세요. 한 번에 하나씩 변경하세요. 세 가지를 동시에 바꾸면 어떤 변경이 효과를 냈는지 알 수 없습니다.</p>
    </div>
  </div>
</div>

<script setup>
const references = [
  {
    emoji: "👥", color: "blue", title: "사람", tag: "가장 쉬움",
    what: "대화 상대가 누구인지, 각 사람이 무엇을 필요로 하는지, 누가 답을 먼저 원하며 누구에게 나쁜 소식을 완곡하게 전해야 하는지 담습니다.",
    start: "`people.md` 참조를 추가하고 이름이 언급된 사람이 관련될 때마다 트윈이 읽도록 지시하세요.",
    prompt: "한국어: 내가 가장 자주 함께 일하는 사람, 각 사람이 내게 필요로 하는 것, 내가 그들과 대화하는 방식을 담은 참조를 추가해 줘. 이름이 언급된 사람이 관련될 때마다 읽어 줘. English — original: Add a reference for who I work with most, what each needs from me, and how I talk to them. Read it whenever a named person is involved.",
  },
  {
    emoji: "📅", color: "green", title: "약속",
    what: "이미 약속한 내용을 담아, 새로운 요청을 빈 일정이 아닌 실제 일정과 비교하게 합니다.",
    start: "약속한 내용과 시점의 참조를 추가하고, 추가 업무를 수락하기 전에 읽게 하세요.",
    prompt: "한국어: 내가 이미 약속한 일과 그 시점을 담은 참조를 추가해 줘. 다른 일을 더 맡으라고 말하기 전에 읽어 줘. English — original: Add a reference for what I've already committed to and when. Read it before telling me to take anything else on.",
  },
  {
    emoji: "✅", color: "purple", title: "결정",
    what: "이미 결정된 사항을 담아 팀이 몇 주 전에 마무리한 문제를 다시 꺼내지 않게 합니다.",
    start: "결정과 그 이유의 참조를 추가하고, 접근 방식 변경을 제안하기 전에 읽게 하세요.",
    prompt: "한국어: 우리가 내린 결정과 그 이유를 담은 참조를 추가해 줘. 접근 방식의 변경을 제안하기 전에 읽어 줘. English — original: Add a reference for decisions we've made and why. Read it before proposing a change of approach.",
  },
  {
    emoji: "🎯", color: "orange", title: "목표",
    what: "업무의 목적을 담아 단순히 다음 할 일이 아니라 중요한 것에 가중치를 두게 합니다.",
    start: "이번 분기 목표의 참조를 추가하고, 우선순위를 물을 때 읽게 하세요.",
    prompt: "한국어: 이번 분기에 내가 달성하려는 목표를 담은 참조를 추가해 줘. 우선순위를 물을 때 읽어 줘. English — original: Add a reference for what I'm trying to achieve this quarter. Read it when I ask what to prioritize.",
  },
  {
    emoji: "🗂️", color: "teal", title: "현재 작업 자료",
    what: "현재 작업 중인 실제 자료(브리프, 초안, 과거 문서)를 담아 규칙뿐 아니라 실제 업무를 근거로 답하게 합니다.",
    start: "현재 프로젝트와 몇 개의 과거 문서를 참조로 연결하고, 현재 업무를 물을 때 읽게 하세요.",
    prompt: "한국어: 내가 지금 진행 중인 프로젝트와 내가 작성한 과거 문서 몇 개를 담은 참조를 추가해 줘. 현재 업무에 관해 물을 때 읽어 줘. English — original: Add a reference capturing the projects I'm working on right now and a few of my own past write-ups. Read it when I ask about current work.",
  },
  {
    emoji: "✨", color: "gray", title: "직접 만들기",
    what: "목록에서 다루지 않은 것, 즉 실제 업무에 필요한 참조나 트윈 역할의 재구상을 다룹니다.",
    start: "원하는 것을 설명하고 트윈이 필요한 참조나 스킬 변경을 파악하게 하세요. 원한다면 처음부터 다시 시작해도 됩니다.",
    prompt: "한국어: 내 트윈이 [원하는 일]을 하게 하고 싶어. 필요한 것이 새 참조인지 스킬 자체의 변경인지, 그리고 언제 사용해야 하는지 파악해 줘. English — original: I want my twin to [what]. Work out what it needs - a new reference or a change to the skill itself - and when to use it.",
  },
];
</script>

<DirectionBubbles :items="references" start-label="시작할 위치" />

**성공 여부는** 트윈이 참조를 스스로 불러오는지로 알 수 있습니다. 이전 요청을 다시 실행하고 답변이 달라졌는지 확인하세요.

방 안의 모든 리소스, 즉 Copilot 채팅, [용어집](/ko/glossary), SME, 코치, 같은 테이블의 참가자들을 활용하세요.

::: tip 🎈 작게 시작하세요
완벽하거나 완성된 상태일 필요는 없습니다. 참조 하나를 작동시킨 다음 다른 참조를 추가하세요. 실제 제약은 시간이므로, 완성할 수 있는 것보다 보여 줄 수 있는 것을 목표로 하세요.
:::

::: details 참조의 모습
`references/`에 있는 파일이며, 트윈은 원하는 만큼 많은 참조를 읽을 수 있습니다.

다음은 가상의 이름으로 채운 `people.md`의 예입니다.

```md
# People

Read this whenever a named person is involved, or when I'm deciding
who to tell first.

## Dana - my manager
Skims everything. Lead with the date and the ask, under five lines,
no preamble. Wants to hear about a slip the day I know, not the week
it lands. Never surprise her in a meeting with something I could have
sent on Tuesday.

## Sam - peer, finance
Wants the number first and the reasoning second. Hates hedging - "roughly"
and "should be" both get a follow-up. If I don't have the number yet,
say so and give a date.

## Priya - partner marketing
Blocked more often than she says. If she's asking, she's usually been
waiting a few days already, so answer before the polished work.
Two-line yes with a date beats a paragraph.

## The Northwind team - external
Careful and brief. Never commit to a date, a number, or anything about
roadmap without checking with Dana first. No internal context, no
shorthand, no names they wouldn't recognize.

## Anyone I'm delivering bad news to
Say the thing in the first line. Then what I'm doing about it, then
what I need. Never bury it under context.
```

두 가지 요소가 이 참조를 유용하게 만듭니다. 맨 위에서 **언제 읽어야 하는지** 설명하고, 각 줄에서 사람을 묘사하는 대신 무엇을 *해야 하는지* 지시합니다. *한국어: "Sam은 세부 사항을 중시한다." English — original: "Sam is detail-oriented"*는 아무것도 바꾸지 않습니다. *한국어: "숫자를 먼저 말하고, 애매하게 표현하지 마라." English — original: "Number first, no hedging"*는 다음 초안을 바꿉니다.
:::

## 문제가 있나요?

| 표시되는 현상 | 해결 방법 |
| --- | --- |
| Cowork가 트윈을 무시함 | 새 작업을 시작하세요. 스킬은 작업을 시작할 때만 로드됩니다. 요청을 *한국어: "내 트윈을 사용해서". English — original: "using my twin".*로 시작하세요. |
| 업로드가 작동하지 않음 | 다운로드된 `SKILL.md` 파일을 그대로 업로드하세요. 이름을 바꾸거나 내용을 새 파일에 붙여 넣지 마세요. |
| 설정에서 메일을 읽을 수 없음 | *한국어: "내일 일정에 무엇이 있어?" English — original: "what's on my calendar tomorrow?"*라고 물어 실제 답변을 받는지 확인하세요. 받지 못하면 코치에게 도움을 요청하세요. |
| 답변이 여러분답지 않음 | 어떤 규칙 때문에 그렇게 답했는지 물은 다음 해당 줄을 수정하세요. 모호한 줄은 아무것도 바꾸지 못하므로 사람, 날짜, 절대 하지 않을 일을 명시하세요. |
| 여러분의 입장에서 쓰지 않고 여러분에 관해 씀 | 페르소나가 지시하는 대신 묘사하고 있습니다. *한국어: "Sam은 세부 사항을 중시한다." English — original: "Sam is detail-oriented"*는 아무것도 바꾸지 않지만, *한국어: "숫자를 먼저 말하고, 애매하게 표현하지 마라." English — original: "number first, no hedging"*는 다음 초안을 바꿉니다. |
| 요청한 것보다 많이 변경함 | 무엇을 왜 변경했는지 물어보세요. 원하지 않은 부분을 되돌린 다음 한 번에 하나씩 변경하세요. |

---

[← 시작으로 돌아가기](/ko/)
