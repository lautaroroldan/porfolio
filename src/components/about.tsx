"use client";

import { useTranslations } from "next-intl";
import Section from "./section";

function About() {
	const t = useTranslations("about");
	return (
		<Section>
			<article className="prose-base text-custom-gray prose-p:text-base prose-p:leading-normal w-full">
				<p>
					{t.rich("paragraph1", {
						highlight: (chunks) => (
							<span className="text-foreground font-bold">{chunks}</span>
						),
					})}
				</p>
				<p>{t("paragraph2")}</p>
			</article>
		</Section>
	);
}

export default About;
