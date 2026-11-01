import Link from "next/link";
import { business } from "@/lib/business";
import { services } from "@/data/lockout";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy-band">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <svg viewBox="0 0 800 24" className="mb-8 w-full max-w-md text-signal-orange" aria-hidden>
          <path
            d="M4 12h20l4-6 4 6 4-8 4 8 4-6 4 6 4-8 4 8 4-6 4 6h700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <div className="grid grid-cols-2 gap-8 text-body-small md:grid-cols-4">
          <div>
            <p className="mb-2 font-semibold text-signal-orange">Direkte Nummer</p>
            <p className="text-frost">{business.phone}</p>
            <p className="text-mist">{business.email}</p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-signal-orange">Leistungen</p>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/leistungen/${s.slug}/`} className="text-mist hover:text-frost">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold text-signal-orange">Einsatzgebiete</p>
            <ul className="space-y-1">
              <li>
                <Link href="/einsatzgebiete/" className="text-frost font-semibold hover:text-signal-orange">
                  Alle Gebiete
                </Link>
              </li>
              {locations
                .filter((l) => l.pilot)
                .map((l) => (
                  <li key={l.slug}>
                    <Link href={`/tueroeffnung/${l.slug}/`} className="text-mist hover:text-frost">
                      {l.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold text-signal-orange">Unternehmen</p>
            <ul className="space-y-1">
              <li>
                <Link href="/preise/" className="text-mist hover:text-frost">
                  Preise
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns/" className="text-mist hover:text-frost">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="text-mist hover:text-frost">
                  Häufige Fragen
                </Link>
              </li>
              <li>
                <Link href="/kontakt/" className="text-mist hover:text-frost">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/bildnachweise/" className="text-mist hover:text-frost">
                  Bildnachweise
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-mono text-faint">
          {business.name} · {business.address.street} · {business.address.postalCode} {business.address.city}
        </p>

        <div className="mt-4 flex flex-col justify-between gap-2 border-t border-line pt-4 text-mono text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} {business.name}</p>
          <div className="flex gap-4">
            <Link href="/impressum/" className="hover:text-mist">
              Impressum
            </Link>
            <Link href="/datenschutz/" className="hover:text-mist">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>

      <p
        style={{ fontFamily: "var(--font-big-shoulders)" }}
        className="select-none overflow-hidden whitespace-nowrap px-4 pb-4 font-black uppercase leading-[0.8] text-signal-orange text-[16vw] sm:px-6"
        aria-hidden
      >
        {business.name}
      </p>
    </footer>
  );
}
