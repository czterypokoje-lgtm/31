"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { locations } from "@/data/locations";
import styles from "./ArrivalsBoard.module.css";

/**
 * The Dutch original ranks regions by average arrival time. docs/seo-workflow.md
 * forbids claiming arrival times, so this ranks by road distance from the business
 * address instead — a fact about geography rather than a promise about the business.
 *
 * Every rule in the (checksum-locked) CSS module still has a job: .minNumber takes a
 * two-digit figure, .barFill a ratio, .areaSub a comma list, .statusFast/.statusSlow
 * a two-state label.
 */
const THRESHOLD_KM = 60;

export function ArrivalsBoard() {
  const sorted = [...locations].sort((a, b) => a.distanceKm - b.distanceKm);

  return (
    <section className={styles.board}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Entfernungen.</h2>
          <span className={styles.headerSub}>({locations.length})</span>
        </div>
        <p className={styles.intro}>
          Sortiert nach ungefährer Straßenentfernung zur Geschäftsanschrift in Sindelfingen.
          Orange markiert den Nahbereich bis {THRESHOLD_KM} km. Die Entfernung sagt nichts über
          Verfügbarkeit aus – ob eine Anfahrt zu Ihrer Adresse möglich ist, wird telefonisch
          geklärt.
        </p>

        <div className={styles.tableHeader}>
          <span>KM</span>
          <span>STADT UND POSTLEITZAHLEN</span>
          <span>BIS {THRESHOLD_KM} KM</span>
          <span className={styles.tableHeaderRight}>ENTFERNUNG</span>
        </div>

        <ul className={styles.list}>
          {sorted.map((l, i) => {
            const near = l.distanceKm <= THRESHOLD_KM;
            const width = Math.min(100, (l.distanceKm / THRESHOLD_KM) * 100);
            return (
              <motion.li
                key={l.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={styles.listItem}
              >
                <Link href={`/tueroeffnung/${l.slug}/`} className={styles.row}>
                  <div className={styles.minCell}>
                    <span className={styles.minNumber}>{l.distanceKm}</span>
                    <span className={styles.minLabel}>KM</span>
                  </div>
                  <div className={styles.areaCell}>
                    <h3 className={styles.areaName}>{l.name}</h3>
                    <p className={styles.areaSub}>{l.postalCodes.slice(0, 3).join(", ")}</p>
                  </div>
                  <div className={styles.barCell}>
                    <div
                      className={near ? styles.barFill : styles.barFillGray}
                      style={{ width: `${width}%` }}
                    />
                  </div>
                  <div
                    className={`${styles.statusCell} ${near ? styles.statusFast : styles.statusSlow}`}
                  >
                    {near ? "NAHBEREICH" : "WEITER ENTFERNT"}
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <p className={styles.footerText}>
          Ihre Stadt ist nicht dabei? Rufen Sie an und fragen Sie nach – die Liste ist kein
          abschließendes Einsatzgebiet.
        </p>
      </div>
    </section>
  );
}
