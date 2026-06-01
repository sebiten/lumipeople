import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Menu } from "lucide-react";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/", text: "Inicio" },
  { href: "/sobrenosotros", text: "Sobre nosotros" },
  { href: "/noticias", text: "Noticias" },
  { href: "/vacantes", text: "Vacantes" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Ir al inicio de Lumi People"
        >
          <Image
            src={siteConfig.brand.logoPath}
            alt="Logo de Lumi People"
            width={85

            }
            height={85}
            priority
            className="h-16 w-16 rounded-xl object-contain"
          />
          <div className="hidden sm:block">


          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-orange-500"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-1 sm:flex">
          <Link
            href={siteConfig.social.instagram}
            target="_blank"
            aria-label="Instagram de Lumi People"
            className="rounded-full p-2 text-slate-600 transition-colors hover:text-orange-500"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            aria-label="LinkedIn de Lumi People"
            className="rounded-full p-2 text-slate-600 transition-colors hover:text-orange-500"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href={siteConfig.social.facebook}
            target="_blank"
            aria-label="Facebook de Lumi People"
            className="rounded-full p-2 text-slate-600 transition-colors hover:text-orange-500"
          >
            <Facebook size={18} />
          </Link>
        </div>

        <details className="md:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-xl border border-slate-200 p-2 text-slate-700 marker:content-none">
            <Menu size={18} />
          </summary>
          <div className="absolute right-4 top-[84px] w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-orange-500"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
