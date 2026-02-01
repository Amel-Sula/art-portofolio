import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { getFeaturedArtworks } from '@/data/artworks'

export default function HomePage() {
    const featuredArtworks = getFeaturedArtworks()

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-subtle" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-200/20 dark:bg-accent-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-200/20 dark:bg-secondary-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 mb-8 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-accent-500" />
                            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                {/* ================================================
                    CUSTOMIZE: Update tagline
                    ================================================ */}
                                Exploring art through digital & traditional mediums
                            </span>
                        </div>

                        {/* Main heading */}
                        <h1 className="mb-6">
                            <span className="block text-neutral-900 dark:text-white">
                                {/* ================================================
                    CUSTOMIZE: Update your name/brand
                    ================================================ */}
                                Art.Bojeqielli
                            </span>
                            <span className="block gradient-text mt-2">
                                Visual Storytelling
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
                            {/* ================================================
                  CUSTOMIZE: Update bio/intro
                  ================================================ */}
                            Creating art that bridges imagination and reality. Each piece
                            tells a story, evokes emotion, and invites you to see the world
                            through a different lens.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/gallery" className="btn btn-primary">
                                Explore Gallery
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link href="/contact" className="btn btn-secondary">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Featured Artworks Section */}
            <section className="section bg-white dark:bg-neutral-950">
                <div className="container-custom">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Featured Works</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
                            A curated selection of recent pieces showcasing various styles
                            and techniques.
                        </p>
                    </div>

                    {/* Featured grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredArtworks.slice(0, 6).map((artwork, index) => (
                            <Link
                                key={artwork.slug}
                                href={`/art/${artwork.slug}`}
                                className="group relative overflow-hidden rounded-xl card card-hover aspect-[4/5]"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <Image
                                    src={artwork.src}
                                    alt={artwork.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="font-serif text-xl font-semibold mb-1">
                                            {artwork.title}
                                        </h3>
                                        <p className="text-sm text-white/80">{artwork.category}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View all link */}
                    <div className="text-center mt-12">
                        <Link
                            href="/gallery"
                            className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium transition-colors"
                        >
                            View All Artworks
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="section bg-neutral-50 dark:bg-neutral-900">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden card">
                                {/* ================================================
                    CUSTOMIZE: Add your photo here
                    Replace src with your image path
                    ================================================ */}
                                <div className="w-full h-full bg-gradient-to-br from-accent-200 to-secondary-200 dark:from-accent-900/50 dark:to-secondary-900/50 flex items-center justify-center">
                                    <span className="text-6xl">🎨</span>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-xl -z-10" />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="mb-6">About the Artist</h2>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                {/* ================================================
                    CUSTOMIZE: Update with your bio
                    ================================================ */}
                                Hello! I&apos;m a visual artist passionate about exploring the
                                boundaries between digital and traditional art forms. My work
                                often reflects themes of nature, emotion, and the human
                                experience.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                With a background in both fine arts and digital design, I
                                create pieces that blend classical techniques with modern
                                tools, resulting in artwork that feels both timeless and
                                contemporary.
                            </p>
                            <Link href="/about" className="btn btn-secondary">
                                Learn More About Me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-br from-accent-500 via-secondary-500 to-accent-400">
                <div className="container-custom text-center">
                    <h2 className="text-white mb-4">Let&apos;s Create Together</h2>
                    <p className="text-white/90 max-w-xl mx-auto mb-8">
                        Interested in commissioning a piece or collaborating on a project?
                        I&apos;d love to hear from you.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-colors shadow-soft-lg"
                    >
                        Start a Conversation
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </section>
        </>
    )
}
