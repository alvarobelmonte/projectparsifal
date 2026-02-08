import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const projects = [
    { id: 'weimar', slug: 'weimar', img: '/assets/img/projects/triangle/triangle-01.jpg' },
    { id: 'come', slug: 'come', img: '/assets/img/projects/creation/creation-01.png' },
    { id: 'sunset', slug: 'sunset', img: '/assets/img/projects/sunset/sunset-01.jpg' },
    { id: 'regarde', slug: 'regarde', img: '/assets/img/projects/regarde/regarde-01.jpeg' },
    { id: 'revue', slug: 'revue', img: '/assets/img/projects/projects-hero.png' },
    { id: 'residence', slug: 'residence', img: '/assets/img/about/about-hero.webp' },
];

export default function ProjectsPage() {
    const t = useTranslations('Projects');
    const common = useTranslations('Common');

    return (
        <div className="min-h-screen bg-[#2C1E1E] text-[#F2F0EB]">
            <div className="py-24 text-center">
                <h1 className="font-display text-4xl tracking-widest uppercase mb-4">{t('title')}</h1>
                <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
            </div>

            <div className="container mx-auto px-4 pb-24 max-w-5xl flex flex-col gap-24">
                {projects.map((project) => (
                    <div key={project.id} className="relative h-[400px] w-full group">
                        {/* Image Left (75%) */}
                        <div className="absolute left-0 top-0 w-[100%] md:w-[75%] h-full z-0 overflow-hidden">
                            <div className="relative w-full h-full bg-[#1A1010]">
                                <Image
                                    src={project.img}
                                    alt={t(`${project.id}_title`)}
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Text Overlay Right (45%) */}
                        <div className="absolute right-0 bottom-0 md:top-1/2 md:-translate-y-1/2 w-[90%] md:w-[45%] bg-[#211616] p-8 md:p-12 shadow-2xl border border-white/5 flex flex-col justify-center items-start text-left z-10 mr-0 md:mr-0 mb-8 md:mb-0">
                            <h3 className="font-display text-xl md:text-2xl uppercase tracking-widest mb-6 leading-snug text-[#DFA59E]">
                                {t(`${project.id}_title`)}
                            </h3>
                            <p className="font-sans text-sm font-light text-white/70 mb-8 line-clamp-4 leading-relaxed">
                                {t(`${project.id}_desc`)}
                            </p>
                            <Link href={'/projects/' + project.slug} className="inline-block px-8 py-3 border border-[#DFA59E] text-[#DFA59E] text-xs font-bold uppercase tracking-widest hover:bg-[#DFA59E] hover:text-[#2C1E1E] transition-all duration-300">
                                {common('read_more')}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
