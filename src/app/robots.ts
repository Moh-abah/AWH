import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/ap i/', '/admin/'], // لو عندك مسارات تبغاها محجوبة من القوقل
        },
        sitemap: 'https://digitalworldhorizon.com/sitemap.xml',
        host: 'https://digitalworldhorizon.com',
    }
}
