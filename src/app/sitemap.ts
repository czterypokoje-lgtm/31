import type { MetadataRoute } from "next";
import { services } from "@/data/lockout";
import { indexedLocations } from "@/data/locations";
import { business } from "@/lib/business";

const base = `https://${business.domain}`;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/leistungen",
    "/preise",
    "/einsatzgebiete",
    "/schliesszylinder",
    "/ueber-uns",
    "/kontakt",
    "/faq",
    "/impressum",
    "/datenschutz",
    "/bildnachweise",
  ];

  const servicePaths = services.map((s) => `/leistungen/${s.slug}`);

  // Only cities whose coverage is confirmed (noindex: false in
  // data/location-editorial.json) ever reach the sitemap.
  const cityPaths = indexedLocations.map((l) => `/tueroeffnung/${l.slug}`);

  const cityServicePaths = indexedLocations.flatMap((l) =>
    services.filter((s) => s.isCallout).map((s) => `/tueroeffnung/${l.slug}/${s.slug}`)
  );

  return [...staticPaths, ...servicePaths, ...cityPaths, ...cityServicePaths].map((path) => ({
    url: `${base}${path}/`.replace(/\/\/$/, "/"),
    lastModified: new Date(),
  }));
}
