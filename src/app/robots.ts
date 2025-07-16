import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'], // لو عندك مسارات تبغاها محجوبة من القوقل
        },
        sitemap: 'https://awh-ma.vercel.app/sitemap.xml',
        host: 'https://awh-ma.vercel.app',
    }
}
