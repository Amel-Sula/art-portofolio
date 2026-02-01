'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import {
    Mail,
    Instagram,
    Twitter,
    MessageSquare,
    Send,
    CheckCircle,
    AlertCircle
} from 'lucide-react'

/* ================================================
   CUSTOMIZE: Update social links and email
   ================================================ */
const contactInfo = {
    email: 'hello@artbojeqielli.com',
    instagram: 'https://instagram.com/art.bojeqielli',
    twitter: 'https://twitter.com/artbojeqielli',
}

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

interface FormErrors {
    name?: string
    email?: string
    subject?: string
    message?: string
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        // Simulate form submission
        // TODO: Replace with actual form submission logic
        // Options: EmailJS, Formspree, custom API route, etc.
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="pt-12 pb-16 bg-gradient-subtle">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto">
                        <h1 className="mb-4">Get in Touch</h1>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                            Have a project in mind, want to commission a piece, or just want
                            to say hello? I'd love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section bg-white dark:bg-neutral-950">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl mb-6">Send a Message</h2>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center"
                                >
                                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                                    <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-200">
                                        Message Sent!
                                    </h3>
                                    <p className="text-green-700 dark:text-green-300">
                                        Thank you for reaching out. I'll get back to you soon!
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-6 btn btn-secondary"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 ${errors.name
                                                    ? 'border-red-500'
                                                    : 'border-neutral-200 dark:border-neutral-700'
                                                }`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 ${errors.email
                                                    ? 'border-red-500'
                                                    : 'border-neutral-200 dark:border-neutral-700'
                                                }`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 ${errors.subject
                                                    ? 'border-red-500'
                                                    : 'border-neutral-200 dark:border-neutral-700'
                                                }`}
                                            placeholder="What's this about?"
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none ${errors.message
                                                    ? 'border-red-500'
                                                    : 'border-neutral-200 dark:border-neutral-700'
                                                }`}
                                            placeholder="Tell me about your project or idea..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info & Social */}
                        <div className="lg:pl-12">
                            <h2 className="text-2xl mb-6">Other Ways to Connect</h2>

                            <div className="space-y-6">
                                {/* Email */}
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors card"
                                >
                                    <div className="p-3 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-xl text-white">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-neutral-600 dark:text-neutral-400">
                                            {contactInfo.email}
                                        </p>
                                    </div>
                                </a>

                                {/* Instagram */}
                                <a
                                    href={contactInfo.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors card"
                                >
                                    <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl text-white">
                                        <Instagram className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Instagram</p>
                                        <p className="text-neutral-600 dark:text-neutral-400">
                                            @art.bojeqielli
                                        </p>
                                    </div>
                                </a>

                                {/* Twitter */}
                                <a
                                    href={contactInfo.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors card"
                                >
                                    <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl text-white">
                                        <Twitter className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Twitter</p>
                                        <p className="text-neutral-600 dark:text-neutral-400">
                                            @artbojeqielli
                                        </p>
                                    </div>
                                </a>
                            </div>

                            {/* Instagram Embed Section */}
                            <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl card">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-accent-500" />
                                    Follow on Instagram
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                                    Check out my latest work and behind-the-scenes content on Instagram.
                                </p>

                                {/* ================================================
                    INSTAGRAM EMBED SECTION
                    
                    Option A (Recommended): Use official Instagram oEmbed
                    Replace this placeholder with your embed code from Instagram.
                    
                    To get embed code:
                    1. Go to your Instagram post
                    2. Click the three dots (•••) menu
                    3. Select "Embed"
                    4. Copy the HTML and paste here
                    
                    Example:
                    <blockquote 
                      className="instagram-media" 
                      data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID/"
                    >
                    </blockquote>
                    <script async src="//www.instagram.com/embed.js"></script>
                    
                    Option B: Manual assets (see README.md)
                    ================================================ */}
                                <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center">
                                    <div className="text-center">
                                        <Instagram className="w-12 h-12 mx-auto mb-2 text-neutral-400" />
                                        <p className="text-sm text-neutral-500">
                                            Instagram embed placeholder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
