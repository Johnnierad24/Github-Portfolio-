# John Gachara Njenga – Portfolio

Static, single-page portfolio showcasing projects, skills, and experience. Built with HTML/CSS/JS—no build step required.

## Run locally

1. Open `index.html` in your browser (double-click or `python -m http.server 8000` then visit `http://localhost:8000`).
2. Edit `styles.css` for styling tweaks and `index.html` to change content.
3. Replace `portrait.png` with your own photo (same filename) if desired.
4. Drop your PDF resume as `cv.pdf` in the project root to keep the download buttons working.

## Deploy

- Vercel: `vercel deploy --prebuilt` (or use the dashboard) targeting the repo root; framework = "Other".
- Netlify: drag-and-drop the folder or set build command empty and publish directory `.`.
- GitHub Pages: enable Pages → Source: `main` branch, folder `/` (root). Static assets require no build.

## Content

- Projects and experience pulled from CV.
- Contact links wired to email/phone/GitHub.
