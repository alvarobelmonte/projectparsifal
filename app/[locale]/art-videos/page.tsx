"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Play } from 'lucide-react';

const videos = [
    { id: 'hero', src: '/assets/videos/hero.mp4', title: 'Main Trailer', poster: '/assets/img/projects/projects-hero.png' },
    { id: 'regarde', src: '/assets/videos/regarde-intro.mp4', title: 'Regarde Intro', poster: '/assets/img/projects/regarde/regarde-01.jpeg' },
    { id: 'perceval', src: '/assets/videos/making-of-perceval.mp4', title: 'Making of Perceval', poster: '/assets/img/team/perce.webp' },
    { id: 'making_regarde', src: '/assets/videos/making-of-regarde.mp4', title: 'Making of Regarde', poster: '/assets/img/projects/regarde/regarde-01.jpeg' },
];

export default function VideosPage() {
    const t = useTranslations('Videos');
    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    return (
        <div className="min-h-screen bg-[#2C1E1E] text-[#F2F0EB]">

            {/* Header */}
            <div className="py-20 text-center container mx-auto px-4">
                <h1 className="font-display text-4xl tracking-widest uppercase mb-4">{t('title')}</h1>
                <p className="font-sans text-sm font-light max-w-2xl mx-auto text-white/70 leading-relaxed mb-12">
                    <span dangerouslySetInnerHTML={{ __html: t.raw('intro').replace('<link>', '<a href="/projects" class="underline underline-offset-4 hover:text-[#DFA59E]">').replace('</link>', '</a>') }} />
                </p>
                <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
            </div>

            {/* Main Player Area */}
            <div className="bg-[#1A1010] py-12">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="relative aspect-video bg-black shadow-2xl border border-white/5">
                        <video
                            key={currentVideo.src}
                            src={currentVideo.src}
                            poster={currentVideo.poster}
                            controls
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2 className="mt-6 font-display text-2xl tracking-wide">{currentVideo.title}</h2>
                </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <h3 className="font-sans text-xs uppercase tracking-widest text-[#DFA59E] mb-6">Toutes les vidéos</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {videos.map((video) => (
                        <button
                            key={video.id}
                            onClick={() => setCurrentVideo(video)}
                            className={`relative aspect-video bg-black group transition-all ${currentVideo.id === video.id ? 'ring-2 ring-[#DFA59E] ring-offset-2 ring-offset-[#2C1E1E]' : 'opacity-60 hover:opacity-100'}`}
                        >
                            <img src={video.poster} alt={video.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play size={24} className="text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
