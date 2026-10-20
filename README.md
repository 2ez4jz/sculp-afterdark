# SCULP Studio - The SCULP Edit V2

Preview proposal on `design/sculp-editorial-v2`. This branch does not replace the production website until reviewed and merged. Production baseline: `91e561953f719cdc931af65aed74d8801e3c5bf7`; V1 proposal baseline: `2c58790bdfd97aecedf2e543c414a44f3d486304`.

## Build and edit

Use Node 20.11+ and run `npm run build` (or `node scripts/build.mjs`). There are no installed dependencies or runtime framework. Serve the repository as static files with directory index support. The build generates19 complete HTML pages, a sitemap and `src/build-manifest.json`.

Edit reusable source under `src/views/`, the verified artist records in `src/artists.json`, the photograph readings in `src/studies.json`, and the templates in `scripts/build.mjs`. Do not manually edit generated route HTML. CSS and native behavior are in `editorial.css` / `editorial.js`. `enquiry.js` retains the original business submission sequence; `analytics.js` retains the integrations and tracks actual native routes. Old hash URLs are forwarded by `legacy-routes.js`.

Every original portfolio photograph remains available, in its original order, through the full-image links. The display photographs use420/720px WebP copies from the unchanged originals; these are transport optimizations, without colour, shape or beauty retouching. All142 original photographs remain linked and can be selected as enquiry references in the full-photo viewer. Nearby pictures are decoded after the first screen loads; the complete gallery stays lazy-loaded.

The three styling studies and extra artist look notes describe what can be seen in actual photographs. They are not invented client cases, client briefs, product recommendations, credentials or claims about measurable outcomes.

## Deployment and verification

GitHub Pages currently serves the root static files. The home canonical remains the primary SCULP site; the new inner pages are self-canonical under the Afterdark repository URL. Domain ownership/canonical strategy should be reviewed if this proposal replaces the primary site.

The independent account-private preview is separate from SCULP production. It uses the same static files, not a new backend. Its origin is not in the existing enquiry API CORS allowlist. Browser submission tests intercept all POST requests; no test emails or customer records are created. A real end-to-end submission must be checked from the approved production origin during release validation.

Read `DESIGN.md` for the visual and interaction system and `docs/SCULP_EDIT_V2_QUALITY.md` for independent scores, actual browser measurements and release limitations. `WORK_LOG.md` records all changes. Do not merge or overwrite production without the owner's release authorization.
