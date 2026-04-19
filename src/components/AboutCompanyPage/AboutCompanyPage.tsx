import Image from "next/image";
import Link from "next/link";
import { Building2, CircleCheck, Handshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import About from "@/components/About/About";
import { siteConfig } from "@/lib/site";

const logos = [
  "/MARCAS/logo-1.webp",
  "/MARCAS/logo-2.webp",
  "/MARCAS/logo-3.webp",
  "/MARCAS/logo-4.webp",
  "/MARCAS/logo-5.webp",
  "/MARCAS/logo-6.webp",
  "/MARCAS/logo-7.webp",
  "/MARCAS/logo-8.webp",
  "/MARCAS/logo-9.webp",
  "/MARCAS/logo-10.webp",
  "/MARCAS/logo-11.webp",
  "/MARCAS/logo-12.webp",
  "/MARCAS/logo-13.webp",
  "/MARCAS/logo-14.webp",
];

const pillars = [
  "Cercanía en la atención y lectura real de cada necesidad.",
  "Experiencia con proyectos mineros, industriales y de servicios.",
  "Respuesta flexible para operaciones exigentes y equipos diversos.",
];

export default function AboutCompanyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <section className="grid items-center gap-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-[1fr_1fr] lg:p-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            Sobre Lumi People
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
            Un equipo especializado en recursos humanos y soluciones operativas.
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Con casa matriz en México y operación en Argentina, acompañamos a
            empresas que necesitan soporte confiable en reclutamiento,
            administración de personal, logística y servicios complementarios.
          </p>
          <div className="grid gap-3">
            {pillars.map((pillar) => (
              <div key={pillar} className="flex items-start gap-3">
                <CircleCheck className="mt-1 h-5 w-5 text-orange-500" />
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
              <Link href={siteConfig.forms.quote} target="_blank">
                Solicitar presupuesto
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/vacantes">Ver vacantes</Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src="/Aboutus.webp"
            alt="Equipo de Lumi People"
            width={1200}
            height={900}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <Handshake className="h-6 w-6 text-orange-500" />
          <h2 className="mt-4 text-xl font-semibold">Atención personalizada</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Diseñamos cada propuesta según la escala, el rubro y el momento del
            negocio.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <Building2 className="h-6 w-6 text-orange-500" />
          <h2 className="mt-4 text-xl font-semibold">Visión operativa</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Entendemos la dinámica de empresas con procesos intensivos y alta
            exigencia operativa.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <Users className="h-6 w-6 text-orange-500" />
          <h2 className="mt-4 text-xl font-semibold">Equipo multicultural</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Sumamos cercanía humana y capacidad de adaptación para distintos
            contextos de trabajo.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
            Empresas que confiaron en Lumi People
          </h2>
          <p className="mt-2 text-muted-foreground">
            Compartimos marcas y proyectos con los que construimos experiencia
            en la región.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo) => (
            <div
              key={logo}
              className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
            >
              <Image
                src={logo}
                alt="Marca asociada a Lumi People"
                fill
                sizes="(max-width: 768px) 50vw, 14vw"
                className="object-contain p-4"
              />
            </div>
          ))}
        </div>
      </section>

      <About />
    </div>
  );
}
