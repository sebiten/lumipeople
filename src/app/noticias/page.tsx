import type { Metadata } from "next";
import Noticias from "@/components/Noticias/Noticias";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Noticias, empleo y tendencias de recursos humanos",
  description:
    "Contenido de Lumi People sobre empleo, reclutamiento, entrevistas, curriculum, mineria y tendencias de recursos humanos en Salta.",
  path: "/noticias",
});

export default function NoticiasPage() {
  return <Noticias />;
}
