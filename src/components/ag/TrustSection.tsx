import Image from 'next/image';
import FadeIn from './FadeIn';
import styles from './TrustSection.module.css';
import { business } from '@/lib/business';

const BADGES = [
  {
    title: `FAMILIENBETRIEB SEIT ${business.familyBusinessYears} JAHREN`,
    desc: `${business.name} wird als Familienbetrieb geführt – Inhaber ist ${business.owner}.`,
  },
  {
    title: 'DIREKTER ANSPRECHPARTNER',
    desc: `Sie sprechen am Telefon direkt mit dem Inhaber ${business.owner}, nicht mit einer Zentrale.`,
  },
  {
    title: 'KOSTEN VORAB BESPROCHEN',
    desc: 'Türzustand, Anfahrt und voraussichtlicher Gesamtpreis werden vor der Beauftragung geklärt.',
  },
  {
    title: 'ORTSKENNTNIS',
    desc: `Geschäftsanschrift in ${business.address.city}, Einsätze in der näheren Umgebung.`,
  },
  {
    title: 'TÜRZUSTAND ENTSCHEIDET',
    desc: 'Zugefallene, verriegelte oder defekte Türen werden unterschiedlich behandelt – passend zur Situation.',
  },
];

export default function TrustSection() {
  return (
    <section className={styles.section} aria-label="Vertrauen und Vorgehen">
      <div className={styles.inner}>
        {/* .titleArea is capped at 600px, which left the right half of this row empty.
            Pair it with a photo instead of widening the (checksum-locked) module. */}
        <FadeIn className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className={styles.titleArea}>
            <h2 className={styles.mainTitle}>DIREKT, VOR ORT, OHNE UMWEGE.</h2>
            <p className={styles.description}>
              {`${business.name} ist ein Familienbetrieb in ${business.address.city} und klärt jede Anfrage individuell am Telefon.`}
            </p>
          </div>
          <Image
            src="/demir/schluessel-vermessen.webp"
            alt="Güngör Demir vermisst einen Schlüssel – First Class Key, Sindelfingen"
            width={1400}
            height={2100}
            sizes="(max-width: 1024px) 0px, 360px"
            className="hidden lg:block h-56 w-[360px] shrink-0 border border-line object-cover"
          />
        </FadeIn>

        <div className={styles.badgesGrid}>
          {BADGES.map((b, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className={styles.badgeCard}>
              <span className={styles.badgeTitle}>{b.title}</span>
              <p className={styles.badgeDesc}>{b.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
