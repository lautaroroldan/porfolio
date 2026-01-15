import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider as IntlProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "@/globals.css";
import { geistMono, geistSans } from "@/app/fonts/fonts";
import { routing } from "@/i18n/routing";

const baseMetadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
	),
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
		"Argentina developer",
	],
	authors: [
		{ name: "Lautaro Roldan", url: "https://github.com/lautaroroldan" },
	],
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
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	if (!routing.locales.includes(locale as "en" | "es")) {
		notFound();
	}

	const t = await import(`@/messages/${locale}.json`);

	return {
		...baseMetadata,
		title: {
			default: t.default.metadata.title,
			template: "%s | Lautaro Roldan - Full Stack Developer",
		},
		description: t.default.metadata.description,
		alternates: {
			canonical: `/${locale}`,
		},
		openGraph: {
			type: "website",
			locale: locale === "es" ? "es_AR" : "en_US",
			url: `/${locale}`,
			siteName: "Lautaro Roldan - Full Stack Developer",
			title: t.default.metadata.title,
			description: t.default.metadata.description,
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
			title: t.default.metadata.title,
			description: t.default.metadata.description,
			images: ["/opengraph-image.png"],
		},
	};
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body className={`${geistSans.variable} antialiased bg-[#171717]`}>
				<IntlProvider locale={locale} messages={messages}>
					{children}
				</IntlProvider>
			</body>
		</html>
	);
}
