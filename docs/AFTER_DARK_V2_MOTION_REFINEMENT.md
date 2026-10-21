# SCULP Studio — After Dark V2.0 / Motion Refinement & Visual Alignment

Date: 2026-10-21 (Toronto)  
Status: Baseline audit started; implementation and browser QA NOT completed  
Target branch: `design/after-dark-v2-motion-refinement`

## Strict repository scope
- **Writable:** `2ez4jz/sculp-afterdark` only, on this isolated branch.
- **Read-only reference:** `2ez4jz/sculpstudio` (the production site source).
- Do not merge to or edit production; do not change live enquiries, data, service facts or prices.
- After Dark GitHub Pages currently publishes from its own `main`. This branch is **not deployed** merely by its creation.

## Source-of-truth audit, 2026-10-21
1. Production homepage `index.html` shows `assets/images/garden-bride-hero.webp`, alt `Bride outdoors in a veil holding white calla lilies`, original dimensions 1038×1553, focal point `50% 38%`; layout `.home-hero` is a 42/58 text/image split on desktop.
2. After Dark `src/views/home.html` and generated `index.html` instead show Yuki `artists/yuki/yuki-11.webp` as the hero. This is a verified mismatch.
3. `garden-bride-hero.webp` exists in **both** repositories but Git blob SHAs differ: production `a25c9662662a1ae900a05b94180e82de8e442322` vs After Dark `7a73c840335bf5ea1a0141555770d8c5a1f689e6`. **Do not claim byte-identical hero provenance or switch blindly:** inspect both visual assets, compare dimensions/crops and use the verified production photograph as the canonical reference.
4. Production hero headline is `Make moments that matter.`, CTAs `Explore Bridal` and `View Portfolio`. Current After Dark says `Beauty, composed around you.` and `Compose your edit`; homepage hierarchy and navigation also differ.
5. After Dark is a Node-built static multi-route site; `src/views/` is authoritative, generated route HTML must come from `node scripts/build.mjs`. Core styling and behavior are `editorial.css` / `editorial.js`. `enquiry.js` handles the lead contract and must remain unchanged unless thoroughly verified.

## Implementation requirements / ordered acceptance gates
1. **Visual baseline:** capture production and After Dark pages at 1440, 1280, 768, 390, 375px; compare screenshot/image provenance, section ordering, content relationships, prices, CTAs, desktop/mobile crops. Where production URL fails, reference the production repository and real assets, explicitly flag missing live validation.
2. **Asset lock:** establish each image's actual content and source; hero photograph, focal position and responsive composition must match the production site. Keep all genuine photography and its service/artist association; no stock/AI replacements.
3. **Layout simplification:** restore production homepage hierarchy, navigation, primary service access and editorial spacing. Preserve only demonstrably useful After Dark typography, interaction and brand details. Reconsider prominent three-step Beauty Edit composer; it must not displace familiar services/portfolio or dominate the homepage.
4. **Motion after static alignment:** lightweight Hero opacity and text reveal; navigation underline/backdrop; 12–30px once-only section reveal; restrained hover on portfolio/service cards; no mandatory loader, scroll hijack, heavy 3D/WebGL or intrusive continuous movement. Respect `prefers-reduced-motion` and do not hide critical content before JS runs.
5. **Build:** `node scripts/build.mjs`; confirm all generated routes and immutable business facts, then test enquiry via safe POST interception, not real customer submissions.
6. **QA:** desktop 1440/1280, tablet 768, mobile 390/375; hero framing, photo associations, layout overflow, mobile menus, keyboard and focus, CLS, motion smoothness, reduced-motion, form semantics, page load and route links.
7. **Review:** evaluate Design, Usability, Creativity, Content, Motion and Performance with `/awwwards` + `/jury`, preserving actual evidence and scores. Target ≥8.0, **not yet achieved or scored for this branch**.
8. **Release:** deploy **only** to separate After Dark test URL after verification; never touch `sculpstudio` or its live domain.

## Confirmed current status
Audit only; no visual source files edited, no generated build or browser tests executed, no V2.0 review score, no V2.0 deployment. Prior independent After Dark test result was 7.73/10, which is historical and not a new V2.0 score.
