import { ContentSection } from "@/components/ContentSection";
import { business } from "@/lib/business";

export const metadata = {
  title: "Impressum",
  description: "Anbieterangaben nach § 5 DDG für First Class Key, Inhaber Güngör Demir, Sindelfingen.",
  alternates: { canonical: "/impressum/" },
};

export default function Page() {
  return (
    <ContentSection title="Angaben zum Anbieter">
      <h1 className="text-heading-3 text-frost">Impressum</h1>

      <h2 className="text-heading-4 text-frost mt-6">Anbieter</h2>
      <p>
        {business.legalName}
        <br />
        {business.address.street}
        <br />
        {business.address.postalCode} {business.address.city}
        <br />
        Deutschland
      </p>

      <h2 className="text-heading-4 text-frost mt-6">Vertreten durch</h2>
      <p>{business.owner}</p>

      <h2 className="text-heading-4 text-frost mt-6">Kontakt</h2>
      <p>
        Telefon: {business.phone}
        <br />
        E-Mail: {business.email}
      </p>

      <h2 className="text-heading-4 text-frost mt-6">Verantwortlich für den Inhalt</h2>
      <p>
        {business.owner}, Anschrift wie oben.
      </p>

      <p className="text-body-small text-mist mt-8">
        Diese Anbieterangaben sind ein Entwurf. Die E-Mail-Adresse, die Umsatzsteuer-Identifikations­nummer
        beziehungsweise Steuernummer, eine etwaige Registereintragung sowie Angaben zur zuständigen
        Aufsichtsbehörde und zur Berufshaftpflichtversicherung müssen vor dem öffentlichen Start
        durch den Betreiber ergänzt und rechtlich geprüft werden.
      </p>
    </ContentSection>
  );
}
