# guillaumemunsch.github.io

My personal site: CV first, then small projects and a few words about me.

**Live:** https://guillaumemunsch.github.io

## Content

All the text lives in `src/content.ts`: profile, experience, education, languages, projects and about.

The games under `public/` (`2048`, `darts-cricket`, `react-game-of-life`, `js-kata-game-of-life`, `react-minesweeper`) are built bundles, served as they are.

## Run locally

Needs Node 22 and pnpm.

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
```

## Deploy

Every push to `main` type-checks, builds, and deploys to GitHub Pages (`.github/workflows/deploy.yml`).
