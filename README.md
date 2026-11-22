# Aqab Zahoor — Academic Research Portfolio

A white-background academic portfolio for the existing GitHub Pages site at https://aqab123.github.io/Aqab.github.io/.

## Preview and build

No Node.js installation or dependency download is required for this existing static site.

```sh
python3 scripts/build.py
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. The build generates `index.html` from `page.template.html`, `data/profile.json`, and `data/publications.json`. Run it after changing those files; commit the generated `index.html` too. Changes to `styles.css` and `script.js` are used directly.

## Photo

`assets/profile.jpg` is the portrait from the exact Google Scholar account supplied by Aqab. It is unchanged from the downloaded public profile image. To replace it, add a higher-resolution portrait and update `portrait` in `data/profile.json`, then rebuild. The current source is 256 × 256 pixels. CSS displays it as a circular, cropped portrait; the source file is not retouched.

## Publications

The site lists 17 records: 13 journal articles, 3 conference papers, and 1 MS&T 2026 conference presentation. The peer-reviewed journal entries and older conference papers were matched against the supplied academic CV and Google Scholar profile on November 22, 2026. No preprint is displayed. The MS&T 2026 oral presentation is classified separately from journal articles. The full bibliography is generated from `data/publications.json`, with type filters and searchable citations in `script.js`.

## Research GIFs

The existing EBSD and RVE GIFs are embedded in the research descriptions. The separate animation section and unused gallery placeholders have been removed. The GIFs loop automatically when near the viewport. A small pause button switches to an unchanged first-frame poster. Reduced-motion users initially see that poster and may explicitly start playback. Off-screen GIFs revert to posters to reduce work. The original GIFs, data labels, color scales, and legends are unchanged. On narrow screens, the figures can scroll horizontally to keep the scientific text legible.

`assets/research/*-poster.png` are first-frame extractions from those original GIFs, with no quantitative changes. They do not assert a new publication attribution or physical playback time.

## GitHub Pages

This repository uses static root files, so retain the existing Pages configuration. With branch deployment, select Settings → Pages → Deploy from a branch → main / root. All asset links are relative and support `/Aqab.github.io/`.

To publish the redesign, merge the redesign branch into `main` or upload the reviewed changed files. Keep the existing GIFs and `Aqab_Zahoor_CV.pdf`. The legacy `cv.html` and resume downloads remain available. No private Sites upload is involved.

## Contact details

University email and LinkedIn URL are listed in `data/profile.json` and displayed in `page.template.html`. To edit the profile or publications, run `python3 scripts/build.py` and commit the regenerated `index.html`.

