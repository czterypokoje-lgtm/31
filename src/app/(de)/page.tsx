import Link from "next/link";
import Hero from "@/components/ag/Hero";
import MarqueeBanner from "@/components/ag/MarqueeBanner";
import PhotoGrid from "@/components/ag/PhotoGrid";
import ServiceRow from "@/components/ag/ServiceRow";
import TimeLine from "@/components/ag/TimeLine";
import TrustSection from "@/components/ag/TrustSection";
import KeyHandoffSection from "@/components/ag/KeyHandoffSection";
import SplitPhoneSection from "@/components/ag/SplitPhoneSection";
import { ContentSection } from "@/components/ContentSection";
import { CylinderTeaser } from "@/components/CylinderContent";
import { PriceTiers } from "@/components/PriceTiers";
import { Faq } from "@/components/Faq";
import { services } from "@/data/lockout";
import { generalFaq } from "@/data/faq";
import { priceLabel } from "@/lib/pricing";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero city="Sindelfingen" heroImage="/demir/tueroeffnung.jpg" />
      <MarqueeBanner />
      <PhotoGrid />

      <ContentSection eyebrow="Wohnungstür zu?" title="Hilfe, wenn Sie vor der Tür stehen.">
        <p>
          Der Schlüssel liegt drinnen, die Tür ist zugefallen oder das Schloss lässt sich nicht
          mehr bedienen: First Class Key ist Ihr Ansprechpartner für die Anfrage einer Türöffnung.
          Beschreiben Sie am Telefon die Situation. So können Verfügbarkeit, Anfahrt und
          voraussichtlicher Aufwand geklärt werden.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Was wir tun" title="Türöffnung für Haus und Wohnung">
        <div>
          {services.map((s, i) => (
            <ServiceRow
              key={s.slug}
              category="Leistung"
              title={s.name}
              description={s.heroSub}
              price={priceLabel(s.priceFrom)}
              href={`/leistungen/${s.slug}/`}
              index={i}
            />
          ))}
        </div>
      </ContentSection>

      <TimeLine />

      <ContentSection eyebrow="Transparente Kosten" title="Vor dem Auftrag Klarheit schaffen.">
        <PriceTiers />
        <p className="text-body-small text-mist mt-6">
          Türzustand, Anfahrt, Einsatzzeit und Material bestimmen den Gesamtpreis. Er wird vor
          dem Auftrag besprochen.{" "}
          <Link href="/preise/" className="text-frost underline hover:text-signal-orange">
            Mehr zu den Kosten →
          </Link>
        </p>
      </ContentSection>

      <CylinderTeaser />
      <TrustSection />
      <KeyHandoffSection />
      <Faq title="Fragen zur Türöffnung" items={generalFaq} />
      <SplitPhoneSection />
    </>
  );
}
