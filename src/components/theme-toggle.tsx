"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		const newTheme = resolvedTheme === "dark" ? "light" : "dark";
		setTheme(newTheme);
	};

	if (!mounted) {
		return (
			<button
				type="button"
				disabled
				className="rounded-md p-1.5 text-custom-gray transition-all duration-300"
				aria-label="Toggle theme"
			>
				<span className="sr-only">Toggle theme</span>
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="rounded-md p-1.5 hover:bg-custom-gray/25 text-custom-gray hover:text-foreground transition-all duration-300 hover:scale-110 [&>svg]:hover:rotate-12"
			aria-label="Toggle theme"
		>
			{resolvedTheme === "dark" ? (
				<Moon className="size-6 transition-transform" />
			) : (
				<Sun className="size-6 transition-transform" />
			)}
		</button>
	);
}

export default ThemeToggle;
