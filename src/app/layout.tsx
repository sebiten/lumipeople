import type { Metadata } from "next";
import Script from "next/script";
import { Archivo_Narrow } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: "400",
});

const socialImage = "/LUMIPEOPLE_abril_24-26.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Recursos Humanos y Soluciones para Empresas en Salta`,
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
    icon: "/lumipeople.png",
    shortcut: "/lumipeople.png",
    apple: "/lumipeople.png",
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
        url: socialImage,
        alt: `${siteConfig.name} - consultora de recursos humanos en Salta`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Recursos Humanos y Soluciones para Empresas en Salta`,
    description: siteConfig.description,
    images: [socialImage],
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
  return (
    <html lang="es-AR">
      <head>
        <link rel="icon" href="/lumipeople.png" type="image/png" />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-L4FMM9C2Q9"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L4FMM9C2Q9');
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
