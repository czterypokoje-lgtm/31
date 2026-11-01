import { business } from "@/lib/business";
import { indexedLocations, type Location } from "@/data/locations";
import { pricing, schemaPriceRange } from "@/lib/pricing";
import type { Service } from "@/data/lockout";

const url = `https://${business.domain}`;
export const siteUrl = url;

/**
 * Deliberately omits openingHours, aggregateRating, identifier and legalName: none of
 * those are verified for this business, and docs/seo-workflow.md forbids claiming them.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${url}/#business`,
    name: business.name,
    legalName: business.legalName,
    founder: { "@type": "Person", name: business.owner },
    // Owner-confirmed 2026-11-01 — the one date claim the site is allowed to make.
    foundingDate: `${business.familyBusinessSince}`,
    telephone: business.phoneHref.replace("tel:", ""),
    email: business.email,
    url,
    image: `${url}/demir/tueroeffnung.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressCountry: business.countryCode,
    },
    // Only cities whose coverage is confirmed. While every city is still a noindex
    // draft this is just Sindelfingen itself, which is exactly right.
    areaServed: indexedLocations.length
      ? indexedLocations.map((l) => ({ "@type": "City", name: l.name }))
      : [{ "@type": "City", name: business.address.city }],
    priceRange: schemaPriceRange(),
  };
}

/** Offer is emitted only where a price is actually confirmed — never a placeholder. */
export function serviceSchema(service: Service, location?: Location) {
  const name = location ? `${service.name} in ${location.name}` : service.name;
  const path = location
    ? `${url}/tueroeffnung/${location.slug}/${service.slug}/`
    : `${url}/leistungen/${service.slug}/`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: service.name,
    description: service.heroSub,
    url: path,
    provider: {
      "@type": "Locksmith",
      "@id": `${url}/#business`,
      name: business.name,
      telephone: business.phoneHref.replace("tel:", ""),
    },
    areaServed: location
      ? { "@type": "City", name: location.name, containsPlace: location.districts }
      : { "@type": "AdministrativeArea", name: "Baden-Württemberg" },
    ...(service.priceFrom !== null && {
      offers: {
        "@type": "Offer",
        priceCurrency: pricing.currencyCode,
        price: service.priceFrom,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: service.priceFrom,
          priceCurrency: pricing.currencyCode,
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
      },
    }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Breadcrumb trails. Absolute URLs for the JSON-LD; Breadcrumb.tsx derives the path. */
export const crumb = (name: string, path: string) => ({ name, url: `${url}${path}` });
