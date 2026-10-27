# Get Hub

A responsive, dark modern gaming discovery website built with plain HTML, CSS, and JavaScript. It is designed to be hosted free with GitHub Pages.

## Files
- `index.html` — page structure and example game cards
- `style.css` — responsive styling, dark neon theme, animations
- `script.js` — game search, genre filters, mobile menu, and details modal

## Run locally
Open `index.html` in a modern browser.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository named `get-hub`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root (not inside another folder).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait a minute or two. Your site should be available at `https://YOUR-USERNAME.github.io/get-hub/`.

If your repository is named `YOUR-USERNAME.github.io`, the URL is instead `https://YOUR-USERNAME.github.io/`.

## Customize games
Each game card in `index.html` has `data-title`, `data-genre`, and `data-description` attributes. Add or edit cards by copying an existing `<article class="game-card">...</article>` block. Supported filter categories in this starter are `Open World`, `Survival`, and `Action` (plus `All`). To add another category, add a filter button and set the matching `data-genre` on cards.

The card art is made from CSS gradients and symbols, so no external game images are required. Google Fonts are optional; if unavailable, the site falls back to system sans-serif fonts.

## Notes
This is a static personal project. It does not include accounts, a database, checkout, or game downloads. Only link to official game pages or content you have permission to use.


## Play the first original game

`neon-run.html` is a self-contained HTML5 platformer. It works on GitHub Pages without a build step. Upload it to the same repository root as `index.html`, `style.css`, and `script.js`. The homepage includes a Neon Run card linking to it.

Controls: A/D or arrow keys to move, Space/Up/W to jump. On touch screens, use the on-screen left/right/jump buttons.
