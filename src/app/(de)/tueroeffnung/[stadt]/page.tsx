import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation, neighbouring } from "@/data/locations";
import { getEditorial } from "@/data/editorial";
import { services } from "@/data/lockout";
import { generalFaq } from "@/data/faq";
import { cityPhotos } from "@/lib/photos";
import { priceLabel } from "@/lib/pricing";
import { breadcrumbSchema, crumb, siteUrl } from "@/lib/schema";
import { ServiceHero } from "@/components/ag/ServiceHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContentSection } from "@/components/ContentSection";
import ServiceRow from "@/components/ag/ServiceRow";
import { Faq } from "@/components/Faq";

export function generateStaticParams() {
  return locations.map((l) => ({ stadt: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stadt: string }> }) {
  const { stadt } = await params;
  const e = getEditorial(stadt);
  return {
    title: e?.title.replace(" | First Class Key", ""),
    description: e?.description,
    alternates: { canonical: `/tueroeffnung/${stadt}/` },
    robots: { index: !(e?.noindex ?? true), follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ stadt: string }> }) {
  const { stadt } = await params;
  const l = getLocation(stadt);
  const e = getEditorial(stadt);
  if (!l || !e) notFound();

  const photo = cityPhotos[l.slug];
  const items = [
    crumb("Start", "/"),
    crumb("Einsatzgebiete", "/einsatzgebiete/"),
    crumb(l.name, `/tueroeffnung/${l.slug}/`),
  ];
  const neighbours = neighbouring(l);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Türöffnung in ${l.name}`,
            serviceType: "Türöffnung",
            description: e.description,
            url: `${siteUrl}/tueroeffnung/${l.slug}/`,
            provider: { "@type": "Locksmith", "@id": `${siteUrl}/#business` },
            areaServed: { "@type": "City", name: l.name, containsPlace: l.districts },
          }),
        }}
      />

      <Breadcrumb items={items} />

      {/* e.h1 is the researched, intent-matched headline for this city. The previous
          build generated "Türöffnung in {city}" and left this unused. */}
      <ServiceHero
        headline={e.h1}
        sub={e.description}
        image={photo.src}
        imageAlt={photo.alt}
        stats={[
          { label: "ENTFERNUNG", value: l.distanceKm === 0 ? "STANDORT" : `CA. ${l.distanceKm} KM`, orange: true },
          { label: "AB", value: "SINDELFINGEN" },
          { label: "REGION", value: l.group.toUpperCase() },
          { label: "EINSATZ", value: "AUF ANFRAGE" },
        ]}
      />

      <p className="mx-auto max-w-5xl px-4 py-3 text-mono text-faint sm:px-6">
        Foto: {photo.author} ·{" "}
        <a className="underline" href={photo.source} target="_blank" rel="noopener noreferrer">
          Quelle
        </a>{" "}
        ·{" "}
        <a className="underline" href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">
          {photo.license}
        </a>{" "}
        · Zuschnitt / Abdunklung
      </p>

      <ContentSection eyebrow={l.group} title={`Ihre Anfrage in ${l.name}`}>
        <p>{e.enquiryNote}</p>
      </ContentSection>

      {e.sections.map((s) => (
        <ContentSection key={s.heading} title={s.heading}>
          <p>{s.body}</p>
        </ContentSection>
      ))}

      <ContentSection title={`Stadtteile rund um ${l.name}`}>
        <div className="flex flex-wrap gap-3">
          {l.districts.map((d) => (
            <span
              key={d}
              className="rounded-full border border-line bg-navy-surface px-4 py-2 text-body-small text-mist"
            >
              {d}
            </span>
          ))}
        </div>
        <p className="text-body-small text-mist mt-4">
          Postleitzahlen: {l.postalCodes.join(", ")}. Nennen Sie am Telefon bitte die vollständige
          Adresse – Stadtteil und Postleitzahl allein genügen für die Einschätzung nicht.
        </p>
      </ContentSection>

      <ContentSection title="Welche Hilfe benötigen Sie?">
        <div>
          {services.map((s, i) => (
            <ServiceRow
              key={s.slug}
              category={l.name}
              title={s.name}
              description={s.heroSub}
              price={priceLabel(s.priceFrom)}
              href={l.indexed ? `/tueroeffnung/${l.slug}/${s.slug}/` : `/leistungen/${s.slug}/`}
              index={i}
            />
          ))}
        </div>
      </ContentSection>

      <Faq
        title={`Fragen zur Türöffnung in ${l.name}`}
        items={[...e.faq.map((f) => ({ q: f.question, a: f.answer })), ...generalFaq.slice(0, 1)]}
      />

      {neighbours.length > 0 && (
        <ContentSection title="Nachbarstädte">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {neighbours.map((n) => (
              <Link
                key={n.slug}
                href={`/tueroeffnung/${n.slug}/`}
                className="text-body-small text-mist hover:text-signal-orange"
              >
                Türöffnung in {n.name} →
              </Link>
            ))}
          </div>
        </ContentSection>
      )}
    </>
  );
}
