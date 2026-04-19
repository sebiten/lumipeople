import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Mariano Nieva",
    role: "Jefe de RRHH",
    image: "/MarianoNieva.webp",
    linkedin: "https://www.linkedin.com/in/mariano-gast%C3%B3n-nieva-32533442/",
  },
  {
    name: "Celeste Castillo",
    role: "Coordinación de Relaciones Laborales",
    image: "/CelesteCastillo.webp",
    linkedin: "https://www.linkedin.com/in/celestecastillorrhh/",
  },
  {
    name: "Juan Carlos Monzón",
    role: "Liquidación de sueldos",
    image: "/JuanCarlos.webp",
    linkedin: "https://www.linkedin.com/in/juan-carlos-monz%C3%B3n-14207016b/",
  },
  {
    name: "Yael Romano",
    role: "Administración de personal",
    image: "/YaelRomano.webp",
    linkedin: "https://www.linkedin.com/in/yaelromanohr/",
  },
];

export default function Equipo() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            Equipo
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 md:text-4xl">
            Profesionales que acompañan cada búsqueda y cada operación.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Combinamos experiencia en recursos humanos, relaciones laborales y
            administración para dar respuesta a necesidades concretas de cada
            cliente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="grid sm:grid-cols-[220px_1fr]">
                <div className="relative min-h-[320px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-orange-500">{member.role}</p>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500 dark:text-slate-200"
                  >
                    <Linkedin className="h-4 w-4" />
                    Ver perfil en LinkedIn
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
