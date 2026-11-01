import Link from "next/link";
import { business } from "@/lib/business";
import { pricing } from "@/lib/pricing";

export function CtaBand() {
  return (
    <section className="border-t border-line bg-signal-orange px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-mono text-navy-band">
        <p>Noch ausgesperrt?</p>
        <p>Familienbetrieb aus Sindelfingen</p>
      </div>

      <a
        href={business.phoneHref}
        style={{ fontFamily: "var(--font-big-shoulders)" }}
        className="mx-auto mt-4 block max-w-5xl font-black uppercase leading-[0.85] tracking-tight text-navy-band text-[13vw] sm:text-[9vw] lg:text-[6rem]"
      >
        {business.phoneDisplay}
      </a>

      <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-between gap-4 border-t border-navy-band/20 pt-4">
        <p className="text-body-small text-navy-band max-w-xl">
          Türöffnung einer zugefallenen Tür ab {pricing.entryFrom} {pricing.symbol}. Anfahrt,
          Einsatzzeit und Material werden vor dem Auftrag besprochen.
        </p>
        <div className="flex gap-6 text-label font-semibold text-navy-band underline">
          <Link href="/kontakt/">Kontakt aufnehmen</Link>
          <Link href="/preise/">Zu den Kosten</Link>
        </div>
      </div>
    </section>
  );
}
