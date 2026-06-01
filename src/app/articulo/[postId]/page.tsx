import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import { absoluteUrl, siteConfig } from "@/lib/site";

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

export async function generateMetadata({
  params: { postId },
}: Props): Promise<Metadata> {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Articulo no encontrado",
      description: "Este articulo no existe.",
    };
  }

  const articleUrl = absoluteUrl(`/articulo/${postId}`);
  const imageUrl = absoluteUrl(post.meta.imageUrl);

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.tags,
    alternates: {
      canonical: `/articulo/${postId}`,
    },
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    openGraph: {
      type: "article",
      url: articleUrl,
      siteName: siteConfig.name,
      title: `${post.meta.title} | ${siteConfig.name}`,
      description: post.meta.description,
      publishedTime: post.meta.date,
      modifiedTime: post.meta.date,
      authors: [siteConfig.legalName],
      images: [
        {
          url: imageUrl,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.meta.title} | ${siteConfig.name}`,
      description: post.meta.description,
      images: [imageUrl],
    },
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    notFound();
  }

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
    image: [absoluteUrl(meta.imageUrl)],
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.brand.logoPath),
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
          Volver a noticias
        </Link>
      </p>
    </div>
  );
}
