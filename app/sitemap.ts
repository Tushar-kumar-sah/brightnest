import { MetadataRoute } from 'next'
import { getServicesData } from '@/lib/data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://brightnestedu.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/services',
        '/contact',
        '/careers',
        '/case-studies',
        '/legal/privacy',
        '/legal/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic routes from services
    const services = getServicesData().map((service) => ({
        url: `${baseUrl}${service.href}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...services]
}
