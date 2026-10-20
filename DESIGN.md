# SCULP / The SCULP Edit V2

Date: 2026-10-20, Toronto. New user authorization: visual direction, copy and customer flow may change substantially; dark styling is optional. V1 baseline 2c58790; production main remains91e5619. No production overwrite, backend/schema/auth/key changes or real test submissions.

## Brief and industry reading

SCULP is a Toronto/Markham beauty studio, with eight artists spanning editorial bridal, New Chinese Style, Korean-inspired freshness, classic refinement and defined soft glam. Clients choose an aesthetic and a person before a service slot. The business facts and original work in the repository are authoritative; the new site makes those differences useful instead of presenting another luxury adjective.

Read the official Fancy Face home/services and Bridal Beauty Toronto service/portfolio pages (20 October2026). These show that service access, actual work and a reassuring enquiry are category basics. SCULP's available differentiator is its artists' genuinely different visual traditions and its existing editorial work. This is an inference from that source review, not a measured conversion claim. Sources: https://www.fancyface.ca/ , https://www.fancyface.ca/services/ , https://bridalbeauty.ca/makeup-artist-toronto/ . No competitor copy or assets are reused.

## Three different concept territories

| Territory | Anchor | Signature / shared frame | Originality / fit / feasibility / portability |
|---|---|---|---|
| Artist's working material | Real choices in eye line, colour, finish and hair silhouette across SCULP's actual work | A beauty edit: inspect a real look, pick the detail you respond to and carry it into an enquiry | 5 /5 /5 /2 |
| Collective and culture | Eight artists with documented New Chinese, Korean-inspired, Western/Thai and editorial approaches | An atlas of individual artists with styles as entry points | 4 /5 /5 /3 |
| Place | Private Markham studio, real lounge/vanity/consultation rooms | A virtual appointment moving from arrival to mirror to the final look | 4 /4 /3 /3 |

Chosen: the artist's edit. It turns the portfolio into a useful conversation rather than a passive image wall, with real visual analysis that can improve the enquiry brief. The collective supports it rather than becoming a second metaphor.

## Concept card

Idea: Help you notice the beauty choices that feel like you, then bring them to the right conversation.
Metaphor: A personal beauty editor's working selection.
Signature: A personal edit assembled from three real photographic fragments: eyes/colour, hair/silhouette and finish/balance.27 possible combinations carry their exact crops and original artist/photo sources into the native studio brief. Complete-look studies and every original gallery photograph remain independently selectable.
Emotion: Clear-eyed confidence, personal attention and an unexpected fashion voice.
Motion verb: Frame, focus, carry.
Screenshot: A cobalt SCULP masthead and portrait, then a cobalt study spread where the visible detail selected becomes part of the enquiry.

## System and compositions

Paper#f5f6f0, ink#202720, secondary#515c50, blue#3044ac, pale#e6e9dc, line#c5ccc0. This is a cool light identity with a deliberate saturated brand field, not the cream/terracotta editorial default. Natural photography supplies every other colour.

Instrument Sans400-700 for active display/body/UI; Bodoni Moda400 only for SCULP masthead and a measured editorial contrast. Existing licensed self-hosted WOFF2, two preloads, no external font chain. Display tracking-.045em to-.072em; body16-19px/1.6; UI12-14px. Square frames, varied whitespace, original-ratio artist photographs.

| Section / page | Composition and purpose |
|---|---|
| Home opening | Oversized SCULP as image; offset portrait crosses the wordmark, leaving the face clear; plain service/location and two choices before imagery on phone |
| Opening thought | Small left proposition with a large offset statement, a short explanation rather than repeated brand adjectives |
| Beauty Edit | Cobalt field, paper three-fragment composition and three native radio groups; choose eyes, hair and finish, then carry the exact references into the enquiry. Complete-look studies unfold on request. |
| Services | Four meaningful occasion rows with direct service links |
| Artists | Actual portraits and differentiated specialties; no fabricated matching score |
| Founder | Smaller portrait in a pale field with real fashion/destination experience |
| Client voices | One lead pull quote and two supporting true source testimonials |
| Visit | Wide real studio photograph, address, parking and an arrival link |
| Finale / Footer | Large direct invitation, contact details and a cobalt SCULP sign-off |
| Portfolio | Compact introduction, three substantial visual studies, then one artist directory; no duplicated Portfolio/Artist portfolios headings |
| Artist | Actual name/specialty/role, complete original gallery in original order, native full-image dialog, specific enquiry link |
| Study | A question about the photograph, an observable visual idea/effect, detailed reading, what to discuss for yourself; not a fabricated client case |
| Bridal | Wedding portrait and direct service entry; two native comparison tables preserve six plans and18 artist-tier prices, with descriptions and an enquiry link for every plan; clear payment/availability notes |
| Book | Short two-column introduction, studio brief beside a two-part native form; phone shows fields before the extended brief |
| 404 | The same paper/cobalt language, a usable way home, true404status |

