"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Play, Disc, Film } from 'lucide-react';

const content = {
    videos: [
        {
            id: 'AA6wMY82Cg0',
            youtubeId: 'AA6wMY82Cg0',
            title: 'PROJET PARSIFAL - Come (Official Video)'
        },
        {
            id: '3mIH74diq0E',
            youtubeId: '3mIH74diq0E',
            title: 'PROJET PARSIFAL - Regarde + Contre-feu I (Official Video)'
        }
    ],
    albums: [
        {
            id: 'playlist_yeki',
            youtubeId: 'XwMP4qNpw6I',
            listId: 'PLTS24eyJBI9usv3ZZT8O0yOLeMsg1Q-sp',
            title: 'Esquisses 1'
        },
        {
            id: 'playlist_perceval',
            youtubeId: 'Hhfn3FSMmgU',
            listId: 'PLTS24eyJBI9tE2QEoqnhTfsvvFHrdmvOg',
            title: 'Tableau 1'
        }
    ]
};

export default function VideosPage() {
    const t = useTranslations('Videos');
    const [currentVideo, setCurrentVideo] = useState<any>(content.videos[0]);

    return (
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] selection:bg-[#DFA59E] selection:text-[#1A1010]">

            {/* Background Texture/Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1E1E] via-[#1A1010] to-[#1A1010] z-0"></div>

            <div className="relative z-10 pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Header */}
                    <header className="text-center mb-16 lg:mb-24 space-y-8">
                        <div className="flex flex-col items-center gap-4">
                            <span className="text-[#DFA59E] text-xs font-bold uppercase tracking-[0.3em] font-sans">Projet Parsifal</span>
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white drop-shadow-lg">
                                {t('title')}
                            </h1>
                        </div>
                        <div className="w-12 h-[2px] bg-[#DFA59E] mx-auto opacity-50"></div>
                        <p className="font-sans text-base font-light max-w-2xl mx-auto text-white/60 leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: t.raw('intro').replace('<link>', '<a href="/projects" class="text-[#DFA59E] hover:text-white transition-colors underline underline-offset-4">').replace('</link>', '</a>') }} />
                        </p>
                    </header>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Main Player - Sticky on Desktop */}
                        <div className="lg:col-span-8 lg:sticky lg:top-32">
                            <div className="relative group">
                                {/* Decorative elements around player */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#DFA59E]/20 to-[#2C1E1E]/20 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>

                                <div className="relative aspect-video bg-black shadow-2xl border border-white/10 overflow-hidden rounded-sm">
                                    <iframe
                                        key={currentVideo.id}
                                        src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?${currentVideo.listId ? `list=${currentVideo.listId}&` : ''}autoplay=1&rel=0&modestbranding=1`}
                                        title={currentVideo.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 space-y-2">
                                <h2 className="font-display text-2xl md:text-3xl tracking-wide text-white">{currentVideo.title}</h2>
                                <div className="flex items-center gap-2 text-white/40 text-sm font-sans uppercase tracking-widest">
                                    <span>{currentVideo.listId ? 'Album Archive' : 'Official Video'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar List */}
                        <div className="lg:col-span-4 space-y-12">

                            {/* Videos Section */}
                            <section>
                                <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <Film className="text-[#DFA59E]" size={24} strokeWidth={1.5} />
                                        <h3 className="font-display text-lg uppercase tracking-[0.15em] text-white font-bold">{t('videos_title')}</h3>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {content.videos.map((video) => (
                                        <button
                                            key={video.id}
                                            onClick={() => setCurrentVideo(video)}
                                            className={`group w-full flex items-start gap-4 p-3 rounded-lg transition-all duration-300 text-left border border-transparent ${currentVideo.id === video.id ? 'bg-white/5 border-white/10 shadow-lg backdrop-blur-sm' : 'hover:bg-white/5 border-transparent opacity-60 hover:opacity-100'}`}
                                        >
                                            <div className="relative w-32 aspect-video bg-black flex-shrink-0 overflow-hidden shadow-lg rounded-sm mt-1 ring-1 ring-white/10 group-hover:ring-[#DFA59E]/50 transition-all">
                                                <img
                                                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className={`w-full h-full object-cover transition-transform duration-700 ${currentVideo.id === video.id ? 'scale-110 opacity-60' : 'group-hover:scale-110'}`}
                                                />
                                                {currentVideo.id === video.id && (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-1.5 h-1.5 bg-[#DFA59E] rounded-full animate-pulse shadow-[0_0_10px_#DFA59E]"></div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className={`font-display text-sm tracking-wide leading-relaxed transition-colors ${currentVideo.id === video.id ? 'text-[#DFA59E]' : 'text-white group-hover:text-[#DFA59E]'}`}>
                                                    {video.title}
                                                </h4>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Albums Section */}
                            <section>
                                <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <Disc className="text-[#DFA59E]" size={24} strokeWidth={1.5} />
                                        <h3 className="font-display text-lg uppercase tracking-[0.15em] text-white font-bold">{t('albums_title')}</h3>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {content.albums.map((album) => (
                                        <button
                                            key={album.id}
                                            onClick={() => setCurrentVideo(album)}
                                            className={`group w-full flex items-start gap-4 p-3 rounded-lg transition-all duration-300 text-left border border-transparent ${currentVideo.id === album.id ? 'bg-white/5 border-white/10 shadow-lg backdrop-blur-sm' : 'hover:bg-white/5 border-transparent opacity-60 hover:opacity-100'}`}
                                        >
                                            <div className="relative w-32 aspect-video bg-black flex-shrink-0 overflow-hidden shadow-lg rounded-sm mt-1 ring-1 ring-white/10 group-hover:ring-[#DFA59E]/50 transition-all">
                                                <img
                                                    src={`https://img.youtube.com/vi/${album.youtubeId}/mqdefault.jpg`}
                                                    alt={album.title}
                                                    className={`w-full h-full object-cover transition-transform duration-700 ${currentVideo.id === album.id ? 'scale-110 opacity-60' : 'group-hover:scale-110'}`}
                                                />
                                                {currentVideo.id === album.id && (
                                                    <div className="absolute inset-0 flex items-center justify-center gap-1">
                                                        <div className="w-0.5 h-2 bg-[#DFA59E] animate-[bounce_1s_infinite]"></div>
                                                        <div className="w-0.5 h-3 bg-[#DFA59E] animate-[bounce_1s_infinite_0.1s]"></div>
                                                        <div className="w-0.5 h-2 bg-[#DFA59E] animate-[bounce_1s_infinite_0.2s]"></div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className={`font-display text-xl tracking-wide leading-relaxed transition-colors ${currentVideo.id === album.id ? 'text-[#DFA59E]' : 'text-white group-hover:text-[#DFA59E]'}`}>
                                                    {album.title}
                                                </h4>
                                                <p className="text-[10px] text-white/40 font-mono">Playlist</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
