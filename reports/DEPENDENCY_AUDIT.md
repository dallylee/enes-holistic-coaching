# Dependency Audit

## Audit results
- `npm audit --audit-level=high` failed because the npm advisory endpoint returned HTTP 403 in this environment.

## Actions taken
- Removed unused `@google/genai` dependency along with its unused service module to slim the install surface.

## Follow-up
- Re-run `npm audit` when registry access is available to confirm no remaining vulnerabilities.
