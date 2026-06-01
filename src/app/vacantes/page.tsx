import type { Metadata } from "next";
import VacanciesPage from "@/components/VacanciesPage/VacanciesPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Vacantes abiertas y oportunidades laborales en Salta",
  description:
    "Explora vacantes de Lumi People en Salta y carga tu CV para futuras busquedas en mineria, industria y servicios.",
  path: "/vacantes",
});

export default function VacantesPage() {
  return <VacanciesPage />;
}
