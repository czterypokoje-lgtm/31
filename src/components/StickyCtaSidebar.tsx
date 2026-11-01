import { CallButton } from "@/components/CallButton";
import { priceLabel } from "@/lib/pricing";

export function StickyCtaSidebar({ priceFrom }: { priceFrom: number | null }) {
  return (
    <aside className="sticky top-20 rounded-sm border border-line bg-navy-surface p-6">
      <p className="text-eyebrow text-signal-orange">Türöffnung anfragen</p>
      <p className="text-price text-frost mt-2">{priceLabel(priceFrom)}</p>
      <div className="mt-4 flex flex-col gap-3">
        <CallButton className="w-full" />
      </div>
      <p className="text-body-small text-mist mt-4">
        Beschreiben Sie am Telefon den Türzustand und Ihre Adresse. Anfahrt, Aufwand und
        Gesamtpreis werden vor dem Auftrag besprochen.
      </p>
    </aside>
  );
}
