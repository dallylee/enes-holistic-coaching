# Accessibility and SEO Quick Pass

## Findings and fixes
- Added `aria-label` and `aria-expanded` to the mobile menu toggle for better screen reader support.
- Provided intrinsic `width`/`height` on hero and Meet Enes images to help prevent layout shifts.
- Confirmed meaningful `alt` text on key imagery and labels on form controls in Contact.
- Page `<title>` already set to “Enes Holistic Coaching | Personalised Fitness & Nutrition”.

## Limitations / follow-ups
- Automated audits (Lighthouse/axe) were not run because the npm registry blocks installing additional tooling (403 responses). Recommend running a full audit when registry access is available.
- Tailwind is loaded via CDN; consider self-hosting or adding Subresource Integrity if the deployment pipeline allows.
