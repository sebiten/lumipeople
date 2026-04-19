import Link from "next/link";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "Este artículo no existe.",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description || "",
    keywords: post.meta.tags,
    alternates: {
      canonical: `/articulo/${postId}`,
    },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/articulo/${postId}`),
      title: post.meta.title,
      description: post.meta.description || "",
      images: post.meta.imageUrl ? [absoluteUrl(String(post.meta.imageUrl))] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description || "",
      images: post.meta.imageUrl ? [absoluteUrl(String(post.meta.imageUrl))] : [],
    },
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;
  const pubDate = getFormattedDate(meta.date);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    mainEntityOfPage: absoluteUrl(`/articulo/${postId}`),
    image: meta.imageUrl ? [absoluteUrl(String(meta.imageUrl))] : [],
    author: {
      "@type": "Organization",
      name: "Lumi People",
    },
    publisher: {
      "@type": "Organization",
      name: "Lumi People",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/lumipeople.png"),
      },
    },
    keywords: meta.tags,
  };

  return (
    <div className="prose prose-slate mx-auto max-w-4xl px-4 py-10 dark:prose-invert prose-a:text-orange-500 prose-img:rounded-2xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
        Blog Lumi People
      </p>
      <h1 className="mb-2 text-4xl font-bold text-slate-950 dark:text-slate-50">
        {meta.title}
      </h1>
      <p className="mt-0 text-sm text-muted-foreground">{pubDate}</p>
      <article className="prose-a:text-orange-500 prose-p:text-slate-700 dark:prose-p:text-slate-200">
        {content}
      </article>
      <div className="mt-8 flex flex-wrap gap-3">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-orange-200 px-4 py-2 text-sm font-medium text-orange-700 dark:border-orange-900/50 dark:text-orange-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="my-10 text-xl font-semibold">
        <Link className="text-orange-500" href="/noticias">
          ← Volver a noticias
        </Link>
      </p>
    </div>
  );
}
