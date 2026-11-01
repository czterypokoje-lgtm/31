"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { business } from "@/lib/business";
import styles from "./ServiceHero.module.css";

export type HeroStat = { label: string; value: string; orange?: boolean };

interface ServiceHeroProps {
  headline: string;
  sub: string;
  image: string;
  imageAlt?: string;
  /** Four-cell bar under the hero. Omit to hide it. */
  stats?: HeroStat[];
}

export function ServiceHero({ headline, sub, image, imageAlt = "", stats }: ServiceHeroProps) {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className={styles.bgImage}
      >
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className={styles.bgOverlay} />

      <div className={styles.content}>
        <div className={styles.bottomGrid}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            className={styles.heading}
            // The module sets line-height .85, which clips the dots on uppercase
            // Ä/Ö/Ü. Dutch copy has no umlauts so this never surfaced there. Set
            // inline rather than in the CSS module, which is checksum-locked.
            style={{ lineHeight: 0.95 }}
          >
            {headline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.2 }}
            className={styles.descWrapper}
          >
            <p className={styles.desc}>{sub}</p>
            <div className={styles.buttonGroup}>
              <a href={business.phoneHref} className={styles.primaryButton}>
                {`Anrufen ${business.phone}`}
              </a>
              <Link href="/kontakt" className={styles.secondaryButton}>
                Türöffnung anfragen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {stats && stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.statsRow}
        >
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={stat.orange ? styles.statValueOrange : styles.statValue}>
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
