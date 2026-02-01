import Link from 'next/link'
import { Instagram, Twitter, Mail, Heart } from 'lucide-react'

/* ================================================
   CUSTOMIZE: Update social links with your profiles
   ================================================ */
const socialLinks = [
    {
        href: 'https://instagram.com/art.bojeqielli',
        label: 'Instagram',
        icon: Instagram,
    },
    {
        href: 'https://twitter.com/artbojeqielli',
        label: 'Twitter',
        icon: Twitter,
    },
    {
        href: 'mailto:hello@artbojeqielli.com',
        label: 'Email',
        icon: Mail,
    },
]

const footerLinks = [
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
            <div className="container-custom py-12 md:py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="font-serif text-2xl font-semibold tracking-tight"
                        >
                            {/* ================================================
                  CUSTOMIZE: Replace with your name/brand
                  ================================================ */}
                            Art.Bojeqielli
                        </Link>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                            {/* ================================================
                  CUSTOMIZE: Update tagline
                  ================================================ */}
                            Creating art that tells stories and evokes emotions.
                            Based in the intersection of imagination and reality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col space-y-2">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-500 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                            Follow Along
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.href}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-500 transition-all"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-neutral-500 flex items-center gap-1">
                        © {currentYear} Art.Bojeqielli. Made with
                        <Heart className="w-4 h-4 text-accent-500 fill-accent-500" />
                    </p>
                    <p className="text-sm text-neutral-500">
                        All artworks are protected by copyright.
                    </p>
                </div>
            </div>
        </footer>
    )
}
