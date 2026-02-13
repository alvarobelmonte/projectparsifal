"use client";

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function HomePage() {
    const t = useTranslations('Home');
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(true); // Default to muted state if autoplay fails

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.15;

            const playAudio = () => {
                if (audioRef.current) {
                    const playPromise = audioRef.current.play();
                    if (playPromise !== undefined) {
                        playPromise
                            .then(() => {
                                // Autoplay started!
                                setIsMuted(false);
                            })
                            .catch(error => {
                                // Autoplay was prevented.
                                console.log("Autoplay prevented:", error);
                                setIsMuted(true);
                            });
                    }
                }
            };

            // Try to play automatically on load
            playAudio();

            // Also try to play on first user interaction if autoplay failed
            const handleFirstInteraction = () => {
                if (audioRef.current && audioRef.current.paused) {
                    playAudio();
                }
                // Remove listeners after first attempt/success
                document.removeEventListener('click', handleFirstInteraction);
                document.removeEventListener('touchstart', handleFirstInteraction);
                document.removeEventListener('keydown', handleFirstInteraction);
            };

            document.addEventListener('click', handleFirstInteraction);
            document.addEventListener('touchstart', handleFirstInteraction);
            document.addEventListener('keydown', handleFirstInteraction);

            return () => {
                document.removeEventListener('click', handleFirstInteraction);
                document.removeEventListener('touchstart', handleFirstInteraction);
                document.removeEventListener('keydown', handleFirstInteraction);
            };
        }
    }, []);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().then(() => setIsMuted(false));
            } else {
                audioRef.current.pause();
                setIsMuted(true);
            }
        }
    };

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

            {/* Audio Toggle Button */}
            <button
                onClick={toggleAudio}
                className="absolute bottom-8 right-8 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm text-[#F2F0EB] hover:bg-white/20 transition-all duration-300 group"
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? (
                    <VolumeX size={24} className="opacity-70 group-hover:opacity-100" />
                ) : (
                    <Volume2 size={24} className="opacity-70 group-hover:opacity-100" />
                )}
            </button>

            {/* Gradient Overlay for bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#2C1E1E] to-transparent z-1 pointer-events-none"></div>
        </div>
    );
}
