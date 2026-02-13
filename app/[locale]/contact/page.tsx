"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] selection:bg-[#DFA59E] selection:text-[#1A1010]">

            {/* Background Texture/Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1E1E] via-[#1A1010] to-[#1A1010] z-0"></div>

            <div className="relative z-10 pt-32 pb-24 flex flex-col justify-center min-h-screen">

                {/* Header */}
                <div className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-20 text-center space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[#DFA59E] text-xs font-bold uppercase tracking-[0.3em] font-sans">Projet Parsifal</span>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white drop-shadow-lg">
                            {t('title')}
                        </h1>
                    </div>
                    <div className="w-12 h-[2px] bg-[#DFA59E] mx-auto opacity-50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-6xl pb-20 space-y-20">

                    {/* Content Section - 2 Columns */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Column 1: Intro Texts */}
                        <div className="space-y-8 font-light text-base md:text-lg leading-relaxed text-white/70 text-center md:text-left">
                            <p>{t('text1')}</p>
                            <p>{t('text2')}</p>
                        </div>

                        {/* Column 2: Contact Info & CTA */}
                        <div className="space-y-12 flex flex-col items-center md:items-start text-center md:text-left">
                            <div>
                                <h3 className="font-display text-3xl md:text-4xl text-white mb-2 whitespace-pre-wrap leading-tight">
                                    {t('text3').split('\n')[0]}
                                </h3>
                                <p className="font-display text-3xl md:text-4xl text-[#DFA59E] whitespace-pre-wrap leading-tight">
                                    {t('text3').split('\n')[1]}
                                </p>
                            </div>

                            <a
                                href={`mailto:${t('email')}`}
                                className="inline-flex items-center gap-4 text-xl font-sans font-bold tracking-widest text-white hover:text-[#DFA59E] transition-colors group"
                            >
                                <span className="p-3 rounded-full border border-white/20 group-hover:border-[#DFA59E] transition-colors">
                                    <Mail size={24} />
                                </span>
                                {t('email')}
                            </a>

                            <div className="flex gap-6">
                                {[
                                    { icon: Instagram, href: "https://www.instagram.com/projet_parsifal/" },
                                    { icon: Facebook, href: "https://www.facebook.com/projetparsifal" },
                                    { icon: Youtube, href: "https://www.youtube.com/@projetparsifal/videos" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full border border-white/20 text-white/60 hover:text-[#1A1010] hover:bg-[#DFA59E] hover:border-[#DFA59E] transition-all duration-300"
                                    >
                                        <social.icon size={26} strokeWidth={1.5} />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Full Width Landscape Image */}
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-2xl border border-white/5 group">
                        <div className="absolute inset-0 bg-[#DFA59E] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10"></div>
                        <Image
                            src="/assets/img/music/music-performance.webp"
                            alt="Contact - Projet Parsifal Performance"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1010] via-transparent to-transparent opacity-60"></div>
                    </div>

                </div>

            </div>
        </div>
    );
}
