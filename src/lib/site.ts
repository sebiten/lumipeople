export const siteConfig = {
  name: "Lumi People",
  shortName: "Lumi People AR",
  legalName: "Lumi People Argentina",
  description:
    "Consultora de recursos humanos en Salta especializada en reclutamiento, outsourcing, administración de personal y soluciones integrales para empresas mineras, industriales y de servicios.",
  url: "https://www.lumipeoplearg.com",
  locale: "es_AR",
  keywords: [
    "recursos humanos en Salta",
    "consultora de recursos humanos",
    "reclutamiento en Salta",
    "headhunting para minería",
    "outsourcing de personal",
    "administración de campamentos",
    "catering para minería",
    "logística de personal",
    "vacantes en Salta",
    "RRHH para empresas mineras",
    "selección de personal en Salta",
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
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
