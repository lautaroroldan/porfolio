import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/app/fonts/fonts";

export const metadata: Metadata = {
  title: "Full Stack Developer | Lautaro R.",
  description: "Soy Lautaro Roldan, desarrollador fullstack especializado en frontend con el ecosistema React, Next.js, y JavaScript. Con más de 2 años de experiencia en desarrollo web, trabajo como freelancer en proyectos variados, apasionado por diseñar interfaces intuitivas y crear aplicaciones modernas y eficientes.",
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} antialiased bg-[#171717]`}
      >
        {children}
      </body>
    </html>
  );
}
