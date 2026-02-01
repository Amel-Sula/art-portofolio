import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

/* ================================================
   CUSTOMIZE: Update metadata with your information
   ================================================ */
export const metadata: Metadata = {
    title: {
        default: 'Art.Bojeqielli | Digital Art & Illustration Portfolio',
        template: '%s | Art.Bojeqielli',
    },
    description:
        'Explore the digital art and illustration portfolio of Art.Bojeqielli. Featuring original artworks, illustrations, sketches, and mixed media pieces.',
    keywords: [
        'art',
        'digital art',
        'illustration',
        'portfolio',
        'artist',
        'creative',
        'artwork',
        'gallery',
    ],
    authors: [{ name: 'Art.Bojeqielli' }],
    creator: 'Art.Bojeqielli',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://artbojeqielli.com',
        siteName: 'Art.Bojeqielli',
        title: 'Art.Bojeqielli | Digital Art & Illustration Portfolio',
        description:
            'Explore the digital art and illustration portfolio of Art.Bojeqielli.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Art.Bojeqielli Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Art.Bojeqielli | Digital Art & Illustration Portfolio',
        description:
            'Explore the digital art and illustration portfolio of Art.Bojeqielli.',
        images: ['/og-image.jpg'],
        creator: '@artbojeqielli',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen flex flex-col">
                <ThemeProvider defaultTheme="system">
                    <Navbar />
                    <main className="flex-grow pt-20">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
