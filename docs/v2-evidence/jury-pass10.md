# Independent frozen-evidence jury scorecard

The site's idea is to teach visitors how SCULP's artists see beauty through annotated photographs, then let them combine the details they like into a personal reference for an enquiry.

This is an independent simulation using the supplied rubric, not an Awwwards review or award prediction. Every category starts at 6; the evidence below earns the additional points. No calibration offset is applied.

## Evidence actually inspected

I visually inspected **all 491 original image files** in the frozen packet, including every chronological navigation frame and every rest/hover pair. I used labelled review sheets, with long full-page images divided into consecutive vertical panels so their lower sections were also inspected. The review sheets were generated outside the packet; the only packet file written is this scorecard.

| Original image group | Count |
|---|---:|
| matrix | 97 |
| artist-readings | 42 |
| composition | 10 |
| composition-motion | 42 |
| expanded | 8 |
| focus-inventory | 81 |
| fresh-process-performance | 9 |
| interactions | 5 |
| motion | 39 |
| native-cpu-performance | 18 |
| navigation | 12 |
| phone-flows | 14 |
| reduced | 8 |
| reference-bootstrap | 8 |
| release-performance | 9 |
| release-performance-repeat | 9 |
| release-ui | 52 |
| report-figures | 2 |
| selected-states | 24 |
| aborted-fresh-process | 2 |
| **Total** | **491** |

I read `EVIDENCE.txt`, `measured-source.json`, `release-audit.txt`, the static proof, matrix, keyboard route/state inventories, interaction, composition, artist-reading, navigation, phone-flow, reduced-motion, selected-state, hover, reference-bootstrap, Event Timing and performance reports, all eight navigation-sequence reports, all three Lighthouse reports, and the aborted attempt's failure record and full log. I also read the diagnostic provenance; I did not use the pre-change trace as a current-source benchmark. No website, app source, previous scorecard or outside project material was inspected.

The source record identifies frozen commit `b8ce25b6e12d4d12a02ebfe4beb336712d9208cc`. The matrix records 19 routes at four widths, or 76 route/width observations; the image inventory also includes a supplemental matrix image and 20 full-page images. The source note distinguishes the earlier functional-suite commit from the subsequent presentation change and recaptured final-source evidence; I preserve that provenance rather than asserting every test was rerun on one commit.

## Main scores

| Category | Score | Earned evidence and remaining limit |
|---|---:|---|
| Design | **8.0** | The oversized cobalt SCULP wordmark, overlapping portrait and asymmetrical copy make `matrix/1440-home.png` a strong static poster. The cream/cobalt palette, fine rules, sans/serif hierarchy and photographic crops remain coherent in `matrix/390-home.png`, `composition/1440-composer.png`, `artist-readings/1440-elaine-reading.png` and `expanded/390-404.png`. Different artist-reading compositions and the deliberately typeset footer earn the second point beyond a competent system. The inspected `release-ui/home-primary-{rest,hover}.png`, `artist-card-{rest,hover}.png` and `footer-cta-{rest,hover}.png` show considered feedback. It stops short of 9: repeated service/profile scaffolds are familiar editorial design, and continuity between the strongest compositions is not equally crafted. |
| Usability | **7.5** | The service, location, next action and artist routes are clear; phone layouts put the form first and preserve saved references visibly (`matrix/390-book.png`, `reference-bootstrap/390-composition.png`). `composition/report.json` records all 27 combinations carried exactly, removal preserving the user's own note, four-width keyboard checks and preserved retry state. `focus-inventory/report.json` and `states.json` have empty bad-stop arrays; the visible focus/dialog/menu captures support them. This earns more than a basic 7. An 8's consistently smooth, frictionless condition is not established: the completed CPU4x collections retain 33 fps Miranda cold and 31 fps About warm samples, CPU1x also has stalls, and `event-latency/report.json.labMaxObservedInteractionMs` is 280 ms. The composer also visually prioritizes “Bring my edit” while “Next” is secondary before all three categories have been reviewed (`phone-flows/375-first-choice-and-next.png`). |
| Creativity | **7.8** | The annotated features, artist-specific close readings and three-fragment reference sheet turn the studio's “personal eye” into a useful interaction, not just a slogan (`artist-readings/390-yuki-reading.png`, `artist-readings/390-miranda-detail-saved.png`, `composition/390-composer-options.png`, `composition/390-composed-book.png`). The exact carry-through is measured in `composition/report.json.rows[].exactSources` and `allThreeCarried`. That earns a subject-specific idea carried substantially through the site. I withhold 8: the control model remains a familiar selector/save flow, and the original navigation frames do not extend the visual idea into a distinctive continuous transition. |
| Content | **8.0** | The close readings name what can actually be seen: eye line, peach/coral colour, controlled crown, hair texture and accessories (`matrix/390-full-studies-modern-chinese-.png`, `artist-readings/390-emily-reading.png`, `report-figures/mobile-selected-reading.png`). The service material provides durations, all three artist tiers, inclusion disclosures, retainer terms and a direct enquiry path (`matrix/390-full-bridal-.png`; `phone-flows/report.json.rows[].all18PricesVisible`). The studio address, arrival directions and real-looking work are integrated rather than filler (`matrix/390-full-about-.png`). This meets the 8-level combination of voice and substance. The studies mainly analyse a finished photograph; fuller original briefs, constraints and attributed outcomes would add depth. `release-audit.txt` also retains six duplicated-sentence warnings; the phone/desktop alternative presentations explain why these are not automatically six visible repetitions. |

