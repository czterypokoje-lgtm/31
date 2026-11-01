import raw from "../../data/location-editorial.json";

export type LocationEditorial = {
  slug: string;
  title: string;
  /** Researched, intent-matched city headline. The city page renders this as its H1. */
  h1: string;
  description: string;
  enquiryNote: string;
  sections: { heading: string; body: string }[];
  faq: { question: string; answer: string }[];
  noindex: boolean;
  /** Gate for indexing: no city goes into the sitemap until the owner confirms coverage. */
  coverageConfirmed: boolean;
  status: string;
  claimsToConfirm: string[];
};

export const locationEditorial: LocationEditorial[] = raw.locations.map((l) => ({
  slug: l.slug,
  title: l.title,
  h1: l.h1,
  description: l.description,
  enquiryNote: l.enquiryNote,
  sections: l.sections,
  faq: l.faq,
  noindex: l.noindex,
  coverageConfirmed: l.coverageConfirmed,
  status: l.status,
  claimsToConfirm: l.claimsToConfirm,
}));

export const getEditorial = (slug: string) => locationEditorial.find((e) => e.slug === slug);
