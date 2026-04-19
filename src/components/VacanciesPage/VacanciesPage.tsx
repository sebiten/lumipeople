import Image from "next/image";
import Link from "next/link";
import { FileText, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VacancyCard } from "@/components/VacantesCard/Vacantes";
import { siteConfig } from "@/lib/site";

const vacancies = [
  {
    titulo: "Operador de Autoelevador",
    localidad: "Salta, Argentina",
    descripcion:
      "Búsqueda orientada a perfiles con certificado para operar autoelevadores, licencia E2 vigente y disponibilidad para trabajar en roster.",
    fecha: "13/09/2024",
    url: "https://forms.gle/LWCkjmPSSLx9ZtWa7",
  },
  {
    titulo: "Chofer de camiones",
    localidad: "Salta, Argentina",
    descripcion:
      "Perfil con experiencia en carga, descarga y transporte de mercancías peligrosas. Se requiere licencia E1 y carnet de INTI.",
    fecha: "13/09/2024",
    url: "https://forms.gle/qH9Q5wDrpSmETfdh7",
  },
  {
    titulo: "Operador de Muestreo",
    localidad: "Salta, Argentina",
    descripcion:
      "Vacante para perfiles con experiencia en minería, control de materiales y toma de muestras de producción.",
    fecha: "13/09/2024",
    url: "https://forms.gle/PyfDHN692LpLJ1xJA",
  },
  {
    titulo: "Ayudante de Cocina",
    localidad: "Salta, Argentina",
    descripcion:
      "Convocatoria para ayudante de cocina con formación en gastronomía y carnet de manipulación para asistencia a chef internacional.",
    fecha: "13/09/2024",
    url: "https://forms.gle/VgvZrcpxb5AD4rKr5",
  },
  {
    titulo: "Controlador de Materia Prima",
    localidad: "Salta, Argentina",
    descripcion:
      "Rol enfocado en conexiones de cañería, control de ingresos y egresos de materia prima y seguimiento operativo.",
    fecha: "13/09/2024",
    url: "https://forms.gle/qxLijoxZuzapoX926",
  },
  {
    titulo: "Ingeniero Civil, Industrial o Arquitecto",
    localidad: "Salta, Argentina",
    descripcion:
      "Oportunidad para profesionales con experiencia en minería o construcción para análisis técnico y revisión de planos.",
    fecha: "13/09/2024",
    url: "https://forms.gle/fj94LjmbUj9824XN7",
  },
  {
    titulo: "Analista de Higiene y Seguridad",
    localidad: "Salta, Argentina",
    descripcion:
      "Perfil con experiencia en normativa vigente, supervisión de obra y capacitación de personal en campo.",
    fecha: "13/09/2024",
    url: "https://forms.gle/rLoc3Tkiqv3VGV7y9",
  },
  {
    titulo: "Chofer de pasajeros",
    localidad: "Salta, Argentina",
    descripcion:
      "Búsqueda para traslado de personal desde Salta a proyectos. Requiere licencia D3 y experiencia en puna.",
    fecha: "13/09/2024",
    url: "https://forms.gle/SsVqoP1f8B8Nty3H6",
  },
  {
    titulo: "Ingeniero Mecánico",
    localidad: "Salta, Argentina",
    descripcion:
      "Rol para liderar proyectos con experiencia en dibujo técnico, Autocad y Solidworks.",
    fecha: "13/09/2024",
    url: "https://forms.gle/4PtpktRz8UpfWsVW8",
  },
  {
    titulo: "Traductor coreano-español",
    localidad: "Salta, Argentina",
    descripcion:
      "Convocatoria para traductores coreano-español con interés en acompañar operaciones de empresa minera.",
    fecha: "13/09/2024",
    url: "https://forms.gle/4PtpktRz8UpfWsVW8",
  },
];

const recruiters = [
  {
    name: "María José Ferreyra Gerik",
    role: "Reclutamiento y selección",
    image: "/MariaJoseFerryra(recruiter).webp",
    linkedin: "https://www.linkedin.com/in/mariajosegerik/",
  },
  {
    name: "Sofía Ocaña",
    role: "Reclutamiento y selección",
    image: "/SofiaOcaña(Recruiter).webp",
    linkedin: "https://www.linkedin.com/in/sofia-oca%C3%B1a-800099b9/",
  },
];

export default function VacanciesPage() {
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
            Compartimos búsquedas activas para proyectos y empresas clientes.
            Si hoy no encontrás tu puesto ideal, también podés cargar tu CV para
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
            Listado actualizado de búsquedas activas. Para encontrar un puesto
            puntual podés usar la búsqueda del navegador.
          </p>
        </div>

        <div className="space-y-4">
          {vacancies.map((vacancy) => (
            <VacancyCard key={vacancy.titulo} vacante={vacancy} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
            Equipo de reclutamiento
          </h2>
          <p className="mt-2 text-muted-foreground">
            Nuestro equipo acompaña búsquedas, entrevistas y seguimiento de
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