**Exact weighted overall: 7.81 / 10**

`0.4 × 8.0 + 0.3 × 7.5 + 0.2 × 7.8 + 0.1 × 8.0 = 3.20 + 2.25 + 1.56 + 0.80 = 7.81`

This exceeds the rubric's numerical Honorable Mention floor. It is not evidence of an actual award or a daily competitive ranking.

## Developer scores

| Area | Score | Precise evidence |
|---|---:|---|
| Semantics/SEO | **8.0** | `release-audit.txt`: 0 FAIL. `static-proof.json.rows[]`: server HTML has `lang: en`, one h1, one main, no heading skips and canonical values on all 19 routes. `uniqueTitles: 19`, `uniqueDescriptions: 19`, `real404.status: 404`, robots 200 and an 18-URL sitemap excluding the success page meet the supplied artifact-level 8 criteria. Live search indexing is not measured. |
| Animations/Transitions | **6.8** | `release-ui/report.json.hoverTargets` records 25 changed targets, and the pairs show image enlargement, arrow displacement, underline extension or surface treatment rather than text-colour-only swaps. Nevertheless `motion/1440-forward/frame-002.jpg` to `frame-003.jpg` and `composition-motion/390-forward/frame-007.jpg` to `frame-008.jpg` are hard page cuts. Back sequences also contain brief incomplete imagery, such as `motion/1440-back/frame-004.jpg`. A continuous page transition required for 8 is absent, and the retained frame-time outliers prevent a smooth-scroll claim. |
| Accessibility | **8.0** | `matrix/summary.json.views[].a11y` is empty across 76 observations. `focus-inventory/report.json` records 1,294 route focus stops; `focus-inventory/states.json` adds 269 expanded-state stops, with empty bad arrays. `focus-inventory/390-open-menu-3.png`, `390-open-photo-45.png` and `1440-book-step-two-25.png` visibly show focus. The skip link is first; `interactions/report.json.checks` records containment, Escape and restoration. Matrix reduced-motion rows have `running: 0` and `hiddenText: 0`; `reduced/report.json` confirms eight additional complete states. This is strong automated/keyboard evidence, not a screen-reader or physical-device certification. |
| WPO | **7.0** | The completed CPU4x route collections have LCP below 2.5 s and CLS 0: `release-performance/report.json.results[].before`, the repeat and fresh-process equivalents. The audit's heaviest page is about 2,070 KB, with 11 KB gzipped JS. Three home-only Lighthouse reports score 100/99/99 performance, LCP 1,854/2,108/1,815 ms, CLS 0 and TBT 0. Those earn substantial credit. Retained scroll/presentation stalls, including CPU1x outliers and the aborted run, hold the category at 7 rather than claiming uniformly excellent performance. No loader duration is separately reported; I do not turn that missing field into a measured intro-time pass. |
| Responsive | **8.0** | `matrix/summary.json.views[]` reports no overflow and no small targets at 1440/768/390/375. The photos, two-column artist index, mobile form order and price-card conversion are composed for their widths (`matrix/375-team.png`, `matrix/768-home.png`, `phone-flows/390-plan-4-expanded.png`). `composition/report.json` records no overflow and working keyboard steps at all four widths. The long stacked phone price comparison and tall tablet composer heading remain opportunities to improve economy, not evidence of a broken layout. |
| Markup/Meta-data | **7.8** | `release-audit.txt` has 0 FAIL; `static-proof.json.rows[]` records viewport, OG title/description/URL, Twitter large-image card, favicon 200, zero missing image alt attributes and BeautySalon structured data. `release-ui/report.json.openPhotoDialogAxe` is empty. The strict 8-level “OG image loads” claim remains bounded: `ogImageLocalResponse: 200` is a mapped local verification, and `ogVerification` explicitly does not claim the future production URL is live. I award the implemented metadata, without assuming the missing final-origin fetch is successful. |

