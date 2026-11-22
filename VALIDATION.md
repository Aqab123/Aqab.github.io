# Redesign validation — November 22, 2026

- `python3 scripts/build.py` generates the full static page with 17 Scholar-matched records.
- `node --check script.js` and `git diff --check` pass.
- Chromium verified the white background, real Scholar portrait, removal of the separate animation section, 13 journal / 3 conference / 1 preprint filters, title and year search, and no-result state.
- Research GIF autoplay, pause, resume, and reduced-motion fallback passed.
- Responsive checks passed at 320, 390, 768, and 1440 pixels; no horizontal page overflow. Large scientific figures have their own horizontal scrolling area on phones.
- Mobile navigation, CV PDF, HTML CV, image paths, and browser runtime checks passed.
- Existing research GIFs were not edited. Portrait and poster provenance is recorded in ASSET_PROVENANCE.md.
