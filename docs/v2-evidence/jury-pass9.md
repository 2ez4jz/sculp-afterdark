# Independent evidence-only jury assessment

**Perceived idea, before scoring:** SCULP turns looking at beauty photography into a personal conversation: inspect the artist's choices, combine the details that appeal to you, and carry that exact visual reference into an enquiry.

I used only the supplied quality bar and this evidence directory. I reviewed all **485 original screenshots** through indexed contact sheets (`jury-contact-sheets/index.json`, sheets 01–25), enlarged key original hero/composer/artist/study images and full-page sections, inspected all 25 actual rest/hover pairs and the selected-state pairs, and read all supplied report collections. Both sets of forward/back transition frames were reviewed in frame-index order. I did not inspect application source, prior scorecards, an external project folder, or the live site. The contact sheets and enlarged crops are review aids, not new site evidence.

## Scores

Every category starts at 6. Increments below describe the evidence that earns the final score; no calibration or rounding adjustment is applied.

| Criterion | Score | Evidence earned above 6, and the remaining limit |
|---|---:|---|
| Design | **8.1** | +1.0 for a controlled cobalt/cream/charcoal palette, serif display versus tightly spaced sans hierarchy, and ruled information system (`matrix/1440-home.png`, `composition/1440-composer.png`, `matrix/1440-full-bridal-.png`). +0.7 for memorable composition and varied rhythm: the oversized wordmark sits behind a portrait; the cream three-strip edit reads as a physical object on blue; artist readings alternate split, triptych and wide compositions (`artist-readings/1440-elaine-reading.png`, `1440-giselle-reading.png`, `1440-mira-reading.png`). +0.4 for designed interaction details, a substantial footer and a composed 404 (`release-ui/*`, `expanded/1440-404.png`). It stops short of 9: the enlarged hero and Miranda detail crops are visibly soft, and transition middle frames sometimes put competing headlines over one another. |
| Usability | **7.6** | +0.6 for immediate service orientation and direct routes to work, artists, pricing and enquiry (`matrix/1440-home.png`, `matrix/390-home.png`, `navigation/report.json`). +0.5 for complete reference carry, package prefills, preserved back-step data and failure recovery (`interactions/report.json`, `composition/report.json`). +0.5 for readable phone composition, fast measured paint, visible focus and complete reduced-motion states (`phone-flows/*`, `focus-inventory/*`, `reduced/*`). The rubric's 8-level smoothness is not demonstrated: several current CPU4x samples are 31–46 fps and the CPU1x collection also has substantial desktop and mobile adverse samples. Fast Event Timing and LCP do not erase these. |
| Creativity | **8.0** | +1.0 for explaining beauty through observed choices rather than simply presenting a gallery (`matrix/1440-full-studies-modern-chinese-.png`, `artist-readings/1440-miranda-reading.png`). +0.6 for combining three different artists' details into one persistent reference, visibly carried to the form (`composition/1440-composer.png`, `composition/390-composed-book.png`; all 27 combinations verified). +0.4 because the strip/detail motif drives the layout, selection and navigation transition (`composition-motion/*`). The editorial serif, cobalt block and image zoom vocabulary remains familiar; the evidence does not establish a new interaction language at 9. |
| Content | **7.8** | +0.7 for copy with a consistent, personal voice and useful visual reasoning: the warm face against a blue collar, controlled crown and clear central proportions are specific to the pictured work (`matrix/1440-full-studies-modern-chinese-.png`). +0.6 for named artists, 142 preserved portfolio images, transparent tiers/prices/durations and real studio directions (`preservation.json`, `phone-flows/report.json`, `matrix/1440-full-about-.png`). +0.5 for integrated captions, saved-detail labels and practical enquiry expectations (`artist-readings/*`, `composition/*`, `matrix/390-enquiry-sent.png`). Studies mainly interpret a finished photograph; short artist profiles and anonymous testimonial labels give less first-person process, original brief and attributable outcome than an 8-plus editorial treatment. |

