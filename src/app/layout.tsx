import type { Metadata } from "next";
import { Archivo_Narrow } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import { getSocialImageUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Recursos Humanos y Soluciones para Empresas en Salta",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteConfig.brand.logoPath,
    shortcut: siteConfig.brand.logoPath,
    apple: siteConfig.brand.logoPath,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Recursos Humanos y Soluciones para Empresas en Salta`,
    description: siteConfig.description,
    images: [
      {
        url: getSocialImageUrl(),
        alt: `${siteConfig.name} - consultora de recursos humanos en Salta`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Recursos Humanos y Soluciones para Empresas en Salta`,
    description: siteConfig.description,
    images: [getSocialImageUrl()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = siteConfig.analytics.ga4MeasurementId;

  return (
    <html lang={siteConfig.language}>
      <head>
        <link rel="icon" href={siteConfig.brand.logoPath} type="image/png" />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </head>
      <body className={`${archivoNarrow.className} min-h-screen antialiased`}>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
