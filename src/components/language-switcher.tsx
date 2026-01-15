"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const toggleLocale = () => {
		const newLocale = locale === "es" ? "en" : "es";
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<button
			onClick={toggleLocale}
			className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-custom-gray hover:text-foreground"
			aria-label="Switch language"
			type="button"
		>
			<Languages className="w-5 h-5" />
			<span className="text-sm font-medium">
				{locale === "es" ? "EN" : "ES"}
			</span>
		</button>
	);
}
