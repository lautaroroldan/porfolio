import { inter } from '@/app/fonts/fonts'
import React from 'react'

const socialMedia = [
    {
        name: 'Github',
        url: 'https://github.com/lautaro-roldan'
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/lautaro-roldan/'
    }
]


function Footer() {

    const currentYear = new Date().getFullYear()
    return (
        <footer className={`flex flex-col items-center gap-4 text-custom-gray ${inter.className} text-sm`}>
            <div className='flex gap-4 justify-center uppercase'>
                {socialMedia.map((social) => (
                    <a key={social.name} href={social.url} className='hover:text-custom-gray/20 transition-colors duration-300' target='_blank' rel='noopener noreferrer'>
                        {social.name}
                    </a>
                ))}
            </div>
            <p>© {currentYear.toString().padStart(2, '0')} Lautaro Roldan</p>
        </footer>
    )
}

export default Footer