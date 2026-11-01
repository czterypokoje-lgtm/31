# Conversion QA

Date: 31 October 2026 (Europe/Warsaw). No source-original files were edited.

## Passed

- Next.js static production export and TypeScript validation.
- 33 content HTML pages, 18 city routes, 1,472 local link/asset references.
- One H1, German language, title and description on every content page.
- JSON-LD syntax and removal of former company, phone and Dutch car-key content from generated HTML.
- 14 original CSS/font/design files compared by SHA-256; unchanged.
- Three pilot routes (Sindelfingen, Stuttgart, Böblingen) tested before AI editorial expansion; final 18 location drafts integrated and checked.
- Browser desktop and 390×844 mobile home page; mobile menu opened, navigation to contact closed it; sticky call link uses the requested number.
- Google Maps remained unloaded before the button click, then loaded the supplied Sindelfingen address in German. Phone links inspected; no real call was placed.
- No browser console errors observed on the tested home view.

## Design handling

Original CSS, fonts, motion values, orange/navy palette, photo grid, service rows, timeline, trust-grid geometry, portrait handoff section and oversized phone treatment retained. Copy, photographs and business facts necessarily differ. German headline length was adjusted to fit existing typography; exact pixel equivalence to the Dutch text is not claimed.

## Limits

- Not a Google local-pack/top-six ranking measurement. Six primary competitor pages were inspected; 18 query areas were researched, not six full technical audits for each city.
- All 18 location pages are drafts/noindex pending factual coverage confirmation. Core website pages remain crawlable; owner-private hosting itself prevents a public indexed launch.
- SEO performance, actual call delivery, a custom domain and production-host HTTP behavior were not verified by local QA.
- Original dependency audit found a critical Next.js issue. Next.js was updated to 16.4.3; nonbreaking fixes removed high/critical findings. Remaining 16 moderate findings are in the ESLint development dependency chain. The deployment is static and has no Next.js runtime server.
- Next reports no fallback-font override data for Big Shoulders. The original webfont itself loads and was observed in browser; font configuration was preserved.
- Legal/contact business facts remain incomplete as documented in README.

Evidence: `qa/home-desktop.jpg`, `qa/home-mobile.jpg`, `qa/contact-map.jpg`.
