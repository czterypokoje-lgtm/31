'use client';

import styles from './TimeLine.module.css';
import { motion } from 'framer-motion';

const STEPS = [
  {
    time: '1',
    counter: 'Schritt 01 von 04',
    heading: 'Anruf und Schilderung der Lage.',
    text: 'Beschreiben Sie am Telefon, welche Tür betroffen ist, ob sie nur zugefallen oder abgeschlossen ist und ob ein Schlüssel innen steckt.',
  },
  {
    time: '2',
    counter: 'Schritt 02 von 04',
    heading: 'Verfügbarkeit und Kosten klären.',
    text: 'Anfahrt, voraussichtlicher Aufwand und Gesamtpreis werden vor der Beauftragung besprochen – abhängig von Türzustand und Adresse.',
  },
  {
    time: '3',
    counter: 'Schritt 03 von 04',
    heading: 'Öffnung vor Ort.',
    text: 'Je nach Türzustand kommt eine schonende Öffnungstechnik oder, bei defektem Schloss, ein Zylindertausch zum Einsatz.',
  },
  {
    time: '4',
    counter: 'Schritt 04 von 04',
    heading: 'Abschluss und Abrechnung.',
    text: 'Der besprochene Gesamtpreis wird nach Abschluss der Arbeiten fällig.',
  },
];

export default function TimeLine() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Ablauf</p>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Von Ihrem Anruf<br />bis zur geöffneten Tür.
            </motion.h2>
          </div>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((step, idx) => (
            <motion.li
              key={step.time}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className={styles.stepTime}>
                <span className={styles.stepClock}>{step.time}</span>
                <span className={styles.stepCounter}>{step.counter}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepHeading}>{step.heading}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
