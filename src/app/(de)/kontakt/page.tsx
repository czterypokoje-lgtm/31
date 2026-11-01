import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import { pricing } from "@/lib/pricing";
import { MapConsent } from "@/components/MapConsent";
import { breadcrumbSchema, crumb } from "@/lib/schema";

export const metadata = {
  title: "Kontakt und Anfahrt",
  description:
    "Türöffnung bei First Class Key anfragen: Telefonnummer, Geschäftsanschrift in Sindelfingen und was Sie beim Anruf bereithalten sollten.",
  alternates: { canonical: "/kontakt/" },
};

const sayThis = [
  "Ihre vollständige Adresse mit Straße, Hausnummer und Stadtteil",
  "Ob es die Haus- oder die Wohnungstür ist",
  "Ob die Tür nur zugefallen oder zusätzlich abgeschlossen wurde",
  "Ob ein Schlüssel von innen im Schloss steckt",
  "Ob das Schloss hakt, blockiert oder ein Schlüssel abgebrochen ist",
];

export default function Page() {
  const items = [crumb("Start", "/"), crumb("Kontakt", "/kontakt/")];
  const address = `${business.address.street}, ${business.address.postalCode} ${business.address.city}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />

      <section className="relative flex min-h-[70vh] flex-col justify-end border-b border-line px-4 pt-24 pb-10 sm:px-6">
        <Image
          src="/demir/guengoer-demir.jpg"
          alt="Güngör Demir"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-navy/40 to-night-navy/90" />

        <div className="relative mx-auto w-full max-w-5xl">
          <h1
            className="text-display-page text-frost"
            // uppercase Ä/Ö/Ü clip at the display face's default leading
            style={{ lineHeight: 0.95 }}
          >
            Anrufen oder
            <br />
            vorbei&shy;kommen.
          </h1>
          <p className="text-lead text-mist mt-6 max-w-xl md:ml-auto md:text-right">
            Bei einer Türöffnung geht es am schnellsten per Telefon: Sie beschreiben den
            Türzustand, danach lassen sich Anfahrt, Aufwand und Gesamtpreis besprechen.
          </p>

          <div className="mt-10 grid gap-6 border-t border-frost/15 pt-6 sm:grid-cols-2">
            <div>
              <p className="text-eyebrow text-mist">Telefon</p>
              <p
                style={{ fontFamily: "var(--font-big-shoulders)" }}
                className="mt-1 text-2xl font-black uppercase tracking-wide text-frost"
              >
                {business.phoneDisplay}
              </p>
            </div>
            <div>
              <p className="text-eyebrow text-mist">Geschäftsanschrift</p>
              <p
                style={{ fontFamily: "var(--font-big-shoulders)" }}
                className="mt-1 text-2xl font-black uppercase tracking-wide text-frost"
              >
                {business.address.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <p className="text-eyebrow text-signal-orange">Direkt anrufen</p>
              <a
                href={business.phoneHref}
                className="mt-2 block text-4xl font-black text-frost hover:text-signal-orange sm:text-5xl"
                style={{ fontFamily: "var(--font-big-shoulders)" }}
              >
                {business.phoneDisplay}
              </a>
              <p className="text-body text-mist mt-4 max-w-md">
                Sie sprechen direkt mit Güngör Demir. Die Öffnung einer zugefallenen Tür beginnt
                bei {pricing.entryFrom} {pricing.symbol}; was Ihr Einsatz insgesamt kostet, hängt
                vom Türzustand ab und wird vor dem Auftrag besprochen.
              </p>
            </div>

            <div>
              <p className="text-eyebrow text-signal-orange">Das sollten Sie bereithalten</p>
              <ul className="mt-4 space-y-3">
                {sayThis.map((t) => (
                  <li key={t} className="flex gap-3 text-body text-mist">
                    <span className="text-signal-orange" aria-hidden="true">
                      →
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body-small text-mist mt-6">
                Vor der Öffnung ist zu klären, dass Sie zum Betreten der Wohnung berechtigt sind.
                Halten Sie einen Ausweis und möglichst einen Nachweis zur Wohnung bereit.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-sm border border-line bg-navy-surface p-6">
              <h2 className="text-heading-3 text-frost mb-4">Anschrift</h2>
              <address className="text-body text-mist not-italic">
                {business.name}
                <br />
                {business.address.street}
                <br />
                {business.address.postalCode} {business.address.city}
                <br />
                Deutschland
              </address>
              <p className="text-body-small text-mist mt-4">
                Besuche an der Geschäftsanschrift nach Vereinbarung. Für eine Türöffnung rufen Sie
                bitte zuerst an.
              </p>
              <p className="text-mono text-faint mt-4">
                <Link href="/einsatzgebiete/" className="underline hover:text-mist">
                  Entfernungen zu den Städten der Region
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-heading-4 text-frost mb-3">Anfahrt</h2>
              <MapConsent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
