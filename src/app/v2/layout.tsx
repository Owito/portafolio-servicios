import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./v2.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Portafolio v2 | Neo-brutalista",
    template: "%s | Estudio Horowitz V2",
  },
  description:
    "Landing neo-brutalista sin Material 3 - una version alternativa con personalidad fuerte y diseño disruptivo.",
};

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="neo-body">{children}</body>
    </html>
  );
}