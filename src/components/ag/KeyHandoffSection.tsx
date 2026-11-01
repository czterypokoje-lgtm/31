import Image from 'next/image';
import { business } from '@/lib/business';
import FadeIn from './FadeIn';

export default function KeyHandoffSection() {
  return (
    <section className="border-t border-line bg-navy-surface px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/demir/gallery-door.webp"
              alt="Geöffnete Wohnungstür nach der Türöffnung"
              fill
              sizes="500px"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-eyebrow text-signal-orange mb-2">Bis die Tür wieder offen ist</p>
          <h2 className="text-heading-2 text-frost mb-4">Vom Anruf bis zur geöffneten Tür.</h2>
          <p className="text-body text-mist mb-8">
            {`${business.name} bespricht den Türzustand und den voraussichtlichen Gesamtpreis zuerst am Telefon, bevor ein Termin vereinbart wird.`}
          </p>
          <div className="flex gap-10">
            <div>
              <span
                style={{ fontFamily: 'var(--font-big-shoulders)' }}
                className="block text-3xl font-black text-signal-orange"
              >
                {business.address.city}
              </span>
              <span className="text-mono text-mist">Geschäftssitz</span>
            </div>
            <div>
              <span
                style={{ fontFamily: 'var(--font-big-shoulders)' }}
                className="block text-3xl font-black text-signal-orange"
              >
                1
              </span>
              <span className="text-mono text-mist">fester Ansprechpartner</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
