import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Handshake, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { siteConfig } from "@/lib/site";

const highlights = [
  "Atención cercana y seguimiento personalizado.",
  "Experiencia con empresas mineras, industriales y de servicios.",
  "Soluciones adaptadas al ritmo operativo de cada cliente.",
];

export default function About() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/cotizarservicios1.webp"
              alt="Equipo profesional de Lumi People"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image
                src="/cotizarservicios2.webp"
                alt="Servicios corporativos de recursos humanos"
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image
                src="/cotizarservicios3.webp"
                alt="Acompañamiento operativo para empresas"
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-950/40 dark:text-orange-200">
              <Handshake className="h-4 w-4" />
              Socio estratégico en recursos humanos
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 md:text-4xl">
              Acompañamos a cada empresa con una solución humana, operativa y
              medible.
            </h2>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              Trabajamos para que nuestros clientes puedan enfocarse en su
              negocio mientras nosotros resolvemos procesos de talento,
              administración de personal y necesidades complementarias con
              criterio, rapidez y cercanía.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" />
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 text-white">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-orange-300" />
              <div>
                <p className="text-lg font-semibold">Compromiso con la calidad</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Operamos con foco en confianza, comunicación clara y
                  respuesta ágil para proyectos que no pueden detenerse.
                </p>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
            <Link href={siteConfig.forms.quote} target="_blank">
              Solicitar presupuesto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
