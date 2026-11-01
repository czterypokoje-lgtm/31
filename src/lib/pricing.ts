// Single source of truth for every price surface on the site: service rows, the
// ServiceHero stats bar, /preise, the sticky CTA sidebar and the Offer schema.
//
// Only `entryFrom` is confirmed by the business owner (2026-11-01). Every other
// figure stays null until he confirms it, and renders as "Preis auf Anfrage".
// Confirming a figure is a one-line change here and updates every surface at once.
export const pricing = {
  currencyCode: "EUR",
  symbol: "€",

  /** Türöffnung einer zugefallenen Tür. CONFIRMED by owner 2026-11-01. */
  entryFrom: 69 as number | null,

  anfahrt: null as number | null,
  nightSurcharge: null as number | null,
  cylinderSwapFrom: null as number | null,
} as const;

export const priceLabel = (value: number | null): string =>
  value === null ? "Preis auf Anfrage" : `ab ${value} ${pricing.symbol}`;

/** schema.org priceRange — only ever reports figures that are actually confirmed. */
export const schemaPriceRange = (): string => `ab ${pricing.entryFrom} ${pricing.symbol}`;
