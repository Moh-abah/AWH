// import type { MetadataRoute } from 'next'
// import { projects } from '@/constants/projects'

// export default function sitemap(): MetadataRoute.Sitemap {
//     const baseUrl = 'https://digitalworldhorizon.com'

//     const staticRoutes = [
//         '',
//         '/about',
//         '/contact',
//         '/services',
//         '/projects',
//     ]

//     const projectRoutes = projects.map((project) => ({
//         url: `${baseUrl}/projects/${project.id}`,
//         lastModified: new Date(),
//         changeFrequency: 'daily' as const,
//         priority: 0.7,
//     }))

//     const mainRoutes = staticRoutes.map((route) => ({
//         url: `${baseUrl}${route}`,
//         lastModified: new Date(),
//         changeFrequency: 'daily' as const,
//         priority: 0.8,
//     }))

//     return [...mainRoutes, ...projectRoutes]
// }



import type { MetadataRoute } from "next"
import { projects } from "@/constants/projects"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://digitalworldhorizon.com"

    const staticRoutes = [
        { route: "", priority: 1.0, changeFrequency: "weekly" as const },
        { route: "/about", priority: 0.9, changeFrequency: "monthly" as const },
        { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
        { route: "/services", priority: 0.95, changeFrequency: "weekly" as const },
        { route: "/blogs", priority: 0.85, changeFrequency: "weekly" as const },
        { route: "/projects", priority: 0.85, changeFrequency: "daily" as const },
    ]

    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.75,
    }))

    const mainRoutes = staticRoutes.map((route) => ({
        url: `${baseUrl}${route.route}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))

    return [...mainRoutes, ...projectRoutes]
}
