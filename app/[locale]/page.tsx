"use client";

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function HomePage() {
    const t = useTranslations('Home');
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.15;
            // Attempt to play audio (browsers may block this without interaction)
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay prevented:", error);
                    // Optional: Show a "Play Audio" button here if needed
                });
            }
        }
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background - Now Muted as we use separate audio */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
            >
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
                {/* Fallback image if video fails or loading */}
                <img src="/assets/img/projects/projects-hero.png" alt="Hero Background" className="w-full h-full object-cover" />
            </video>

            {/* Background Audio */}
            <audio ref={audioRef} loop>
                <source src="/assets/videos/regarde-song.mp3" type="audio/mpeg" />
            </audio>

            {/* Overlay Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#F2F0EB] tracking-widest leading-tight uppercase opacity-90 text-shadow-sm whitespace-pre-wrap">
                    {t('hero_title')}
                </h1>
            </div>

            {/* Gradient Overlay for bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#2C1E1E] to-transparent z-1"></div>
        </div>
    );
}
