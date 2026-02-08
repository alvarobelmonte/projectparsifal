import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function AboutPage() {
    const t = useTranslations('About');

    return (
        <div className="min-h-screen bg-[#2C1E1E] text-[#F2F0EB]">

            {/* Header */}
            <div className="py-20 text-center bg-[#2C1E1E]">
                <h1 className="font-display text-4xl tracking-widest uppercase mb-2">{t('title')}</h1>
                <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
            </div>

            {/* 3-Column Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 h-auto lg:h-[800px]">
                {/* Left Image */}
                <div className="relative h-[500px] lg:h-full w-full">
                    <Image
                        src="/assets/img/about/about-hero.webp"
                        alt="Dancer"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* Center Text */}
                <div className="bg-[#211616] p-12 flex flex-col justify-center items-center text-center space-y-8 font-light text-sm leading-relaxed tracking-wide">
                    <h2 className="font-sans uppercase text-xs tracking-[0.2em] text-white/70 mb-4">{t('subtitle')}</h2>

                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                    <p>{t('p3')}</p>

                    <div className="pt-8 space-y-4 text-xs font-bold uppercase tracking-widest">
                        <div dangerouslySetInnerHTML={{ __html: t.raw('link_team').replace('<link>', '<a href="/team" class="underline underline-offset-4 hover:text-[#DFA59E]">').replace('</link>', '</a>') }} />
                        <div dangerouslySetInnerHTML={{ __html: t.raw('link_paintings').replace('<link>', '<a href="/paintings" class="underline underline-offset-4 hover:text-[#DFA59E]">').replace('</link>', '</a>') }} />
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative h-[500px] lg:h-full w-full">
                    <Image
                        src="/assets/img/about/about-profile.webp" // Need check if this matches "musicians" image
                        alt="Musicians"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
