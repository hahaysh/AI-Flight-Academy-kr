import { defineConfig } from "vitepress";
import { navBuildItems, sidebars, isBuildPage } from "./data/sidebar";
import { getMessages } from "./data/locales";

const en = getMessages("en");
const ko = getMessages("ko");

export default defineConfig({
  title: "AI Flight Academy",
  description:
    "A 2-hour hands-on agent-building session for Global Skilling Team Week. Two hours, your tools, and a real problem to crack.",
  base: "/AI-Flight-Academy/",
  cleanUrls: true,
  // The packer writes a .md into public/ for Cowork to download. Without this,
  // VitePress also renders it as a page at /public/downloads/.
  srcExclude: ["public/**"],
  // Dark by default - the scenario art and the altitude colours were built
  // against it. The toggle still works for anyone who prefers light.
  appearance: "dark",
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: [
          { text: en.nav.home, link: "/" },
          { text: en.nav.startBuilding, items: navBuildItems("en") },
          { text: en.nav.glossary, link: "/glossary" },
          { text: en.nav.about, link: "/about" },
        ],
        sidebar: sidebars("en"),
      },
    },
    ko: {
      label: "한국어",
      lang: "ko-KR",
      link: "/ko/",
      title: "AI Flight Academy",
      description:
        "Global Skilling Team Week를 위한 2시간 실습형 에이전트 빌딩 세션입니다.",
      themeConfig: {
        nav: [
          { text: ko.nav.home, link: "/ko/" },
          { text: ko.nav.startBuilding, items: navBuildItems("ko") },
          { text: ko.nav.glossary, link: "/ko/glossary" },
          { text: ko.nav.about, link: "/ko/about" },
        ],
        sidebar: sidebars("ko"),
        outline: { label: "이 페이지의 내용" },
        darkModeSwitchLabel: "테마",
        lightModeSwitchTitle: "라이트 모드로 전환",
        darkModeSwitchTitle: "다크 모드로 전환",
        sidebarMenuLabel: "메뉴",
        returnToTopLabel: "맨 위로",
        langMenuLabel: "언어 변경",
        skipToContentLabel: "본문으로 건너뛰기",
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "검색",
                buttonAriaLabel: "검색",
              },
              modal: {
                displayDetails: "세부 목록 표시",
                resetButtonTitle: "검색 초기화",
                backButtonTitle: "검색 닫기",
                noResultsText: "검색 결과가 없습니다.",
                footer: {
                  selectText: "선택",
                  selectKeyAriaLabel: "Enter 키",
                  navigateText: "이동",
                  navigateUpKeyAriaLabel: "위쪽 화살표",
                  navigateDownKeyAriaLabel: "아래쪽 화살표",
                  closeText: "닫기",
                  closeKeyAriaLabel: "Esc 키",
                },
              },
            },
          },
        },
      },
    },
  },
  // Build pages carry their steps in the sidebar, under the level you're on,
  // so the right-hand outline would just be a second copy of the same list.
  transformPageData(pageData) {
    if (isBuildPage(pageData.relativePath)) {
      pageData.frontmatter.aside = false;
    }
  },
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/AI-Flight-Academy/favicon.svg" },
    ],
  ],
  themeConfig: {
    search: {
      provider: "local",
    },
    // The prev/next footer walks sidebar order, which isn't a reading order
    // here - it sent people from a Scout guide to a Code build page, and from
    // Downloads to "Next page: Home". Every page ends with its own way back.
    docFooter: {
      prev: false,
      next: false,
    },
    outline: { level: [2, 3] },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MicrosoftLearning/AI-Flight-Academy/",
      },
    ],
    footer: {
      copyright: "© 2026 Microsoft. All rights reserved.",
    },
  },
});
