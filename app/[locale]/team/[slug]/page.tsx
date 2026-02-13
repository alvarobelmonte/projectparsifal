import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';

const teamMembers = [
    { id: 'ulysse', name: 'Ulysse Bonneau', img: '/assets/img/team/ulysse.webp' },
    { id: 'jules', name: 'Jules Le Priol', img: '/assets/img/team/jules.webp' },
    { id: 'paul', name: 'Paul Campa', img: '/assets/img/team/paul.webp' },
    { id: 'perceval', name: 'Perceval Alizadeh Fard', img: '/assets/img/team/perce.webp' },
    { id: 'laura', name: 'Laura Simarro', img: '/assets/img/team/laura.webp' },
    { id: 'emeline', name: 'Emeline Soulie', img: '/assets/img/team/emeline.webp' },
];

export function generateStaticParams() {
    return teamMembers.map((member) => ({
        slug: member.id,
    }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    const t = useTranslations('Team');
    const { slug } = await params;

    const member = teamMembers.find(m => m.id === slug);

    if (!member) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#1A1010] text-[#F2F0EB] selection:bg-[#DFA59E] selection:text-[#1A1010]">

            {/* Background Texture/Gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2C1E1E] via-[#1A1010] to-[#1A1010] z-0"></div>

            <div className="relative z-10 pt-32 pb-24">

                {/* Back Button */}
                <div className="container mx-auto px-6 max-w-7xl mb-12">
                    <Link
                        href="/team"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-[#DFA59E] transition-colors text-sm font-sans uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} />
                        Retour à l'équipe
                    </Link>
                </div>

                {/* Header */}
                <div className="container mx-auto px-6 max-w-7xl mb-16 lg:mb-20 text-center space-y-8">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[#DFA59E] text-xs font-bold uppercase tracking-[0.3em] font-sans">Projet Parsifal</span>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase text-white drop-shadow-lg">
                            {member.name}
                        </h1>
                        <p className="font-sans text-base md:text-lg font-bold uppercase tracking-[0.2em] text-white/60 mt-2">
                            {t(`${member.id}_role`)}
                        </p>
                    </div>
                    <div className="w-12 h-[2px] bg-[#DFA59E] mx-auto opacity-50"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Image */}
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm shadow-2xl border border-white/5 group">
                            <div className="absolute inset-0 bg-[#DFA59E] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10"></div>
                            <Image
                                src={member.img}
                                alt={member.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1010] via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Bio Text */}
                        <div className="space-y-8">
                            <div className="space-y-6 font-sans text-base md:text-lg font-light leading-relaxed text-white/70">
                                {t(`${member.id}_bio`).split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-justify">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
