import type { Metadata } from "next";
import AboutCompanyPage from "@/components/AboutCompanyPage/AboutCompanyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sobre Lumi People",
  description:
    "Conoce a Lumi People, consultora de recursos humanos con operacion en Salta, experiencia en mineria y soluciones integrales para empresas.",
  path: "/sobrenosotros",
});

export default function AboutUsPage() {
  return <AboutCompanyPage />;
}
