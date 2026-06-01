import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import type { Vacancy } from "@/lib/vacancies";

type VacancyCardProps = {
  vacante: Vacancy & {
    formattedPublishedAt: string;
  };
};

export function VacancyCard({ vacante }: VacancyCardProps) {
  return (
    <article className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {vacante.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-500" />
              {vacante.location}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-orange-500" />
              Publicada el {vacante.formattedPublishedAt}
            </span>
          </div>
        </div>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
          {vacante.description}
        </p>
      </div>

      <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
        <Link href={vacante.applyUrl} target="_blank">
          Postularme
        </Link>
      </Button>
    </article>
  );
}
