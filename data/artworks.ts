/* ================================================
   ARTWORK DATA MODEL
   
   This file contains all artwork data for the portfolio.
   
   TO ADD YOUR OWN ARTWORKS:
   1. Place your images in /public/artworks/
   2. Update the artworks array below with your image info
   3. Use consistent naming: my-artwork-name.jpg
   
   FIELDS:
   - slug: URL-friendly identifier (lowercase, hyphens)
   - title: Display title
   - date: Creation date (YYYY-MM-DD)
   - description: Brief description (1-2 sentences)
   - tags: Array of descriptive tags
   - category: Must match one from CATEGORIES below
   - width: Image width in pixels (for aspect ratio)
   - height: Image height in pixels (for aspect ratio)
   - src: Path to image in /public folder
   - alt: Accessible image description
   - featured: Show on homepage (limit to ~6)
   ================================================ */

export interface Artwork {
    slug: string
    title: string
    date: string
    description: string
    tags: string[]
    category: Category
    width: number
    height: number
    src: string
    alt: string
    featured: boolean
}

export type Category = 'All' | 'Illustration' | 'Digital' | 'Sketch' | 'Mixed Media'

export const CATEGORIES: Category[] = [
    'All',
    'Illustration',
    'Digital',
    'Sketch',
    'Mixed Media',
]

/* ================================================
   SAMPLE ARTWORKS
   
   These are placeholder artworks using gradient SVGs.
   Replace with your actual artwork data.
   ================================================ */

