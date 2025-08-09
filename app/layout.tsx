import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/app/fonts/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Lautaro Roldan - Desarrollador Full Stack | Portfolio",
    template: "%s | Lautaro Roldan - Full Stack Developer"
  },
  description: "Desarrollador Full Stack especializado en React, Next.js y JavaScript. Portfolio de Lautaro Roldan con +2 años de experiencia en desarrollo web frontend y backend. Servicios de desarrollo web profesional.",
  keywords: [
    "Lautaro Roldan",
    "desarrollador full stack",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "frontend developer",
    "backend developer",
    "desarrollo web",
    "portfolio desarrollador",
    "freelancer developer",
    "Argentina developer"
  ],
  authors: [{ name: "Lautaro Roldan", url: "https://github.com/lautaroroldan" }],
  creator: "Lautaro Roldan",
  publisher: "Lautaro Roldan",
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
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Lautaro Roldan - Full Stack Developer",
    title: "Lautaro Roldan - Desarrollador Full Stack | Portfolio",
    description: "Desarrollador Full Stack especializado en React, Next.js y JavaScript. Portfolio profesional con proyectos y experiencia en desarrollo web.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lautaro Roldan - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lautaro Roldan - Desarrollador Full Stack",
    description: "Desarrollador Full Stack especializado en React, Next.js y JavaScript. Portfolio profesional.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "/",
  },
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
