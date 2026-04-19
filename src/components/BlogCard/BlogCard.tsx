import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  imgSrc: string;
  title: string;
  text: string;
  id: string;
}

export default function BlogCard({ imgSrc, title, text, id }: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
      <Link href={`/articulo/${id}`} className="block h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-3 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Blog Lumi People
          </p>
          <h3 className="text-xl font-bold leading-snug text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {text}
          </p>
          <p className="text-sm font-semibold text-orange-500">
            Leer artículo completo
          </p>
        </div>
      </Link>
    </article>
  );
}
