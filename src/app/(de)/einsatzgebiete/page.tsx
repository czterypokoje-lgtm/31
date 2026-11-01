import Link from "next/link";
import { locations } from "@/data/locations";
import { business } from "@/lib/business";
import { CityHubHero } from "@/components/ag/CityHubHero";
import { ArrivalsBoard } from "@/components/ArrivalsBoard";
import { CtaBand } from "@/components/CtaBand";

export const metadata = {
  title: "Einsatzgebiete und Anfragen",
  description:
    "Türöffnung in Sindelfingen, Böblingen, Stuttgart und weiteren Städten der Region anfragen. Entfernungen zur Geschäftsanschrift im Überblick.",
  alternates: { canonical: "/einsatzgebiete/" },
};

export default function Page() {
  // Sindelfingen itself is 0 km, which would render as "0 BIS 180 KM" — take the
  // nearest city other than the home town.
  const away = [...locations].filter((l) => l.distanceKm > 0).sort((a, b) => a.distanceKm - b.distanceKm);
  const nearest = away[0];
  const farthest = away[away.length - 1];
  const groups = [...new Set(locations.map((l) => l.group))];

  return (
    <>
      <CityHubHero
        nearestName={nearest.name}
        nearestKm={nearest.distanceKm}
        farthestName={farthest.name}
        farthestKm={farthest.distanceKm}
        cityCount={locations.length}
      />

      <ArrivalsBoard />

      <section className="border-t border-line px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-heading-2 text-frost">Nach Region.</h2>
          <p className="text-body-small text-mist mt-2 max-w-2xl">
            Die Zuordnung beschreibt die Lage der Städte zueinander. Eine Einsatzzusage ist damit
            nicht verbunden.
          </p>

          <div className="mt-10 space-y-10">
            {groups.map((g) => (
              <div key={g}>
                <h3 className="text-heading-4 text-frost mb-4">{g}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {locations
                    .filter((l) => l.group === g)
                    .map((l) => (
                      <Link
                        key={l.slug}
                        href={`/tueroeffnung/${l.slug}/`}
                        className="border border-line bg-navy-surface p-6 transition-colors hover:border-signal-orange"
                      >
                        <p className="text-heading-4 text-frost">{l.name} →</p>
                        <p className="text-mono text-faint mt-2">
                          {l.distanceKm === 0 ? "Geschäftsanschrift" : `ca. ${l.distanceKm} km`}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-heading-3 text-frost mb-3">Nicht in der Liste?</h2>
            <p className="text-body text-mist">
              Die Aufstellung ist kein abschließendes Einsatzgebiet. Rufen Sie an und nennen Sie
              Ihre Adresse – dann lässt sich klären, ob eine Anfahrt möglich ist.
            </p>
          </div>
          <dl className="space-y-4">
            {[
              ["Geschäftsanschrift", `${business.address.street}, ${business.address.postalCode} ${business.address.city}`],
              ["Einsatz", "Nach telefonischer Absprache"],
              ["Telefon", business.phone],
              ["Städte in der Übersicht", `${locations.length}`],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-line pb-3">
                <dt className="text-eyebrow text-mist">{label}</dt>
                <dd className="text-body text-frost mt-1">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
