'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Artwork } from '@/data/artworks'

interface ArtworkCardProps {
    artwork: Artwork
    index?: number
}

export default function ArtworkCard({ artwork, index = 0 }: ArtworkCardProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="masonry-item"
        >
            <Link
                href={`/art/${artwork.slug}`}
                className="group block relative overflow-hidden rounded-xl card card-hover"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Skeleton placeholder */}
                {!isLoaded && (
                    <div
                        className="skeleton absolute inset-0"
                        style={{
                            paddingBottom: `${(artwork.height / artwork.width) * 100}%`
                        }}
                    />
                )}

                {/* Artwork image */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        paddingBottom: `${(artwork.height / artwork.width) * 100}%`
                    }}
                >
                    <Image
                        src={artwork.src}
                        alt={artwork.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className={`object-cover transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                            } ${isHovered ? 'scale-105' : 'scale-100'}`}
                        onLoad={() => setIsLoaded(true)}
                        loading="lazy"
                    />

                    {/* Hover overlay */}
                    <motion.div
                        initial={false}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4"
                    >
                        <div className="text-white">
                            <h3 className="font-serif text-lg font-semibold mb-1">
                                {artwork.title}
                            </h3>
                            <p className="text-sm text-white/80">{artwork.category}</p>
                        </div>
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    )
}