**Exact weighted overall: 0.4×8.1 + 0.3×7.6 + 0.2×8.0 + 0.1×7.8 = 3.24 + 2.28 + 1.60 + 0.78 = 7.90 / 10.** This is the weighted result as calculated, without rounding it upward.

## Direct pointer and selected-state findings

I compared the actual `release-ui/<key>-rest.png` and `<key>-hover.png` images, then checked the matching `hoverTargets` computed changes. **All 25 sampled targets answer; no sampled primary target is unchanged or text-color-only.** This is a conclusion about these supplied targets, not a claim about every possible link on the site.

| Actual pair key(s) | Direct finding |
|---|---|
| `home-primary`, `civil-enquiry`, `price-compare` | The entire button floods dark, white lettering remains readable, and the arrow moves diagonally. This is a real treatment. |
| `composer-use` | The cream button receives a visible pale fill/border treatment and a moving arrow. Quieter than the dark flood, but visibly more than text color. |
| `home-secondary` | Link and arrow shift; its underline remains a clear affordance. |
| `nav` | A pale surface and growing underline accompany a 2 px upward shift. |
| `logo` | The small STUDIO label shifts 3 px. Deliberate but very subtle. |
| `study-tab`, `study-zoom` | The blue section's controls invert a whole rectangular surface; arrow/plus movement reinforces the response. |
| `study-detail`, `artist-detail` | The whole row gains a surface, the plus rotates; artist detail also enlarges its image. |
| `artist-card`, `artist-full-photo` | Image enlargement is visible; card arrow or photo-corner control also moves. |
| `artist-pin` | The marker visibly grows (computed scale 1.08). |
| `artist-index` | A full-row pale fill appears; label and downward arrow shift. |
| `footer-cta` | A long underline grows across the large invitation and the arrow moves. |
| `team-next`, `about-next`, `book-fallback`, `artist-back` | A second rule grows under the existing link treatment, with a 3 px shift. |
| `bridal-jump`, `civil-jump` | Actual response is a 3 px translation. It is not a color-only failure, but is among the weakest answers. |
| `composer-option`, `composer-step`, `complete-look` | Respectively: image enlargement (1.045), growing step rule, and full-row pale fill plus downward arrow movement. |

The 24 `selected-states` images cover rest/hover/focus for four saved-control types at desktop and phone widths. The saved check and readable dark foreground persist. `selected-states/report.json` reports a minimum 12.4254:1 against both base and covering pseudo surfaces. Some already-selected controls intentionally add only a border on hover; they retain an explicit selected label and check. There is no text disappearing into the fill in these pairs.

## Motion evidence

The shared photograph visibly grows from the portfolio card into a study and contracts on Back (`motion/1440-forward/frame-003.jpg` through `frame-007.jpg`; `1440-back/frame-003.jpg` through `frame-006.jpg`). The mobile sequence preserves the same face while the surrounding copy changes (`motion/390-forward/frame-008.jpg` through `frame-017.jpg`). The three edit strips are recognizable as they relocate into the enquiry brief, and return on Back (`composition-motion/1440-forward/frame-006.jpg` through `frame-010.jpg`, `390-forward/frame-005.jpg` through `frame-015.jpg`). These are continuous visual transitions, not merely two endpoint screenshots.

There are limits: `composition-motion/1440-forward/frame-006.jpg` and `390-forward/frame-010.jpg` show old/new headings and surfaces simultaneously. This creates a brief ghosted reading layer. Completion is uneven: desktop study forward reports ready at 153.2 ms and finished at 1414.5 ms; desktop Back is ready at 939.1 ms and finished at 1554 ms. The corresponding mobile forward/back finish near 752/754 ms. Composer forward finishes at 841.3 ms desktop and 698.8 ms phone; Back at 904.7/692.9 ms. These event clocks are reported, not inferred input-blocking durations. Sparse screencast frames cannot establish continuous frame pacing, and I have not treated frame count or stills as proof of fluidity. No idle-motion measurement is supplied; stills cannot prove or disprove breathing at rest.

