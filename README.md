# PLAYFINDER 🎮

A no-account Roblox game finder with a growing hand-picked catalogue, useful filters, favourites, game comparisons and Roblox game artwork.

**Live app:** https://tthallow.github.io/PLAYFINDER/

## The list
The current catalogue has 70 selected games across horror, RPG, action, roleplay, strategy, shooters, survival, obbies, simulators, tycoons and social games. Picks focus on gameplay variety, replay value, originality and whether a game is worth recommending — not just how many people are online.

This is a growing shortlist, not a claim that hundreds of unreviewed games are all great. New picks should be added after checking the actual experience and its Roblox place ID.

## Features
- Search by game name, genre or keywords
- Filter by genre, play style and difficulty
- Sort by Playfinder's editorial score
- Save favourites locally; no account required
- Compare up to three games
- Quick game details and direct Roblox links
- Roblox game-icon thumbnails with built-in fallback artwork
- Installable PWA with offline app-shell caching

## Install
- **Windows / macOS:** Open the live app in Chrome or Edge and use the install icon in the address bar or the Install app button.
- **Android:** Open in Chrome → menu → Install app / Add to Home screen.
- **iPhone / iPad:** Open in Safari → Share → Add to Home Screen.

This is a Progressive Web App, not a native Windows .exe or Android .apk.

## Run locally
Serve this folder from localhost (for example, `python -m http.server 8000`) and open `http://localhost:8000`. Opening `index.html` as a file will not enable service workers.

## Scores and data
Scores are Playfinder's editorial picks, not official Roblox ratings. Thumbnails are requested from Roblox's public thumbnail service and may be unavailable for a game; the card falls back to its gradient and emoji. Some Roblox public endpoints are not documented as stable and may change.

PLAYFINDER is an independent fan project and is not affiliated with Roblox Corporation.
