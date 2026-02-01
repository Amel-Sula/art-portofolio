import { MetadataRoute } from 'next'

/* ================================================
   CUSTOMIZE: Update the base URL to your domain
   ================================================ */
const BASE_URL = 'https://artbojeqielli.com'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/private/'],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    }
}
