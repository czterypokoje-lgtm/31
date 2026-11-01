# First Class Key — Türöffnung Sindelfingen

German home-lockout locksmith site for **First Class Key** (Inhaber: Güngör Demir),
Mercedesstraße 12, 71063 Sindelfingen.

Next.js 16 App Router · Tailwind v4 · static export (`output: "export"`).

## Commands

```bash
npm install
npm run dev     # development
npm run build   # static export to out/
npm run check   # executable site spec — see below
```

## scripts/check-site.mjs

Not a linter — an acceptance spec that runs against `out/`. It asserts a single `<h1>`
per page, a self-canonical, valid JSON-LD, that every internal link resolves, that city
indexing matches `data/location-editorial.json`, and that no page makes an **unverified
claim** (24/7, certifications, ratings, response times, free travel).

```bash
npm run build && TEMPLATE_SOURCE=/path/to/design-source node scripts/check-site.mjs
```

`TEMPLATE_SOURCE` additionally SHA-256-verifies that the CSS modules, `src/lib/fonts.ts`
and `design/styles.json` are byte-identical to the design source. **Those files must not
be edited** — size and spacing fixes belong on the element, not in the module.

## Before launch

- [ ] Confirm the domain in `src/lib/business.ts` (every canonical, the sitemap and the schema `@id` derive from it)
- [ ] Confirm the e-mail address (ships in the Impressum and schema)
- [ ] **Complete the Impressum** — currently a draft; a German commercial site needs it complete
- [ ] Confirm prices in `src/lib/pricing.ts` (only the 69 € entry price is confirmed)
- [ ] Spot-check `distanceKm` in `src/data/locations.ts` against a routing service

## Content rules

Only verified facts ship. The one "years in business" claim (family business, 15 years)
is owner-confirmed and recorded in `src/lib/business.ts`; anything comparable — ratings,
job counts, certifications, arrival times — stays off the site until confirmed the same
way. `docs/seo-workflow.md` has the full rule.

City pages are gated on confirmed coverage: `noindex` in `data/location-editorial.json`
drives the robots meta, the sitemap and the city×service route generation from one field.
