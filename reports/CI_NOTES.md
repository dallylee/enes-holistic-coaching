# CI Notes

- Added `.github/workflows/ci.yml` to run on push and pull_request to `main`.
- Steps: checkout, setup Node 20 with npm cache, `npm ci`, `npm run typecheck` (lint gate), and `npm run build`.
- Existing `deploy.yml` remains unchanged for GitHub Pages publishing.
