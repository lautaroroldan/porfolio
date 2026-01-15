"use client";

import { useTranslations } from "next-intl";
import { inter } from "@/app/fonts/fonts";
import balanticco from "@/assets/images/balanticco.webp";
import handballScore from "@/assets/images/handball-score.webp";
import milanesa from "@/assets/images/milanesa.webp";
import ProjectItem from "@/components/Project/project-item";
import Section from "@/components/section";

function Project() {
	const t = useTranslations("projects");
	const projects = [
		{
			title: t("handballScore.title"),
			description: t("handballScore.description"),
			technologies: [
				"React.js",
				"TailwindCSS",
				"NextUI",
				"TypeScript",
				"TanStack Query",
				"TanStack Table",
				"Nuqs",
			],
			date: t("handballScore.date"),
			backgroundImg: handballScore,
			projectUrl: "https://www.handballscore.com/",
		},
		{
			title: t("milanesa.title"),
			description: t("milanesa.description"),
			technologies: [
				"Next.js",
				"Supabase",
				"TailwindCSS",
				"Shadcn",
				"TypeScript",
				"VexFlow",
				"AccidentalJS",
			],
			date: t("milanesa.date"),
			backgroundImg: milanesa,
			projectUrl: "https://www.milanesa.app",
		},
		{
			title: t("balanticco.title"),
			description: t("balanticco.description"),
			technologies: [
				"Next.js",
				"Drizzle",
				"SQLite",
				"TailwindCSS",
				"Shadcn",
				"TypeScript",
				"Turso",
			],
			date: t("balanticco.date"),
			backgroundImg: balanticco,
			projectUrl: "https://balanticco.vercel.app/login",
		},
	];

	return (
		<Section>
			<h2 className={`text-xl font-bold text-white ${inter.className}`}>
				{t("title")}
			</h2>
			<div className="flex flex-col gap-8">
				{projects.map((project) => (
					<ProjectItem key={project.title} {...project} />
				))}
			</div>
		</Section>
	);
}

export default Project;
