# Changelog

## Fixes and improvements
- Hardened navigation to respect GitHub Pages base paths and hash anchors from the client dashboard.
- Added intrinsic image dimensions and mobile menu ARIA attributes to improve stability and accessibility.

## Removals
- Deleted unused components (AI wellness check, philosophy, services, terra) and the unused Gemini API service.
- Removed duplicate/unreferenced assets in `public/` and `images/` plus the unused `@google/genai` dependency.

## Performance
- Trimmed index.html by dropping an unused import map; maintained hashed asset outputs for caching.

## Testing and CI
- Added `npm run typecheck`/`npm run lint` alias and wired a new GitHub Actions CI workflow to run install, type check, and build.
- Documented audit/test limitations due to npm registry access issues.
