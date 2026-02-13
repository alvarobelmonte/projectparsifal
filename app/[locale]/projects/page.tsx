"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

const projects = [
    { id: 'weimar', slug: 'weimar', img: '/assets/img/projects/triangle/triangle-01.jpg' },
    { id: 'come', slug: 'come', img: '/assets/img/projects/creation/creation-01.png' },
    { id: 'sunset', slug: 'sunset', img: '/assets/img/projects/sunset/sunset-01.jpg' },
    { id: 'regarde', slug: 'regarde', img: '/assets/img/projects/regarde/regarde-01.jpeg' },
    { id: 'revue', slug: 'revue', img: '/assets/img/projects/projects-hero.png' },
    { id: 'residence', slug: 'residence', img: '/assets/img/about/about-hero.webp' },
];

export default function ProjectsPage() {
    const t = useTranslations('Projects');
    const common = useTranslations('Common');

    return (
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] selection:bg-[#DFA59E] selection:text-[#1A1010]">

            {/* Background Texture/Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1E1E] via-[#1A1010] to-[#1A1010] z-0"></div>

            <div className="relative z-10 pt-32 pb-24">

                {/* Header */}
                <div className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-24 text-center space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[#DFA59E] text-xs font-bold uppercase tracking-[0.3em] font-sans">Projet Parsifal</span>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white drop-shadow-lg">
                            {t('title')}
                        </h1>
                    </div>
                    <div className="w-12 h-[2px] bg-[#DFA59E] mx-auto opacity-50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-6xl flex flex-col gap-24 lg:gap-32">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Image Section */}
                            <div className="w-full lg:w-3/5 aspect-[16/9] relative overflow-hidden rounded-sm shadow-2xl border border-white/5">
                                <div className="absolute inset-0 bg-[#DFA59E] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10"></div>
                                <Image
                                    src={project.img}
                                    alt={t(`${project.id}_title`)}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1010] via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Text Section */}
                            <div className="w-full lg:w-2/5 flex flex-col justify-center items-start text-left relative">
                                {/* Decorative line */}
                                <div className={`absolute top-0 w-20 h-[1px] bg-[#DFA59E] opacity-50 mb-8 ${index % 2 === 1 ? 'right-0 lg:left-auto lg:right-0' : 'left-0'}`}></div>

                                <div className="pt-8 space-y-6">
                                    <h3 className="font-display text-3xl md:text-4xl uppercase tracking-wide leading-tight text-white group-hover:text-[#DFA59E] transition-colors duration-500">
                                        {t(`${project.id}_title`)}
                                    </h3>
                                    <p className="font-sans text-sm md:text-base font-light text-white/60 leading-relaxed line-clamp-4">
                                        {t(`${project.id}_desc`)}
                                    </p>

                                    <div className="pt-4">
                                        <Link
                                            href={'/projects/' + project.slug}
                                            className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#DFA59E] hover:border-[#DFA59E] hover:text-[#1A1010] transition-all duration-300 group/btn"
                                        >
                                            {common('read_more')}
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
