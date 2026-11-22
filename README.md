# Aqab.github.io

Personal academic website for Aqab Zahoor, a PhD researcher in Aerospace and Ocean Engineering at Virginia Tech.

The site is a static, responsive portfolio for GitHub Pages. It uses relative paths so it works as a project site at `https://aqab123.github.io/Aqab.github.io/`.

## Updating publications

Add one verified publication entry to the `#publications` section in `index.html`. Include author names, title, journal or venue, year, DOI, and a PDF button only after a PDF is supplied. Store publication PDFs in `assets/publications/` and link them with a relative URL such as `assets/publications/article-name.pdf`. Do not add publication details that cannot be verified.

## Adding animations

1. Upload approved GIF or MP4 files to `assets/animations/`.
2. Replace a matching placeholder in the `#animations` section of `index.html`.
3. For MP4, use:
   ```html
   <video controls playsinline preload="metadata">
     <source src="assets/animations/example.mp4" type="video/mp4">
     Your browser does not support HTML5 video.
   </video>
   ```
4. Add a descriptive caption and a download link:
   ```html
   <a class="download-button" href="assets/animations/example.mp4" download>Download MP4</a>
   ```

GIF files can be displayed with an `<img>` element and should include meaningful alternative text. Native MP4 controls and the gallery fullscreen button are handled by `script.js`.

## Adding research images

Upload approved, publication-safe figures to `assets/research/`, then replace a `.research-visual` placeholder with an `<img src="assets/research/filename.png" alt="Descriptive alt text">`.

## Updating the profile photograph

Upload a square professional photograph to `assets/profile.jpg`, then replace the `.portrait` content in `index.html` with:
```html
<img src="assets/profile.jpg" alt="Aqab Zahoor">
```

## Updating the CV

Replace `Aqab_Zahoor_CV.pdf` with the latest CV PDF and keep the filename unchanged, or update every CV link in `index.html` and `cv.html`. The legacy `resume.pdf` copy is retained only for existing bookmarks. Update the HTML CV in `cv.html` to match the PDF.
