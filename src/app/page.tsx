import type { Metadata } from "next";
import About from "@/components/About/About";
import Equipo from "@/components/Equipo/Equipo";
import Hero from "@/components/Hero/Hero";
import OpenPositions from "@/components/PosicionesAbiertas/OpenPositions";
import Servicios from "@/components/Servicios/Services";
import { buildPageMetadata, getOrganizationSchema } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Recursos Humanos en Salta para Empresas y Proyectos",
  description:
    "Lumi People ofrece reclutamiento, outsourcing, administracion de personal y soporte operativo para empresas en Salta, con foco en mineria, industria y servicios.",
  path: "/",
});

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: siteConfig.language,
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
      image: absoluteUrl(siteConfig.brand.socialImagePath),
      serviceType: [
        "Reclutamiento y seleccion",
        "Outsourcing de personal",
        "Administracion de personal",
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
