"use client";

import { useState } from "react";
import { business } from "@/lib/business";

export function MapConsent() {
  const [consented, setConsented] = useState(false);
  const address = `${business.address.street}, ${business.address.postalCode} ${business.address.city}`;

  if (!consented) {
    return (
      <div className="border border-line bg-navy-surface p-6">
        <p className="text-body-small text-mist mb-4">
          Beim Laden der Karte wird eine Verbindung zu Google Maps hergestellt und Ihre IP-Adresse
          an Google übertragen. Mehr dazu unter{" "}
          <a className="underline" href="/datenschutz/">
            Datenschutz
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setConsented(true)}
          className="rounded-sm bg-signal-orange px-6 py-3 text-on-orange text-label font-semibold"
        >
          Karte laden
        </button>
      </div>
    );
  }

  return (
    <iframe
      title="Anfahrt First Class Key"
      className="w-full aspect-[4/3] border border-line"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
    />
  );
}