export const artworks: Artwork[] = [
    {
        slug: 'ethereal-dreams',
        title: 'Ethereal Dreams',
        date: '2024-01-15',
        description: 'An exploration of light and shadow, capturing the fleeting moments between consciousness and dreams.',
        tags: ['abstract', 'light', 'dreamy'],
        category: 'Digital',
        width: 1200,
        height: 1500,
        src: '/artworks/placeholder-1.svg',
        alt: 'Abstract digital artwork with flowing gradients of purple and pink',
        featured: true,
    },
    {
        slug: 'urban-solitude',
        title: 'Urban Solitude',
        date: '2024-01-10',
        description: 'A reflection on finding peace in the chaos of city life.',
        tags: ['urban', 'minimalist', 'contemplative'],
        category: 'Illustration',
        width: 1200,
        height: 900,
        src: '/artworks/placeholder-2.svg',
        alt: 'Minimalist illustration of a figure in an urban landscape',
        featured: true,
    },
    {
        slug: 'natures-whisper',
        title: "Nature's Whisper",
        date: '2024-01-05',
        description: 'Delicate botanical studies inspired by morning walks in the countryside.',
        tags: ['botanical', 'organic', 'nature'],
        category: 'Sketch',
        width: 1000,
        height: 1400,
        src: '/artworks/placeholder-3.svg',
        alt: 'Detailed pencil sketch of botanical elements',
        featured: true,
    },
    {
        slug: 'digital-symphony',
        title: 'Digital Symphony',
        date: '2023-12-28',
        description: 'Where technology meets emotion—a visual representation of digital harmonies.',
        tags: ['abstract', 'tech', 'vibrant'],
        category: 'Digital',
        width: 1400,
        height: 1000,
        src: '/artworks/placeholder-4.svg',
        alt: 'Colorful abstract digital art with geometric patterns',
        featured: true,
    },
    {
        slug: 'forgotten-shores',
        title: 'Forgotten Shores',
        date: '2023-12-20',
        description: 'Memories of coastal landscapes, preserved in soft hues and gentle strokes.',
        tags: ['landscape', 'coastal', 'serene'],
        category: 'Illustration',
        width: 1600,
        height: 1000,
        src: '/artworks/placeholder-5.svg',
        alt: 'Soft watercolor-style coastal landscape',
        featured: true,
    },
    {
        slug: 'inner-cosmos',
        title: 'Inner Cosmos',
        date: '2023-12-15',
        description: 'An inward journey through the universe that exists within each of us.',
        tags: ['cosmic', 'introspective', 'abstract'],
        category: 'Mixed Media',
        width: 1200,
        height: 1200,
        src: '/artworks/placeholder-6.svg',
        alt: 'Mixed media cosmic artwork with deep blues and gold',
        featured: true,
    },
    {
        slug: 'morning-rituals',
        title: 'Morning Rituals',
        date: '2023-12-10',
        description: 'The quiet beauty of everyday moments, captured in delicate lines.',
        tags: ['everyday', 'peaceful', 'warm'],
        category: 'Sketch',
        width: 1000,
        height: 1200,
        src: '/artworks/placeholder-7.svg',
        alt: 'Pencil sketch of morning coffee and reading',
        featured: false,
    },
    {
        slug: 'chromatic-flow',
        title: 'Chromatic Flow',
        date: '2023-12-05',
        description: 'An experiment in color theory and fluid motion.',
        tags: ['color', 'fluid', 'experimental'],
        category: 'Digital',
        width: 1400,
        height: 1200,
        src: '/artworks/placeholder-8.svg',
        alt: 'Flowing digital artwork with vibrant color gradients',
        featured: false,
    },
    {
        slug: 'silent-conversations',
        title: 'Silent Conversations',
        date: '2023-11-28',
        description: 'The unspoken dialogue between strangers in public spaces.',
        tags: ['people', 'urban', 'narrative'],
        category: 'Illustration',
        width: 1200,
        height: 1600,
        src: '/artworks/placeholder-9.svg',
        alt: 'Illustration of people in a cafe setting',
        featured: false,
    },
    {
        slug: 'texture-study-01',
        title: 'Texture Study #01',
        date: '2023-11-20',
        description: 'Exploring the interplay of different surface textures and materials.',
        tags: ['texture', 'experimental', 'study'],
        category: 'Mixed Media',
        width: 1000,
        height: 1000,
        src: '/artworks/placeholder-10.svg',
        alt: 'Mixed media texture study with layered materials',
        featured: false,
    },
    {
        slug: 'twilight-garden',
        title: 'Twilight Garden',
        date: '2023-11-15',
        description: 'A magical garden where flowers bloom in shades of dusk.',
        tags: ['floral', 'magical', 'twilight'],
        category: 'Digital',
        width: 1200,
        height: 1400,
        src: '/artworks/placeholder-11.svg',
        alt: 'Digital painting of a mystical garden at dusk',
        featured: false,
    },
    {
        slug: 'architectural-dreams',
        title: 'Architectural Dreams',
        date: '2023-11-10',
        description: 'Impossible structures that exist only in imagination.',
        tags: ['architecture', 'surreal', 'geometric'],
        category: 'Sketch',
        width: 1400,
        height: 1000,
        src: '/artworks/placeholder-12.svg',
        alt: 'Surreal architectural pencil drawing',
        featured: false,
    },
    {
        slug: 'emotional-spectrum',
        title: 'Emotional Spectrum',
        date: '2023-11-05',
        description: 'Visualizing the full range of human emotions through abstract forms.',
        tags: ['emotion', 'abstract', 'colorful'],
        category: 'Digital',
        width: 1600,
        height: 900,
        src: '/artworks/placeholder-13.svg',
        alt: 'Abstract emotional landscape with varied colors',
        featured: false,
    },
    {
        slug: 'paper-memories',
        title: 'Paper Memories',
        date: '2023-10-28',
        description: 'Collage work incorporating vintage paper and personal ephemera.',
        tags: ['collage', 'vintage', 'memory'],
        category: 'Mixed Media',
        width: 1000,
        height: 1300,
        src: '/artworks/placeholder-14.svg',
        alt: 'Mixed media collage with vintage paper elements',
        featured: false,
    },
    {
        slug: 'portrait-in-lines',
        title: 'Portrait in Lines',
        date: '2023-10-20',
        description: 'A continuous line portrait exploring form and expression.',
        tags: ['portrait', 'line art', 'minimalist'],
        category: 'Sketch',
        width: 1000,
        height: 1200,
        src: '/artworks/placeholder-15.svg',
        alt: 'Continuous line portrait drawing',
        featured: false,
    },
    {
        slug: 'ocean-meditation',
        title: 'Ocean Meditation',
        date: '2023-10-15',
        description: 'The rhythmic motion of waves translated into visual form.',
        tags: ['ocean', 'meditation', 'blue'],
        category: 'Digital',
        width: 1800,
        height: 1000,
        src: '/artworks/placeholder-16.svg',
        alt: 'Abstract digital representation of ocean waves',
        featured: false,
    },
]

/* ================================================
   HELPER FUNCTIONS
   ================================================ */

export function getArtworkBySlug(slug: string): Artwork | undefined {
    return artworks.find((artwork) => artwork.slug === slug)
}

export function getFeaturedArtworks(): Artwork[] {
    return artworks.filter((artwork) => artwork.featured)
}

export function getArtworksByCategory(category: Category): Artwork[] {
    if (category === 'All') return artworks
    return artworks.filter((artwork) => artwork.category === category)
}

export function getAdjacentArtworks(slug: string): {
    prev: Artwork | null
    next: Artwork | null
} {
    const index = artworks.findIndex((artwork) => artwork.slug === slug)
    return {
        prev: index > 0 ? artworks[index - 1] : null,
        next: index < artworks.length - 1 ? artworks[index + 1] : null,
    }
}

export function getAllSlugs(): string[] {
    return artworks.map((artwork) => artwork.slug)
}
