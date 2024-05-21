import type { Metadata } from "next";
import { Archivo_Narrow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const inter = Archivo_Narrow({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lumi People AR",
  keywords:
    "Recursos Humanos, soluciones innovadoras, atención personalizada, desarrollo de recursos humanos, servicios eficientes, capital humano, planeación de recursos humanos, satisfacción del cliente, integración de equipos, experiencia internacional.",
  description:
    "Lumi People se especializa en Recursos Humanos, ofreciendo soluciones innovadoras y atención personalizada para el desarrollo efectivo de equipos. Con una vasta experiencia nacional e internacional, estamos listos para satisfacer tus necesidades empresariales.",
  icons: {
    icon: "/lumipeople.png",
    href:"/lumipeople.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L4FMM9C2Q9"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L4FMM9C2Q9');
        `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="overflow-hidden"> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
