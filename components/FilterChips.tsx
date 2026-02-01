'use client'

import { motion } from 'framer-motion'
import type { Category } from '@/data/artworks'

interface FilterChipsProps {
    categories: Category[]
    activeCategory: Category
    onCategoryChange: (category: Category) => void
}

export default function FilterChips({
    categories,
    activeCategory,
    onCategoryChange,
}: FilterChipsProps) {
    return (
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => {
                const isActive = category === activeCategory
                return (
                    <motion.button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                ? 'text-white'
                                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                            }`}
                        aria-pressed={isActive}
                    >
                        {/* Active background */}
                        {isActive && (
                            <motion.span
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}

                        {/* Label */}
                        <span className="relative z-10">{category}</span>
                    </motion.button>
                )
            })}
        </div>
    )
}
