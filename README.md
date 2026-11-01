# Güngör Demir – Türöffnung

German home-lockout conversion of Namaken. Original CSS, font configuration, design tokens and motion behavior are retained. Desktop source originals were not modified.

## Getting started

```bash
npm install
npm run build
npm run check
npm start
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). The preview serves the static `out/` export. No Next.js runtime server or form API is required.

Set `NEXT_PUBLIC_SITE_URL` before building for a different verified domain. `.openai/hosting.json` preserves the Sites identity. Set `TEMPLATE_SOURCE` to the original Namaken directory before `npm run check` to verify byte-identical CSS/fonts/design files.

## Design tokens

Colors and typography are generated from `design/styles.json` (a Framer
export) via `scripts/build-tokens.mjs`, which writes `src/app/tokens.css`.
Re-run it after editing `design/styles.json`:

```bash
node scripts/build-tokens.mjs
```

## Deploy

```bash
npm run build
```

Deploy `out/` to a static host. See [QA report](docs/qa-report.md), [research](docs/seo-research.md) and [SEO workflow](docs/seo-workflow.md).

Business facts live in `src/lib/business.ts`; service copy in `src/data/lockout.ts`. The 18 AI-authored city drafts in `data/location-editorial.json` feed the shared route automatically. All city drafts remain `noindex` and outside the sitemap until coverage is confirmed. Three technical pilots are Sindelfingen, Stuttgart and Böblingen. Contact is `/kontakt/`, with `/contact/` as a German alias.

The two repository SEO skills are manually invokable instructions, not a scheduled autonomous service. Technical checks do not measure ranking or conversion outcomes.

## Languages

German is the default. The header's DE / EN control switches to the current page's counterpart. English routes start at `/en/`; the route pairs are maintained in `src/lib/languages.ts`. German pages live in `src/app/(de)/` and English pages in `src/app/(en)/en/`. Separate document layouts provide the correct language before JavaScript loads. English city copy lives in `data/location-editorial.en.json`; update it alongside the German editorial file. Shared English service/FAQ copy is in `src/data/english.ts`. See `docs/english-update.md` for validation.

The final domain, business email, prices, hours and complete coverage are not supplied. Impressum/privacy texts remain explicit drafts. New Sites hosting is owner-private; a private deployment is not a public indexed business launch. Complete the missing business facts and connect the intended public hosting/domain before advertising the website.
