'use client'

import { motion } from 'framer-motion'
import type { Artwork } from '@/data/artworks'
import ArtworkCard from './ArtworkCard'

interface GalleryGridProps {
    artworks: Artwork[]
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
    if (artworks.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
            >
                <p className="text-neutral-500 dark:text-neutral-400">
                    No artworks found in this category.
                </p>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="masonry-grid"
        >
            {artworks.map((artwork, index) => (
                <ArtworkCard
                    key={artwork.slug}
                    artwork={artwork}
                    index={index}
                />
            ))}
        </motion.div>
    )
}
