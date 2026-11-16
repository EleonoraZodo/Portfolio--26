# Eleonora Zodo — Portfolio

React + Material UI (Vite) portfolio, ready for GitHub Pages.

## Pages
- **Home** – photo, "Ciao! I'm Nora", three circle buttons (same layout as the old Wix site)
- **My Story** – `#/story`
- **Work Projects** – `#/projects`, with the AIT Vienna case study at `#/projects/polishing-5-0`
- **CV** – navbar dropdown: download PDF / open in browser

## Edit content
All text lives in [`src/data/content.js`](src/data/content.js). Images are in `public/images/`.

**Add your CV:** save it as `public/cv/Eleonora_Zodo_CV.pdf`.

## Run locally
```bash
npm install
npm run dev
```

## Publish on GitHub Pages
1. Create a repo on GitHub (e.g. `portfolio`) and push this folder to its `main` branch.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
   The site will be at `https://<your-username>.github.io/<repo>/`.

Alternative (no Actions): `npm run deploy` pushes `dist/` to a `gh-pages` branch;
then set **Settings → Pages → Source: Deploy from a branch → gh-pages**.

The build uses relative paths and hash routing, so it works under any repo name.
