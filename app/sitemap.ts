import { MetadataRoute } from 'next'
import { artworks } from '@/data/artworks'

/* ================================================
   CUSTOMIZE: Update the base URL to your domain
   ================================================ */
const BASE_URL = 'https://artbojeqielli.com'

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Dynamic artwork pages
    const artworkPages: MetadataRoute.Sitemap = artworks.map((artwork) => ({
        url: `${BASE_URL}/art/${artwork.slug}`,
        lastModified: new Date(artwork.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...artworkPages]
}
