import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Newspaper } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-black/5 bg-slate-50/80 dark:bg-slate-950/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={siteConfig.brand.logoPath}
              alt="Logo de Lumi People"
              width={72}
              height={72}
              className="h-14 w-14 rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-bold">{siteConfig.name}</p>
              <p className="text-sm text-muted-foreground">
                Soluciones integrales de recursos humanos para empresas.
              </p>
            </div>
          </Link>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Acompañamos procesos de reclutamiento, administración de personal,
            outsourcing y soporte operativo con foco en empresas de Salta y el
            norte argentino.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Salta, Argentina
            </span>
            <Link
              href="/noticias"
              className="flex items-center gap-2 transition-colors hover:text-orange-500"
            >
              <Newspaper size={16} />
              Noticias y contenido útil
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100">
            Navegación
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-orange-500">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/sobrenosotros"
                className="transition-colors hover:text-orange-500"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/vacantes"
                className="transition-colors hover:text-orange-500"
              >
                Vacantes
              </Link>
            </li>
            <li>
              <Link
                href="/noticias"
                className="transition-colors hover:text-orange-500"
              >
                Blog y novedades
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100">
            Canales
          </h2>
          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              aria-label="LinkedIn de Lumi People"
              className="rounded-full border border-slate-200 p-2 text-slate-600 transition-colors hover:text-orange-500 dark:border-slate-800 dark:text-slate-300"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              aria-label="Instagram de Lumi People"
              className="rounded-full border border-slate-200 p-2 text-slate-600 transition-colors hover:text-orange-500 dark:border-slate-800 dark:text-slate-300"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href={siteConfig.social.facebook}
              target="_blank"
              aria-label="Facebook de Lumi People"
              className="rounded-full border border-slate-200 p-2 text-slate-600 transition-colors hover:text-orange-500 dark:border-slate-800 dark:text-slate-300"
            >
              <Facebook size={18} />
            </Link>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Presupuestos, consultas comerciales y convocatorias abiertas desde
            nuestros formularios y redes oficiales.
          </p>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.legalName}. Todos los derechos reservados.</p>
          <p>Dominio oficial: {siteConfig.url.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
