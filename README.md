# Night's Catch

One-page site for Night's Catch, a 4-star fisherman's cottage in Porthleven, Cornwall.

## Run locally

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## GitHub Pages

This repo is set up for a **custom domain** at `https://nightscatch.co.uk/`. Canonical URLs, Open Graph tags, `robots.txt`, `sitemap.xml`, and `llms.txt` all use that host.

1. Push this repo to GitHub.
2. In the repo, open **Settings → Pages** and publish from the branch that contains `index.html` (usually `main`, `/` root).
3. Add the custom domain `nightscatch.co.uk` (and `www` if you use it) and enable HTTPS.
4. Point DNS at GitHub Pages. Do not publish as `username.github.io/nights-catch/` without updating the absolute URLs first — `robots.txt` and the sitemap must live at the domain root.

After it is live, submit `https://nightscatch.co.uk/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).
