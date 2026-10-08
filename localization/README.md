# Korean localization

The English site remains at the repository's original paths. Korean pages are
an additive overlay under `docs/ko/`, and both locales share images and
participant downloads.

## Updating from upstream

Add the source repository once:

```powershell
git remote add upstream https://github.com/MicrosoftLearning/AI-Flight-Academy.git
```

Pull later updates and check which translations changed:

```powershell
git fetch upstream
git merge upstream/main
npm ci
npm run check:i18n
```

`check:i18n` compares each tracked English page with the hash recorded in
`ko-manifest.json`. It reports only the Korean pages that need review.

After translating and reviewing every reported page, record the new baseline:

```powershell
npm run update:i18n
npm run check:i18n
npm run check:prompts
npm run docs:build
```

Do not run `update:i18n` before the corresponding Korean pages have been
updated. Doing so acknowledges the English changes as translated.

## Translation boundaries

- Keep English pages, code, commands, file names, product names, CSV headers,
  image paths, and download paths unchanged.
- Translate participant-facing instructions under `docs/ko/`.
- Show Korean and the exact English original for prompts participants enter
  into an agent.
- Point Korean internal navigation to `/ko/`; continue sharing `/img/`,
  `/build/media/`, and `/downloads/` assets with English.
