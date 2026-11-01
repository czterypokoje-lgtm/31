import { Faq } from "@/components/Faq";
import { allFaq } from "@/data/faq";
import { CtaBand } from "@/components/CtaBand";

export const metadata = {
  title: "Fragen zur Türöffnung",
  description:
    "Antworten zu Türzustand, Kosten, Legitimation, Zylindertausch und Schlüsselverlust – die Fragen, die vor einer Türöffnung am häufigsten gestellt werden.",
  alternates: { canonical: "/faq/" },
};

export default function Page() {
  return (
    <>
      <section className="border-b border-line px-4 pt-24 pb-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-eyebrow text-mist">Vor dem Anruf</p>
          <h1 className="text-display-page text-frost mt-2">Häufige Fragen.</h1>
          <p className="text-lead text-mist mt-6 max-w-3xl">
            Die meisten Fragen vor einer Türöffnung drehen sich um denselben Punkt: Welcher
            Türzustand liegt vor, und was bedeutet das für Aufwand und Kosten? Steht Ihre Frage
            nicht dabei, rufen Sie an.
          </p>
        </div>
      </section>

      <Faq title="Alle Fragen" items={allFaq} />

      <CtaBand />
    </>
  );
}
