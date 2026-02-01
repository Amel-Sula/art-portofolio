import { notFound } from 'next/navigation'
import { getArtworkBySlug, getAdjacentArtworks, getAllSlugs } from '@/data/artworks'
import ArtworkDetailClient from '@/components/ArtworkDetailClient'

export function generateStaticParams() {
    const slugs = getAllSlugs()
    return slugs.map((slug) => ({
        slug: slug,
    }))
}

export default function ArtworkDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params
    const artwork = getArtworkBySlug(slug)
    const { prev, next } = getAdjacentArtworks(slug)

    if (!artwork) {
        notFound()
    }

    // Pass data to Client Component
    return <ArtworkDetailClient artwork={artwork} prev={prev} next={next} />
}

