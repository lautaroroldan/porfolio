import { inter } from '@/app/fonts/fonts'
import Image from 'next/image'
import React from 'react'
import profile from '@/assets/images/profile.webp'
function HeaderTitle() {
    return (
        <div className='flex gap-6 items-center'>
            <Image src={profile} alt="Lautaro Roldan profile picture" className='w-16 h-16 rounded-full' width={50} height={50} unoptimized />
            <div>
                <h1 className='text-white text-2xl font-bold'>Lautaro Roldan</h1>
                <p className={`text-custom-gray ${inter.className}`}>Full Stack Developer</p>
            </div>
        </div>
    )
}

export default HeaderTitle