/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        // Configure image optimization
        formats: ['image/avif', 'image/webp'],
        // Add remote patterns if you need to load images from external sources
        remotePatterns: [
            // Uncomment and modify if loading images from Instagram or other external sources
            // {
            //   protocol: 'https',
            //   hostname: 'instagram.com',
            // },
            // {
            //   protocol: 'https',
            //   hostname: '*.cdninstagram.com',
            // },
        ],
    },
    // Enable experimental features if needed
    experimental: {
        // Enable optimizations
    },
}

module.exports = nextConfig
