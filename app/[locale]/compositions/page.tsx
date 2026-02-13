"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward, Volume2, Share2, Disc } from 'lucide-react';
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
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] selection:bg-[#DFA59E] selection:text-[#1A1010]">

            {/* Background Texture/Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1E1E] via-[#1A1010] to-[#1A1010] z-0"></div>

            <div className="relative z-10 pt-32 pb-24">

                {/* Header */}
                <div className="container mx-auto px-6 max-w-5xl mb-24 text-center space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[#DFA59E] text-xs font-bold uppercase tracking-[0.3em] font-sans">Projet Parsifal</span>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white drop-shadow-lg">
                            {t('title')}
                        </h1>
                    </div>

                    <div className="w-12 h-[2px] bg-[#DFA59E] mx-auto opacity-50"></div>

                    <p className="font-sans text-base font-light text-white/60 leading-relaxed max-w-2xl mx-auto">
                        {t('intro')}
                    </p>

                    <div className="pt-8">
                        <a
                            href="https://distrokid.com/hyperfollow/projetparsifal/tableau-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#DFA59E] text-[#1A1010] font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(223,165,158,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                        >
                            <Disc size={18} />
                            {t('button')}
                        </a>
                    </div>
                </div>

                {/* EP Section Text */}
                <div className="container mx-auto px-6 max-w-4xl mb-24">
                    <div className="text-center space-y-6 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-sm">
                        <h2 className="font-display text-3xl tracking-[0.1em] uppercase text-white">{t('tableau_title')}</h2>
                        <div className="w-8 h-[1px] bg-white/20 mx-auto"></div>
                        <p className="font-sans text-sm md:text-base font-light text-white/60 leading-relaxed italic">
                            "{t('tableau_desc')}"
                        </p>
                    </div>
                </div>

                {/* Video Background Container - Full Width */}
                <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden shadow-2xl group">

                    {/* Background Video */}
                    <div className="absolute inset-0 w-full h-full">
                        <video
                            src="/assets/videos/compositions.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1010] via-transparent to-[#1A1010]/50"></div>
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                    </div>

                    {/* Custom Music Player Widget - Centered Overlay */}
                    <div className="relative z-10 w-[90%] max-w-3xl bg-[#1A1010]/80 backdrop-blur-md p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl border border-white/10 ring-1 ring-white/5">

                        {/* Album Art */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 bg-black flex-shrink-0 shadow-2xl ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-500">
                            <Image
                                src="/assets/img/album-cover.webp"
                                alt="Tableau I Album Art"
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            {/* Vinyl groove effect overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_100%)] opacity-50"></div>
                        </div>

                        {/* Controls & Info */}
                        <div className="flex-grow w-full space-y-6">
                            <div className="flex justify-between items-start border-b border-white/10 pb-4">
                                <div className="space-y-1">
                                    <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#DFA59E]">Projet Parsifal</h4>
                                    <h3 className="font-display text-3xl text-white tracking-wide">Yeki</h3>
                                    <p className="font-sans text-xs text-white/40 font-light tracking-wider">Tableau I</p>
                                </div>
                                <a href="https://distrokid.com/hyperfollow/projetparsifal/tableau-1" target="_blank" rel="noopener noreferrer" className="text-[10px] border border-white/20 px-4 py-2 text-white/60 hover:border-[#DFA59E] hover:text-[#DFA59E] hover:bg-[#DFA59E]/10 transition-all uppercase tracking-widest">
                                    {t('get_album')}
                                </a>
                            </div>

                            {/* Progress Bar (Fake) */}
                            <div className="space-y-2 group/progress">
                                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden cursor-pointer group-hover/progress:h-[4px] transition-all">
                                    <div className="w-1/3 h-full bg-[#DFA59E] shadow-[0_0_10px_#DFA59E]"></div>
                                </div>
                                <div className="flex justify-between text-[10px] font-mono text-white/30">
                                    <span>02:14</span>
                                    <span>07:05</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-white/50">
                                <div className="flex items-center gap-6">
                                    <SkipBack size={20} className="cursor-pointer hover:text-white transition-colors hover:scale-110 active:scale-95" />
                                    <button
                                        onClick={togglePlay}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#DFA59E] hover:text-[#DFA59E] hover:bg-[#DFA59E]/10 transition-all hover:scale-110 active:scale-95"
                                    >
                                        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                                    </button>
                                    <SkipForward size={20} className="cursor-pointer hover:text-white transition-colors hover:scale-110 active:scale-95" />
                                </div>

                                <div className="flex gap-4">
                                    <Volume2 size={18} className="cursor-pointer hover:text-white transition-colors" />
                                    <Share2 size={18} className="cursor-pointer hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>

                        <audio ref={audioRef} src="/assets/videos/regarde-song.mp3" onEnded={() => setIsPlaying(false)} />
                    </div>
                </div>

            </div>
        </div>
    );
}
