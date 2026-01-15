import HeaderTitle from "@/components/Header/header-title";
import SocialMediaSection from "@/components/Header/social-media";
import LanguageSwitcher from "@/components/language-switcher";

function Header() {
	return (
		<header className="border-b border-custom-gray/25 pb-8">
			<div className="flex justify-between items-start">
				<HeaderTitle />
				<LanguageSwitcher />
			</div>
			<SocialMediaSection />
		</header>
	);
}

export default Header;
