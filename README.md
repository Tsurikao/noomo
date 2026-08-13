# NOOMO

Full-cycle product studio for B2B companies and startups — design, AI integration and engineering under one roof, from first prototype to shipped code.

## About

NOOMO ("move forward" in Ukrainian) builds MVPs in 14 days, integrates AI into existing products in 5 days, and ships landing pages/websites in 48 hours. Payments run through [FactorFly](https://factorfly.com), covering Danish tax compliance for both sides.

## Site structure

```
index.html          — the entire site (single-file build)
support.js           — runtime script (required, do not remove)
logo-noomo.svg       — NOOMO wordmark
avatar-olga.png      — team photo
*.png / *.jpg        — case study screenshots (Mintra, Poshuk, Gym App, Swiss Insurance, Social Game)
```

All asset paths in `index.html` are relative to the repo root (e.g. `src="logo-noomo.svg"`) — no build step required.

## Features

- Trilingual: English / Dansk / Українська, switchable from the header dropdown
- Responsive header with mobile hamburger menu
- Animated stat counters, magnetic-text headings, ambient background effects
- "How We Work" process section with a 4-step flow and FactorFly payment integration
- Four B2B case studies (Mintra, Poshuk, Gym App, Swiss Insurance, Social Game)

## Deploy to GitHub Pages

1. Push all files (including images) to the repo root, keeping their current relative paths.
2. In repo Settings → Pages → Source, choose the `main` branch, root folder.
3. Site goes live at `https://<username>.github.io/<repo>/`.

Contact: [LinkedIn](https://www.linkedin.com/in/olga-tsurika/) · [Instagram](https://www.instagram.com/noomo_labs)
