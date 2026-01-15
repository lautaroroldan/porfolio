"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { inter } from "@/app/fonts/fonts";
import profile from "@/assets/images/profile.webp";

function HeaderTitle() {
	const t = useTranslations("header");
	return (
		<div className="flex gap-6 items-center">
			<Image
				src={profile}
				alt="Lautaro Roldan profile picture"
				className="w-16 h-16 rounded-full"
				width={50}
				height={50}
				unoptimized
			/>
			<div>
				<h1 className="text-foreground text-2xl font-bold">{t("name")}</h1>
				<p className={`text-custom-gray ${inter.className}`}>{t("title")}</p>
			</div>
		</div>
	);
}

export default HeaderTitle;
