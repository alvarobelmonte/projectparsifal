"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Gallery from '@/components/ui/Gallery';

// Paintings data with correct titles from the original website
const paintings = [
    { src: '/assets/img/paintings/painting-01.webp', caption: 'Aurélien Alizadeh Fard - Paris, 1986/1987' },
    { src: '/assets/img/paintings/painting-04.webp', caption: 'Aurélien Alizadeh Fard - Paris, 1980' },
    { src: '/assets/img/paintings/painting-05.webp', caption: 'Trois mouvements à la guitare classique - Paris, 1978' },
    { src: '/assets/img/paintings/painting-06.webp', caption: 'Croquis - Aurélien Alizadeh Fard' },
    { src: '/assets/img/paintings/painting-07.webp', caption: '"Le négatif de la chambre noire"' },
    { src: '/assets/img/paintings/painting-10.webp', caption: 'Essai autoportrait 1' },
    { src: '/assets/img/paintings/painting-11.webp', caption: 'Croquis 2 - Aurélien Alizadeh Fard' },
    { src: '/assets/img/paintings/painting-13.webp', caption: 'Exposition "Pulsations Rayonnantes", 1993' },
    { src: '/assets/img/paintings/painting-14.webp', caption: '' }, // Nude from behind - no title
    { src: '/assets/img/paintings/painting-15.webp', caption: '' }, // Man on ladder - no title
];

export default function PaintingsPage() {
    const t = useTranslations('Paintings');

    return (
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] selection:bg-[#DFA59E] selection:text-[#1A1010]">

            {/* Background Texture/Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1E1E] via-[#1A1010] to-[#1A1010] z-0"></div>

            <div className="relative z-10 pt-32 pb-24">

                {/* Header */}
                <div className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-24 text-center space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[#DFA59E] text-xs font-bold uppercase tracking-[0.3em] font-sans">Aurélien Alizadeh Fard</span>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white drop-shadow-lg">
                            {t('title')}
                        </h1>
                    </div>
                    <div className="w-12 h-[2px] bg-[#DFA59E] mx-auto opacity-50"></div>
                </div>

                <div className="container mx-auto px-6 pb-24 max-w-7xl">
                    <Gallery images={paintings} />
                </div>

                {/* PART 2: Biography Section */}
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left: Image Grid */}
                        <div className="grid grid-cols-2 grid-rows-2 h-[500px] md:h-[600px] gap-4">
                            {/* Main Portrait */}
                            <div className="relative col-span-2 row-span-1 rounded-sm overflow-hidden border border-white/10 group">
                                <Image
                                    src="/assets/img/paintings/ali3.webp"
                                    alt="Aurélien Alizadeh Fard"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1010] via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Smaller Images */}
                            <div className="grid grid-cols-3 col-span-2 row-span-1 gap-4">
                                <div className="relative rounded-sm overflow-hidden border border-white/10 group">
                                    <Image
                                        src="/assets/img/paintings/ali-1.webp"
                                        alt="Aurélien Studio"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="relative rounded-sm overflow-hidden border border-white/10 group">
                                    <Image
                                        src="/assets/img/paintings/ali-2.webp"
                                        alt="Aurélien Portrait"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="relative rounded-sm overflow-hidden border border-white/10 group">
                                    <Image
                                        src="/assets/img/paintings/ali-4.webp"
                                        alt="Aurélien Work"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Text Content */}
                        <div className="space-y-8 lg:pl-8">
                            <div className="space-y-4">
                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-white leading-tight whitespace-pre-line">
                                    {t('bio_title')}
                                </h2>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-[1px] bg-[#DFA59E]"></div>
                                    <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#DFA59E]">
                                        {t('bio_subtitle')}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 font-sans text-sm md:text-base font-light leading-relaxed text-white/60">
                                <p className="first-letter:text-3xl first-letter:font-display first-letter:text-white first-letter:mr-1 first-letter:float-left">
                                    {t('bio_p1')}
                                </p>
                                <p>{t('bio_p2')}</p>
                                <p className="p-6 border-l-2 border-[#DFA59E] bg-white/[0.02] italic text-white/80">
                                    {t('bio_p3')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
