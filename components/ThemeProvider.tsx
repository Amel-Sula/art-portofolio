'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'art-portfolio-theme',
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(defaultTheme)
    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
    const [mounted, setMounted] = useState(false)

    // Initialize theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem(storageKey) as Theme | null
        if (savedTheme) {
            setThemeState(savedTheme)
        }
        setMounted(true)
    }, [storageKey])

    // Update resolved theme based on theme setting and system preference
    useEffect(() => {
        const updateResolvedTheme = () => {
            if (theme === 'system') {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
                setResolvedTheme(systemTheme)
            } else {
                setResolvedTheme(theme)
            }
        }

        updateResolvedTheme()

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => {
            if (theme === 'system') {
                updateResolvedTheme()
            }
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [theme])

    // Apply theme class to document
    useEffect(() => {
        if (!mounted) return

        const root = document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(resolvedTheme)
    }, [resolvedTheme, mounted])

    const setTheme = (newTheme: Theme) => {
        localStorage.setItem(storageKey, newTheme)
        setThemeState(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {/* Prevent flash of wrong theme by hiding content until mounted */}
            <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
