import { useTranslations } from 'next-intl';
import Image from 'next/image';

const team = [
    { id: 'ulysse', name: 'ULYSSE BONNEAU', img: '/assets/img/team/ulysse.webp' },
    { id: 'jules', name: 'JULES LE PRIOL HENNEGUIER', img: '/assets/img/team/jules.webp' },
    { id: 'paul', name: 'PAUL CAMPA', img: '/assets/img/team/paul.webp' },
    { id: 'perceval', name: 'PERCEVAL ALIZADEH FARD', img: '/assets/img/team/perce.webp' },
    { id: 'laura', name: 'LAURA SIMARRO', img: '/assets/img/team/laura.webp' },
    { id: 'emeline', name: 'EMELINE SOULIE', img: '/assets/img/team/emeline.webp' },
];

export default function TeamPage() {
    const t = useTranslations('Team');
    const common = useTranslations('Common');

    return (
        <div className="min-h-screen bg-[#2C1E1E] text-[#F2F0EB]">

            {/* Header */}
            <div className="py-20 text-center">
                <h1 className="font-display text-4xl tracking-widest uppercase mb-4 text-[#DFA59E]">{t('title')}</h1>
                <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
            </div>

            <div className="container mx-auto px-4 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
                {team.map((member) => (
                    <div key={member.id} className="flex flex-col items-start group">
                        {/* Image Card */}
                        <div className="relative w-full aspect-square grayscale transition-all duration-500 hover:grayscale-0 mb-6 overflow-hidden">
                            <Image
                                src={member.img}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <h3 className="font-display text-xl uppercase tracking-wider mb-2">{member.name}</h3>
                        <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/60 mb-4">{t(`${member.id}_role`)}</p>
                        <p className="font-sans text-sm font-light leading-relaxed text-white/80 mb-6 h-20 overflow-hidden text-ellipsis">
                            {t(`${member.id}_desc`)}
                        </p>

                        <button className="text-[#DFA59E] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-[#DFA59E] hover:border-white pb-1">
                            {common('read_more')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
