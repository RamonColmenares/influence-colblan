# Development and deployment

The site is static: `public/index.html` contains the page, `public/styles.css` its styles, and `public/app.js` its behavior. Visual assets are in `public/assets/`. `robots.txt` and `sitemap.xml` refer to the public domain.

To preview locally, run `python3 -m http.server 8000 --directory public` from the repository root and visit `http://localhost:8000/`.

## Recorded deployment

Existing local records identify Cloudflare Workers Static Assets as the provider, `colblan-influence` as the Worker name, and `https://influence.colblan.com/` as the public domain. The recorded source directory was `v2`, copied here as `public/`.

This repository does not include deployment configuration or an automatic connection to Cloudflare. Before publishing changes, confirm the current Cloudflare configuration and required permissions. Do not store credentials or private account information in the repository.

The original files include `public/_headers`; verify that the chosen deployment method applies those headers as expected.
