import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="container-custom">
                <div className="text-center max-w-lg mx-auto">
                    {/* 404 Graphic */}
                    <div className="mb-8">
                        <span className="text-9xl font-serif font-bold gradient-text">
                            404
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-serif mb-4">
                        Artwork Not Found
                    </h1>

                    <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                        The page you're looking for seems to have wandered off into the
                        creative ether. Let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/" className="btn btn-primary">
                            <Home className="w-4 h-4 mr-2" />
                            Go Home
                        </Link>
                        <Link href="/gallery" className="btn btn-secondary">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            View Gallery
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
