import raw from "../../data/location-editorial.json";

export type Location = {
  slug: string;
  name: string;
  group: string;
  /** Real Stadt-/Ortsteile. Used in copy and in schema.org areaServed. */
  districts: string[];
  /**
   * Approximate road distance in km from the business address (Mercedesstraße 12,
   * 71063 Sindelfingen). Always rendered with "ca.".
   *
   * This replaces the Dutch site's avgArrivalMin: docs/seo-workflow.md forbids
   * claiming arrival times, but how far away a town is, is a fact about geography
   * rather than a promise about the business.
   *
   * TODO(owner): spot-check these against a routing service before the cities are
   * flipped to indexed. They are approximations, not measured routes.
   */
  distanceKm: number;
  postalCodes: string[];
  pilot: boolean;
  /** Derived from the editorial JSON so robots meta, sitemap and check-site cannot drift. */
  indexed: boolean;
};

type Facts = Pick<Location, "districts" | "distanceKm" | "postalCodes">;

const facts: Record<string, Facts> = {
  sindelfingen: {
    districts: ["Maichingen", "Darmsheim", "Hinterweil", "Königsknoll"],
    distanceKm: 0,
    postalCodes: ["71063", "71065", "71067", "71069"],
  },
  boeblingen: {
    districts: ["Dagersheim", "Diezenhalde", "Rauher Kapf"],
    distanceKm: 3,
    postalCodes: ["71032", "71034"],
  },
  leonberg: {
    districts: ["Eltingen", "Höfingen", "Warmbronn", "Gebersheim"],
    distanceKm: 13,
    postalCodes: ["71229"],
  },
  ditzingen: {
    districts: ["Heimerdingen", "Hirschlanden", "Schöckingen"],
    distanceKm: 18,
    postalCodes: ["71254"],
  },
  stuttgart: {
    districts: ["Vaihingen", "Möhringen", "Degerloch", "Bad Cannstatt"],
    distanceKm: 20,
    postalCodes: ["70173", "70178", "70372", "70565"],
  },
  filderstadt: {
    districts: ["Bernhausen", "Sielmingen", "Bonlanden", "Plattenhardt"],
    distanceKm: 25,
    postalCodes: ["70794"],
  },
  fellbach: {
    districts: ["Schmiden", "Oeffingen"],
    distanceKm: 31,
    postalCodes: ["70734", "70736"],
  },
  ludwigsburg: {
    districts: ["Oßweil", "Eglosheim", "Grünbühl", "Hoheneck"],
    distanceKm: 32,
    postalCodes: ["71634", "71636", "71638", "71640"],
  },
  "esslingen-am-neckar": {
    districts: ["Mettingen", "Oberesslingen", "Zell", "Berkheim"],
    distanceKm: 35,
    postalCodes: ["73728", "73730", "73732", "73734"],
  },
  pforzheim: {
    districts: ["Brötzingen", "Dillweißenstein", "Eutingen", "Huchenfeld"],
    distanceKm: 35,
    postalCodes: ["75172", "75175", "75177", "75179"],
  },
  reutlingen: {
    districts: ["Betzingen", "Orschel-Hagen", "Rommelsbach", "Sondelfingen"],
    distanceKm: 36,
    postalCodes: ["72760", "72762", "72764", "72766"],
  },
  waiblingen: {
    districts: ["Beinstein", "Hohenacker", "Neustadt", "Hegnach"],
    distanceKm: 38,
    postalCodes: ["71332", "71334", "71336"],
  },
  karlsruhe: {
    districts: ["Durlach", "Mühlburg", "Oststadt", "Knielingen"],
    distanceKm: 63,
    postalCodes: ["76131", "76133", "76135", "76137"],
  },
  heilbronn: {
    districts: ["Böckingen", "Sontheim", "Neckargartach"],
    distanceKm: 65,
    postalCodes: ["74072", "74074", "74076", "74078"],
  },
  ulm: {
    districts: ["Söflingen", "Wiblingen", "Böfingen", "Eselsberg"],
    distanceKm: 85,
    postalCodes: ["89073", "89075", "89077", "89079"],
  },
  heidelberg: {
    districts: ["Handschuhsheim", "Neuenheim", "Rohrbach", "Kirchheim"],
    distanceKm: 95,
    postalCodes: ["69115", "69117", "69118", "69120"],
  },
  mannheim: {
    districts: ["Neckarstadt", "Lindenhof", "Käfertal", "Seckenheim"],
    distanceKm: 110,
    postalCodes: ["68159", "68161", "68163", "68165"],
  },
  "freiburg-im-breisgau": {
    districts: ["Herdern", "Wiehre", "Littenweiler", "Haslach"],
    distanceKm: 180,
    postalCodes: ["79098", "79100", "79102", "79104"],
  },
};

