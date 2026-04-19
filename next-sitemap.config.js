/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.lumipeoplearg.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"],
  transform: async (config, path) => {
    const priorities = {
      "/": 1,
      "/sobrenosotros": 0.9,
      "/vacantes": 0.9,
      "/noticias": 0.85,
    };

    return {
      loc: path,
      changefreq: path.startsWith("/articulo/") ? "monthly" : "weekly",
      priority: priorities[path] ?? (path.startsWith("/articulo/") ? 0.75 : 0.7),
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://www.lumipeoplearg.com/sitemap.xml"],
  },
};
