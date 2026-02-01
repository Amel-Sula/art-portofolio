import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy policy for Art.Bojeqielli portfolio website.',
}

/* ================================================
   CUSTOMIZE: Update with your actual privacy policy
   This is a template - review and modify as needed
   ================================================ */

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <div className="container-custom py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="mb-4">Privacy Policy</h1>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-12">
                        Last updated: February 1, 2024
                    </p>

                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                Introduction
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Welcome to Art.Bojeqielli&apos;s portfolio website. Your privacy is
                                important to me. This Privacy Policy explains how I collect,
                                use, and protect your personal information when you visit this
                                website.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                Information I Collect
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                                I may collect the following information:
                            </p>
                            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                                <li>
                                    <strong>Contact form submissions:</strong> Name, email
                                    address, and message content when you contact me
                                </li>
                                <li>
                                    <strong>Analytics data:</strong> Anonymous usage data through
                                    privacy-respecting analytics (if implemented)
                                </li>
                                <li>
                                    <strong>Theme preference:</strong> Your light/dark mode
                                    preference stored locally in your browser
                                </li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                How I Use Your Information
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                                Your information is used to:
                            </p>
                            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                                <li>Respond to your inquiries and messages</li>
                                <li>Improve the website experience</li>
                                <li>Remember your preferences (like theme settings)</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                Third-Party Services
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                                This website may use the following third-party services:
                            </p>
                            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                                <li>
                                    <strong>Vercel:</strong> Website hosting and analytics
                                </li>
                                <li>
                                    <strong>Google Fonts:</strong> Typography (Inter, Playfair
                                    Display)
                                </li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                Instagram Integration
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                If Instagram content is embedded on this website, it uses
                                Instagram&apos;s official embed feature (oEmbed). This may allow
                                Instagram to collect data about your visit according to their
                                privacy policy. I do not engage in any unauthorized data
                                scraping from Instagram or other social media platforms.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                Cookies and Local Storage
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                This website uses browser local storage to remember your theme
                                preference (light/dark mode). This data is stored only on your
                                device and is not transmitted to any server.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                Your Rights
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
                                <li>Request access to your personal data</li>
                                <li>Request correction or deletion of your data</li>
                                <li>Opt out of any communications</li>
                                <li>Clear your local storage data at any time</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                Contact
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                If you have any questions about this Privacy Policy or your
                                data, please contact me at{' '}
                                <a
                                    href="mailto:hello@artbojeqielli.com"
                                    className="text-accent-500 hover:text-accent-600 underline"
                                >
                                    hello@artbojeqielli.com
                                </a>
                                .
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                Changes to This Policy
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                I may update this Privacy Policy from time to time. Any changes
                                will be posted on this page with an updated revision date.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
