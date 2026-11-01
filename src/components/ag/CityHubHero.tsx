"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CityHubHero.module.css";

interface CityHubHeroProps {
  nearestName: string;
  nearestKm: number;
  farthestName: string;
  farthestKm: number;
  cityCount: number;
}

export function CityHubHero({
  nearestName,
  nearestKm,
  farthestName,
  farthestKm,
  cityCount,
}: CityHubHeroProps) {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className={styles.bgImage}
      >
        <Image
          src="/demir/werkstatt-schluesselwand.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className={styles.bgOverlay} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={styles.topBar}
      >
        <p className={styles.topMono}>GESCHÄFTSANSCHRIFT IN SINDELFINGEN</p>
        <p className={`${styles.topMono} hidden sm:block text-right`}>
          EINSATZ NACH TELEFONISCHER ABSPRACHE
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
          }}
          className={styles.bottomGrid}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } },
            }}
            className={styles.heading}
            // line-height .95, not the module's tighter value: uppercase Ä/Ö/Ü clip otherwise.
            style={{ lineHeight: 0.95 }}
          >
            {cityCount} STÄDTE.
            <br />
            {nearestKm} BIS {farthestKm} KM.
          </motion.h1>

          <div className={styles.descWrapper}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } },
              }}
              className={styles.descInner}
            >
              <p className={styles.desc}>
                Die Geschäftsanschrift liegt in Sindelfingen. Die folgenden Entfernungen sind
                ungefähre Straßenkilometer ab dort – sie beschreiben die Lage, nicht eine
                zugesagte Anfahrt. Ob Ihr Einsatzort angefahren werden kann, klären Sie am
                Telefon.
              </p>
              <Link href="/kontakt/" className={styles.ctaLink}>
                Einsatzort telefonisch klären
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.2 }}
        className={styles.statsRow}
      >
        <p>NÄCHSTE: {nearestName.toUpperCase()}, {nearestKm} KM</p>
        <p>STANDORT: SINDELFINGEN</p>
        <p>WEITESTE: {farthestName.toUpperCase()}, {farthestKm} KM</p>
        <p>EINSATZ: AUF ANFRAGE</p>
      </motion.div>
    </section>
  );
}
