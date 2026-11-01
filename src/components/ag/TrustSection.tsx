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
        <FadeIn>
          <div className={styles.titleArea}>
            <h2 className={styles.mainTitle}>DIREKT, VOR ORT, OHNE UMWEGE.</h2>
            <p className={styles.description}>
              {`${business.name} ist in ${business.address.city} erreichbar und klärt jede Anfrage individuell am Telefon.`}
            </p>
          </div>
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
