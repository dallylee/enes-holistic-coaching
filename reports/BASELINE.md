# Baseline

## Tool versions
- Node.js v22.21.0
- npm 11.4.2 (warning shown for unknown http-proxy env var)
- Vite 6.4.1
- TypeScript 5.8.3

## Commands run
- `npm install`
- `npm run build`
- `npm run preview -- --host 0.0.0.0 --port 4173`

## Build output (baseline)
| File | Size | Notes |
| --- | --- | --- |
| dist/index.html | 1.95 kB (gzip 0.85 kB) | Contains Tailwind CDN bootstrapping |
| dist/assets/index-BK7t79cK.js | 258.80 kB (gzip 77.52 kB) | Main bundle |
| dist/assets/hero-coaching-ChIDGnPb.jpg | 142.65 kB | Hero image |
| dist/assets/enes-logo-Br_lx4P5.png | 168.05 kB | Logo |
| dist/assets/meet-enes-gym-DkBt77Tj.png | 737.77 kB | Meet Enes image |

## Console warnings/errors
- npm printed `Unknown env config "http-proxy"` during install/build/preview.
- No application runtime errors were observed in the preview server logs.

## Screenshot notes
- No screenshots captured during the baseline run.
