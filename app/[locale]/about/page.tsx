"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function AboutPage() {
    const t = useTranslations('About');

    return (
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-24">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

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
                <div className="flex flex-col space-y-6 lg:pr-12">
                    {/* Eyebrow */}
                    <h2 className="text-[#DFA59E] uppercase tracking-widest text-xs font-sans font-bold mb-2">
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
    );
}
