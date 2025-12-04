# How to Develop

## Prerequisites
- Node.js 20+ and npm

## Common scripts
- Install: `npm install`
- Local dev server: `npm run dev`
- Production build: `npm run build`
- Preview production build: `npm run preview -- --host 0.0.0.0 --port 4173`
- Type check / lint gate: `npm run typecheck` (also available as `npm run lint`)

## Bundle insights
- Run `npm run build` to view bundle sizes in the CLI output. The current Vite version does not support `--analyze`; use a plugin or upgrade when available if deeper analysis is required.

## Audits
- Dependency audit: `npm audit` (currently blocked in this environment with HTTP 403; rerun when registry access is available).
- Accessibility: Manual checks completed; run Lighthouse/axe locally once npm registry access allows installing tooling.
