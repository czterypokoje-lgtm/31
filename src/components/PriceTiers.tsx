import { services } from "@/data/lockout";
import { priceLabel } from "@/lib/pricing";

export function PriceTiers() {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div key={service.slug} className="bg-navy-surface p-6">
          <p className="text-heading-4 text-frost">{service.name}</p>
          <p className="text-body-small text-mist mt-2">{service.whatWeDo[0]}</p>
          <p className="text-price text-signal-orange mt-4">{priceLabel(service.priceFrom)}</p>
        </div>
      ))}
    </div>
  );
}
