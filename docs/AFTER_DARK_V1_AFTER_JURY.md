# SCULP After Dark: independent jury-style score

Estimate, not affiliated with Awwwards. Independent blind critic, 20 October 2026. Reviewed rendered screenshots and measured QA only: no application source, CSS, design notes, earlier scores, other reviews, or baseline results.

**The idea, as the critic read it:** A refined Toronto beauty collective presents bridal and occasion styling through individual artists, real work, and a considered, personal approach to beauty.

**Strict critic overall: 7.68 / 10, rounded to 7.7.**

Weighted overall = `0.4 × 7.8 + 0.3 × 8.0 + 0.2 × 7.0 + 0.1 × 7.6 = 7.68`.

This is a polished, usable site with credible photography and strong measured implementation. The rendered evidence does **not** earn an 8 overall on the strict rubric. Its remaining ceiling is primarily distinctive composition and differentiated storytelling. No calibrated jury offset was supplied to this blind critic; this is not an official award prediction.

## Main criteria

| Criterion | Score | Evidence and judgment |
|---|---:|---|
| Design (40%) | **7.8** | `after-interaction-polish-matrix/1440-home.png`, `after-verified-matrix/1440-bridal.png`, `1440-about.png`: controlled cream-on-charcoal palette, fine rules, consistent display/sans hierarchy, generous gutters and handsome photography. `final-proof/mobile-footer.png` is composed rather than abandoned. Final scroll-cue underline/arrow feedback is visible in `final-links/hero-link-rest.png` and `hero-link-hover.png`. Below 8 because oversized serif introductions become the repeated answer on Team, About, Portfolio and Book. Portfolio repeats “Portfolio” and “Artist portfolios”; at 768px its second heading and description are scattered across a large empty area (`768-portfolio.png`). The branded 404 is functional but uses a different sans-led display treatment (`final-proof/branded-404.png`). |
| Usability (30%) | **8.0** | Active desktop navigation and a persistent phone Enquire action are clear; form labels, sectional guidance and a specific success expectation are readable (`after-verified-matrix/768-book.png`, `390-enquiry-sent.png`). `interaction-results.json` records 14 passing interaction checks, including validation, retained data after failure, retry behavior, service prefill and mobile focus restoration. `final-proof/proof.json` shows 22 visible keyboard stops. Final primary hover and target issues are resolved. On `after-interaction-polish-matrix/375-home.png`, however, the generic headline and tall portrait consume the first viewport, putting the service explanation and page-level choices below it. The persistent Enquire action mitigates this. |
| Creativity (20%) | **7.0** | The artist-led portfolio and reversible makeup detail study fit the subject (`1440-portfolio.png`, `detail-rest.png`, `detail-inspected.png`); the service chooser is useful (`after-shots/home/m-03-scroll.png`). A continuous masked route reveal is evidenced (`final-proof/d-90-transition.png`). The wider visual system remains familiar editorial beauty-site language: large serif statements, rectangular photography, fine rules and broad “considered beauty” copy. The detail study is relevant but does not yet drive the wider composition or become an unmistakable signature. |
| Content (10%) | **7.6** | Named artists, varied client/editorial photography, a founder biography with specific experience (`768-team.png`), concrete trial durations (`final-proof/desktop-pricing.png`), and a 24-hour reply commitment supply real substance. `after-shots/home/d-04-scroll.png` contains specific client experiences, though attribution is only client categories. The selected-work introduction for Michelle (`1440-artist-portfolios-artist-michelle.png`) could describe almost any artist; the visible gallery introductions explain little about the distinctive choices behind the looks. |

## Developer areas

These separate scores do not enter the weighted overall.

| Area | Score | Evidence and limits |
|---|---:|---|
| Semantics / SEO | **7.5** | All 40 original matrix views report one rendered H1 and sensible route titles. `meta-results.json` verifies ten rendered titles/descriptions/canonicals, a real missing-path 404, and 200 responses for robots/sitemap. Final Lighthouse SEO is 100. The static audit reports nine H1s because it inventories hidden route content, not nine visible headings. The existing hash architecture gives every view the same root canonical; route-specific client metadata does not establish separately indexable pages. That architectural limitation and the static heading-order warning keep this below 8. |
| Animations / transitions | **8.0** | `final-proof/d-90-transition.png` through `d-92-arrival.png` show a continuous masked handover. Original h-01/h-02 pairs change whole button fills, and h-03/h-04 provide real button treatments. The sole unchanged primary scroll cue is now visibly corrected by `final-links/hero-link-*`; measured arrow translation changes from none to `0px 4px` with an underline. No currently demonstrated primary hover miss remains. Stills demonstrate continuity, not the subjective smoothness of the complete movement. |
| Accessibility | **8.2** | Zero axe findings across the 40-view matrix and eight fresh Home/Book views. A visibly outlined skip link is the first keyboard stop. Final proof records 22 visible focus stops and none outside the viewport. All ten reduced-motion records have zero infinite animations and zero hidden content; interaction QA verifies no running animation or smooth scroll. Menu trapping/Escape/restored focus and skip-link behavior pass. Final all-category Lighthouse Accessibility is 100, with the label/name check passing. These are not a screen-reader audit or WCAG certification. |
| WPO | **8.4** | Performance-only Lighthouse gives 99 twice: LCP 2.156s / 2.107s, CLS 0 / 0, TBT 8ms / 0ms, and 347,842 bytes transferred. The earlier throttled shoot gives mobile LCP 2.376s, CLS 0 and 61fps lab scroll; no loader. The latest all-category run gives only 71 performance and TBT 1,899.5ms, with two `_lighthouse-eval.js` tasks totalling 1,635ms. The evidence supports a likely audit-instrumentation contribution, but that run is retained and disclosed. These are local lab home-page measurements, not field CWV or every route. |
| Responsive design | **8.0** | Ten route/section states at 1440/768/390/375px show no horizontal overflow. Phone controls, bridal CTAs and footer remain readable; bridal gutters are verified ≥24px. `final-links/report.json` measures the booking email at 28px, and eight fresh Home/Book views show zero small targets, overflow or axe findings. Sixteen additional artist views show no overflow. The 768px Portfolio heading/description arrangement is still less resolved than desktop and phone, preventing a higher score. |
| Markup / metadata | **8.0** | Final Lighthouse passes names, alt text, viewport, title, description and canonical checks. `meta-results.json` verifies favicon 200, OG image 200 with `image/webp`, and the real 404 title/status. Ten rendered views have descriptions and canonicals; no application console errors are recorded. The social image loads, though actual social-platform card rendering and per-view external indexing are not established. |

