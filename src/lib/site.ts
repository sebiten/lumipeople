export const siteConfig = {
  name: "Lumi People",
  shortName: "Lumi People AR",
  legalName: "Lumi People Argentina",
  description:
    "Consultora de recursos humanos en Salta especializada en reclutamiento, outsourcing, administracion de personal y soluciones integrales para empresas mineras, industriales y de servicios.",
  url: "https://www.lumipeoplearg.com",
  locale: "es_AR",
  language: "es-AR",
  analytics: {
    ga4MeasurementId: "G-L4FMM9C2Q9",
  },
  brand: {
    logoPath: "/lumipeople.png",
    socialImagePath: "/LUMIPEOPLE_abril_24-26.jpg",
  },
  keywords: [
    "recursos humanos en Salta",
    "consultora de recursos humanos",
    "reclutamiento en Salta",
    "headhunting para mineria",
    "outsourcing de personal",
    "administracion de campamentos",
    "catering para mineria",
    "logistica de personal",
    "vacantes en Salta",
    "RRHH para empresas mineras",
    "seleccion de personal en Salta",
    "consultora de empleo en Salta",
  ],
  social: {
    instagram: "https://www.instagram.com/lumipeople.ar/",
    linkedin: "https://www.linkedin.com/company/lumi-people-ar",
    facebook: "https://www.facebook.com/lumipeoplearg",
  },
  forms: {
    quote: "https://forms.gle/RNC5Ez2DrXbjcqsW6",
    vacancies: "https://forms.gle/LWCkjmPSSLx9ZtWa7",
  },
  location: {
    city: "Salta",
    region: "Salta",
    country: "AR",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function canonicalPath(path = "/") {
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

export const socialLinks = [
  { name: "Instagram", href: siteConfig.social.instagram },
  { name: "LinkedIn", href: siteConfig.social.linkedin },
  { name: "Facebook", href: siteConfig.social.facebook },
] as const;
