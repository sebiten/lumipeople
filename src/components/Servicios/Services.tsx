import Image from "next/image";
import { Briefcase, Building, ChefHat, Mountain, Truck, Users } from "lucide-react";

const servicios = [
  {
    id: "headhunting",
    nombre: "Head Hunting y selección",
    descripcion:
      "Búsquedas estratégicas para perfiles técnicos, administrativos y de liderazgo.",
    icono: "/headHunting.webp",
    icon: Briefcase,
  },
  {
    id: "outsourcing",
    nombre: "Outsourcing de personal",
    descripcion:
      "Gestión de personal para que cada cliente concentre recursos en su operación principal.",
    icono: "/outsourcing.webp",
    icon: Users,
  },
  {
    id: "campamentos",
    nombre: "Administración de campamentos",
    descripcion:
      "Coordinación operativa para entornos de alta exigencia y trabajo en altura.",
    icono: "/admdecamp.webp",
    icon: Mountain,
  },
  {
    id: "logistica",
    nombre: "Logística y transporte de personal",
    descripcion:
      "Planificación de traslados y soporte de abastecimiento para operaciones activas.",
    icono: "/logistica.webp",
    icon: Truck,
  },
  {
    id: "catering",
    nombre: "Catering internacional",
    descripcion:
      "Propuestas gastronómicas adaptadas a equipos multiculturales y operaciones remotas.",
    icono: "/catering.webp",
    icon: ChefHat,
  },
  {
    id: "maquinaria",
    nombre: "Alquiler de maquinarias",
    descripcion:
      "Búsqueda y provisión de equipos según la necesidad operativa de cada proyecto.",
    icono: "/alqmaq.webp",
    icon: Building,
  },
];

export default function Servicios() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            Servicios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 md:text-4xl">
            Una propuesta integral para recursos humanos y soporte operativo.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Diseñamos soluciones para empresas que necesitan cobertura confiable,
            tiempos de respuesta ágiles y una ejecución alineada con la realidad
            de sus operaciones.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {servicios.map((servicio) => {
            const Icon = servicio.icon;

            return (
              <article
                key={servicio.id}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={servicio.icono}
                    alt={servicio.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-orange-50 p-3 text-orange-600 dark:bg-orange-950/40 dark:text-orange-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {servicio.nombre}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {servicio.descripcion}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
