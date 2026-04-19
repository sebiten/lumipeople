import type { Metadata } from "next";
import VacanciesPage from "@/components/VacanciesPage/VacanciesPage";
import { absoluteUrl } from "@/lib/site";

const socialImage = "/LUMIPEOPLE_abril_24-26.jpg";

export const metadata: Metadata = {
  title: "Vacantes abiertas y oportunidades laborales en Salta",
  description:
    "Explorá vacantes de Lumi People en Salta y cargá tu CV para futuras búsquedas en minería, industria y servicios.",
  alternates: {
    canonical: "/vacantes",
  },
  openGraph: {
    title: "Vacantes abiertas | Lumi People",
    description:
      "Búsquedas laborales activas y base de talentos para oportunidades en Salta.",
    url: absoluteUrl("/vacantes"),
    images: [socialImage],
  },
};

export default function VacantesPage() {
  return <VacanciesPage />;
}
