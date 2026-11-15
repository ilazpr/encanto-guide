# Encanto Puerto Rico guide (preview MVP)

Test collection of 35 places plus 16 bookable tours. **Pending Encanto editorial review. Not a public launch.**

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # filter + data-integrity tests
npm run build    # static output in dist/ (any static host)
```

Stack: Vite, React, TypeScript, React Router (HashRouter, so shareable URLs work on any static host), Leaflet.
No backend, no accounts, no database. Saved places live in `localStorage`.

## Content is replaceable
- `src/data/places.ts`: independently visitable places (coordinates from OpenStreetMap, text original).
- `src/data/tours.ts`: paid tours. FareHarbor affiliate links are copied verbatim from the Encanto Wix CMS (collection `test`). Keep their query parameters.
- Places and tours are separate records, linked by `placeIds` only when the connection is clear.
- Restricted Google content (photos, hours, ratings) must never be written into these files. Use `googlePlaceId` and fetch at runtime through the official API.

## Map
`src/components/MapView.tsx` is a **development map** (OpenStreetMap tiles) and is labeled as such in the UI.
To switch to Google Maps, create an Encanto-owned project and restricted key, then replace that component with one taking the same props.

See `docs/NOTES.md` for status, costs, blockers and decisions.
