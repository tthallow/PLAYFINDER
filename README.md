# PLAYFINDER 🎮

A dark, mobile-friendly Roblox game discovery site built with React + Vite. The starter catalog is editorially curated and includes search, filters, favorites, game detail panels, and side-by-side comparison.

## Run it locally

1. Install [Node.js](https://nodejs.org/) (Node 20.19+ or 22.12+ recommended for current Vite releases).
2. Open a terminal in this folder.
3. Install packages:

   ```bash
   npm install
   ```

4. Start the local dev server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in your terminal (usually `http://localhost:5173`).

To check the production build locally:

```bash
npm run build
npm run preview
```

## Publish with GitHub Pages

1. Create a new GitHub repository. `PLAYFINDER` is a good repository name, but the deployment config detects the actual repository name automatically.
2. Upload the **contents** of this folder to the repository's `main` branch. Make sure `.github/workflows/deploy.yml` is included.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for the `Deploy PLAYFINDER to GitHub Pages` workflow to finish successfully.
6. Your site URL will appear in the workflow's deployment environment and under **Settings → Pages**.

Every push to `main` will trigger a fresh build and deployment.

## What's included

- Curated starter catalog in `src/data/games.js`
- Search across game names, creators, genres, descriptions, and tags
- Genre, play-style, difficulty, and top-pick filters
- Recommended, score, hidden-gem, and alphabetical sorting
- Favorites saved in this browser with `localStorage` (no account required)
- Compare up to three games side by side
- Random game picker
- Responsive layout, motion effects, and reduced-motion support
- Best-effort Roblox game icon lookup via the public Roblox thumbnails endpoint, with designed fallbacks if the request is unavailable
- GitHub Actions deployment workflow

## Editing the catalog

Open `src/data/games.js` and add or edit objects in the `games` array. Each entry uses:

- `id`: unique internal key
- `name`, `creator`, `placeId`: display info and Roblox game URL ID
- `genres`, `modes`, `difficulty`: used by filters and comparison
- `score`: provisional Playfinder editorial score from 0–100
- `badge`, `accent`, `icon`: visual identity
- `description`, `why`, `tags`, `goodFor`: the game detail content

**Important:** Scores and descriptions in this starter catalog are editorial starter content. They are not official Roblox ratings, verified player counts, or an automated quality verdict. Review each pick yourself and update the list as you test games.

## Notes about live Roblox data

The site makes a browser-side request to Roblox's public thumbnail endpoint to load game icons. Since this is a static GitHub Pages site, there is no private server or API key. Browser access to third-party endpoints can be restricted by CORS, rate limits, network conditions, or future API changes; the UI falls back to generated artwork and the rest of the site remains usable. The starter version does **not** claim to display live player counts or official like percentages.

If you later want reliable live metadata or scheduled catalog updates, add a small serverless proxy/API (for example, a Cloudflare Worker) rather than putting any private credentials in browser code.

## Tech

- React
- Vite
- Lucide React icons
- GitHub Pages + GitHub Actions
