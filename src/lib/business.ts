// Central business facts for First Class Key (home/apartment door-lockout
// locksmith, Sindelfingen; owner Güngör Demir). Keep copy provisional where the
// business hasn't confirmed a claim — see data/location-editorial.json and
// scripts/check-site.mjs.

export const business = {
  /** Trade name — branding, schema, page titles, the footer wordmark. */
  name: "First Class Key",
  /** The person. Used where the copy is about who answers the phone. */
  owner: "Güngör Demir",
  /** Impressum form for a German sole proprietorship. */
  legalName: "First Class Key – Inhaber Güngör Demir",

  // TODO(owner): confirm the final domain before launch. Every canonical URL,
  // the sitemap and the schema @id are built from this one value.
  domain: "firstclasskey.de",

  /** International form — correct for the tel: href and for schema.org. */
  phone: "+49 172 1416144",
  /** National form for on-page display. Shorter, and what a German caller expects to read. */
  phoneDisplay: "0172 1416144",
  phoneHref: "tel:+491721416144",
  // TODO(owner): confirm this address exists before it ships in the Impressum.
  email: "info@firstclasskey.de",
  address: {
    street: "Mercedesstraße 12",
    postalCode: "71063",
    city: "Sindelfingen",
  },
  countryCode: "DE",

  /**
   * CONFIRMED by the owner 2026-11-01: family business, 15 years.
   * This is the one "years in business" claim the site is allowed to make, and it
   * is allowed only because the owner stated it. Anything else of this kind
   * (ratings, job counts, certifications, response times) stays off the site.
   */
  familyBusinessSince: 2011,
  familyBusinessYears: 15,
} as const;
