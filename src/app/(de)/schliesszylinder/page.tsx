import Image from "next/image";
import Link from "next/link";
import { cylinderPhotos } from "@/lib/photos";
import { CylinderContent } from "@/components/CylinderContent";
import { CtaBand } from "@/components/CtaBand";
import { breadcrumbSchema, crumb } from "@/lib/schema";

export const metadata = {
  title: "Schließzylinder: ABUS D6X, DOM ix TwinStar, EVVA 4KS",
  description:
    "Was bei einem Zylindertausch zählt: Länge, Bauform und Schließfunktion. Beispiele für Zylindertypen, die bei einer Türöffnung vorkommen können.",
  alternates: { canonical: "/schliesszylinder/" },
};

const checklist = [
  {
    label: "Zylinderlänge",
    body: "Gemessen ab der Mitte der Stulpschraube nach innen und nach außen, in Millimetern. Ein zu langer Zylinder steht über und lässt sich leichter angreifen.",
  },
  {
    label: "Bauform",
    body: "Doppelzylinder, Knaufzylinder oder Halbzylinder. Die Bauform hängt davon ab, wie die Tür von innen bedient werden soll.",
  },
  {
    label: "Schließfunktion",
    body: "Soll sich der Zylinder von außen bedienen lassen, während innen ein Schlüssel steckt, braucht es eine Not- und Gefahrenfunktion.",
  },
  {
    label: "Gleichschließung",
    body: "Sollen mehrere Türen mit demselben Schlüssel schließen, ist das vor der Bestellung zu klären – nachträglich ist es aufwendiger.",
  },
];

export default function Page() {
  const items = [crumb("Start", "/"), crumb("Schließzylinder", "/schliesszylinder/")];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />

      <section className="px-4 pt-24 pb-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-eyebrow text-mist">Nach der Türöffnung</p>
          <h1 className="text-display-page text-frost mt-2" style={{ lineHeight: 0.95 }}>
            Schließ­zylinder.
          </h1>
          <p className="text-lead text-mist mt-6 max-w-3xl">
            Nicht jede Türöffnung endet mit einem neuen Zylinder. Nötig wird der Tausch, wenn der
            Zylinder beschädigt ist, ein Schlüssel fehlt oder sich die Schließung ändern soll.
            Entscheidend sind dann nicht Markennamen, sondern Maße und Funktion.
          </p>
        </div>
      </section>

      <section className="border-t border-line px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-heading-2 text-frost">Vier Angaben vor dem Tausch.</h2>
          <div className="mt-8 border-t border-line">
            {checklist.map((c) => (
              <div
                key={c.label}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[240px_1fr] sm:gap-4"
              >
                <p className="text-heading-4 text-frost">{c.label}</p>
                <p className="text-body-small text-mist">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanatory photos. Generic cylinder imagery on purpose: naming a brand on a
          photo would imply stock or dealership, which docs/seo-workflow.md forbids. */}
      <section className="border-t border-line px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-heading-2 text-frost">So sieht das aus.</h2>
          <p className="text-body-small text-mist mt-2 max-w-2xl">
            Vier Ansichten, die bei der Beschreibung am Telefon helfen: Bauform, Stulpschraube
            und der Aufbau im Schnitt.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {cylinderPhotos.map((photo) => (
              <figure key={photo.src} className="border border-line bg-navy-surface">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1400}
                  height={1000}
                  sizes="(max-width: 640px) 100vw, 480px"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="p-4">
                  <p className="text-body-small text-frost">{photo.alt}</p>
                  <p className="text-mono text-faint mt-2">
                    Foto: {photo.author} ·{" "}
                    <a className="underline" href={photo.source} target="_blank" rel="noopener noreferrer">
                      Quelle
                    </a>{" "}
                    ·{" "}
                    <a className="underline" href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">
                      {photo.license}
                    </a>
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CylinderContent />

      <section className="border-t border-line px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-heading-3 text-frost mb-4">Wenn das Schloss nicht mehr mitmacht</h2>
          <p className="text-body text-mist max-w-3xl">
            Hakt der Schlüssel, lässt sich der Zylinder nicht mehr drehen oder ist ein Schlüssel
            abgebrochen, geht es zuerst um die Öffnung und erst danach um den Ersatz.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-mono text-faint">
            <Link href="/leistungen/schloss-defekt/" className="underline hover:text-mist">
              Schloss defekt
            </Link>
            <Link href="/leistungen/schluessel-verloren/" className="underline hover:text-mist">
              Schlüssel verloren
            </Link>
            <Link href="/preise/" className="underline hover:text-mist">
              Kosten und Material
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
