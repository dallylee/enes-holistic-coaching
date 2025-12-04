# Dead Code and Unused Asset Removals

| Path/Item | Reason for removal | Verification method |
| --- | --- | --- |
| components/AIWellnessCheck.tsx | Unlinked AI form component never rendered in the app | `rg` showed only the definition reference |
| components/Philosophy.tsx | Legacy section duplicating Meet Enes content and unused | No imports in App or other modules |
| components/Services.tsx | Services grid unused in current layout | `rg` confirmed no imports; type definitions pruned accordingly |
| components/WhyTerra.tsx | Old section unused in routing | `rg` confirmed no references |
| services/geminiService.ts | API client only consumed by removed AI component | `rg` confirmed zero consumers |
| src/assets/logo.png | Duplicate logo image not referenced after auditing assets | Project-wide search for filename |
| public/images/hero-coaching.jpg | Duplicate of bundled hero image; unused by code | Project-wide search for path |
| public/images/meet-enes.png | Unused duplicate portrait asset | Project-wide search for path |
| images/hero-coaching.jpg | Unused duplicate asset outside src/public trees | Project-wide search for path |
| package.json (@google/genai dependency) | Dependency only used by removed Gemini service; removing reduces install footprint | Dependency graph review after deleting service module |
