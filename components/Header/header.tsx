import SocialMediaSection from '@/components/Header/social-media';
import HeaderTitle from '@/components/Header/header-title';
function Header() {
    return (
        <header className='border-b border-custom-gray/25 pb-8'>
            <HeaderTitle />
            <SocialMediaSection />
        </header>
    )
}

export default Header;
