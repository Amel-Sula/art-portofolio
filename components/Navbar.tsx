'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const cycleTheme = () => {
        const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system']
        const currentIndex = themes.indexOf(theme)
        const nextIndex = (currentIndex + 1) % themes.length
        setTheme(themes[nextIndex])
    }

    const ThemeIcon = () => {
        switch (theme) {
            case 'light':
                return <Sun className="w-5 h-5" />
            case 'dark':
                return <Moon className="w-5 h-5" />
            case 'system':
                return <Monitor className="w-5 h-5" />
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass shadow-soft py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-serif text-2xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
                    >
                        {/* ================================================
                CUSTOMIZE: Replace with your name/brand
                ================================================ */}
                        Art.Bojeqielli
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors hover:text-accent-500 ${pathname === link.href
                                        ? 'text-accent-500'
                                        : 'text-neutral-600 dark:text-neutral-400'
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full"
                                    />
                                )}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={cycleTheme}
                            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label={`Current theme: ${theme}. Click to cycle theme.`}
                        >
                            <ThemeIcon />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={cycleTheme}
                            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label={`Current theme: ${theme}. Click to cycle theme.`}
                        >
                            <ThemeIcon />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-6 space-y-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`block py-2 text-lg font-medium transition-colors ${pathname === link.href
                                                    ? 'text-accent-500'
                                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}
