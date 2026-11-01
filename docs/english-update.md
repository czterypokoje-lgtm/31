# English language option — 1 November 2026

- Added 33 English counterparts, including the home page, four services, 18 cities, contact, prices, areas, cylinders, FAQ, about, legal/privacy drafts and photo credits.
- The persistent DE / EN control is available in desktop and mobile headers. It keeps the current service/city/page when switching; normal navigation remains in the selected language.
- German URLs remain intact. English routes use descriptive English paths, e.g. `/en/services/broken-lock/` and `/en/door-opening/stuttgart/`.
- Separate root layouts emit `html lang="de"` or `html lang="en"` in the generated HTML. All counterpart pages have self canonicals and reciprocal de/en hreflang links. The bilingual sitemap excludes city drafts in both languages.
- Replaced dormant English text from the previous car-key template with accurate home-lockout content. No former prices, response-time guarantees, certifications, ratings or opening-hours claims were carried over.
- Full production build and TypeScript passed: 72 generated routes including metadata/system routes, 67 content pages (34 German including the contact alias, 33 English), 3,279 internal references. All generated language counterparts exist; all city drafts retain noindex in both languages.
- SHA-256 comparison passed for all 14 original CSS/font/design files.
- Browser checks: German broken-lock service → English counterpart → German counterpart; mobile English menu → English contact with menu closing; English home copy; English Stuttgart → German Stuttgart; correct document language.
- Screenshots: `qa/english-service.jpg`, `qa/english-mobile.jpg`.

Existing private access, unresolved business facts and city draft status are unchanged. Real calls and every page at every viewport were not tested.