## Current-source performance: all runs retained

`measured-source.json` labels these as frozen current-source benchmarks at commit `3ff05b99f30077b23186b95e08cf2e0addca38c3`, with no concurrent browser or generation work. The three CSSOM collections use Chromium 140, 390×844, DPR2, CPU4x, slow 4G, 2500 ms rAF-driven scrolling by 6 px, cold then warm. The fresh-process collection opens a new foreground browser process for each route. These are stress conditions, not a physical handset.

In the tables below, CSSOM cells use the report's **fps / worst frame ms / count over 50 ms**. Every route and both passes are included; a later good sample does not replace an earlier bad one. Raw intervals remain in the referenced reports.

### `release-performance/report.json`

| Route | LCP ms | CLS | Cold: fps / max / >50 | Warm: fps / max / >50 |
|---|---:|---:|---:|---:|
| / | 992 | 0 | 37 / 283 / 8 | 34 / 300 / 11 |
| portfolio/ | 1456 | 0 | 58 / 50 / 0 | 31 / 333 / 8 |
| bridal/ | 1032 | 0 | 55 / 150 / 1 | 60 / 17 / 0 |
| occasions/ | 784 | 0 | 59 / 33 / 0 | 53 / 150 / 3 |
| team/ | 1160 | 0 | 56 / 133 / 1 | 61 / 17 / 0 |
| about/ | 1188 | 0 | 59 / 50 / 0 | 43 / 367 / 5 |
| book/ | 1836 | 0 | 49 / 133 / 4 | 58 / 67 / 1 |
| artists/miranda/ | 1208 | 0 | 60 / 17 / 0 | 60 / 17 / 0 |
| studies/modern-chinese/ | 1048 | 0 | 60 / 33 / 0 | 61 / 17 / 0 |

All 18 passes: fps range 31–61, median 58; 42 reported intervals over 50 ms.

### `release-performance-repeat/report.json`

| Route | LCP ms | CLS | Cold: fps / max / >50 | Warm: fps / max / >50 |
|---|---:|---:|---:|---:|
| / | 1028 | 0 | 60 / 17 / 0 | 61 / 17 / 0 |
| portfolio/ | 1300 | 0 | 59 / 83 / 1 | 59 / 33 / 0 |
| bridal/ | 1084 | 0 | 53 / 117 / 3 | 58 / 67 / 1 |
| occasions/ | 1152 | 0 | 60 / 17 / 0 | 58 / 50 / 1 |
| team/ | 1440 | 0 | 60 / 33 / 0 | 59 / 67 / 1 |
| about/ | 1280 | 0 | 58 / 67 / 2 | 56 / 100 / 2 |
| book/ | 988 | 0 | 58 / 83 / 1 | 54 / 100 / 3 |
| artists/miranda/ | 1056 | 0 | 58 / 67 / 1 | 60 / 17 / 0 |
| studies/modern-chinese/ | 1208 | 0 | 53 / 150 / 2 | 60 / 50 / 0 |

All 18 passes: fps range 53–61, median 58.5; 18 reported intervals over 50 ms.

### `fresh-process-performance/report.json`

| Route | LCP ms | CLS | Cold: fps / max / >50 | Warm: fps / max / >50 |
|---|---:|---:|---:|---:|
| / | 980 | 0 | 61 / 17 / 0 | 60 / 17 / 0 |
| portfolio/ | 1224 | 0 | 54 / 167 / 2 | 60 / 17 / 0 |
| bridal/ | 900 | 0 | 47 / 167 / 4 | 61 / 17 / 0 |
| occasions/ | 792 | 0 | 59 / 50 / 0 | 61 / 17 / 0 |
| team/ | 1364 | 0 | 58 / 33 / 0 | 61 / 17 / 0 |
| about/ | 1188 | 0 | 60 / 17 / 0 | 59 / 33 / 0 |
| book/ | 1040 | 0 | 60 / 17 / 0 | 60 / 33 / 0 |
| artists/miranda/ | 984 | 0 | 60 / 17 / 0 | 60 / 33 / 0 |
| studies/modern-chinese/ | 1060 | 0 | 59 / 50 / 0 | 46 / 200 / 6 |

