import type { Metadata } from "next";
import { absoluteUrl, canonicalPath, siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

const defaultSocialImage = absoluteUrl(siteConfig.brand.socialImagePath);

export function getSocialImageUrl(path = siteConfig.brand.socialImagePath) {
  return absoluteUrl(path);
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords,
}: PageMetadataInput): Metadata {
  const canonical = canonicalPath(path);
  const url = absoluteUrl(canonical);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: defaultSocialImage,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [defaultSocialImage],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.brand.logoPath),
    sameAs: Object.values(siteConfig.social),
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
  };
}
