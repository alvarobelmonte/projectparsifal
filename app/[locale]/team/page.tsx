"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const team = [
    { id: 'ulysse', name: 'Ulysse Bonneau', img: '/assets/img/team/ulysse.webp' },
    { id: 'jules', name: 'Jules Le Priol', img: '/assets/img/team/jules.webp' },
    { id: 'paul', name: 'Paul Campa', img: '/assets/img/team/paul.webp' },
    { id: 'perceval', name: 'Perceval Alizadeh', img: '/assets/img/team/perce.webp' },
    { id: 'laura', name: 'Laura Simarro', img: '/assets/img/team/laura.webp' },
    { id: 'emeline', name: 'Emeline Soulie', img: '/assets/img/team/emeline.webp' },
];

export default function TeamPage() {
    const t = useTranslations('Team');
    const common = useTranslations('Common');

    return (
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] selection:bg-[#DFA59E] selection:text-[#1A1010]">

            {/* Background Texture/Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1E1E] via-[#1A1010] to-[#1A1010] z-0"></div>

            <div className="relative z-10 pt-32 pb-24">

                {/* Header */}
                <div className="container mx-auto px-6 max-w-7xl mb-24 text-center space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[#DFA59E] text-xs font-bold uppercase tracking-[0.3em] font-sans">Projet Parsifal</span>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white drop-shadow-lg">
                            {t('title')}
                        </h1>
                    </div>
                    <div className="w-12 h-[2px] bg-[#DFA59E] mx-auto opacity-50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24">
                    {team.map((member, index) => (
                        <div
                            key={member.id}
                            className="group flex flex-col items-start relative"
                        >

                            {/* Image Container */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm shadow-xl border border-white/5 bg-[#1A1010] mb-8">
                                <div className="absolute inset-0 bg-[#DFA59E] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10"></div>
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1010] via-transparent to-transparent opacity-60"></div>

                                {/* Hover Overlay Details */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                                    <div className="w-12 h-[1px] bg-[#DFA59E] mb-4"></div>
                                    <p className="font-sans text-sm text-white/90 leading-relaxed drop-shadow-md">
                                        {t(`${member.id}_desc`)}
                                    </p>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="w-full space-y-3 relative">
                                <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4 w-full group-hover:border-[#DFA59E]/50 transition-colors duration-500">
                                    <div>
                                        <h3 className="font-display text-3xl uppercase tracking-wide text-white group-hover:text-[#DFA59E] transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-white/40 mt-1 min-h-[40px] md:min-h-[44px]">
                                            {t(`${member.id}_role`)}
                                        </p>
                                    </div>
                                    <span className="text-[#DFA59E] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowRight size={20} strokeWidth={1.5} />
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
