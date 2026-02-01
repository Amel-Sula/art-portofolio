'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { useState } from 'react'

interface LightboxProps {
    isOpen: boolean
    onClose: () => void
    src: string
    alt: string
    title?: string
    onPrev?: () => void
    onNext?: () => void
    hasPrev?: boolean
    hasNext?: boolean
}

export default function Lightbox({
    isOpen,
    onClose,
    src,
    alt,
    title,
    onPrev,
    onNext,
    hasPrev = false,
    hasNext = false,
}: LightboxProps) {
    const [isZoomed, setIsZoomed] = useState(false)

    // Handle keyboard navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    onClose()
                    break
                case 'ArrowLeft':
                    if (hasPrev && onPrev) {
                        onPrev()
                        setIsZoomed(false)
                    }
                    break
                case 'ArrowRight':
                    if (hasNext && onNext) {
                        onNext()
                        setIsZoomed(false)
                    }
                    break
            }
        },
        [onClose, onPrev, onNext, hasPrev, hasNext]
    )

    // Add/remove event listeners
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, handleKeyDown])

    // Reset zoom when image changes
    useEffect(() => {
        setIsZoomed(false)
    }, [src])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Zoom toggle */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsZoomed(!isZoomed)
                        }}
                        className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
                    >
                        {isZoomed ? (
                            <ZoomOut className="w-6 h-6" />
                        ) : (
                            <ZoomIn className="w-6 h-6" />
                        )}
                    </button>

                    {/* Title */}
                    {title && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-lg">
                            <p className="text-white font-serif text-lg">{title}</p>
                        </div>
                    )}

                    {/* Previous button */}
                    {hasPrev && onPrev && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                onPrev()
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    )}

                    {/* Next button */}
                    {hasNext && onNext && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                onNext()
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    )}

                    {/* Image container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`relative ${isZoomed ? 'w-full h-full' : 'max-w-[90vw] max-h-[85vh]'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className={`relative ${isZoomed ? 'w-full h-full overflow-auto' : 'w-full h-full'
                                }`}
                        >
                            <Image
                                src={src}
                                alt={alt}
                                width={1920}
                                height={1080}
                                className={`${isZoomed
                                        ? 'w-auto h-auto max-w-none'
                                        : 'w-auto h-auto max-w-full max-h-[85vh] object-contain mx-auto'
                                    }`}
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