All 18 passes: fps range 46–61, median 60; 12 reported intervals over 50 ms.

### Supplemental CPU4x native wheel

`wheel-performance/report.json` uses a CDP mouse-wheel gesture at phone width: 900 px at 450 px/s with preventFling, passive rAF timestamps, no scrollBy in callbacks. This is a different input path, not physical touch. Every pass actually moved 900 px. Cells below derive **fps / maximum positive interval ms / intervals over 50 ms** from all positive timestamp intervals; nonpositive initial boundary offsets are not frame durations and remain in the original report. Every positive stall is retained. Derived fps is 1000 divided by mean positive interval; it is a sampling estimate, not a physical display-refresh claim.

| Route | Cold: fps / max / >50 | Warm: fps / max / >50 |
|---|---:|---:|
| / | 58.57 / 50.1 / 1 | 58.58 / 33.4 / 0 |
| portfolio/ | 51.57 / 50.0 / 0 | 60.00 / 16.8 / 0 |
| bridal/ | 57.17 / 100.1 / 1 | 58.56 / 33.4 / 0 |
| occasions/ | 44.67 / 166.7 / 5 | 55.75 / 66.6 / 1 |
| team/ | 49.30 / 66.8 / 4 | 49.18 / 116.7 / 3 |
| about/ | 40.85 / 483.3 / 4 | 45.72 / 199.9 / 3 |
| book/ | 54.31 / 150.0 / 2 | 53.28 / 83.4 / 3 |
| artists/miranda/ | 43.98 / 116.7 / 5 | 59.06 / 50.0 / 0 |
| studies/modern-chinese/ | 57.17 / 116.7 / 1 | 60.00 / 16.8 / 0 |

This collection still has adverse results: About cold reaches 483.3 ms; Occasions cold is approximately 44.67 fps; Team warm approximately 49.18 fps. Gesture displacement succeeding is not equivalent to smooth rendering.

### Supplemental CPU1x ordinary-host conditions, full nine types × two viewports

`native-cpu-performance/report.json` uses CPU1x, slow 4G, foreground desktop 1440/DPR1 and mobile 390/DPR2 in the same headless software browser. It is closer to ordinary host conditions than CPU4x, but is neither physical-device nor field evidence. It does not remove the stress results. All 72 cold/warm CSSOM/wheel samples are below, using the same derived interval statistics as the wheel table. All wheel passes moved 900 px. The mobile Book, Artist and most Team/About samples are close to 60 fps; desktop Book/About/Artist and mobile Portfolio still contain substantial drops.

