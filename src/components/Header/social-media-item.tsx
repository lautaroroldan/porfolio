const SocialMediaIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <a href={href} className='rounded-md p-1.5 hover:bg-custom-gray/25 text-custom-gray hover:text-white transition-colors duration-300' target='_blank'>
        {icon}
    </a>
)

export default SocialMediaIcon;