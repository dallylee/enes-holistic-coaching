# Runtime QA

## Preview checks
- Served production build via `npm run preview` and hit `http://localhost:4173/enes-holistic-coaching/` (HTTP 200 confirmed via curl).
- Verified build HTML delivered expected title/meta and Tailwind bootstrap snippet.

## Navigation and links
- Navbar anchors (`#meet-enes`, `#how-it-works`, `#is-this-4me`, `#client-stories`) all map to matching section IDs in components.
- Client login navigation now reuses the router helper and base path logic; contact button on the client dashboard routes back to the home contact section with the correct hash.

## Assets
- Hashed assets (logo, hero, meet-enes) load from `dist/assets` with no missing references in build logs.
- Added intrinsic dimensions to hero and Meet Enes images to reduce layout shift risk.

## Viewport smoke tests
- CLI-only environment: exercised layout via code review and ensured responsive classes remain intact. No console errors observed in preview logs.

## Outstanding warnings
- npm continues to emit `Unknown env config "http-proxy"` during script runs; environment-specific and not app code related.
