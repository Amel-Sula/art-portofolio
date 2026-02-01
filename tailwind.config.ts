import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Neutral base palette
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a',
                },
                // Primary accent - warm rose/coral
                accent: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                    800: '#9f1239',
                    900: '#881337',
                },
                // Secondary accent - soft lavender
                secondary: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7c3aed',
                    800: '#6b21a8',
                    900: '#581c87',
                },
            },
            fontFamily: {
                // Clean sans-serif for UI elements
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                // Elegant serif for headings
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
            backgroundImage: {
                // Subtle gradient accents
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-accent': 'linear-gradient(135deg, #fda4af 0%, #c084fc 50%, #818cf8 100%)',
                'gradient-subtle': 'linear-gradient(135deg, #faf5ff 0%, #fff1f2 50%, #f0f9ff 100%)',
                'gradient-dark': 'linear-gradient(135deg, #1f1f1f 0%, #171717 50%, #0f0f0f 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-up': 'fadeUp 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'slide-in': 'slideIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-10px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 15px 25px -5px rgba(0, 0, 0, 0.05)',
                'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
            },
        },
    },
    plugins: [],
}
export default config
