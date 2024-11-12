import Github from '@/assets/icons/github';
import LinkedIn from '@/assets/icons/linkedIn';
import SocialMediaIcon from "./social-media-item";
import ThemeToggle from '@/components/theme-toggle';
function SocialMediaSection() {
    return (
        <section className='flex gap-3 justify-between items-center mt-6'>
            <div className='flex gap-3'>
                <SocialMediaIcon icon={<Github className='size-6' />} href='https://github.com/lautaroroldan' />
                <SocialMediaIcon icon={<LinkedIn className='size-6' />} href='https://www.linkedin.com/in/lautaroroldan/' />
            </div>
            <ThemeToggle />
        </section>
    )
}

export default SocialMediaSection