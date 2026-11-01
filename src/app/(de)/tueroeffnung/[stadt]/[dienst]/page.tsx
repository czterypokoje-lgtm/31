import { notFound } from "next/navigation";
import Link from "next/link";
import {
  indexedLocations,
  getLocation,
  cityServiceIntro,
  cityServiceWhy,
} from "@/data/locations";
import { getEditorial } from "@/data/editorial";
import { services, getService } from "@/data/lockout";
import { cityServiceFaq } from "@/data/faq";
import { cityPhotos } from "@/lib/photos";
import { priceLabel } from "@/lib/pricing";
import { serviceSchema, breadcrumbSchema, crumb } from "@/lib/schema";
import { ServiceHero } from "@/components/ag/ServiceHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyCtaSidebar } from "@/components/StickyCtaSidebar";
import { Faq } from "@/components/Faq";

/**
 * Only cities with confirmed coverage get a city×service page. Generating the full
 * 18×5 grid would mean 40 noindex pages that contribute nothing and read exactly like
 * the "city-name-swapped thin page" docs/seo-workflow.md bans.
 */
export function generateStaticParams() {
  return indexedLocations.flatMap((l) =>
    services.filter((s) => s.isCallout).map((s) => ({ stadt: l.slug, dienst: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string; dienst: string }>;
}) {
  const { stadt, dienst } = await params;
  const l = getLocation(stadt);
  const s = getService(dienst);
  if (!l || !s) return {};
  return {
    title: `${s.name} in ${l.name}`,
    description: `${s.name} in ${l.name} anfragen. Türzustand, Anfahrt ab Sindelfingen (ca. ${l.distanceKm} km) und Gesamtkosten vor dem Auftrag besprechen.`,
    alternates: { canonical: `/tueroeffnung/${stadt}/${dienst}/` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ stadt: string; dienst: string }>;
}) {
  const { stadt, dienst } = await params;
  const l = getLocation(stadt);
  const s = getService(dienst);
  const e = getEditorial(stadt);
  if (!l || !s || !e) notFound();

  const photo = cityPhotos[l.slug];
  const items = [
    crumb("Start", "/"),
    crumb("Einsatzgebiete", "/einsatzgebiete/"),
    crumb(l.name, `/tueroeffnung/${l.slug}/`),
    crumb(s.name, `/tueroeffnung/${l.slug}/${s.slug}/`),
  ];

  // One city-specific question plus three service answers at a city-dependent offset,
  // so no two of these pages ship the same FAQ set.
  const faqItems = cityServiceFaq(l, s.slug, {
    q: `Was sollte ich bei einer Anfrage aus ${l.name} angeben?`,
    a: `Nennen Sie die vollständige Adresse in ${l.name}, ob Haus- oder Wohnungstür betroffen ist und ob die Tür nur zugefallen oder zusätzlich abgeschlossen wurde. Die Geschäftsanschrift liegt ca. ${l.distanceKm} km entfernt in Sindelfingen; ob eine Anfahrt möglich ist, wird telefonisch geklärt.`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(s, l)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />

      <Breadcrumb items={items} />

      <ServiceHero
        headline={`${s.name} in ${l.name}`}
        sub={cityServiceIntro(l, s.caseDat, s.caseAkk)}
        image={photo.src}
        imageAlt={photo.alt}
        stats={[
          { label: "PREIS", value: priceLabel(s.priceFrom), orange: true },
          { label: "ANFAHRT", value: `CA. ${l.distanceKm} KM` },
          { label: "AB", value: "SINDELFINGEN" },
          { label: "EINSATZ", value: "AUF ANFRAGE" },
        ]}
      />

      <section className="border-t border-line px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-heading-3 text-frost mb-4">
              {s.name} in {l.name}: worauf es ankommt
            </h2>
            <p className="text-body text-mist">{cityServiceWhy(l, s.caseDat, s.caseAkk)}</p>

            <h3 className="text-heading-4 text-frost mt-10 mb-4">Was wir tun</h3>
            <ul className="space-y-3">
              {s.whatWeDo.map((item) => (
                <li key={item} className="flex gap-3 text-body text-mist">
                  <span className="text-signal-orange" aria-hidden="true">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body-small text-mist mt-8">
              Auch rund um: {l.districts.join(", ")}. Postleitzahlen: {l.postalCodes.join(", ")}.
            </p>
          </div>
          <StickyCtaSidebar priceFrom={s.priceFrom} />
        </div>
      </section>

      <section className="border-t border-line bg-navy-surface px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-eyebrow text-mist">{s.isCallout ? "Türzustand" : "Vor der Anfertigung"}</p>
          <h2 className="text-heading-3 text-frost mt-2 mb-4">{s.conditionHeading}</h2>
          <p className="text-body text-mist max-w-3xl">{s.conditionNote}</p>
        </div>
      </section>

      <Faq title={`Fragen zu ${s.shortName} in ${l.name}`} items={faqItems} />

      <section className="border-t border-line px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-heading-3 text-frost mb-6">Weitere Hilfe in {l.name}</h2>
          <div className="mb-8 flex flex-wrap gap-x-6 gap-y-3">
            {services
              .filter((o) => o.slug !== s.slug && o.isCallout)
              .map((o) => (
                <Link
                  key={o.slug}
                  href={`/tueroeffnung/${l.slug}/${o.slug}/`}
                  className="text-body-small text-mist hover:text-signal-orange"
                >
                  {o.name} in {l.name} →
                </Link>
              ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 text-mono text-faint">
            <Link href={`/tueroeffnung/${l.slug}/`} className="underline hover:text-mist">
              Alles zu {l.name}
            </Link>
            <Link href={`/leistungen/${s.slug}/`} className="underline hover:text-mist">
              {s.name} allgemein
            </Link>
            <Link href="/preise/" className="underline hover:text-mist">
              Kosten und Kostenfaktoren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
