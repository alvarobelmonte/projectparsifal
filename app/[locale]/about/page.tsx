"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function AboutPage() {
    const t = useTranslations('About');

    return (
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] selection:bg-[#DFA59E] selection:text-[#1A1010]">

            {/* Background Texture/Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1E1E] via-[#1A1010] to-[#1A1010] z-0"></div>

            <div className="relative z-10 pt-32 pb-24">

                {/* Header - Centered */}
                <div className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-24 text-center space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[#DFA59E] text-xs font-bold uppercase tracking-[0.3em] font-sans">Projet Parsifal</span>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white drop-shadow-lg">
                            {t('title')}
                        </h1>
                    </div>
                    <div className="w-12 h-[2px] bg-[#DFA59E] mx-auto opacity-50"></div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Left Column - Overlapping Images */}
                        <div className="relative h-[500px] lg:h-[700px] w-full">
                            {/* Back Image (Hero) - Top Left - Lighter/Abstract */}
                            <div className="absolute top-0 left-0 w-[85%] h-[85%] z-0 bg-[#2C1E1E]">
                                <Image
                                    src="/assets/img/about/about-hero.webp"
                                    alt="Background"
                                    fill
                                    className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Front Image (Profile) - Bottom Right - Team */}
                            <div className="absolute bottom-0 right-0 w-[60%] h-[55%] z-10 shadow-2xl">
                                <Image
                                    src="/assets/img/about/about-profile.webp"
                                    alt="Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column - Text Content */}
                        <div className="flex flex-col space-y-8 lg:pr-12">

                            {/* Subtitle */}
                            <h2 className="text-white/60 uppercase tracking-widest text-sm font-sans font-bold text-center lg:text-left">
                                {t('subtitle')}
                            </h2>

                            {/* Body Text with Rich Formatting */}
                            <div className="space-y-6 text-[#F2F0EB] font-sans font-light text-base leading-relaxed text-justify">
                                <p className="text-lg md:text-xl font-display leading-normal mb-8">
                                    {t.rich('p1', {
                                        bold: (chunks) => <span className="text-[#DFA59E] italic font-bold">{chunks}</span>
                                    })}
                                </p>

                                <div className="w-12 h-[3px] bg-[#DFA59E] mb-8"></div>

                                <p>
                                    {t.rich('p2', {
                                        bold: (chunks) => <span className="font-bold text-white">{chunks}</span>
                                    })}
                                </p>
                                <p>{t('p3')}</p>
                            </div>

                            {/* Navigation Links */}
                            <div className="space-y-4 pt-8 text-[11px] font-bold uppercase tracking-widest flex flex-col items-start leading-loose">
                                <div>
                                    {t.rich('link_team', {
                                        link: (chunks) => <Link href="/team" className="text-[#DFA59E] underline underline-offset-4 hover:text-white transition-colors ml-1">{chunks}</Link>
                                    })}
                                </div>
                                <div>
                                    {t.rich('link_paintings', {
                                        link: (chunks) => <Link href="/paintings" className="text-[#DFA59E] underline underline-offset-4 hover:text-white transition-colors ml-1">{chunks}</Link>
                                    })}
                                </div>
                                <div>
                                    {t.rich('link_videos_projects', {
                                        link1: (chunks) => <Link href="/art-videos" className="text-[#DFA59E] underline underline-offset-4 hover:text-white transition-colors mx-1">{chunks}</Link>,
                                        link2: (chunks) => <Link href="/projects" className="text-[#DFA59E] underline underline-offset-4 hover:text-white transition-colors mx-1">{chunks}</Link>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
