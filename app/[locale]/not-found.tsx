import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
    // We can use translations here if we configure not-found to be async or use client
    // But standard component is fine.
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h2 className="text-4xl font-display font-bold mb-4">Page Not Found</h2>
            <p className="mb-8 text-secondary">Could not find requested resource</p>
            <Link href="/" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-90">
                Return Home
            </Link>
        </div>
    );
}
