import { en } from "./en";
import { ko } from "./ko";
import type { SiteLocale, SiteMessages } from "./types";

export type { SiteLocale, SiteMessages } from "./types";

const messages: Record<SiteLocale, SiteMessages> = { en, ko };

export function getMessages(locale: SiteLocale = "en"): SiteMessages {
  return messages[locale];
}

export function localeFromPath(path: string): SiteLocale {
  return /^\/(?:AI-Flight-Academy\/)?ko(?:\/|$)/.test(path) ? "ko" : "en";
}

export function localizedPath(path: string, locale: SiteLocale = "en"): string {
  if (locale === "en") return path;
  if (path === "/") return "/ko/";
  return `/ko${path.startsWith("/") ? path : `/${path}`}`;
}
