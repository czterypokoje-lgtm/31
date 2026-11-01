import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/data/lockout";
import { serviceFaq } from "@/data/faq";
import { indexedLocations } from "@/data/locations";
import { priceLabel, pricing } from "@/lib/pricing";
import { serviceSchema, breadcrumbSchema, crumb } from "@/lib/schema";
import { ServiceHero } from "@/components/ag/ServiceHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyCtaSidebar } from "@/components/StickyCtaSidebar";
import { AlsoUsefulCrossSell } from "@/components/AlsoUsefulCrossSell";
import { CylinderTeaser } from "@/components/CylinderContent";
import { Faq } from "@/components/Faq";
import TimeLine from "@/components/ag/TimeLine";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  return {
    title: s?.name,
    description: s?.heroSub,
    alternates: { canonical: `/leistungen/${slug}/` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const items = [
    crumb("Start", "/"),
    crumb("Leistungen", "/leistungen/"),
    crumb(s.name, `/leistungen/${s.slug}/`),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(s)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />

      <Breadcrumb items={items} />

      <ServiceHero
        headline={s.heroHeadline}
        sub={s.heroSub}
        image={s.heroImage}
        imageAlt={s.heroImageAlt}
        stats={[
          { label: "PREIS", value: priceLabel(s.priceFrom), orange: true },
          { label: "ANFAHRT AB", value: "SINDELFINGEN" },
          { label: "LEGITIMATION", value: "AUSWEIS NÖTIG" },
          { label: "ANGEBOT", value: "VOR DEM AUFTRAG" },
        ]}
      />

      <section className="border-t border-line px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-heading-3 text-frost mb-4">Was wir tun</h2>
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
            <p className="text-body text-mist mt-8">{s.detail}</p>
          </div>
          <StickyCtaSidebar priceFrom={s.priceFrom} />
        </div>
      </section>

      {/* The zugefallen/abgeschlossen split: the question every caller is actually asking,
          and the one competitor pages in this market rank on. */}
      <section className="border-t border-line bg-navy-surface px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-eyebrow text-mist">Türzustand</p>
          <h2 className="text-heading-3 text-frost mt-2 mb-4">Zugefallen oder abgeschlossen?</h2>
          <p className="text-body text-mist max-w-3xl">{s.conditionNote}</p>
        </div>
      </section>

      <TimeLine />

      {s.includesCylinderSection && <CylinderTeaser />}

      <Faq items={serviceFaq[s.slug]} title={`Fragen zu: ${s.name}`} />

      <section className="border-t border-line px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Only cities with confirmed coverage get a city×service page to link to. */}
          {indexedLocations.length > 0 && (
            <>
              <h2 className="text-heading-3 text-frost mb-2">{s.name} in Ihrer Stadt</h2>
              <p className="text-body-small text-mist mb-6">
                Die Geschäftsanschrift liegt in Sindelfingen. Ob eine Anfahrt zu Ihrer Adresse
                möglich ist, wird telefonisch geklärt.
              </p>
              <div className="mb-6 flex flex-wrap gap-x-6 gap-y-3">
                {indexedLocations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/tueroeffnung/${l.slug}/${s.slug}/`}
                    className="text-body-small text-mist hover:text-signal-orange"
                  >
                    {s.shortName} in {l.name} →
                  </Link>
                ))}
              </div>
            </>
          )}
          <p className="text-mono text-faint">
            Kosten im Überblick:{" "}
            <Link href="/preise/" className="underline hover:text-mist">
              Preise und Kostenfaktoren
            </Link>
            {s.priceFrom !== null && ` · ab ${s.priceFrom} ${pricing.symbol}`}
          </p>
        </div>
      </section>

      <AlsoUsefulCrossSell excludeSlug={s.slug} />
    </>
  );
}
