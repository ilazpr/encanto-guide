# Progress notes (2026-11-15)

## Status
Built: landing, explore (search + category + region filters, URL-synced), synchronized map and cards, mobile Map/List switch,
place detail pages (shareable URLs), saved places (localStorage), bookable-tours page, About/methodology/affiliate disclosure,
links back to encantoexperiences.com. Tests: `npm test` (filters, data integrity, affiliate params).

## Blockers and gaps
- **Google Cloud:** the only project on this machine is Hibird's ("Hibird Bear Data Pipeline", `adroit-metric-500602-f2`). Encanto rules require its own project, so it was NOT used. Needs an Encanto project, billing, restricted keys. Until then: OpenStreetMap development map; no Google photos; no Places verification.
- **Photos:** none. Every place uses a labeled "Photo pending" fallback. No photo is downloaded or assumed reusable.
- **Google Maps lists:** share links need a Google sign-in; not imported. Places were selected independently.
- **Closure checks:** only coordinates were verified (OSM, 2026-11-15). Business open/closed status for food places is unverified.
- **Child suitability:** never asserted; candidates carry a stated basis only and are flagged unverified.
- **Hosting:** no host connected yet; see delivery notes.
- **Tour operator names:** only shown where known from the Encanto price-check notes; otherwise the FareHarbor account handle is shown.
- Tour prices are intentionally not shown ("Check availability").

## Google cost estimate (not implemented yet; pricing read 2026-11-15 from Google's pricing page)
Current build makes zero Google calls. If Google Maps JS replaces the dev map: Dynamic Maps free cap 10,000 loads/month, then $7 per 1,000.
Assume ~2 map loads per visit (explore + one detail page):
| Visits/month | Map loads | Est. cost |
|---|---|---|
| 100 | 200 | $0 |
| 1,000 | 2,000 | $0 |
| 5,000 | 10,000 | $0 (at cap) |
| 10,000 | 20,000 | ~$70 |
Adding Place Photos (cap 1,000 free, $7 per 1,000): limit to one photo per detail page view, never on list cards.
At 10,000 visits and ~1 detail view each, ~9,000 photos is ~$56. Development traffic counts toward these caps.
The Hibird project shares a billing account (`01D1B3-537FC8-30F6DE`): do not reuse it. Verify current prices before launch.
No quotas, budgets or alerts are configured. Nothing is claimed active.

## Requirement to record: alerts (later, not built)
Notify at 50/75/90/100% of each applicable SKU's monthly free allowance, plus spend alerts at $10/$25/$50.
Ask Isaac for the notification destination first. Budget alerts are delayed (hours) and do NOT stop charges;
quotas (per-day caps) are the only hard brake. Do not claim alerts are on until verified.

## Future integration points
- Weather and official advisories: add a `src/lib/advisories.ts` adapter feeding a banner on place pages. No conditions are shown now, and no "safe to visit" claims are made.
- Tourism-organization image catalogs: fill `Place.photo` (src, credit, license, sourceUrl) per image only after rights are confirmed.
- Hosting under `guide.encantoexperiences.com` or `/guide`: HashRouter works at any path; set `base` in `vite.config.ts` if needed.
