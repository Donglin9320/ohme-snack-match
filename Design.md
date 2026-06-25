# OHME! Package Comparator Redesign

## Goal

Make the package comparator feel closer to OHME!'s consumer brand while keeping the research dashboard useful for supervisor review. The page should feel fresh, fruit-forward, and interactive, but the main job is still to explain package-size strategy, competitor scope, survey logic, and evidence.

## References

- User image: clean white background, Instagram-style grid of bright circular fruit slices.
- OHME! website: oversized OHME! wordmark, sticky navigation, floating fruit/product elements, high-contrast capsule CTA, playful copy blocks, product-card rhythm, and light interactive sections.

## Design Direction

- Brand tone: playful research workbench, not a generic business dashboard.
- Visual anchor: large OHME! typography, warm fruit-inspired colors, capsule CTAs, and light interactive cards.
- Overview hero intentionally does not use the fruit image panel after design review.
- Color: red-orange OHME! brand energy with fresh lime, lemon, orange, berry, and cream accents.
- Structure: keep dashboard pages compact and scannable; use hero and interactive cards only where they clarify the story.
- Interaction: buttons should have tactile hover/active states; nav should feel like a snack-shop dock; overview should guide users to the comparator and matrix quickly.

## Information Architecture

1. Hero: state the package strategy question with OHME-style typography and CTAs.
2. Quick proof strip: trial pouch, Costco reference, Amazon test, survey logic.
3. Dashboard cards: explain why package size is being compared and how competitors are separated.
4. Supervisor response: keep the direct answers to feedback visible.
5. Presentation flow: show how to present the work to Han/supervisor.
6. Detail pages: comparator, matrix, Amazon, Costco, evidence, and editor remain accessible from nav.

## UI Components

- `BrandHero`: immersive first section with large background wordmark, CTA buttons, and small strategy chips.
- `AppNav`: compact pill navigation with active state and hover lift.
- `InteractionLab`: small OHME-style section translating brand inspiration into research actions.
- Existing cards, evidence blocks, and tables get cleaner color, hover, and focus states.

## Visual Rules

- Cards use 8px radius or less unless they are capsule buttons.
- Avoid purple gradients and generic AI-style glass cards.
- Keep body text high contrast and dashboard sections readable.
- Preserve mobile layout: hero stacks, nav wraps, wide comparison tables remain horizontally scrollable.

## Implementation Notes

- The redesign is implemented in the single-file React app in `index.html`.
- No data schema changes are required.
- Existing supervisor-feedback content remains intact.
- The generated fruit artwork was removed from the live overview and is not required for publishing.

## Verification Checklist

- `index.html` JavaScript passes syntax check.
- Local browser render shows hero, nav, overview, and data pages without console errors.
- Mobile width does not clip key text or CTAs.
- Overview hero renders without the image panel and keeps CTA/navigation interactions.