| Width | Route | LCP ms | CLS | CSSOM cold | CSSOM warm | Wheel cold | Wheel warm |
|---:|---|---:|---:|---:|---:|---:|---:|
| 1440 | / | 1160 | 0.00050 | 56.43 / 83.3 / 2 | 60.00 / 16.8 / 0 | 59.05 / 50.0 / 0 | 60.00 / 16.8 / 0 |
| 1440 | portfolio/ | 1504 | 0.00000 | 52.85 / 83.3 / 5 | 58.41 / 50.0 / 0 | 60.00 / 16.8 / 0 | 51.03 / 166.7 / 2 |
| 1440 | bridal/ | 2044 | 0.00000 | 56.83 / 83.4 / 1 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 | 46.57 / 233.4 / 4 |
| 1440 | occasions/ | 728 | 0.00000 | 54.44 / 150.0 / 2 | 60.00 / 16.8 / 0 | 50.00 / 150.0 / 4 | 60.00 / 16.8 / 0 |
| 1440 | team/ | 788 | 0.00000 | 59.21 / 33.4 / 0 | 39.08 / 183.4 / 5 | 48.19 / 233.3 / 2 | 54.29 / 150.0 / 2 |
| 1440 | about/ | 756 | 0.00000 | 31.39 / 316.6 / 8 | 41.19 / 249.9 / 5 | 51.91 / 150.0 / 3 | 47.45 / 366.7 / 2 |
| 1440 | book/ | 868 | 0.01409 | 59.61 / 33.2 / 0 | 48.08 / 183.3 / 3 | 38.98 / 316.7 / 5 | 26.11 / 300.0 / 6 |
| 1440 | artists/miranda/ | 1228 | 0.00097 | 39.34 / 450.0 / 3 | 38.94 / 383.4 / 4 | 47.37 / 133.3 / 6 | 41.28 / 183.3 / 4 |
| 1440 | studies/modern-chinese/ | 1404 | 0.00039 | 54.08 / 99.9 / 2 | 47.49 / 183.3 / 4 | 56.75 / 66.6 / 2 | 60.00 / 16.8 / 0 |
| 390 | / | 832 | 0.00000 | 58.41 / 50.0 / 0 | 58.02 / 66.6 / 1 | 59.05 / 33.3 / 0 | 53.28 / 116.7 / 3 |
| 390 | portfolio/ | 1752 | 0.00000 | 46.49 / 483.4 / 2 | 30.57 / 250.0 / 9 | 51.00 / 200.1 / 2 | 60.00 / 16.8 / 0 |
| 390 | bridal/ | 768 | 0.00000 | 57.62 / 66.7 / 1 | 58.81 / 49.9 / 0 | 58.12 / 83.3 / 1 | 51.70 / 133.3 / 4 |
| 390 | occasions/ | 688 | 0.00000 | 59.60 / 33.3 / 0 | 56.82 / 83.3 / 1 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 |
| 390 | team/ | 1028 | 0.00000 | 60.00 / 16.8 / 0 | 59.21 / 50.0 / 0 | 59.53 / 33.3 / 0 | 60.00 / 16.8 / 0 |
| 390 | about/ | 948 | 0.00000 | 58.08 / 50.0 / 0 | 58.81 / 66.7 / 1 | 60.01 / 16.8 / 0 | 60.00 / 16.8 / 0 |
| 390 | book/ | 776 | 0.00000 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 | 60.01 / 16.8 / 0 | 60.00 / 16.8 / 0 |
| 390 | artists/miranda/ | 972 | 0.00000 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 | 60.48 / 16.8 / 0 |
| 390 | studies/modern-chinese/ | 1104 | 0.00000 | 58.81 / 66.7 / 1 | 60.40 / 16.8 / 0 | 60.01 / 16.8 / 0 | 60.00 / 16.8 / 0 |

The ordinary-host adverse samples remain important: desktop Book warm wheel ≈26.11 fps (six >50 ms intervals), desktop About cold CSSOM ≈31.39 fps, desktop Artist cold CSSOM max 450 ms, and mobile Portfolio cold CSSOM max 483.4 ms and warm ≈30.57 fps. It would be incorrect to describe the whole site as a stable 60 fps experience based on the many good samples.

### All three complete Lighthouse reports

All are Lighthouse 13.5.0 mobile simulated throttling, CPU multiplier 4, 412×823/DPR1.75. They benchmark the supplied home navigation, not all 19 pages.

| Report | Performance | A11y / BP / SEO | FCP ms | LCP ms | Speed index ms | TBT ms | CLS | Bytes |
|---|---:|---|---:|---:|---:|---:|---:|---:|
| `release-lighthouse.report.json` | 99 | 100 / 100 / 100 | 1410.312 | 1723.312 | 1410.312 | 0 | 0 | 399496 |
| `release-lighthouse-performance-only.report.json` | 100 | not run / not run / not run | 908.263 | 1733.263 | 908.263 | 0 | 0 | 399496 |
| `release-lighthouse-repeat.report.json` | 82 | 100 / 100 / 100 | 1131.54 | 1738.54 | 1870.385 | 733.23 | 0 | 399496 |

