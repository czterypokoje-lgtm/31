import Image from 'next/image';
import { SITE_CONFIG } from './agConfig';
import FadeIn from './FadeIn';
import styles from './SplitPhoneSection.module.css';

export default function SplitPhoneSection() {
  const phoneFormattedLines = SITE_CONFIG.phoneDisplay.split(' ');

  return (
    <section className={styles.section}>
      <div className={styles.imageCol}>
        <Image
          src="/demir/werkstatt.jpg"
          alt="Werkstatt von First Class Key"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textCol}>
        <div className={styles.textInner}>
          <FadeIn>
            <h2 className={styles.title}>IMMER NOCH AUSGESPERRT?</h2>

            {/*
              The module's clamp(6rem, 15vw, 12rem) floor was sized for the Dutch
              number, which splits into 2-character lines. Ours splits into "0172" and
              "1416144", so at narrow widths the 6rem floor overflowed the column by
              ~59px. Lower floor, same upper bound. Inline because the CSS module is
              checksum-locked by scripts/check-site.mjs.
            */}
            <a
              href={SITE_CONFIG.phoneHref}
              /*
                The module's clamp(6rem, 15vw, 12rem) was sized for the Dutch number,
                which splits into 2-character lines; ours splits into "0172" / "1416144".
                Above 992px the module switches to a two-column layout, so the text box
                narrows to ~36vw while vw keeps growing — one value cannot cover both
                sides of that breakpoint, hence the responsive utilities. They carry `!`
                because the checksum-locked CSS module would otherwise win.
              */
              className={`${styles.massivePhone} text-[clamp(3.2rem,13vw,20rem)]! min-[992px]:text-[7.3vw]! min-[1600px]:text-[7.2rem]!`}
            >
              {phoneFormattedLines.map((line, idx) => (
                <span key={idx} className={styles.phoneLine}>{line}</span>
              ))}
            </a>
          </FadeIn>

          <div className={styles.bottomMeta}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>ANFRAGE</span>
              <span className={styles.metaValue}>Telefonisch</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>STANDORT</span>
              <span className={styles.metaValue}>
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}
              </span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>EINSATZGEBIET</span>
              <span className={styles.metaValue}>Sindelfingen und Umgebung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
