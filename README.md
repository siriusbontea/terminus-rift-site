# terminus-rift-site

Public-facing website for [Terminus Rift](https://github.com/siriusbontea/terminus-rift-TTRPG)
— a custom tabletop roleplaying game by Sirius T. Bontea.

The TTRPG content (LaTeX source for the rulebooks, bestiary, physics
documents) lives in a separate, private repo. This repo is the
source of the public site only.

## Stack

- Vite + React 19 + TypeScript
- react-router-dom (BrowserRouter with `404.html` SPA fallback for GitHub Pages)
- Plain CSS with custom properties (theme tokens in `src/styles/theme.css`)
- pnpm
- Deployed to GitHub Pages via `actions/deploy-pages`

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:5173/terminus-rift-site/
pnpm build        # outputs to dist/
pnpm preview      # serves the production build locally
pnpm lint
```

## Contact form

The About page has a contact form. It posts to whatever URL is in
`VITE_CONTACT_ENDPOINT`. To enable it locally:

1. Sign up at <https://formspree.io> (free tier handles ~50
   submissions/month).
2. Create a new form, copy its endpoint URL.
3. `cp .env.example .env.local` and paste the URL in.

For the deployed site, set the same value as a `VITE_CONTACT_ENDPOINT`
secret in the GitHub repo's Settings → Secrets → Actions. The deploy
workflow injects it at build time.

When the env var is empty the form falls back to a "not configured"
notice — it never silently drops messages.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to
`main`. The Pages source must be set to "GitHub Actions" in the repo
Settings → Pages.

Deployed URL: <https://siriusbontea.github.io/terminus-rift-site/>

## Authorship

All content authored by **Sirius T. Bontea**
<sirius.bontea@protonmail.com>. Private playtest project — not
licensed for redistribution.
