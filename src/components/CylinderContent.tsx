import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";

/**
 * Full cylinder reference. Renders ONLY on /schliesszylinder/ — the home page and the
 * service pages use CylinderTeaser instead, so this prose exists at exactly one URL.
 *
 * Model names are cited as examples of what gets encountered on a job. Per
 * docs/seo-workflow.md, naming a product is not a claim to stock it, to be an
 * authorised dealer, or to be able to open every example of it.
 */
export function CylinderContent() {
  return (
    <>
      <ContentSection eyebrow="Beispiele" title="ABUS D6X">
        <p>
          Der ABUS D6X ist ein Beispiel für einen Profilzylinder, wie er an Wohnungs- und
          Haustüren verbaut sein kann. Ob ein solcher Zylinder bei Ihrer Tür sitzt und ob ein
          Austausch sinnvoll ist, zeigt sich bei der Prüfung vor Ort. Diese Seite ist kein
          Verkaufsangebot und sagt weder Lagerverfügbarkeit noch einen Preis zu.
        </p>
      </ContentSection>
      <ContentSection title="DOM ix TwinStar">
        <p>
          Der DOM ix TwinStar ist ein Wendeschlüsselsystem und steht hier beispielhaft für eine
          weitere verbreitete Bauform. Für einen Austausch sind Zylinderlänge, Bauform und die
          gewünschte Schließfunktion entscheidend – nicht der Markenname allein.
        </p>
      </ContentSection>
      <ContentSection title="EVVA 4KS">
        <p>
          Der EVVA 4KS ist ein mechanisches System, bei dem Nachbestellungen von Schlüsseln und
          Zylindern an eine Sicherungskarte und eine Legitimation gebunden sein können. Bringen
          Sie eine vorhandene Sicherungskarte zum Termin mit, falls es um einen Austausch geht.
        </p>
      </ContentSection>
    </>
  );
}

/** Short pointer to the hub. Used on the home page and on service pages. */
export function CylinderTeaser() {
  return (
    <section className="border-t border-line px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-eyebrow text-mist">Schließzylinder</p>
        <h2 className="text-heading-3 text-frost mt-2 mb-3">Wenn der Zylinder getauscht wird</h2>
        <p className="text-body text-mist max-w-3xl">
          Für einen Austausch zählen Zylinderlänge, Bauform und Schließfunktion – nicht der
          Markenname. Welche Bauformen bei einer Türöffnung typischerweise vorkommen, ist auf der
          Zylinderseite zusammengefasst.
        </p>
        <Link
          href="/schliesszylinder/"
          className="text-label mt-4 inline-block border-b border-frost font-semibold text-frost hover:border-signal-orange hover:text-signal-orange"
        >
          Schließzylinder im Überblick →
        </Link>
      </div>
    </section>
  );
}
