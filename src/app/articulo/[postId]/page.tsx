import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";


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
    description: post.meta.description || "", // Use unique description
    keywords: post.meta.tags,
    alternates: {
      canonical: `/articulo/${postId}`,
      languages: {
        "es-ES": `es-ES/articulo/${postId}`,
      },
    },
    og: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description || "",
      image: post.meta.imageUrl || "",
    },
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag: any, i: any) => (
    <Link
      className="border flex items-center justify-center mt-6 p-2 rounded-full px-4 hover:bg-yellow-500  font-bold "
      key={i}
      href={`/tags/${tag}`}
    >
      {tag}
    </Link>
  ));

  return (
    <div className="prose max-w-4xl mx-auto">
      <hr className="mt-10"></hr>
      <h1 className="text-4xl mt-4 mb-0">{meta.title}</h1>{" "}
      {/* Use h1 for the title */}
      <p className="mt-2 text-sm">{pubDate}</p>
      <article className="prose-a:text-lumiblue text-lg">{content}</article>
      <div className="flex flex-col">
        {/* Use h2 for subheadings */}
      </div>
      <p className="my-10 text-2xl  hover:animate-pulse">
        <Link
          className="text-lumiorange  font-bold border-lumiorange "
          href="/"
        >
          ← Volver al inicio 🏡
        </Link>
      </p>
      <hr className="mt-10"></hr>
    </div>
  );
}
