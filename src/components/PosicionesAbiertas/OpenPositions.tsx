import Link from "next/link";
import { ArrowRight, Briefcase, HeartHandshake, Laptop, Users } from "lucide-react";
import { Button } from "../ui/button";

const benefits = [
  { label: "Oportunidades reales", icon: Briefcase },
  { label: "Procesos ágiles", icon: Laptop },
  { label: "Equipo cercano", icon: Users },
  { label: "Impacto positivo", icon: HeartHandshake },
];

export default function OpenPositions() {
  return (
    <section className="px-4 pb-8 pt-10 lg:pb-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-orange-50 px-6 py-10 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            Talento
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 md:text-4xl">
            Vacantes y oportunidades para perfiles que quieren crecer.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Publicamos búsquedas activas y recibimos perfiles para futuras
            convocatorias, especialmente en Salta y en operaciones ligadas a
            minería, industria y servicios.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/60 bg-white/80 p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950/70"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950/40 dark:text-orange-200">
                <Icon className="h-6 w-6" />
              </div>
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
            <Link href="/vacantes">
              Ver posiciones abiertas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
