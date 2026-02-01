'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, Calendar, Tag } from 'lucide-react'
import { getArtworkBySlug, getAdjacentArtworks } from '@/data/artworks'
import Lightbox from '@/components/Lightbox'

export default function ArtworkDetailPage() {
    const params = useParams()
    const router = useRouter()
    const slug = params.slug as string

    const artwork = getArtworkBySlug(slug)
    const { prev, next } = getAdjacentArtworks(slug)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    if (!artwork) {
        notFound()
    }

    const handlePrevArtwork = () => {
        if (prev) {
            router.push(`/art/${prev.slug}`)
        }
    }

    const handleNextArtwork = () => {
        if (next) {
            router.push(`/art/${next.slug}`)
        }
    }

    return (
        <>
            <div className="min-h-screen bg-white dark:bg-neutral-950">
                <div className="container-custom py-8">
                    {/* Back button */}
                    <Link
                        href="/gallery"
                        className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Gallery
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Artwork Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <button
                                onClick={() => setIsLightboxOpen(true)}
                                className="group relative block w-full overflow-hidden rounded-2xl card cursor-zoom-in"
                                aria-label="Open image in lightbox"
                            >
                                <div
                                    className="relative"
                                    style={{
                                        paddingBottom: `${(artwork.height / artwork.width) * 100}%`,
                                    }}
                                >
                                    <Image
                                        src={artwork.src}
                                        alt={artwork.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />
                                </div>

                                {/* Zoom hint */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-neutral-900/90 rounded-full p-3">
                                        <ZoomIn className="w-6 h-6" />
                                    </div>
                                </div>
                            </button>
                        </motion.div>

                        {/* Artwork Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col"
                        >
                            {/* Category badge */}
                            <div className="mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-accent-500 to-secondary-500 text-white">
                                    {artwork.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                                {artwork.title}
                            </h1>

                            {/* Date */}
                            <div className="flex items-center text-neutral-500 mb-6">
                                <Calendar className="w-4 h-4 mr-2" />
                                <time dateTime={artwork.date}>
                                    {new Date(artwork.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                {artwork.description}
                            </p>

                            {/* Tags */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <Tag className="w-4 h-4 text-neutral-500" />
                                    <span className="text-sm font-medium text-neutral-500">Tags</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {artwork.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm text-neutral-600 dark:text-neutral-400"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Dimensions */}
                            <div className="mb-8 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                                <p className="text-sm text-neutral-500">
                                    Dimensions: {artwork.width} × {artwork.height} px
                                </p>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between pt-6 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
                                {prev ? (
                                    <Link
                                        href={`/art/${prev.slug}`}
                                        className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5 mr-1" />
                                        <span className="hidden sm:inline">{prev.title}</span>
                                        <span className="sm:hidden">Previous</span>
                                    </Link>
                                ) : (
                                    <div />
                                )}

                                {next ? (
                                    <Link
                                        href={`/art/${next.slug}`}
                                        className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors"
                                    >
                                        <span className="hidden sm:inline">{next.title}</span>
                                        <span className="sm:hidden">Next</span>
                                        <ChevronRight className="w-5 h-5 ml-1" />
                                    </Link>
                                ) : (
                                    <div />
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <Lightbox
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                src={artwork.src}
                alt={artwork.alt}
                title={artwork.title}
                onPrev={prev ? handlePrevArtwork : undefined}
                onNext={next ? handleNextArtwork : undefined}
                hasPrev={!!prev}
                hasNext={!!next}
            />
        </>
    )
}
