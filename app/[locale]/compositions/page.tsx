"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward, Volume2, Share2 } from 'lucide-react';
import { useState, useRef } from 'react';

export default function CompositionsPage() {
    const t = useTranslations('Compositions');
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) audioRef.current.pause();
            else audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="min-h-screen bg-[#2C1E1E] text-[#F2F0EB]">

            {/* Header */}
            <div className="py-20 text-center container mx-auto px-4 max-w-4xl">
                <h1 className="font-display text-4xl tracking-widest uppercase mb-8">{t('title')}</h1>
                <p className="font-sans text-sm font-light text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto text-center">
                    {t('intro')}
                </p>

                <a href="https://distrokid.com/hyperfollow/projetparsifal/tableau-1" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#DFA59E] text-[#2C1E1E] font-sans text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    {t('button')}
                </a>

                <div className="w-16 h-[1px] bg-white/20 mx-auto mt-16 mb-20"></div>
            </div>

            {/* EP Section Text */}
            <div className="container mx-auto px-4 max-w-4xl pb-16">
                <div className="text-center space-y-6">
                    <h2 className="font-display text-2xl tracking-widest uppercase">{t('tableau_title')}</h2>
                    <p className="font-sans text-sm font-light text-white/70 leading-relaxed">
                        {t('tableau_desc')}
                    </p>
                </div>
            </div>

            {/* Video Background Container - Full Width */}
            <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden shadow-2xl group mb-24">

                {/* Background Video */}
                <div className="absolute inset-0 w-full h-full">
                    <video
                        src="/assets/videos/compositions.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Custom Music Player Widget - Centered Overlay */}
                <div className="relative z-10 w-[90%] max-w-2xl bg-[#211616]/90 backdrop-blur-sm p-6 flex flex-col md:flex-row items-center gap-6 shadow-2xl border border-white/10">
                    {/* Album Art */}
                    <div className="relative w-24 h-24 bg-white flex-shrink-0 shadow-lg">
                        <Image
                            src="/assets/img/album-cover.webp"
                            alt="Tableau I Album Art"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Controls & Info */}
                    <div className="flex-grow w-full space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-sans text-xs uppercase tracking-widest text-white/50">PROJET PARSIFAL</h4>
                                <h3 className="font-display text-xl text-[#DFA59E]">Yeki</h3>
                                <p className="font-sans text-xs text-white/30">Tableau I</p>
                            </div>
                            <a href="https://distrokid.com/hyperfollow/projetparsifal/tableau-1" target="_blank" rel="noopener noreferrer" className="text-xs border px-3 py-1 border-white/20 text-white/50 hover:border-[#DFA59E] hover:text-[#DFA59E] transition-colors uppercase">
                                {t('get_album')}
                            </a>
                        </div>

                        {/* Progress Bar (Fake) */}
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
                            <div className="w-1/3 h-full bg-[#DFA59E]"></div>
                        </div>

                        <div className="flex justify-between items-center text-white/50">
                            <div className="flex gap-4">
                                <SkipBack size={16} className="cursor-pointer hover:text-white" />
                                <button onClick={togglePlay} className="hover:text-white focus:outline-none">
                                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                                </button>
                                <SkipForward size={16} className="cursor-pointer hover:text-white" />
                            </div>
                            <div className="text-[10px] font-mono">00:00 / 07:05</div>
                            <div className="flex gap-4">
                                <Volume2 size={16} className="cursor-pointer hover:text-white" />
                                <Share2 size={16} className="cursor-pointer hover:text-white" />
                            </div>
                        </div>
                    </div>

                    <audio ref={audioRef} src="/assets/videos/regarde-song.mp3" onEnded={() => setIsPlaying(false)} />
                </div>
            </div>

        </div>
    );
}
