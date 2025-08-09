import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/admin/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 2,
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/sitemap.xml`,
        host: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    }
}
