import type { MetadataRoute } from 'next'
import { projects } from '@/constants/projects'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://digitalworldhorizon.com'

    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/projects',
    ]

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.7,
    }))

    const mainRoutes = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }))

    return [...mainRoutes, ...projectRoutes]
}
