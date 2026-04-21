import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Portafolio de Servicios | Estudio Horizonte",
    template: "%s | Estudio Horizonte",
  },
  description:
    "Landing onepage para presentar servicios digitales, casos y contacto con una experiencia visual moderna basada en Material 3.",
  keywords: [
    "portafolio de servicios",
    "diseno web",
    "desarrollo web",
    "material 3",
    "landing onepage",
  ],
  openGraph: {
    title: "Portafolio de Servicios | Estudio Horizonte",
    description:
      "Transformamos ideas en experiencias digitales claras, utiles y preparadas para convertir visitas en oportunidades.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de Servicios | Estudio Horizonte",
    description:
      "Diseno, desarrollo y optimizacion digital en una onepage tipo Material 3.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppThemeProvider>{children}</AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
