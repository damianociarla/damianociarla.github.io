# Damiano Ciarla - Personal Site

A bilingual, cinematic personal site built with React, TypeScript, GSAP and React Three Fiber. The experience follows twenty years in software from the first line of code to technical leadership, entrepreneurship and applied AI.

## Development

```bash
npm install
npm run dev
```

Before committing:

```bash
npm run lint
npm run typecheck
npm run build
```

Public copy is maintained in `src/content.ts`. Planning and source-of-truth notes stay local because they include non-public working context.

## Publishing

Pushing `main` runs `.github/workflows/deploy.yml`, builds `dist/` and deploys it to GitHub Pages.
