# Testing Suggestions

Because no test runner is currently configured and npm registry access is blocked, add tests once tooling can be installed:
- Introduce Vitest + React Testing Library to render the homepage and assert key content (hero heading, “Free Consultation” CTA, navbar links).
- Add a unit test for the navigation helper in `utils/navigation.ts` to confirm base path detection and hash handling.
- Include a simple contact form submission test that verifies required fields and submission state toggling.
