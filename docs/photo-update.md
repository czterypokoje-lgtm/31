# Photo update — 1 November 2026

- Added 18 different Wikimedia city photographs, selected through each city's Wikipedia lead-photo record. Leonberg uses a separately verified Commons market-square photograph with a clear author credit.
- Source file, photographer, original URL, license URL and transformation notes are preserved in `data/photo-credits.json`. `/bildnachweise/` is linked in the footer; city credits also appear immediately below their hero.
- Every city hero uses its own local WebP asset. Four service heroes use four distinct assets: two licensed external photographs and two provided work photographs.
- Home hero, four gallery slots, portrait and closing section use seven distinct photographs. The about-page portrait is different. Unnecessary repeated illustrative images were removed from the cylinder explanation cards.
- Original CSS/font/design checksum verification passed for all 14 files. No animation values were changed.
- Production build and TypeScript passed. Static checks passed for 34 content pages, 18 location routes and 1,533 internal references. Remote sources and downloaded image hashes are unique.
- Browser QA verified Fellbach and Stuttgart city views, the door-opening service photograph, alt text, attribution links, and the absence of duplicated home-page images/backgrounds. Fellbach screenshot: `qa/fellbach-city.jpg`.

Photo selection does not change the existing private access or draft/noindex status of city pages.
