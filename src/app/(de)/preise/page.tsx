import { services } from "@/data/lockout";
import { pricing, priceLabel } from "@/lib/pricing";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";

export const metadata = {
  title: "Kosten der Türöffnung",
  description:
    "Was eine Türöffnung kostet, hängt von Türzustand, Anfahrt, Einsatzzeit und Material ab. Einstieg ab 69 €, alles Weitere wird vor dem Auftrag besprochen.",
  alternates: { canonical: "/preise/" },
};

const stand = new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" });

const priceList = [
  {
    name: "Türöffnung, zugefallene Tür",
    included: "Öffnungsversuch mit dem Ziel, Tür und Schloss unbeschädigt zu lassen",
    price: priceLabel(pricing.entryFrom),
  },
  ...services
    .filter((s) => s.slug !== "wohnungstuer-zugefallen")
    .map((s) => ({ name: s.name, included: s.whatWeDo[0], price: priceLabel(s.priceFrom) })),
  {
    name: "Zylindertausch",
    included: "Material nach Länge, Bauform und Schließfunktion",
    price: priceLabel(pricing.cylinderSwapFrom),
  },
];

const priceFactors = [
  {
    label: "Türzustand",
    body: "Eine nur zugefallene Tür verursacht in der Regel weniger Aufwand als eine abgeschlossene Tür oder ein defektes Schloss.",
  },
  {
    label: "Anfahrt",
    body: "Die Entfernung zwischen der Geschäftsanschrift in Sindelfingen und Ihrer Adresse fließt in den Gesamtpreis ein.",
  },
  {
    label: "Einsatzzeit",
    body: "Tageszeit und Wochentag können sich auf den Preis auswirken. Fragen Sie ausdrücklich nach möglichen Zuschlägen.",
  },
  {
    label: "Material",
    body: "Wird ein Zylinder oder Schloss ersetzt, kommen Materialkosten hinzu. Sie werden vor dem Einbau besprochen.",
  },
];

// The Dutch original lists payment methods here. None of those are verified for this
// business, so this block states how the money question is handled instead.
const processFacts = [
  { label: "Angebot", value: "Vor dem Auftrag besprochen" },
  { label: "Anzahlung", value: "Keine" },
  { label: "Rechnung", value: "Mit einzelnen Positionen" },
  { label: "Zahlungsart", value: "Telefonisch klären" },
];

const pricingFaq = [
  {
    q: "Warum nennen andere Anbieter am Telefon zuerst einen sehr niedrigen Betrag?",
    a: "Häufig ist das nur die Anfahrt oder ein Grundbetrag, nicht der Gesamtpreis. Fragen Sie deshalb immer nach dem Gesamtpreis für Ihren Fall – einschließlich Anfahrt, Einsatzzeit und möglicher Zuschläge.",
  },
  {
    q: "Ist der Einstiegspreis von 69 € ein Festpreis?",
    a: "Nein. Er gilt als Ausgangspunkt für die Öffnung einer zugefallenen Tür. Was Ihr Einsatz insgesamt kostet, hängt von Türzustand, Anfahrt, Einsatzzeit und Material ab und wird vor dem Auftrag besprochen.",
  },
  {
    q: "Was passiert, wenn sich der Aufwand vor Ort anders darstellt?",
    a: "Dann erfahren Sie das mit dem neuen Preis, bevor weitergearbeitet wird. Sie entscheiden, ob der Auftrag so ausgeführt werden soll.",
  },
  {
    q: "Kommen Kosten für Material dazu?",
    a: "Nur wenn tatsächlich Material eingebaut wird, etwa ein neuer Schließzylinder. Länge, Bauform und Ausführung bestimmen den Preis; er wird vor dem Einbau genannt.",
  },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-line bg-night-navy px-4 pt-24 pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-4 text-mono text-mist">
            <p>Preise in Euro, vorab besprochen</p>
            <p>Stand {stand}</p>
          </div>

          <h1 className="text-display-page text-frost mt-6">Preise.</h1>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">
            <p className="text-lead text-mist">
              Für die Öffnung einer zugefallenen Tür liegt der Einstieg bei{" "}
              {pricing.entryFrom} {pricing.symbol}. Jeder weitere Fall hängt vom Türzustand ab.
              Fragen Sie vor der Beauftragung nach einem Angebot einschließlich Anfahrt und
              möglicher Zuschläge – dann gibt es vor Arbeitsbeginn Klarheit.
            </p>
            <dl className="space-y-4">
              {[
                ["Einstiegspreis", priceLabel(pricing.entryFrom)],
                ["Anfahrt", priceLabel(pricing.anfahrt)],
                ["Nacht und Wochenende", priceLabel(pricing.nightSurcharge)],
                ["Anzahlung", "Keine"],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-line pb-3">
                  <dt className="text-eyebrow text-mist">{label}</dt>
                  <dd className="text-heading-4 text-frost mt-1">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-line px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-heading-2 text-frost">Die Liste.</h2>
          <p className="text-body-small text-mist mt-2 max-w-2xl">
            Ausgangswerte für die häufigsten Fälle. Verbindlich wird der Preis, sobald der
            Türzustand besprochen ist.
          </p>

          <div className="mt-8 border-t border-line">
            <div className="hidden gap-4 border-b border-line py-3 text-eyebrow text-mist sm:grid sm:grid-cols-[1fr_1fr_160px]">
              <span>Leistung</span>
              <span>Was dazugehört</span>
              <span className="text-right">Preis</span>
            </div>
            {priceList.map((row) => (
              <div
                key={row.name}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[1fr_1fr_160px] sm:gap-4"
              >
                <p className="text-heading-4 text-frost">{row.name}</p>
                <p className="text-body-small text-mist">{row.included}</p>
                <p className="text-price text-signal-orange sm:text-right">{row.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-heading-2 text-frost">
            Vier Dinge bestimmen den Preis.
            <br />
            Raten gehört nicht dazu.
          </h2>
          <div className="mt-8 border-t border-line">
            {priceFactors.map((f) => (
              <div
                key={f.label}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[240px_1fr] sm:gap-4"
              >
                <p className="text-heading-4 text-frost">{f.label}</p>
                <p className="text-body-small text-mist">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-heading-2 text-frost">Erst besprechen, dann beauftragen.</h2>
          <p className="text-body-small text-mist mt-2 max-w-2xl">
            Sie hören den Preis, bevor jemand losfährt, und entscheiden danach.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processFacts.map((p) => (
              <div key={p.label} className="border border-line bg-navy-surface p-6">
                <p className="text-eyebrow text-mist">{p.label}</p>
                <p className="text-heading-4 text-frost mt-2">{p.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={pricingFaq} title="Kosten, in klaren Worten." />

      <CtaBand />
    </>
  );
}