The six-area developer “above 7” bar is **not fully met**: Animations/Transitions is 6.8 and WPO is 7.0.

## Adverse measurements and evidence limits

- **Completed CPU4x results remain in the judgment.** The first CSSOM collection records Miranda at 33 fps cold with a 367 ms worst frame, Home warm at 49 fps/133 ms and Book cold at 50 fps/117 ms. The repeat records About at 46 fps/550 ms cold and 31 fps/333 ms warm. These are not erased by better repeats (`release-performance/report.json.results`, `release-performance-repeat/report.json.results`).
- **The complete fresh-process recovery is mostly near 60 fps, not uniformly so.** Modern Chinese warm is 52 fps, with a 150 ms worst frame and three frames over 50 ms (`fresh-process-performance/report.json.results`, route `studies/modern-chinese/`).
- **The supplemental wheel run is not a touch-device test.** It records the full 900 px displacement in every sample, but retains 100.1 ms and 66.6 ms intervals on Modern Chinese, and 66.7 ms on Occasions (`wheel-performance/report.json.results[].cold/warm.intervals`). Positive-interval averages are roughly 52–60 fps; averaging does not hide those stalls.
- **CPU1x does not prove the problem disappears.** `native-cpu-performance/report.json.rows`, width 1440/About, contains a 500 ms CSSOM-warm interval and a 283.3 ms wheel-cold interval; width 390/Team contains 316.7 ms CSSOM-cold and 200 ms warm intervals. Width 390/Book wheel-warm reaches 166.7 ms. The report itself identifies a headless software browser, not hardware. The causes are unproven; the outliers are observations, not a diagnosis of a particular app subsystem.
- **The aborted attempt is adverse but incomplete.** `aborted-fresh-process/failure.json` and `full-run-log.txt` retain Portfolio's rounded 18 fps cold/9 fps warm and 400/633 ms worst frames, then a Bridal load-event timeout at 30 seconds. Raw intervals for those partial samples were lost by the old write-at-end harness. They cannot be reconstructed, pooled with complete raw samples or treated as a measured 30-second LCP. The later successful recovery does not cancel them.
- **Event latency is laboratory evidence.** `event-latency/report.json` contains 18 observed interactions; the maximum is 280 ms on Bridal. `fieldINP` explicitly says not measured. Three Lighthouse reports cover the home page, not all 19 routes.
- **Saved-state readiness is independently supported.** All eight direct navigations record the reference ready before first paint/FCP and CLS 0 (`reference-bootstrap/report.json.rows[].paint[].referenceReady`). This does not prove every possible saved URL or browser environment.
- **Stills show endpoints and sampled chronology, not motion feel.** They establish the page cuts and hover responses; they cannot establish tactile timing, sound or smoothness between unrecorded instants. The calm editorial concept does not require perpetual idle motion merely to earn points.
- **Capture ambiguity is not silently resolved in the site's favour.** `artist-readings/1440-giselle-detail-saved.png` contains a sticky header across the cropped image. The packet does not establish whether this is persistent viewport behaviour or an element-capture/scroll effect, so it is an unresolved visual observation, not a proven general layout fault. The partially covered heading in `reduced/390-prices.png` is a narrower observable issue worth reproducing.
- **External delivery is outside the verified boundary.** `cloud-preview-access.json` records a private-preview sign-in wall; I did not open or authenticate to it. Local rendered output and source integrity are evidence, but public preview behaviour, final-origin OG loading, real customer delivery, field Core Web Vitals, Safari and physical-phone behaviour are not established. All POSTs were intercepted. The pre-change diagnostic is labelled diagnostic and supplies no subtraction or scoring adjustment.

