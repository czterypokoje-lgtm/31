import Link from 'next/link';
import styles from './PhotoGrid.module.css';

const PHOTOS = [
  {
    image: '/demir/tueroeffnung.jpg',
    caption: 'Türöffnung bei zugefallener oder verriegelter Tür',
    href: '/leistungen/wohnungstuer-zugefallen/',
  },
  {
    image: '/demir/schlossarbeit.jpg',
    caption: 'Arbeit am Türschloss vor Ort',
    href: '/leistungen/tuer-abgeschlossen/',
  },
  {
    image: '/demir/schliesszylinder.jpg',
    caption: 'Schließzylinder als Beispiel für eine Bauform',
    href: '/schliesszylinder/',
  },
  {
    image: '/demir/werkstatt.jpg',
    caption: 'Werkstatt und Arbeitsumfeld von First Class Key',
    href: '/ueber-uns/',
  },
];

export default function PhotoGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>
        {PHOTOS.map((photo, i) => (
          <Link
            key={i}
            href={photo.href}
            className={styles.item}
            style={{ backgroundImage: `url(${photo.image})` }}
          >
            <div className={styles.overlay} />
            <div className={styles.caption}>{photo.caption}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
