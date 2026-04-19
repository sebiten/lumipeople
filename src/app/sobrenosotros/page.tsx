import type { Metadata } from "next";
import AboutCompanyPage from "@/components/AboutCompanyPage/AboutCompanyPage";
import { absoluteUrl } from "@/lib/site";

const socialImage = "/LUMIPEOPLE_abril_24-26.jpg";

export const metadata: Metadata = {
  title: "Sobre Lumi People",
  description:
    "Conocé a Lumi People, consultora de recursos humanos con operación en Salta, experiencia en minería y soluciones integrales para empresas.",
  alternates: {
    canonical: "/sobrenosotros",
  },
  openGraph: {
    title: "Sobre Lumi People",
    description:
      "Equipo, experiencia y propuesta de valor de Lumi People para empresas en Salta y la región.",
    url: absoluteUrl("/sobrenosotros"),
    images: [socialImage],
  },
};

export default function AboutUsPage() {
  return <AboutCompanyPage />;
}