The 82-point repeat is retained: **733.23 ms TBT**, max-potential-FID 760 ms, and 1895.228 ms main-thread work. Its 760, 267 and 218 ms tasks are labelled Unattributable; the report also lists a 52 ms analytics task. The supplied reports do not establish that the 760 ms task was caused by application JavaScript. Equally, lack of attribution is not permission to discard it. Forced-reflow insights identify approximately 4.3–4.7 ms in analytics plus larger unattributed reflow; those figures cannot explain away all observed stalls.

All three home reports transfer 399,496 bytes. Each flags roughly 161 KiB image-delivery savings, including oversized small composer-strip assets, and around 12 KiB unused CSS. The audit's heaviest page is Miranda at approximately 2031 KB, with JS 11 KB gzip, CSS 18 KB gzip and fonts 44 KB. Loading is well within the rubric's byte and LCP targets. The issue is consistent runtime/frame behavior, not a multi-megabyte intro. No loader or hidden-reading wait is evidenced.

### Event Timing and historical diagnostic: distinct evidence

`event-latency/report.json` records one scripted CPU4x/slow4G flow, 17 named actions and 18 interaction IDs across home, Book, Bridal and Team. Observed interaction durations are 24–88 ms (max 88 ms on Book). Trusted pointer/keyboard events were observed at a 16 ms threshold; programmatic fills/selectOption are explicitly not timed user input. This is encouraging laboratory feedback evidence. It is **not field INP**, a full-route latency census or proof that frame drops do not matter.

`diagnostic-before-reading-priority/PROVENANCE.txt` explicitly labels the instrumented diagnostic as **pre-change commit fb535063f695e404feca6de129167eeed4469d4d**, with two alternating ABCD/DCBA rounds and a plain static control. It is historical context, not a current-source benchmark, subtraction or score adjustment. All eight rows' interval sets, Long Tasks, Long Animation Frame entries, resource records and trace references were considered. The supplied folder contains the summarized report, not the externally retained raw trace files named by its rows.

| Historical round | Route | CSSOM cold | CSSOM warm | Wheel cold | Wheel warm |
|---:|---|---:|---:|---:|---:|
| 0 | book/ | 60.25 / 16.8 / 0 | 60.00 / 16.8 / 0 | 60.44 / 16.8 / 0 | 60.00 / 16.8 / 0 |
| 0 | control | 59.06 / 50.0 / 0 | 17.67 / 583.3 / 6 | 24.95 / 250.0 / 7 | 43.81 / 200.0 / 4 |
| 0 | studies/modern-chinese/ | 59.21 / 50.0 / 0 | 59.18 / 50.0 / 0 | 60.00 / 16.8 / 0 | 57.60 / 100.0 / 1 |
| 0 | artists/miranda/ | 60.00 / 16.8 / 0 | 58.01 / 99.9 / 1 | 59.53 / 33.3 / 0 | 60.00 / 16.8 / 0 |
| 1 | artists/miranda/ | 60.39 / 16.8 / 0 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 |
| 1 | studies/modern-chinese/ | 59.60 / 33.3 / 0 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 |
| 1 | control | 60.29 / 16.8 / 0 | 60.00 / 16.8 / 0 | 60.00 / 16.8 / 0 | 59.06 / 33.3 / 0 |
| 1 | book/ | 60.39 / 16.8 / 0 | 57.22 / 116.6 / 1 | 45.21 / 183.4 / 4 | 44.58 / 300.0 / 3 |

The plain static control itself has a first-round warm CSSOM result ≈17.67 fps, max 583.3 ms, and a cold wheel result ≈24.95 fps, while its second round is near 60 fps. The historical application routes are often near 60 fps, but Book's second-round wheel still drops to ≈45.21/44.58 fps. This demonstrates that severe stalls can occur in the instrumented environment without the application. It does **not** prove that all current stalls are environmental, identify a current cause, or allow normalization of the current adverse samples. I score the observed current variability and keep causation unresolved.

## Accessibility, responsive, functional and static evidence

