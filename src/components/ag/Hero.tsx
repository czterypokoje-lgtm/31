'use client';

import Link from 'next/link';
import { SITE_CONFIG } from './agConfig';
import styles from './Hero.module.css';
import { motion, type Variants } from 'framer-motion';

interface HeroProps {
  city?: string;
  heroImage?: string;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 100 },
  },
};

export default function Hero({ city, heroImage }: HeroProps) {
  const displayCity = city ?? 'Sindelfingen';

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className={styles.bgImage}
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden="true"
          />
        )}
        <div className={styles.bgOverlay} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={styles.badge}
        aria-label="Anfrage zur Türöffnung"
      >
        <span className={styles.liveDot} aria-hidden="true" />
        {`Anfrage zur Türöffnung in ${displayCity}`}
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.bottomGrid}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* line-height .95, not the module's .85: uppercase Ä/Ö/Ü clip at .85. */}
          <motion.h1 variants={fadeUpVariant} className={styles.heading} style={{ lineHeight: 0.95 }}>
            {/* Soft hyphen: the module sets overflow-wrap:break-word, which otherwise
                splits "WOHNUNGSTÜR" mid-word as "WOHNUNGSTÜ / R". */}
            Wohnungs&shy;tür zu?<br />Hilfe beim Öffnen.
          </motion.h1>
          <div className={styles.descWrapper}>
            <motion.div variants={fadeUpVariant} className={styles.descInner}>
              <p className={styles.desc}>
                Zugefallene Tür, abgeschlossenes Schloss oder Schlüssel innen steckend – in{' '}
                {displayCity} und Umgebung. Verfügbarkeit, Anfahrt und Kosten werden am Telefon
                besprochen.
              </p>
              <Link href="/kontakt" className={styles.ctaLink}>
                Türöffnung anfragen
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.phoneContainer}
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring', bounce: 0.2 }}
      >
        {/*
          The module's clamp(6.5rem, 24vw, 24rem) is tuned to the Dutch number's length;
          at 24vw this string renders ~115vw wide and gets clipped by the container's
          overflow:hidden. The container is 100% wide with 5% padding each side, so a
          plain vw value (no clamp) fills exactly 90vw at every viewport width —
          mobile, tablet and desktop alike. Set inline because the CSS module is
          checksum-locked by scripts/check-site.mjs.
        */}
        <a
          href={SITE_CONFIG.phoneHref}
          className={styles.phoneNumber}
          style={{ fontSize: "17.8vw" }}
          aria-label={`Jetzt anrufen: ${SITE_CONFIG.phoneDisplay}`}
        >
          {SITE_CONFIG.phoneDisplay}
        </a>
      </motion.div>
    </section>
  );
}
