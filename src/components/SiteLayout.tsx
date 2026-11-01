import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { business } from "@/lib/business";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { localBusinessSchema } from "@/lib/schema";
import "../app/globals.css";

export const baseMetadata: Metadata = {
  metadataBase: new URL(`https://${business.domain}`),
  title: {
    default: `${business.name} – Türöffnung in Sindelfingen`,
    template: `%s | ${business.name}`,
  },
  description:
    "Wohnungstür zugefallen oder abgeschlossen? First Class Key ist Ihr Ansprechpartner für die Türöffnung in Sindelfingen und Umgebung – Familienbetrieb seit 15 Jahren. Verfügbarkeit und Kosten klären Sie telefonisch.",
};

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
