import credits from "../../data/photo-credits.json";

type CityPhoto = {
  src: string;
  alt: string;
  author: string;
  source: string;
  license: string;
  licenseUrl: string;
};

export const cityPhotos: Record<string, CityPhoto> = Object.fromEntries(
  credits
    .filter((p) => p.kind === "city")
    .map((p) => [
      p.id,
      {
        src: p.src,
        alt: p.alt,
        author: p.author,
        source: p.source,
        license: p.license,
        licenseUrl: p.licenseUrl,
      },
    ])
);

// Four service heroes: two licensed Wikimedia photos (credited in
// data/photo-credits.json / src/app/(de)/bildnachweise) and two work photos
// supplied directly by the business (public/demir).
export const servicePhotos: Record<string, { src: string; alt: string }> = {
  "wohnungstuer-zugefallen": {
    src: "/photos/services/tueroeffnung.webp",
    alt: "Hand mit Schlüssel an einem Türschloss",
  },
  "tuer-abgeschlossen": {
    src: "/demir/schlossarbeit.jpg",
    alt: "Arbeit an einem Türschloss",
  },
  "schluessel-steckt-innen": {
    src: "/photos/services/schluessel-steckt-innen.webp",
    alt: "Schließzylinder mit Schlüssel als Beispiel für die Bauform",
  },
  "schloss-defekt": {
    src: "/demir/service-defect.webp",
    alt: "Defekter Türzylinder wird ausgetauscht",
  },
};
