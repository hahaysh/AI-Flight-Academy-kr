<script setup lang="ts">
import { computed } from "vue";
import { useRoute, withBase } from "vitepress";
import {
  chooserLink,
  getTrackForLocale,
  getScenarioForLocale,
  statusFor,
  statusLabelFor,
  SCENARIO_0,
} from "../../data/paths";
import { getMessages, localeFromPath } from "../../data/locales";

const route = useRoute();

// Route looks like /AI-Flight-Academy-kr/build/cowork-scenario-2
const parsed = computed(() => {
  const m = route.path.match(/\/build\/([a-z]+)-(scenario-\d+)/);
  if (!m) return null;
  const locale = localeFromPath(route.path);
  const track = getTrackForLocale(m[1], locale);
  const scenario = getScenarioForLocale(m[2], locale);
  if (!track || !scenario) return null;
  return {
    track,
    scenario,
    locale,
    messages: getMessages(locale),
    status: statusLabelFor(statusFor(m[1], m[2]), locale),
  };
});
</script>

<template>
  <div v-if="parsed" class="build-bar">
    <div class="build-bar-context">
      <span class="build-bar-track">
        {{ parsed.track.emoji }} {{ parsed.track.label }}
      </span>
      <span v-if="parsed.status" class="build-bar-status">{{ parsed.status }}</span>
    </div>
    <nav v-if="parsed.scenario.id !== SCENARIO_0.id" class="build-bar-links">
      <a :href="withBase(chooserLink(parsed.locale))">
        {{ parsed.messages.components.switchPath }}
      </a>
    </nav>
  </div>
</template>

<style scoped>
.build-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin: 0 0 2rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.82rem;
}

.build-bar-context {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-2);
}

.build-bar-track {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.build-bar-status {
  opacity: 0.7;
}

.build-bar-links {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}

.build-bar-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
}

.build-bar-links a:hover {
  color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .build-bar-links {
    margin-left: 0;
    gap: 0.85rem;
  }
}
</style>
