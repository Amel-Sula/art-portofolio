'use client'

import { useState, useMemo } from 'react'
import type { Metadata } from 'next'
import { artworks, CATEGORIES, getArtworksByCategory } from '@/data/artworks'
import type { Category } from '@/data/artworks'
import FilterChips from '@/components/FilterChips'
import GalleryGrid from '@/components/GalleryGrid'

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('All')

    const filteredArtworks = useMemo(() => {
        return getArtworksByCategory(activeCategory)
    }, [activeCategory])

    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="pt-12 pb-8 bg-gradient-subtle">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto">
                        <h1 className="mb-4">Gallery</h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Browse through the complete collection of artworks. Click on any
                            piece to view details and explore in full resolution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 sticky top-20 z-30 backdrop-blur-lg bg-white/80 dark:bg-neutral-950/80">
                <div className="container-custom">
                    <FilterChips
                        categories={CATEGORIES}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 bg-white dark:bg-neutral-950">
                <div className="container-custom">
                    {/* Results count */}
                    <p className="text-sm text-neutral-500 mb-6">
                        Showing {filteredArtworks.length} artwork
                        {filteredArtworks.length !== 1 ? 's' : ''}
                        {activeCategory !== 'All' && ` in ${activeCategory}`}
                    </p>

                    <GalleryGrid artworks={filteredArtworks} />
                </div>
            </section>
        </div>
    )
}