No loader, WebGL, particle field, fake before/after, face retouching, AI-generated client imagery, follower cursor or scroll takeover. Stillness at rest is intentional: people should be able to study real makeup and hair without movement. The signature responds to deliberate selection rather than drifting for decoration. No accessory added solely to satisfy idle-motion detection.

## Content provenance

Source biographies and full image arrays remain authoritative. The three study images are explicitly attributed in the old gallery: Angelina01, Mira04, Yuki11. Descriptions are observations of visible eye line, colour and hair, never claims about an unknown client's brief, outcome, product or event. No fictitious award/client/result. Curation notes and contact sheets are in QA evidence, not the customer interface. Full original artist portfolios, prices, business policies and real testimonials are retained.

## Architecture and intentional exceptions

A small Node-only build reads existing content fragments and generates19 real static HTML pages. No framework migration or runtime dependency. Existing hash URLs redirect to their equivalent real paths and service/section references; server output now contains one H1 and route-specific metadata instead of nine hidden views. Relative base paths support both GitHub subpaths and the private preview root. Generated files are committed so the existing Pages static publication needs no new build service.

The primary home canonical stays sculpstudio.ca. New inner pages self-canonicalize to the existing Afterdark hosting path so their URLs are real on release; original business URL in JSON-LD stays sculpstudio.ca. Review the final canonical domain if this design later replaces the primary site, rather than launching both as competing primary sites.

The existing lead/email contract is extracted, with only native success-page navigation and reduced-motion-aware error scroll changed. API endpoints, CC, validation, attribution, idempotent retry and confirmed-success conversion are retained. Analytics uses actual route/path and no longer creates a second page view on the form event. UI preference storage contains a look/detail only, not contact information. Backend CORS is not expanded for previews.

CSS transitions and native cross-document View Transitions fit this static site; the user's permission to use mature lightweight tools overrides the skill's default GSAP/Lenis dependencies. Native dialog handles photo focus/Escape; native fields retain required/date/email semantics. Reduced motion removes automatic animation and smooth scrolling, keeping deliberate detail inspection available.

## Quality and release

Two complete browser-matrix passes at1440/768/390/375, original /jury shoot/audit plus form/gallery/selection/legacy-link/metadata checks, Lighthouse and fresh independent blind critics. Critics receive rendered evidence and measurements only, no code/intent/old scores. Fix their high-impact evidence, never negotiate a score upward. Keep every raw pass and measurement caveat.

Use only the existing private preview Site. Keep production main untouched. Ship via a draft PR and report actual independent scores and remaining limits. Roll back a future merge through GitHub revert or restore91e5619, no database work.

## Final implementation refinements

All142 original gallery photographs are now active enquiry references, with the actual artist/index/full-image URL carried into the same native form. Artist openings show their actual portrait, specialty and a clear instruction for choosing a reference. The three editorial studies offer independently keepable detail plates; photograph observations remain distinct from documented client facts. Bridal additionally contextualizes the existing Toronto bride's actual feedback as moment/response/reflection, without assigning a photograph or inventing a client name.

171 used photographs have420/720px WebP display copies; original links/order remain. Nearby photographs are decoded during idle time after first-screen load. Scroll analytics cache height on load/resize/ResizeObserver rather than reading document height each frame. Real cold/warm frame samples are retained, including variance, rather than promised as field device behavior.

The final artist edits follow the visible work: textured skin/hair, controlled profiles, colour balance and a wider hair silhouette. Numbered photographic locators select the corresponding close reading, which can be carried with the exact original photograph into the brief. Static detail crops replace oversized live crop surfaces. Civil Ceremony facts are transcribed from the original service card into readable HTML. Original photographs are never retouched.


## Personal composition and comparison refinement

The three-part edit makes the original photographic observations useful together, rather than only offering three finished looks. The combined object is expressly a conversation reference, never an AI-rendered prediction of someone’s final appearance. Each fragment keeps its original photograph, artist and observational caption. Three groups of three actual details produce27 choices without inventing new client imagery. Session-only reference storage is clearable; selecting one existing photo or complete direction explicitly replaces the combined edit.

Native semantic pricing tables replace six long standalone cards. Rows compare the same artist tiers; columns preserve each plan’s exact title, starting price, duration,18 tier prices and complete description. The mobile tables fit375px without horizontal scrolling and keep each plan associated with its original enquiry action. Mobile spacing is shortened while full team portraits are retained.