- `matrix/summary.json`: 19 routes × four widths = 76 views; one rendered H1 in each; no overflow, small-target flags, axe violations, runtime errors or console errors. This includes all eight artists and all three study routes. The 375/390 frames use a deliberate stacked composition and a compact menu, rather than a scaled desktop layout.
- `focus-inventory/report.json`: 38 route/width traversals, **1294 recorded focus stops**, zero `bad` entries. First stop is Skip to content. Visible blue or white focus outlines are corroborated by the 81 actual focus images. `states.json` adds 13 expanded-state traversals for composer hair/finish, composed enquiry, step two, open/saved dialog and phone menu, with no bad entries. Menu/dialog focus loops, Escape and restoration are additionally tested in `interactions/report.json`.
- `matrix/summary.json.reduced`: all 19 routes report running animations 0 and hiddenText 0. The eight supplemental `reduced/report.json` states show zero running animations, overflow and hidden headings on home, composer, composed Book and prices at 1440/390. Reduced motion retains the actual content and working choices.
- `composition/report.json`: all 27 actual three-detail combinations retain exact sources and all three references; four viewport checks retain keyboard steps, readable three-reference briefs, no overflow and no axe findings. Replacing/removing a reference preserves independent notes. Database/email failures preserve all details and stable retry identity; native success navigation is verified.
- `interactions/report.json`: required first-step/final validation, past-date blocking, Back persistence, duplicate-submit protection, one conversion, exact package/detail/photo carry, reference removal, gallery arrows/Escape/focus return, reduced motion, no-JavaScript mobile navigation and no-JavaScript form groups all pass. Every POST was intercepted: **no live email delivery or database write is proven**.
- `navigation/report.json`: all 32 artist-name jumps focus the intended biography; all four Civil jumps land at readable pricing (desktop/tablet around 110 px, phones around 95 px below the top). All 32 fragment checks loaded the exact detail, with no axe/overflow findings. `artist-readings/report.json` verifies native carry/removal for all eight artists at 1440/390.
- `phone-flows/report.json`: at 375 and 390, the first choice and Next are in the initial viewport; all 18 bridal tier prices, all six disclosures and exact package prefills are present. Minimum measured package text is 14 px. Civil body minimum is 15 px phone/16 px larger widths (`expanded/report.json`). 404 recovery works at all four widths.
- `static-proof.json`: 19 unique titles and descriptions; server HTML has lang, one H1, main, no heading skips, no missing image alt, viewport, OG/Twitter and favicon evidence. Real 404 status is 404; robots/sitemap return 200, 18 sitemap URLs exclude success. The OG URL was verified by local production-path mapping, **not by claiming the future remote canonical asset was already live**. `release-audit.txt`: 0 FAIL, six duplicate-sentence WARNs on desktop/mobile bridal package representations; these are warnings, not six proven user-visible repetitions.
- `preservation.json`: 142 original portfolio images retain sources/order; original prices/fields and business flow preserved. `legacy-campaign.json`: legacy route and service-prefill redirects, exact five allowed campaign tags and native composer→enquiry attribution pass; unsafe prototype-name input is not redirected. `analytics-proof.json`: all four depth thresholds are recorded once and flushed on early exit; no live writes.
- `preview-integrity.json`: supplied status is succeeded, with 636 file hash entries and distinct reported code/preview-source commits. This is delivery provenance; I did not inspect source or independently re-fetch the preview and do not turn provenance into a visual/performance pass.

## Developer dimensions (separate, unweighted)

