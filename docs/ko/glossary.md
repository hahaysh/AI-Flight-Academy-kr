---
title: 용어집
---

<!-- markdownlint-disable MD013 MD025 MD033 -->

# 용어집

Copilot Cowork, Microsoft Scout, GitHub Copilot을 사용하면서 만나게 될 주요 용어와 공식 문서의 위치를 정리했습니다.

## Skill

에이전트가 불러와 따르는 일반 텍스트 지침의 모음입니다. 지침은 `SKILL.md` 파일에 저장되며, 파일 앞부분의 짧은 설명은 언제 이 Skill을 적용해야 하는지 에이전트에 알려 줍니다.

지침 외의 자료가 필요한 Skill은 폴더 형태로 배포됩니다. `SKILL.md`와 함께 템플릿, 정의, 예제 같은 참조 파일을 두고 지침에서 이 파일들을 가리킵니다.

`SKILL.md`는 Agent Skills 공개 표준을 따르므로 이를 지원하는 환경에서 같은 폴더를 사용할 수 있습니다. 보관 위치는 도구마다 다릅니다. Cowork는 OneDrive에 저장하고, Scout는 컴퓨터의 디렉터리에서 관리하며, GitHub Copilot은 작업 폴더의 `.github/skills/`를 읽습니다.

| | |
| --- | --- |
| [Agent Skills 소개](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) | GitHub Docs · 개념 |
| [Cowork Skill](https://learn.microsoft.com/microsoft-365/copilot/cowork/use-cowork#cowork-skills) | Microsoft Learn · 문서 |
| [Cowork에 Skill 업로드](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-customize#upload-a-skill) | Microsoft Learn · 방법 |
| [Scout에서 Skill 관리](https://learn.microsoft.com/microsoft-scout/use-microsoft-scout#manage-skills) | Microsoft Learn · 문서 |
| [Copilot CLI에 Skill 추가](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) | GitHub Docs · 방법 |

## Session, task, chat

모두 에이전트와 나누는 하나의 대화를 뜻합니다. Cowork는 이를 **task**, Scout는 **chat** 또는 **session**, Copilot CLI는 **session**이라고 부릅니다.

Skill은 새 대화가 시작될 때 검색됩니다. 대화 도중 설치한 Skill은 다음 대화를 시작해야 적용됩니다.

## Work IQ

에이전트가 메일, 일정, Teams, 파일, 사람 및 조직 같은 Microsoft 365 업무 정보를 근거로 사용할 수 있게 하는 계층입니다. 로그인한 계정이 이미 접근할 수 있는 정보만 가져옵니다.

Cowork와 Scout에는 Work IQ가 기본으로 포함되어 있습니다. GitHub Copilot CLI, Copilot app, VS Code Agents window에서는 **plugin**으로 설치하거나 독립적인 **MCP server**로 연결할 수 있습니다. 명령줄 인터페이스도 제공합니다.

| | |
| --- | --- |
| [Work IQ 개요](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq) | Microsoft Learn · 문서 |
| [Work IQ MCP server](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview) | Microsoft Learn · 문서 |
| [Work IQ CLI](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/cli) | Microsoft Learn · 참조 |
| [Work IQ plugin marketplace](https://github.com/microsoft/work-iq) | GitHub · 저장소 |

## Grounding

에이전트가 일반 지식에 의존해 답하는 대신 실제 원본 자료를 근거로 답하도록 하는 것입니다. Grounding된 답변은 메시지, 파일, 레코드 같은 구체적인 근거로 추적할 수 있습니다.

## Plugin

제품에 따라 서로 다른 두 가지 의미로 사용됩니다.

**GitHub Copilot**의 CLI, Copilot app, VS Code Agents window에서 plugin은 custom agent, Skill, MCP server를 하나로 묶은 패키지입니다. `plugin.json` manifest로 정의하며, plugin을 호스팅하는 저장소인 **marketplace**에서 설치합니다.

**Cowork**에서 plugin은 Cowork가 다른 서비스를 읽는 데 그치지 않고 해당 시스템에서 작업을 수행할 수 있게 하는 연결입니다.

| | |
| --- | --- |
| [Plugin 소개](https://docs.github.com/en/copilot/concepts/agents/about-plugins) | GitHub Docs · 개념 |
| [Plugin 검색 및 설치](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing) | GitHub Docs · 방법 |
| [Plugin 명령 참조](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference) | GitHub Docs · 참조 |
| [Cowork plugin 관리](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-customize#manage-your-plugins) | Microsoft Learn · 방법 |

## Extension

이 용어도 두 가지 의미로 사용됩니다.

**VS Code**에서 extension은 편집기 자체에 추가하며 Visual Studio Marketplace에서 설치하는 확장 기능입니다. GitHub Copilot도 extension입니다.

**Microsoft Scout**에서 Extensions는 가져온 Skill을 관리하는 위치입니다. Scout는 실행 중인 컴퓨터의 디렉터리에서도 Skill을 검색합니다.

| | |
| --- | --- |
| [VS Code의 Copilot 확장성](https://code.visualstudio.com/docs/copilot/copilot-extensibility-overview) | VS Code · 문서 |
| [Scout에서 Skill 관리](https://learn.microsoft.com/microsoft-scout/use-microsoft-scout#manage-skills) | Microsoft Learn · 문서 |

## MCP (Model Context Protocol)

에이전트가 실시간 시스템에서 정보를 읽거나 작업을 수행할 수 있도록 도구를 제공하는 공개 표준입니다.

**MCP server**는 이러한 도구를 제공하는 구성 요소입니다. Work IQ를 포함해 이미 다양한 서버가 있으므로 시스템 연결은 개발이 아니라 구성만으로 해결되는 경우가 많습니다. 서버를 단독으로 추가하거나 plugin 안에 묶어서 설치할 수 있습니다.

| | |
| --- | --- |
| [MCP 소개](https://modelcontextprotocol.io/docs/getting-started/intro) | modelcontextprotocol.io · 사양 |
| [VS Code의 MCP server](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) | VS Code · 문서 |
| [MCP로 Copilot Chat 확장](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp) | GitHub Docs · 방법 |
| [MCP Registry](https://github.com/mcp) | GitHub · 디렉터리 |

## Agent

목표를 받아 단계를 계획하고 도구를 사용해 실행하는 소프트웨어입니다. Cowork와 Scout 모두 이런 의미의 에이전트입니다.

GitHub Copilot에서는 더 좁은 의미로도 사용됩니다. 일반적으로 `.github/agents/` 아래의 `*.agent.md` 파일로, 특정 작업에서 사용할 역할과 모델을 Copilot에 알려 줍니다. 배포된 서비스가 아니라 실행 시 읽는 텍스트 파일이며, 단독으로 또는 plugin에 포함해 공유할 수 있습니다.

| | |
| --- | --- |
| [VS Code의 Agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) | VS Code · 문서 |
| [Plugin 소개](https://docs.github.com/en/copilot/concepts/agents/about-plugins) | GitHub Docs · 개념 |
| [사용자 지정 지침](https://code.visualstudio.com/docs/copilot/customization/custom-instructions) | VS Code · 사용자 지정 |

## GitHub Copilot CLI

터미널에서 사용하는 GitHub Copilot입니다. 직접 호출하거나 다른 프로그램에서 호출할 수 있습니다. 스크립트가 채팅 창 없이 에이전트에 접근할 때 이 방식을 사용합니다. 각 호출은 에이전트의 전체 작업 한 번에 해당하므로 일반 채팅 응답보다 오래 걸립니다.

| | |
| --- | --- |
| [GitHub Copilot CLI 소개](https://docs.github.com/copilot/concepts/agents/about-copilot-cli) | GitHub Docs · 개념 |
| [GitHub Copilot CLI 사용](https://docs.github.com/copilot/how-tos/use-copilot-agents/use-copilot-cli) | GitHub Docs · 방법 |

## 제품

| | |
| --- | --- |
| [Copilot Cowork](https://copilot.cloud.microsoft/cowork) | Microsoft · 열기 |
| [Copilot Cowork 사용](https://learn.microsoft.com/microsoft-365/copilot/cowork/use-cowork) | Microsoft Learn · 문서 |
| [Cowork FAQ](https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-faq) | Microsoft Learn · FAQ |
| [Microsoft Scout 개요](https://learn.microsoft.com/microsoft-scout/overview) | Microsoft Learn · 개요 |
| [Microsoft Scout 시작](https://learn.microsoft.com/microsoft-scout/get-started) | Microsoft Learn · 방법 |
| [Microsoft Scout FAQ](https://learn.microsoft.com/microsoft-scout/faq) | Microsoft Learn · FAQ |
| [VS Code의 GitHub Copilot](https://code.visualstudio.com/docs/copilot/overview) | VS Code · 문서 |
