import type { MetadataRoute } from "next";
import { getPostsMeta } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  { url: "/", changeFrequency: "weekly", priority: 1 },
  { url: "/sobrenosotros", changeFrequency: "weekly", priority: 0.9 },
  { url: "/vacantes", changeFrequency: "weekly", priority: 0.9 },
  { url: "/noticias", changeFrequency: "weekly", priority: 0.85 },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getPostsMeta()) ?? [];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.url}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/articulo/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...postEntries];
}
