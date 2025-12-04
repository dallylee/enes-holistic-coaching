# Bundle Analysis

## Size comparison
| Asset | Baseline size | Current size | Notes |
| --- | --- | --- | --- |
| dist/index.html | 1.95 kB (gzip 0.85 kB) | 1.64 kB (gzip 0.75 kB) | Removed unused import map to trim HTML |
| dist/assets/index-*.js | 258.80 kB (gzip 77.52 kB) | 259.24 kB (gzip 77.73 kB) | Minor increase from navigation helper and accessibility props |
| dist/assets/hero-coaching-*.jpg | 142.65 kB | 142.65 kB | unchanged |
| dist/assets/enes-logo-*.png | 168.05 kB | 168.05 kB | unchanged |
| dist/assets/meet-enes-gym-*.png | 737.77 kB | 737.77 kB | unchanged |

## Actions taken
- Removed unused import map and dead dependencies/assets so the HTML payload is smaller and install footprint is lighter.
- Added explicit width/height metadata to large images to improve loading predictability without changing visuals.
- Kept Vite's hashed asset outputs for long-term caching compatibility.

## Tooling notes
- Attempted `vite build --analyze`, but the flag is unsupported in this Vite version; stuck with size diffing from build output logs.