| Dimension | Score | Evidence and constraint |
|---|---:|---|
| Semantics / SEO | **8.0** | `static-proof.json` meets the rubric's server-HTML, unique metadata, sitemap/robots and real-404 requirements; `release-audit.txt` has zero FAILs. The local evidence does not establish search indexing or remote future canonical availability. |
| Animations / Transitions | **7.4** | Both transition sets visibly preserve identity and all 25 actual pointer pairs respond. Ghosted intermediate copy, uneven transition completion and current frame-stall samples prevent the complete smoothness required for 8. |
| Accessibility | **8.1** | Zero supplied axe findings, first skip link, every recorded focus stop visible, working menu/dialog containment, all reduced-motion routes calm and complete, and selected-state contrast ≥12.4254:1. This is strong browser/keyboard evidence; screen-reader and physical-device behavior remain unmeasured. |
| WPO | **7.0** | All measured LCP/CLS/byte budgets are strong, with very small JS and no evidenced loader. However the 82 Lighthouse run/733.23 ms TBT, CPU4x scrolling drops and material CPU1x adverse samples establish inconsistent runtime results. No causal adjustment is applied. |
| Responsive Design | **8.0** | All 76 route/width checks have no overflow or small-target flags; actual 375/390 pricing, detail choices, carried briefs and menu are composed and usable. 768 uses its own hierarchy; all phone prices and package prefills remain available. |
| Markup / Meta-data | **8.0** | Static reports show alt text, accessible-name audit success, viewport, OG/Twitter, loaded locally mapped OG image and favicon; zero audit FAILs. Remote production social-preview fetching is outside these evidence limits. |

## Ranked fixes

1. **Establish and improve consistent frame behavior on the frozen current source.** Start with the exact adverse windows already recorded: `native-cpu-performance/report.json` desktop Book warm wheel (≈26.11 fps), desktop About cold CSSOM (≈31.39 fps), mobile Portfolio warm CSSOM (≈30.57 fps); `wheel-performance/report.json` About cold max 483.3 ms; and the 733.23 ms TBT Lighthouse repeat. Collect current-source task/LoAF attribution plus a same-session static control under both ordinary and CPU4x conditions. Optimize the work actually attributed; keep every predeclared sample. The existing 4 ms analytics reflow is a bounded lead, not an explanation for the 760 ms task. Aim for consistent near-60 fps/short worst intervals and a repeat without high TBT. This most directly raises Usability, WPO and Animations.
2. **Restore crisp visual detail at large display sizes.** `matrix/1440-home.png` and `artist-readings/1440-miranda-reading.png` visibly enlarge a soft face and cheek/hair fragments. Supply a higher-resolution original where available, use appropriately sized display/crop variants, or reduce the largest presentation when the original cannot support it. Separately size the tiny mobile composer strips: Lighthouse identifies 720 px assets serving roughly 107 px strips and about 161 KiB delivery savings. Preserve the photographic content and make the size/quality choice per use. This improves Design and Content without imposing unnecessary mobile transfer.
3. **Tighten the shared transition and remove competing text layers.** In `composition-motion/1440-forward/frame-006.jpg` and `390-forward/frame-010.jpg`, old and new headlines overlap while the strip reference relocates. Restrict the shared animation to the three strips, let the old text leave before the new heading becomes legible, and shorten the unusually late desktop study completion (`motion/1440-forward/report.json`, ready 153.2 ms versus finished 1414.5 ms). A roughly 400–600 ms visual move with short nonoverlapping copy fades would be easier to read; validate in chronological capture and preserve the complete reduced-motion path. No input-blocking failure is asserted by the existing evidence.
4. **Add attributable process and outcome to the existing studies.** `matrix/1440-full-studies-modern-chinese-.png` gives excellent visual observations but little about the actual brief and artist decision process. Add a short approved artist explanation, original constraint and observed result to each of the three studies, and provide stronger attribution/context for the home testimonials where permission exists. Keep the current precise visual vocabulary; do not inflate claims or invent client facts. This raises Content and strengthens the existing creative idea.
5. **Bring the quietest anchor hovers up to the established feedback language.** The `bridal-jump` and `civil-jump` actual pairs show only a 3 px translation; the logo only shifts its small label. Add the same growing rule or modest surface response already used by `nav`/`artist-index`, while preserving focus visibility and reduced motion. These targets already pass the unchanged/color-only check; this is finishing craft, not a claimed missing-hover bug.

The score is an independent evidence-only jury estimate, not an official Awwwards result. It includes all supplied adverse samples and does not claim field Core Web Vitals, physical-device smoothness, live backend delivery, or unobserved motion qualities.
