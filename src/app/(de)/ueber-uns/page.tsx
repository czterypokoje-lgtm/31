import Image from "next/image";
import { business } from "@/lib/business";
import { services } from "@/data/lockout";
import { CtaBand } from "@/components/CtaBand";
import { breadcrumbSchema, crumb } from "@/lib/schema";

export const metadata = {
  // The layout template appends " | First Class Key", so don't repeat it here.
  title: "Über uns – Familienbetrieb aus Sindelfingen",
  description:
    "First Class Key ist ein Familienbetrieb aus Sindelfingen – seit 15 Jahren. Inhaber Güngör Demir öffnet Haus- und Wohnungstüren in der Region Stuttgart.",
  alternates: { canonical: "/ueber-uns/" },
};

// Only verified facts. The 15 years is owner-confirmed (2026-11-01, see lib/business.ts);
// job counts, ratings and certifications remain unconfirmed and stay off the site.
const facts = [
  { figure: `${business.familyBusinessYears}`, label: "Jahre Familienbetrieb" },
  { figure: business.address.city, label: "Geschäftsanschrift" },
  { figure: `${services.length}`, label: "Beschriebene Fälle" },
  { figure: "Türöffnung", label: "Arbeitsschwerpunkt" },
];

export default function Page() {
  const items = [crumb("Start", "/"), crumb("Über uns", "/ueber-uns/")];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />

      <section className="px-4 pt-24 pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-display-page text-frost" style={{ lineHeight: 0.95 }}>
            Familien&shy;betrieb.
            <br />
            Seit {business.familyBusinessYears} Jahren.
          </h1>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <blockquote className="border-l-2 border-signal-orange pl-6 text-heading-3 text-frost">
              „Wer bei mir anruft, steht meistens vor der eigenen Tür und möchte zwei Dinge wissen:
              Geht sie auf, und was kostet das?“
            </blockquote>
            <div className="space-y-4 text-body text-mist">
              <p>
                {business.name} ist ein Familienbetrieb aus Sindelfingen und seit{" "}
                {business.familyBusinessYears} Jahren in der Türöffnung tätig. Geführt wird er von{" "}
                {business.owner} – Sie sprechen am Telefon direkt mit dem Inhaber, nicht mit einer
                Vermittlung.
              </p>
              <p>
                {business.owner} ist unter {business.phone} erreichbar. Die Geschäftsanschrift ist{" "}
                {business.address.street}, {business.address.postalCode} {business.address.city}.
                Sie sprechen direkt mit dem Handwerker, der die Arbeit anschließend ausführt – es
                gibt keine Zwischenstelle, die den Auftrag weitervermittelt.
              </p>
              <p>
                Im Mittelpunkt steht die Öffnung von Haus- und Wohnungstüren nach dem Aussperren.
                Welcher Aufwand entsteht, hängt vom Türzustand ab. Deshalb wird am Telefon zuerst
                gefragt, ob die Tür nur zugefallen oder zusätzlich abgeschlossen ist – und erst
                danach über Anfahrt und Kosten gesprochen.
              </p>
              <p>
                Die Fotos auf dieser Website zeigen Güngör Demir und Arbeiten aus seinem
                Arbeitsumfeld. Stadtansichten stammen aus Wikimedia Commons und sind unter{" "}
                <a href="/bildnachweise/" className="underline hover:text-frost">
                  Bildnachweise
                </a>{" "}
                einzeln belegt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(0,420px)_1fr]">
          {/* 2:3 portrait — full width would be enormously tall, so cap the column. */}
          <Image
            src="/demir/inhaber-portrait.webp"
            alt="Güngör Demir, Inhaber von First Class Key, in seiner Werkstatt in Sindelfingen"
            width={1400}
            height={2100}
            sizes="(max-width: 768px) 100vw, 420px"
            className="w-full border border-line object-cover"
          />
          <div>
            <p className="text-eyebrow text-mist">Der Inhaber</p>
            <h2 className="text-heading-2 text-frost mt-2">{business.owner}</h2>
            <p className="text-body text-mist mt-4">
              Werkstatt und Ladengeschäft in Sindelfingen: Schlüsselrohlinge, Fräsmaschine und
              Werkzeug für Türöffnungen. Wer anruft, bekommt den Mann ans Telefon, der danach
              auch vor der Tür steht.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <p
                style={{ fontFamily: "var(--font-big-shoulders)" }}
                className="text-3xl font-black uppercase text-signal-orange sm:text-4xl"
              >
                {f.figure}
              </p>
              <p className="text-eyebrow text-mist mt-2">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
