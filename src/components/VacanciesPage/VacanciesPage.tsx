import Image from "next/image";
import Link from "next/link";
import { FileText, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VacancyCard } from "@/components/VacantesCard/Vacantes";
import { siteConfig } from "@/lib/site";
import { formatVacancyDate, getActiveVacancies } from "@/lib/vacancies";

const recruiters = [
  {
    name: "Maria Jose Ferreyra Gerik",
    role: "Reclutamiento y seleccion",
    image: "/MariaJoseFerryra(recruiter).webp",
    linkedin: "https://www.linkedin.com/in/mariajosegerik/",
  },
  {
    name: "Sofia Ocana",
    role: "Reclutamiento y seleccion",
    image: "/SofiaOcaña(Recruiter).webp",
    linkedin: "https://www.linkedin.com/in/sofia-oca%C3%B1a-800099b9/",
  },
];

export default function VacanciesPage() {
  const vacancies = getActiveVacancies().map((vacancy) => ({
    ...vacancy,
    formattedPublishedAt: formatVacancyDate(vacancy.publishedAt),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <section className="grid items-center gap-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-[1fr_1fr] lg:p-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            Vacantes en Salta
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
            Oportunidades laborales y base de talentos de Lumi People.
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Compartimos busquedas activas para proyectos y empresas clientes.
            Si hoy no encontras tu puesto ideal, tambien podes cargar tu CV para
            futuras convocatorias.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
              <Link href={siteConfig.forms.vacancies} target="_blank">
                Cargar CV
                <FileText className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/noticias">Ver consejos para postulantes</Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src="/cargatucv.webp"
            alt="Postulantes y oportunidades laborales de Lumi People"
            width={1280}
            height={720}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
            Posiciones abiertas
          </h2>
          <p className="text-muted-foreground">
            Listado visible de busquedas activas. Si no hay una vacante
            publicada, solo queda disponible el formulario general de CV.
          </p>
        </div>

        <div className="space-y-4">
          {vacancies.length > 0 ? (
            vacancies.map((vacancy) => (
              <VacancyCard key={vacancy.title} vacante={vacancy} />
            ))
          ) : (
            <article className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-muted-foreground dark:border-slate-700 dark:bg-slate-950">
              No hay vacantes activas vigentes en esta publicacion. Podes dejar
              tu CV en el formulario general para futuras busquedas.
            </article>
          )}
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
            Equipo de reclutamiento
          </h2>
          <p className="mt-2 text-muted-foreground">
            Nuestro equipo acompana busquedas, entrevistas y seguimiento de
            perfiles para distintos sectores.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {recruiters.map((recruiter) => (
            <article
              key={recruiter.name}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="grid sm:grid-cols-[220px_1fr]">
                <div className="relative min-h-[260px]">
                  <Image
                    src={recruiter.image}
                    alt={recruiter.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {recruiter.name}
                  </h3>
                  <p className="mt-2 text-orange-500">{recruiter.role}</p>
                  <Link
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500 dark:text-slate-200"
                    href={recruiter.linkedin}
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                    Ver perfil de LinkedIn
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
