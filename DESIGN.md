# SCULP / After Dark Design V1.0

Date: 2026-10-20 (Toronto). Baseline: 91e561953f719cdc931af65aed74d8801e3c5bf7.

## Brief and constraints

A Toronto/Markham makeup and styling studio serving bridal, occasion, commercial and education clients. The site's job is to show real work, help people choose an artist/service, and receive an enquiry. Existing photography and business copy are authoritative. Preserve every existing route, price, portfolio, form/API integration, attribution and canonical. No database, key, auth or production changes. English content remains English. No invented credentials or placeholder projects.

Keep buildless HTML/CSS/JavaScript: the existing router and forms already work; a framework migration would add risk without helping visitors. No new runtime package. Native CSS and View Transitions progressively enhance the existing browser experience. This follows the user's explicit preference for CSS or another mature solution without unnecessary dependencies, in place of the skill's default GSAP/Lenis engine.

## Three concept territories

| Territory | Idea / anchor | Signature / emotion / screenshot | Originality | Fit | Feasibility | Portability (lower better) |
|---|---|---|---:|---:|---:|---:|
| Profession's material | Light gives beauty its form. SCULP considers features, skin texture, proportion, dress, light and photography. | Portraits are revealed by a single horizontal cut; decisive type beside an unobscured face. Composed, intimate, assured. | 4 | 5 | 5 | 2 |
| Name | SCULP as an artist's imprint: a typographic atelier stamp repeated at the opening and final signature. | A large wordmark acts as a sign-off to the artist directory. Editorial authority. | 3 | 4 | 5 | 3 |
| Working process | A quiet consultation, moving from occasion to artist to the final enquiry. | Concierge selections become an appointment brief. Reassuring and personal. | 3 | 5 | 5 | 3 |

Selected: light and form. It comes from SCULP's stated craft and photographs; the wordmark is a secondary sign-off. The concierge remains a functional decision tool, not a new visual gimmick.

## Concept card

Idea: Reveal the person through light, proportion and a precise editorial frame.
Metaphor: A portrait sitting in a dark photographic studio.
Signature: The craft portrait has a keyboard/touch-operated detail study that enlarges the real photograph to inspect makeup texture. Lateral image reveals and page handoffs echo removing a studio flag; native View Transitions when supported.
Emotion: Assurance, intimacy, composure.
Motion verb: Uncover.
Screenshot: A naturally coloured bridal portrait held beside a large fashion-serif statement on charcoal.

## System

| Role | Value / rule |
|---|---|
| Ground | #141619, studio charcoal |
| Surface | #1c1e21, secondary charcoal; #24272a for controls |
| Ink | #f2eee8, soft white |
| Muted | #c0bbb4; tested on the actual background |
| Line | #45474a |
| Accent | #d6bda4, sampled direction from warm skin and studio materials; used for actions and orientation |
| Display | Bodoni Moda 400, Google Fonts/OFL, self-hosted Latin WOFF2, 14 KB |
| Text/UI | Instrument Sans variable 400–600, Google Fonts/OFL, self-hosted Latin WOFF2, 29 KB |
| Grid | Desktop 12-column logic expressed as asymmetrical 2-column groups; outer gutter 5vw capped 88px. Phone gutter 24px. Portraits keep natural colour. Artist work keeps its native proportions. |
| Shape | Square edges and 1px rules; no shadows on service/pricing structures. |
| Type | Display 42–128px, body 16–18px; body measure 43–52ch. UI 12–14px. |
| Rhythm | 76px phone sections; desktop 80–146px. Short utility sections contrast with portrait-led compositions. |
| Motion | One ease cubic-bezier(.2,.75,.25,1); hover 300–400ms, image uncover 700ms, page handoff 400ms. No loader, canvas, parallax, scroll replacement or idle animation. |

## Composition map

| Section/page | Composition |
|---|---|
| Home opening | Large two-line statement and a full-colour portrait; phone puts headline first, portrait second, full supporting copy and CTAs below. |
| Philosophy | Offset statement / text pair on a second charcoal level. |
| Services | Two editorial service entries with real inline image crops; no SaaS card backgrounds. |
| Concierge | Existing four choices and live recommendation, visibly grouped controls. |
| Craft | Large makeup detail opposite a compact explanation. |
| Client voices | One leading pull quote, two quieter testimonials; all content visible. |
| Artists | Founder portrait and introduction; directory retains equal visual weight for all eight artists. |
| Pricing | Two compareable groups with transparent columns; stacked phone rows. All prices retained. |
| Artist galleries | Three/two/one-column native-ratio image columns at desktop/tablet/phone. |
| Enquiry | Strong but modest introduction, single reading path, clearly labelled high-contrast controls and errors. |
| Finale | Existing enquiry CTA followed by real contact/navigation and a large SCULP signature. |
| Missing page | Branded dark 404 with a clear path back. |

## Deliberate restraint and genericness test

No cream-and-terracotta page fields, gradient glows, floating cursor, animated counters, blank galleries, idle wobble, decorative side labels or artificial loader. Colour comes from SCULP's actual photography. A still image must stand by itself. Idle stillness is intentional for a client evaluating an artist's work; primary controls retain purposeful feedback.

The existing copy contains dashes, numbered service groups and testimonials. They remain because the user explicitly required business content preservation. These are documented exceptions to the skill's stylistic copy defaults. Existing hash routes mean a static source scanner sees multiple hidden article headings; rendered-page checks verify one active H1 per route. Hash routes retain the original canonical rather than pretending to be separately indexed documents.

## Access and performance

Skip link first; visible focus; route heading focus; mobile menu Escape, focus containment and restoration; forms retain native validation. Reduced motion disables reveals, smooth scrolling and page effects. Static content is never opacity-hidden before a reveal. Self-hosted fonts replace Google font chains, with two preloads only. Hidden eager bridal media becomes lazy. No service-role credential or runtime key is added.

## Review and release

Use original /jury audit and shoot scripts plus explicit hash-route matrix at 1440, 768, 390 and 375px, axe-core, functional Playwright tests and Lighthouse. Scores are independent skill simulations and are not Awwwards official scores; lab measurements are labelled separately. Preview only; main remains at the baseline until an explicit release instruction. Rollback is a revert of the future merge, or a deployment of baseline 91e5619.
