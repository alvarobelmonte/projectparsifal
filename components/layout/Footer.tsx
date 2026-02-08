"use client";

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const year = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white py-8 mt-auto">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm opacity-80 font-light">
                    {t('copyright', { year })}
                </p>
            </div>
        </footer>
    );
}
