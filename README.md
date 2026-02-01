# Art Portfolio Website

A production-ready, fully responsive portfolio website inspired by Instagram art page aesthetics. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/1200x630/fda4af/ffffff?text=Art+Portfolio)

## ✨ Features

- **Mobile-first responsive design** - Looks great on all devices
- **Dark mode** with system preference support
- **Masonry gallery** with smooth animations
- **Category filtering** for artworks
- **Image lightbox** with zoom and keyboard navigation
- **SEO optimized** with sitemap, robots.txt, and OpenGraph tags
- **Accessible** with keyboard navigation and ARIA labels
- **Contact form** with client-side validation

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) version 18.17 or higher
- npm (comes with Node.js)

### Installation

```bash
# Navigate to project directory
cd art-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
art-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── gallery/page.tsx    # Gallery with filters
│   ├── art/[slug]/page.tsx # Artwork detail page
│   ├── about/page.tsx      # About the artist
│   ├── contact/page.tsx    # Contact form
│   ├── privacy/page.tsx    # Privacy policy
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/             # Reusable UI components
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── ThemeProvider.tsx   # Dark mode context
│   ├── ArtworkCard.tsx     # Gallery item card
│   ├── GalleryGrid.tsx     # Masonry layout grid
│   ├── FilterChips.tsx     # Category filter buttons
│   └── Lightbox.tsx        # Image zoom modal
├── data/
│   └── artworks.ts         # Artwork data (edit this!)
└── public/
    └── artworks/           # Artwork images (add yours here!)
```

## 🎨 Customization Guide

### Step 1: Add Your Artworks

1. **Add your images** to `/public/artworks/`
   - Recommended formats: WebP, JPEG, or PNG
   - Use descriptive filenames: `my-artwork-title.jpg`

2. **Update artwork data** in `/data/artworks.ts`:

```typescript
{
  slug: 'my-artwork-title',        // URL-friendly (lowercase, hyphens)
  title: 'My Artwork Title',       // Display title
  date: '2024-01-15',              // Creation date
  description: 'A brief description of this piece.',
  tags: ['abstract', 'colorful'],  // Descriptive tags
  category: 'Digital',             // Must match CATEGORIES
  width: 1200,                     // Image width in pixels
  height: 1500,                    // Image height in pixels
  src: '/artworks/my-artwork-title.jpg',
  alt: 'Descriptive alt text for accessibility',
  featured: true,                  // Show on homepage (limit ~6)
}
```

### Step 2: Update Your Info

Search for `CUSTOMIZE:` comments in these files:

| File | What to Update |
|------|---------------|
| `app/layout.tsx` | Site metadata, OpenGraph info |
| `app/page.tsx` | Hero text, bio preview |
| `app/about/page.tsx` | Full bio, tools, timeline |
| `app/contact/page.tsx` | Email, social links |
| `app/privacy/page.tsx` | Privacy policy content |
| `components/Navbar.tsx` | Brand name/logo |
| `components/Footer.tsx` | Brand, social links |
| `app/sitemap.ts` | Your domain URL |
| `app/robots.ts` | Your domain URL |

### Step 3: Add Your Logo/Favicon

Replace files in `/public/`:
- `favicon.ico`
- `apple-touch-icon.png`
- `og-image.jpg` (1200×630px for social sharing)

## 📸 Instagram Integration

### Option A: Manual Assets (Recommended)

1. Download your images from Instagram
2. Place them in `/public/artworks/`
3. Update `/data/artworks.ts` with the image info

### Option B: Official Instagram Embed

For embedding specific Instagram posts:

1. Go to your Instagram post on web
2. Click ••• menu → "Embed"
3. Copy the embed code
4. Add to `/app/contact/page.tsx` in the Instagram section

```html
<blockquote 
  class="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID/"
>
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

> ⚠️ **Note**: This project does NOT use unauthorized scraping. Only use Instagram's official embed feature or your own exported images.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

That's it! Vercel auto-detects Next.js and handles everything.

### Environment Variables (Optional)

If you add form submission or analytics:

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter (UI) + Playfair Display (headings)

## 📄 License

This project is open source. Feel free to use it as a starting point for your own portfolio.

---

Made with ❤️ for artists
