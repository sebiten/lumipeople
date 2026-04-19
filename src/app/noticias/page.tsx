import type { Metadata } from "next";
import Noticias from "@/components/Noticias/Noticias";
import { absoluteUrl } from "@/lib/site";

const socialImage = "/LUMIPEOPLE_abril_24-26.jpg";

export const metadata: Metadata = {
  title: "Noticias, empleo y tendencias de recursos humanos",
  description:
    "Contenido de Lumi People sobre empleo, reclutamiento, entrevistas, currículum, minería y tendencias de recursos humanos en Salta.",
  alternates: {
    canonical: "/noticias",
  },
  openGraph: {
    title: "Noticias y blog de Lumi People",
    description:
      "Notas y contenidos sobre empleo, reclutamiento, entrevistas y actualidad empresarial.",
    url: absoluteUrl("/noticias"),
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [socialImage],
  },
};

export default function NoticiasPage() {
  return <Noticias />;
}
