import BlogCard from "../BlogCard/BlogCard";

const featuredPosts = [
  {
    imgSrc: "/LumiPeopleArgentinaMining2024.webp",
    title: "Lumi People será sponsor Copper en Argentina Mining 2024 en Salta",
    text: "Participación de Lumi People en uno de los eventos más relevantes para la industria minera y sus proveedores en la región.",
    id: "lumipeople-sponsor-de-copper-en-argentina-mining",
  },
  {
    imgSrc: "/ComoelaborarCV.webp",
    title: "Cómo elaborar un buen currículum",
    text: "Guía práctica para mejorar tu CV y aumentar tus chances de avanzar en un proceso de selección.",
    id: "como-elaborar-un-buen-curriculum",
  },
  {
    imgSrc: "/EntrevistaVirtual.webp",
    title: "Cómo prepararse para una entrevista virtual",
    text: "Consejos concretos para llegar mejor preparado a una entrevista remota.",
    id: "como-preparase-para-una-entrevista-virtual",
  },
  {
    imgSrc: "/Networking.webp",
    title: "Cómo realizar networking",
    text: "Buenas prácticas para construir vínculos profesionales y abrir oportunidades.",
    id: "como-realizar-networking",
  },
  {
    imgSrc: "/Redessocialestrabajo.webp",
    title: "¿En qué redes sociales buscan los reclutadores?",
    text: "Qué plataformas miran los reclutadores y cómo mejorar tu presencia digital.",
    id: "en-que-redes-buscan-los-reclutadores",
  },
  {
    imgSrc: "/HabilidadesHard.webp",
    title: "Las habilidades hard más valoradas en la actualidad",
    text: "Competencias técnicas que hoy tienen más peso en búsquedas laborales y procesos de selección.",
    id: "habilidades-hard",
  },
  {
    imgSrc: "/HabilidadesSoft.webp",
    title: "Las habilidades soft más valoradas en la actualidad",
    text: "Comunicación, liderazgo y adaptabilidad: qué miran las empresas al evaluar talento.",
    id: "habilidades-soft",
  },
  {
    imgSrc: "/Perfilesmasdemandados.webp",
    title: "Perfiles más demandados en la industria minera",
    text: "Un panorama de los perfiles que hoy muestran mayor demanda en proyectos mineros.",
    id: "perfiles-mas-demandados-en-la-industria",
  },
  {
    imgSrc: "/EntrevistaPresencial.webp",
    title: "Cómo prepararse para una entrevista presencial",
    text: "Aspectos clave para transmitir una buena imagen y responder con seguridad.",
    id: "como-preparase-para-una-entrevista-presencial",
  },
];

export default function Noticias() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
          Noticias y contenidos
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
          Blog de Lumi People sobre empleo, talento y actualidad empresarial.
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Publicamos novedades de la empresa, participación en eventos y
          contenido útil para postulantes, reclutadores y empresas que buscan
          mejorar sus procesos de personas.
        </p>
      </div>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
            Videos destacados
          </h2>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-black pt-[56.25%] shadow-sm dark:border-slate-800">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.youtube.com/embed/vhQzavbDAMw?si=xTOXMkSoorNhfw5r"
              title="Video institucional de Lumi People"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
            Más contenido
          </h2>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-black pt-[56.25%] shadow-sm dark:border-slate-800">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.youtube.com/embed/tG6i1Q4hOiY?si=KB32mnkwW5R0z__R"
              title="Consejos laborales de Lumi People"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-black pt-[56.25%] shadow-sm dark:border-slate-800">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.youtube.com/embed/P2v0UxmhUpw?si=yUVoy-W8jxqh-xms"
              title="Entrevistas y oportunidades con Lumi People"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredPosts.slice(2).map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </section>
    </div>
  );
}
