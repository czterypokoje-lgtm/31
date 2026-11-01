import { business } from "@/lib/business";

export const SITE_CONFIG = {
  name: business.name,
  domain: `https://${business.domain}`,
  phone: business.phone,
  phoneDisplay: business.phoneDisplay,
  phoneHref: business.phoneHref,
  email: business.email,
  address: {
    street: business.address.street,
    city: business.address.city,
  },
};