## Remaining improvements, most score first

1. **[Design / Usability] Remove the redundant Portfolio introduction and resolve its tablet layout.** In `390-portfolio.png`, the title and then “Artist portfolios” repeat the same message before the first artist cards at about y558. At 768px, the second title floats right while its explanatory sentence occupies another large area. Keep one title and one short explanation, align both with the artist grid, and move the cards upward. This is the clearest concrete composition improvement in the current evidence.
2. **[Creativity / Content] Make existing artist and detail content more specific.** Michelle's introduction promises only refined, balanced styling; Mira's lists broad categories. State each artist's actual specialty and add short factual notes explaining a few featured looks. Give the existing “Study the detail” interaction a more prominent editorial role rather than allowing the same large-serif introduction to carry nearly every route. This strengthens the existing concept without adding unrelated effects.
3. **[Usability] Put the home service category and a relevant choice before the tall phone portrait.** `after-interaction-polish-matrix/375-home.png` devotes its first viewport to “Make moments that matter” and photography. A compact “Bridal, beauty & education” descriptor and an Explore Bridal choice near the title would explain the offering before scrolling while retaining the portrait.
4. **[SEO, if separate service-page discovery is a goal] Address the shared hash/canonical architecture.** `meta-results.json` shows all views canonicalize to the root. The current evidence proves readable client metadata and a real 404; it does not prove independent indexing of each service/artist view. Treat a move to independently addressable, server-readable routes as a separate scoped decision, not a release blocker for these bounded fixes.

No release-blocking visual or functional failure was established by the supplied final evidence. The primary scroll cue, booking email target, settled detail capture, and 404/metadata verification are resolved and are **not** outstanding defects.

## Measured evidence

| Measure | Result / source |
|---|---|
| Coverage | 10 route/section states × 4 widths = 40 views; eight fresh Home/Book views; 16 additional artist desktop/phone checks |
| Current axe / overflow | Zero axe issues and zero overflow across all matrix views; final Home/Book matrix also zero small targets |
| Focus | Skip link first; 22 visible stops; none outside viewport; `final-proof/proof.json` |
| Reduced motion | Ten states: infinite animations 0, hidden elements 0; interaction QA verifies no running animation or smooth scroll |
| Final email target | 28px high; `final-links/report.json` |
| Shoot mobile | 4× CPU / slow 4G: LCP 2.376s; CLS 0; load event 2.711s; loader null; settled 5.098s; scroll 61fps, worst frame 17ms |
| Shoot desktop | LCP 228ms; CLS 0; scroll 60fps, worst frame 17ms; idle motion false |
| Final performance-only runs | 99 / 99; LCP 2.156s / 2.107s; CLS 0 / 0; TBT 8ms / 0ms; 347,842 bytes; `after-performance-only.report.json`, `after-performance-repeat.report.json` |
| Final all-category Lighthouse | Performance 71; accessibility / best practices / SEO 100; LCP 2.105s; CLS 0; TBT 1,899.5ms; `_lighthouse-eval.js` long tasks 913ms + 722ms; `after-final-gzip-lighthouse.report.json` |
| Asset evidence | Initial transfer ≈340KiB. Raw audit inventories ≈20,821KB across all route images, not initial network payload. Audit reports JS ≈4KB gzipped |
| Hover | Historical h-05 no-change finding superseded by final rest/hover pair and measured arrow movement/underline. h-01/h-02 are valid whole-fill treatments, not text-only changes |
| Raw audit | 1 FAIL / 3 WARN on one crawled URL: hidden-route H1 inventory, heading-order warning, punctuation heuristic, and full image-inventory weight; final rendered and metadata tests supplement its limits |
| Metadata | Missing-path 404; robots, sitemap, favicon and OG image 200; OG type image/webp; ten rendered titles/descriptions/canonicals; `meta-results.json` |
| Functional QA | 14 checks passed; external posts intercepted, so no actual customer records or emails were created. Event timings 40–56ms are lab samples, not field INP |

Not established by stills and local measurements: motion feel over a full session, sound, real mobile hardware behavior, production CDN/network performance, field INP/CWV, screen-reader completeness, independent indexing of every view, and full content below captured states. This review makes no source-level correctness or deployment claim.
