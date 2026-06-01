import getFormattedDate from "@/lib/getFormattedDate";
import { siteConfig } from "@/lib/site";

export type Vacancy = {
  title: string;
  location: string;
  description: string;
  applyUrl: string;
  publishedAt: string;
  expiresAt?: string;
};

const rawVacancies: Vacancy[] = [
  {
    title: "Operador de Autoelevador",
    location: "Salta, Argentina",
    description:
      "Busqueda orientada a perfiles con certificado para operar autoelevadores, licencia E2 vigente y disponibilidad para trabajar en roster.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: siteConfig.forms.vacancies,
  },
  {
    title: "Chofer de camiones",
    location: "Salta, Argentina",
    description:
      "Perfil con experiencia en carga, descarga y transporte de mercancias peligrosas. Se requiere licencia E1 y carnet de INTI.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/qH9Q5wDrpSmETfdh7",
  },
  {
    title: "Operador de Muestreo",
    location: "Salta, Argentina",
    description:
      "Vacante para perfiles con experiencia en mineria, control de materiales y toma de muestras de produccion.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/PyfDHN692LpLJ1xJA",
  },
  {
    title: "Ayudante de Cocina",
    location: "Salta, Argentina",
    description:
      "Convocatoria para ayudante de cocina con formacion en gastronomia y carnet de manipulacion para asistencia a chef internacional.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/VgvZrcpxb5AD4rKr5",
  },
  {
    title: "Controlador de Materia Prima",
    location: "Salta, Argentina",
    description:
      "Rol enfocado en conexiones de caneria, control de ingresos y egresos de materia prima y seguimiento operativo.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/qxLijoxZuzapoX926",
  },
  {
    title: "Ingeniero Civil, Industrial o Arquitecto",
    location: "Salta, Argentina",
    description:
      "Oportunidad para profesionales con experiencia en mineria o construccion para analisis tecnico y revision de planos.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/fj94LjmbUj9824XN7",
  },
  {
    title: "Analista de Higiene y Seguridad",
    location: "Salta, Argentina",
    description:
      "Perfil con experiencia en normativa vigente, supervision de obra y capacitacion de personal en campo.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/rLoc3Tkiqv3VGV7y9",
  },
  {
    title: "Chofer de pasajeros",
    location: "Salta, Argentina",
    description:
      "Busqueda para traslado de personal desde Salta a proyectos. Requiere licencia D3 y experiencia en puna.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/SsVqoP1f8B8Nty3H6",
  },
  {
    title: "Ingeniero Mecanico",
    location: "Salta, Argentina",
    description:
      "Rol para liderar proyectos con experiencia en dibujo tecnico, Autocad y Solidworks.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/4PtpktRz8UpfWsVW8",
  },
  {
    title: "Traductor coreano-espanol",
    location: "Salta, Argentina",
    description:
      "Convocatoria para traductores coreano-espanol con interes en acompanar operaciones de empresa minera.",
    publishedAt: "2024-09-13",
    expiresAt: "2024-12-31",
    applyUrl: "https://forms.gle/4PtpktRz8UpfWsVW8",
  },
];

export function isVacancyActive(vacancy: Vacancy, today = new Date()) {
  if (!vacancy.expiresAt) return true;

  const expiresAt = new Date(`${vacancy.expiresAt}T23:59:59.999Z`);
  return expiresAt.getTime() >= today.getTime();
}

export function getActiveVacancies(today = new Date()) {
  return rawVacancies.filter((vacancy) => isVacancyActive(vacancy, today));
}

export function formatVacancyDate(date: string) {
  return getFormattedDate(date);
}
