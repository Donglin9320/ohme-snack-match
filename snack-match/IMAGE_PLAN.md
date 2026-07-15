# Public Comparator Image Plan

This page uses image slots with a defined communication job, crop, and replacement rule. The current build already fills every slot that needs photography or illustration.

| Slot | What belongs here | Recommended crop | Current asset | Source |
| --- | --- | --- | --- | --- |
| Hero brand scene | OHME product packaging plus an oversized fruit/crunch object on the current mint diamond pattern | 4:3 or transparent PNG, product fully visible | `assets/ohme-strawberry-yogurt-crunch.png`, `assets/ohme-snack-word.png` | [OHME homepage](https://www.ohmefoods.com/) |
| OHME anchor card | One current OHME pouch photographed straight-on or at a shallow angle | 1:1 transparent PNG | `assets/ohme-strawberry-side.png` | [OHME homepage](https://www.ohmefoods.com/) |
| Snack Match results | Exact current product hero for each recommended OHME SKU; keep the full pack or bundle visible | 4:5 or 1:1, light/transparent background | Seven `assets/ohme-match-*` files | [OHME product collection](https://www.ohmefoods.com/collections/all-ohme-products) |
| Competitor format cards | Current package hero from each linked public product page; no lifestyle imagery or inferred dimensions | 1:1, light/transparent background | Five files under `assets/` | Linked brand or retailer product pages |
| Real fruit story | A simple fruit illustration that reads at small size | 1:1 transparent PNG | `assets/ohme-real-fruit.png` | [OHME homepage](https://www.ohmefoods.com/) |
| No-added-sugar story | The current OHME no-sugar illustration | 1:1 transparent PNG | `assets/ohme-no-added-sugar.png` | [OHME homepage](https://www.ohmefoods.com/) |
| Freeze-dried story | An illustration of the freeze-drying process, not an unverified factory photo | 4:3 transparent PNG | `assets/ohme-freeze-dryer.png` | [OHME homepage](https://www.ohmefoods.com/) |
| Closing CTA | Current OHME pouch or product family with enough negative space for CTA copy | 1:1 transparent PNG | `assets/ohme-strawberry-side.png` | [OHME homepage](https://www.ohmefoods.com/) |

## Replacement rules

- Keep the `data-image-slot` attribute in `index.html` when replacing an asset.
- Prefer current OHME CDN assets for OHME brand sections.
- Use a competitor image only when its linked public source clearly identifies the same product.
- Product photos are visual references only. Never infer physical size, sales, or ranking from an image.
- Keep local copies so the public page does not depend on third-party hotlink availability.
