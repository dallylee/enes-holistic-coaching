# Static Analysis

## TypeScript
- `npm run typecheck` passed without errors after updating `tsconfig.json` to include project files and asset module declarations.

## Linting
- ESLint is not configured. Attempts to install `eslint`, `@typescript-eslint/*`, and React lint plugins failed because the npm registry returned 403 responses in this environment.
- Used `npm run typecheck` (alias for `tsc --noEmit`) as the lint gate in CI until lint tooling can be installed.

## Outstanding items
- Formal ESLint setup remains outstanding pending registry access; recommend adding when npm registry access is available.
