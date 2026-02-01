import type { Metadata } from 'next'
import Image from 'next/image'
import { Palette, Pen, Monitor, Camera, Lightbulb, Heart } from 'lucide-react'

export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn more about Art.Bojeqielli - the artist, creative process, tools, and journey.',
}

/* ================================================
   CUSTOMIZE: Update all content below with your info
   ================================================ */

const tools = [
    { name: 'Procreate', icon: Palette },
    { name: 'Photoshop', icon: Monitor },
    { name: 'Illustrator', icon: Pen },
    { name: 'Lightroom', icon: Camera },
]

const skills = [
    'Digital Illustration',
    'Traditional Drawing',
    'Portrait Art',
    'Concept Art',
    'Mixed Media',
    'Color Theory',
]

const timeline = [
    {
        year: '2019',
        title: 'Started Digital Art',
        description: 'Began exploring digital illustration with an iPad and Procreate.',
    },
    {
        year: '2020',
        title: 'First Commission',
        description: 'Completed first paid commission, marking the start of professional work.',
    },
    {
        year: '2021',
        title: 'Instagram Growth',
        description: 'Art page reached 10K followers, connecting with a global community.',
    },
    {
        year: '2022',
        title: 'Gallery Exhibition',
        description: 'Featured in local gallery exhibition showcasing emerging digital artists.',
    },
    {
        year: '2023',
        title: 'Brand Collaborations',
        description: 'Partnered with brands for illustration projects and creative campaigns.',
    },
    {
        year: '2024',
        title: 'Portfolio Launch',
        description: 'Launched this portfolio website to showcase work and connect with clients.',
    },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-12 pb-16 bg-gradient-subtle">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Photo */}
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden card">
                                {/* ================================================
                    CUSTOMIZE: Replace with your photo
                    Place your image in /public and update src
                    ================================================ */}
                                <div className="w-full h-full bg-gradient-to-br from-accent-200 via-secondary-200 to-accent-300 dark:from-accent-900/50 dark:via-secondary-900/50 dark:to-accent-800/50 flex items-center justify-center">
                                    <span className="text-8xl">👩‍🎨</span>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent-500/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-500/20 rounded-full blur-xl" />
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <h1 className="mb-6">About Me</h1>
                            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                                <p className="text-lg">
                                    {/* ================================================
                      CUSTOMIZE: Update your bio
                      ================================================ */}
                                    Hello! I'm an artist passionate about creating visual stories
                                    that resonate with people. My work spans digital illustration,
                                    traditional sketching, and mixed media experimentation.
                                </p>
                                <p>
                                    I believe art has the power to evoke emotions, spark
                                    conversations, and connect people across cultures. Each piece
                                    I create is an exploration of themes that move me—nature,
                                    identity, dreams, and the beauty found in everyday moments.
                                </p>
                                <p>
                                    When I'm not creating, you'll find me exploring nature,
                                    reading poetry, or experimenting with new art techniques.
                                    I'm always open to collaborations and commissions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artist Statement */}
            <section className="section bg-white dark:bg-neutral-950">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <Lightbulb className="w-10 h-10 mx-auto mb-6 text-accent-500" />
                        <h2 className="mb-8">Artist Statement</h2>
                        <blockquote className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
                            {/* ================================================
                  CUSTOMIZE: Update your artist statement
                  ================================================ */}
                            "My art is a dialogue between imagination and reality. I strive
                            to capture fleeting emotions and translate them into visual
                            experiences that invite viewers to pause, reflect, and feel.
                            Through color, form, and narrative, I explore what it means to
                            be human in an ever-changing world."
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Tools & Skills */}
            <section className="section bg-neutral-50 dark:bg-neutral-900">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Tools */}
                        <div>
                            <h3 className="mb-6">Tools I Use</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {tools.map((tool) => {
                                    const Icon = tool.icon
                                    return (
                                        <div
                                            key={tool.name}
                                            className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-800 rounded-xl card"
                                        >
                                            <div className="p-2 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-lg text-white">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium">{tool.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="mb-6">Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 font-medium card"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline / Journey */}
            <section className="section bg-white dark:bg-neutral-950">
                <div className="container-custom">
                    <h2 className="text-center mb-12">My Journey</h2>

                    <div className="max-w-2xl mx-auto">
                        {timeline.map((item, index) => (
                            <div key={item.year} className="relative pl-8 pb-10 last:pb-0">
                                {/* Line */}
                                {index !== timeline.length - 1 && (
                                    <div className="absolute left-[11px] top-8 w-0.5 h-full bg-gradient-to-b from-accent-500 to-secondary-500" />
                                )}

                                {/* Dot */}
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>

                                {/* Content */}
                                <div>
                                    <span className="text-sm font-semibold text-accent-500">
                                        {item.year}
                                    </span>
                                    <h4 className="text-lg font-semibold mt-1 mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Touch */}
            <section className="section bg-gradient-to-br from-accent-500 via-secondary-500 to-accent-400">
                <div className="container-custom text-center">
                    <Heart className="w-10 h-10 mx-auto mb-6 text-white" />
                    <h2 className="text-white mb-4">Thank You for Visiting</h2>
                    <p className="text-white/90 max-w-xl mx-auto">
                        Your interest in my work means the world to me. Art is meant to be
                        shared, and I'm grateful you're here to experience it with me.
                    </p>
                </div>
            </section>
        </div>
    )
}
