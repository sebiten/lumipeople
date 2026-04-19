import type { Metadata } from "next";
import About from "@/components/About/About";
import Equipo from "@/components/Equipo/Equipo";
import Hero from "@/components/Hero/Hero";
import OpenPositions from "@/components/PosicionesAbiertas/OpenPositions";
import Servicios from "@/components/Servicios/Services";
import { absoluteUrl, siteConfig } from "@/lib/site";

const socialImage = "/LUMIPEOPLE_abril_24-26.jpg";

export const metadata: Metadata = {
  title: "Recursos Humanos en Salta para Empresas y Proyectos",
  description:
    "Lumi People ofrece reclutamiento, outsourcing, administración de personal y soporte operativo para empresas en Salta, con foco en minería, industria y servicios.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumi People | Recursos Humanos en Salta para Empresas y Proyectos",
    description:
      "Consultora de recursos humanos en Salta especializada en reclutamiento, outsourcing, administración de personal y soluciones operativas.",
    url: siteConfig.url,
    images: [
      {
        url: socialImage,
        alt: "Lumi People en Salta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumi People | Recursos Humanos en Salta",
    description:
      "Servicios de reclutamiento, outsourcing y administración de personal para empresas.",
    images: [socialImage],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: absoluteUrl("/lumipeople.png"),
      sameAs: Object.values(siteConfig.social),
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "es-AR",
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.name,
      description: siteConfig.description,
      areaServed: ["Salta", "Argentina"],
      url: siteConfig.url,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      serviceType: [
        "Reclutamiento y selección",
        "Outsourcing de personal",
        "Administración de personal",
        "Soporte operativo para empresas",
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <About />
      <Servicios />
      <Equipo />
      <OpenPositions />
    </div>
  );
}
