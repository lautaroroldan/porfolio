"use client";

import { useTranslations } from "next-intl";
import { inter } from "@/app/fonts/fonts";
import ExperienceItem, {
	type ExperienceItemProps,
} from "@/components/Experience/experience-item";
import Section from "@/components/section";

function Experience() {
	const t = useTranslations("experience");
	const experiences: ExperienceItemProps[] = [
		{
			position: t("jobs.advenio.position"),
			company: t("jobs.advenio.company"),
			dateStart: t("jobs.advenio.dateStart"),
			dateEnd: t("jobs.advenio.dateEnd"),
			description: t("jobs.advenio.description"),
		},
		{
			position: t("jobs.freelance.position"),
			company: t("jobs.freelance.company"),
			dateStart: t("jobs.freelance.dateStart"),
			dateEnd: t("jobs.freelance.dateEnd"),
			description: t("jobs.freelance.description"),
		},
	];

	return (
		<Section>
			<h2 className={`text-xl font-bold text-foreground ${inter.className}`}>
				{t("title")}
			</h2>
			<ol className="relative border-s border-custom-gray">
				{experiences.map((experience) => (
					<li
						className="ms-4"
						key={`${experience.company}-${experience.position}`}
					>
						<ExperienceItem {...experience} />
					</li>
				))}
			</ol>
		</Section>
	);
}

export default Experience;
