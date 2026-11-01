import Link from "next/link";
import { services } from "@/data/lockout";
import { priceLabel } from "@/lib/pricing";
import { CtaBand } from "@/components/CtaBand";

export const metadata = {
  title: "Leistungen für die Türöffnung",
  description:
    "Zugefallene Tür, abgeschlossene Tür, Schlüssel steckt innen, Schloss defekt oder Schlüssel verloren: die fünf Fälle, um die es bei einer Türöffnung meistens geht.",
  alternates: { canonical: "/leistungen/" },
};

export default function Page() {
  return (
    <>
      <section className="px-4 pt-24 pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-display-page text-frost">Leistungen.</h1>
          <p className="text-lead text-mist mt-6 max-w-3xl">
            Fünf Situationen, ein Ansprechpartner. Welcher Fall vorliegt, entscheidet über
            Vorgehen und Aufwand – beschreiben Sie den Türzustand deshalb möglichst genau.
          </p>

          <ul className="mt-12 divide-y divide-line border-t border-line">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/leistungen/${s.slug}/`}
                  className="flex items-start justify-between gap-4 py-6 transition-colors hover:bg-navy-surface"
                >
                  <div>
                    <p className="text-heading-3 text-frost">{s.name}</p>
                    <p className="text-body-small text-mist mt-1 max-w-2xl">{s.heroSub}</p>
                  </div>
                  <p className="text-price text-signal-orange ml-4 whitespace-nowrap">
                    {priceLabel(s.priceFrom)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