## Ranked concrete fixes

1. **Resolve the intermittent scroll/presentation stalls before adding motion.** Highest expected benefit: Usability, WPO and Animations. Reproduce the exact About desktop CPU1x warm and Miranda phone CPU4x cold cases above, then profile and reduce the rendering/layout/decoding work actually responsible; the packet does not identify the cause. Include Bridal's 280 ms inclusion interaction. Recheck the same complete collections, preserving all samples, and require the existing long stalls to disappear rather than relying on one good average.
2. **Connect the existing photograph/reference across native route changes.** Highest craft benefit: Animations, with smaller Design/Creativity benefit. In the cited portfolio-to-study and composer-to-book original frames, the current image vanishes and the next layout cuts in. Carry the existing photograph or three-fragment sheet into its destination with a short, nonblocking correspondence transition; ensure the destination images are ready when shown. Keep the complete immediate reduced-motion path. This develops the concept already visible on screen.
3. **Make the three-choice review sequence unambiguous.** Medium benefit: Usability. In `phone-flows/375-first-choice-and-next.png` and `composition/390-composer-first.png`, “Bring my edit” is the primary action while “Next: Hair & silhouette” is secondary. Make Next primary until the three categories have been visited, or explicitly label any unreviewed defaults as suggestions and add a compact review step. The final reference should clearly distinguish the visitor's choices from suggested starting selections.
4. **Clear the fixed header at the reduced-motion pricing destination.** Medium, narrow benefit: Usability/Responsive. In `reduced/390-prices.png`, the first trial heading begins beneath the header. Reproduce that exact route/state and apply sufficient anchor clearance for the complete heading/eyebrow; verify at both 375 and 390 with reduced motion. The passing Civil and artist-jump measurements should be retained, not assumed to cover this different destination.
5. **Reduce the distance needed to compare phone packages.** Medium benefit: Usability. `matrix/390-full-bridal-.png` spreads the six package cards across thousands of vertical pixels. Keep their readable prices and disclosures, but repeat or persist the existing Trials/Wedding-day/Civil navigation while in pricing and provide a compact duration/starting-price comparison before the long cards. That makes the existing information easier to compare without changing the visual concept.
6. **Add first-hand context to the strongest readings.** Smaller benefit: Content/Creativity. The three full-study screenshots explain visible technique well, but mostly stop at reading one finished photograph. Add a concise factual occasion or styling constraint, the artist's decision and the result, with a work/photographer credit where available. Do not invent client outcomes. This would deepen the existing close-reading format rather than replace it.

Separately, verify the declared canonical/OG URLs on their final served origin before making a live metadata claim. That is an outstanding release verification, not a demonstrated defect in the frozen markup.

