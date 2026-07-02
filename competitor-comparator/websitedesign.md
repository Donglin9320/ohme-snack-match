# OHME! Competitor Comparator Website Design

## Purpose

This website is a Han-facing decision dashboard, not a full research dump. Its job is to help OHME quickly understand what the competitor matrix means for package size, price framing, bundle strategy, and survey/pilot validation.

## Primary Reader

Han and OHME team members who need reusable market research outputs:

- What should OHME test next?
- Which competitors are direct freeze-dried substitutes?
- Which broader snacks are only useful as packaging/value benchmarks?
- How should survey results connect back to package and bundle decisions?

## Information Order

1. Start with the decision question.
2. Show customer drivers before the full competitor matrix.
3. Separate direct freeze-dried competitors from broader snack benchmarks.
4. Make package size visual before showing long tables.
5. Keep Amazon and Costco bundle logic as separate channel views.
6. Hide full evidence behind expandable sections.

## Visual Direction

Use OHME's light, fruit-forward brand world:

- Cream, warm white, soft pink, fruit orange/red, pale lime.
- Rounded cards with restrained shadows.
- Glass-style surfaces only when they improve hierarchy.
- Small motion for reveal, hover, and navigation feedback.
- Bento-style summary cards for decision hierarchy.
- Masonry-style evidence cards so the page does not feel like one long table.

## Interaction Rules

Do:

- Keep the top navigation sticky and clear.
- Use toast notifications for navigation feedback.
- Use reveal-on-scroll lightly.
- Let large evidence tables scroll horizontally on mobile.
- Keep direct decision language visible: Keep, Test, Do not copy.
- Preserve the full competitor data for later editing and validation.

Do not:

- Do not open with the full matrix.
- Do not present bars, chips, or candy as direct OHME product competitors.
- Do not use dark AI-style purple/blue themes.
- Do not use large decorative effects that slow the page or hide the data.
- Do not use vague labels like "Six rows Han should see first."
- Do not let mobile layouts clip, overlap, or force horizontal page scrolling.

## Current Page Structure

- `Start Here`: summary decision dashboard and supervisor-feedback response.
- `Customer Drivers`: pre-survey driver hypotheses and how survey fields will validate them.
- `Package Size`: visual OHME vs competitor package comparison.
- `Competitor Insight`: decision shortlist and expandable full evidence.
- `Amazon Test`: Amazon pack-count and bundle strategy.
- `Costco`: Costco bundle context.
- `Evidence Chain`: source-backed reasoning and limitations.

## Update Workflow

When new survey or retailer data arrives:

1. Update driver scores with real Qualtrics percentages.
2. Replace hypothesis statements with measured findings.
3. Add or correct competitor rows only when the source is clear.
4. Keep direct competitors and packaging/value benchmarks labelled separately.
5. Re-check mobile layout before publishing.
