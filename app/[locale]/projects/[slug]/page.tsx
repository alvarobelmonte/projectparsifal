import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { ArrowLeft } from 'lucide-react';

const projectData: Record<string, { images: string[], video?: string }> = {
    'weimar': {
        images: ['/assets/img/projects/triangle/triangle-01.jpg', '/assets/img/projects/triangle/triangle-02.jpg', '/assets/img/projects/triangle/triangle-03.jpg'],
        video: undefined
    },
    'come': {
        images: ['/assets/img/projects/creation/creation-01.png', '/assets/img/projects/creation/creation-02.png'],
        video: '/assets/videos/hero.mp4'
    },
    'regarde': {
        images: ['/assets/img/projects/regarde/regarde-01.jpeg', '/assets/img/projects/regarde/regarde-02.jpeg'],
        video: '/assets/videos/regarde-intro.mp4'
    },
    'sunset': {
        images: ['/assets/img/projects/sunset/sunset-01.jpg', '/assets/img/projects/sunset/sunset-02.jpg', '/assets/img/projects/sunset/sunset-03.jpg'],
        video: undefined
    },
    'revue': {
        images: ['/assets/img/projects/projects-hero.png'],
        video: undefined
    },
    'residence': {
        images: ['/assets/img/about/about-hero.webp'],
        video: undefined
    }
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug } = await params;
    const t = await getTranslations('Projects');
    const tNav = await getTranslations('Navigation');

    // Fallback if data missing but allow generic render
    const project = projectData[slug];

    return (
        <div className="min-h-screen bg-[#2C1E1E] text-[#F2F0EB] pt-24">
            <div className="container mx-auto px-4 max-w-5xl py-12">

                {/* Back Button */}
                <div className="mb-12">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-[#DFA59E] transition-colors group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        {tNav('projects')}
                    </Link>
                </div>

                {/* Title Section */}
                <div className="text-center mb-16">
                    <h1 className="font-display text-3xl md:text-5xl tracking-widest uppercase mb-6 text-[#DFA59E] leading-snug">
                        {t(`${slug}_title`)}
                    </h1>
                    <div className="w-24 h-[1px] bg-white/20 mx-auto mb-10"></div>
                    <p className="font-sans text-base font-light text-white/80 leading-loose max-w-3xl mx-auto">
                        {t(`${slug}_desc`)}
                    </p>
                </div>

                {/* Media Section */}
                <div className="space-y-16">

                    {/* Video/Audio if available */}
                    {project?.video && (
                        <div className={`w-full ${project.video.endsWith('.mp3') ? 'bg-[#211616] p-8 border border-white/5' : 'aspect-video bg-black'} shadow-2xl flex items-center justify-center`}>
                            {project.video.endsWith('.mp4') ? (
                                <video src={project.video} controls className="w-full h-full object-contain" />
                            ) : project.video.endsWith('.mp3') ? (
                                <div className="w-full flex items-center justify-center">
                                    <audio src={project.video} controls className="w-full" />
                                </div>
                            ) : (
                                <div className="text-white/50">Media format not supported</div>
                            )}
                        </div>
                    )}

                    {/* Image Gallery */}
                    {project?.images && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.images.map((img, idx) => (
                                <div key={idx} className="relative aspect-[4/3] w-full bg-[#1A1010] group overflow-hidden shadow-lg">
                                    <Image
                                        src={img}
                                        alt={`Project Image ${idx}`}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