export const locations: Location[] = raw.locations.map((l) => ({
  slug: l.slug,
  name: l.city,
  group: l.group,
  ...facts[l.slug],
  pilot: l.pilot,
  indexed: !l.noindex,
}));

export const indexedLocations = locations.filter((l) => l.indexed);

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

/** Other cities in the same group — measured internal linking, the tactic Adler ranks on. */
export const neighbouring = (location: Location, limit = 5) =>
  locations.filter((l) => l.group === location.group && l.slug !== location.slug).slice(0, limit);

// Four intro variants and three "why" variants, selected by a hash of the slug pair, so
// the generated city×service pages do not read as one template with the city swapped.
const introTemplates: ((city: string, district: string, dat: string, akk: string, km: number) => string)[] = [
  (city, district, _dat, akk) =>
    `Wenn Sie in ${city} vor der eigenen Tür stehen, ist die erste Frage immer dieselbe: Ist die Tür nur zugefallen oder zusätzlich abgeschlossen? Beschreiben Sie am Telefon Ihre Situation und die genaue Adresse – das hilft bei der Einschätzung, wenn es um ${akk} geht, in ${district} genauso wie anderswo.`,
  (city, district, dat, _akk, km) =>
    `Sie stehen in ${city} vor ${dat}? Die Geschäftsanschrift von First Class Key liegt in Sindelfingen, rund ${km} Kilometer entfernt. Ob und wann eine Anfahrt nach ${city} – etwa nach ${district} – möglich ist, wird für Ihre Anfrage telefonisch geklärt.`,
  (city, district, _dat, akk) =>
    `Für ${akk} in ${city} kommt es auf den Türzustand an. Nennen Sie bitte Ihre vollständige Adresse in ${city}, ob Haus- oder Wohnungstür betroffen ist und ob ein Schlüssel noch innen steckt. Das gilt für ${district} genauso wie für die übrigen Stadtteile.`,
  (city, _district, dat, _akk, km) =>
    `Sie brauchen Hilfe bei ${dat} in ${city}? Zwischen Sindelfingen und ${city} liegen ca. ${km} Kilometer. Verfügbarkeit, Anfahrt und der voraussichtliche Gesamtaufwand werden vor dem Auftrag besprochen – feste Zusagen zu Ankunftszeiten gibt es hier bewusst nicht.`,
];

const whyTemplates: ((city: string, dat: string, akk: string, km: number) => string)[] = [
  (city, dat) =>
    `Der Aufwand bei ${dat} hängt weniger vom Ort als vom Türzustand ab. Entscheidend ist, ob die Tür nur zugefallen oder abgeschlossen ist, welches Schloss verbaut wurde und in welchem Zustand der Zylinder ist. Diese Punkte klären wir für Ihre Adresse in ${city}, bevor etwas beauftragt wird.`,
  (city, _dat, akk, km) =>
    `Zwischen der Geschäftsanschrift in Sindelfingen und ${city} liegen ca. ${km} Kilometer. Diese Entfernung fließt in die Anfahrt und damit in den Gesamtpreis ein. Fragen Sie für ${akk} deshalb ausdrücklich nach einem Angebot einschließlich Anfahrt und möglicher Zuschläge.`,
  (city, dat) =>
    `Vor einer Türöffnung in ${city} ist zu klären, dass Sie zum Betreten der Wohnung berechtigt sind. Halten Sie einen Ausweis und möglichst einen Nachweis zur Wohnung bereit. Erst danach geht es um die eigentliche Frage bei ${dat}: wie die Tür geöffnet wird, ohne unnötigen Schaden anzurichten.`,
];

export function cityServiceIntro(location: Location, caseDat: string, caseAkk: string): string {
  const i = (location.slug.length + caseDat.length) % introTemplates.length;
  const district = location.districts[location.slug.length % location.districts.length];
  return introTemplates[i](location.name, district, caseDat, caseAkk, location.distanceKm);
}

export function cityServiceWhy(location: Location, caseDat: string, caseAkk: string): string {
  const i = location.distanceKm % whyTemplates.length;
  return whyTemplates[i](location.name, caseDat, caseAkk, location.distanceKm);
}
