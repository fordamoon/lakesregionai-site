# lakesregionai.com — website

Static site. No build step: open `index.html` or serve the folder.

## Files
- `index.html`, `what-we-do.html`, `shop-talk.html`, `about.html`, `contact.html` — one real URL per page
- `*.js` — page sections (JSX, transpiled in the browser by Babel)
- `ds-bundle.js` — compiled Lakes Region AI design system components
- `styles.css` — design tokens
- SVG marks and `owl-mark.jpg` sit at the root — the site is deliberately FLAT (no subfolders) because GitHub's drag-and-drop uploader silently flattens directory trees. Keep it that way unless you're using git properly.

## Pages
`index.html`, `what-we-do.html`, `shop-talk.html`, `about.html`, `contact.html`. Flat filenames, not folders.

## Deployment-only changes
Two things in this folder differ from the design system on purpose:
- `styles.css` ends with a **responsive layer**: token overrides plus `!important` rules that stack the multi-column grids under 900px. The component library is authored for 1280px artboards with inline grid styles, so CSS has to win with `!important`.
- `ds-bundle.js` is a copy of the compiled library. If you re-copy it from the design system, re-apply nothing — the `hrefs` prop on NavBar now lives upstream too.

## Publish on GitHub Pages
1. Create a repo (suggested: `lakes-region-ai-site`).
2. Commit the **contents of this folder** to the repo root on `main`.
3. Repo → Settings → Pages → Source: *Deploy from a branch*, Branch: `main`, Folder: `/ (root)`. Save.
4. Live at `https://<user>.github.io/<repo>/` in ~1 minute.

## Custom domain
Settings → Pages → Custom domain, enter the domain, then at your registrar:
- apex (`lakesregionai.com`): four A records → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www`: CNAME → `<user>.github.io`

Tick **Enforce HTTPS** once the cert issues.

## Updating content
Edit the `.js` file for the section and commit. No build, no npm.

## Known tradeoffs
- JSX is transpiled in the browser. Crawlers and social scrapers get a static snapshot baked into `#root` by `tools/prerender.py` — **re-run it after editing any `.js` section or `.html` shell**, then commit. React re-renders over the snapshot on load.
- The contact form posts to FormSubmit (`contact.js`), which emails each lead to matt@lakesregionai.com (forwarded to Gmail). The endpoint key is tied to that address; if the address changes, re-activate at formsubmit.co.
- Photography is still placeholder blocks.
- Nav and footer links are real anchors (cmd-click and "copy link address" work).
