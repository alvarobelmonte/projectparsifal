import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <div className="min-h-screen bg-[#2C1E1E] text-[#F2F0EB]">

            {/* Header */}
            <div className="py-20 text-center">
                <h1 className="font-display text-4xl tracking-widest uppercase mb-4">{t('title')}</h1>
                <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl pb-20">
                <div className="grid md:grid-cols-2 gap-0 bg-[#211616] overflow-hidden shadow-2xl">

                    {/* Left Content */}
                    <div className="p-12 md:p-16 flex flex-col justify-center space-y-8">
                        <div className="space-y-6 font-light text-sm leading-loose tracking-wide text-white/80">
                            <p>{t('text1')}</p>
                            <p>{t('text2')}</p>
                            <p className="font-display text-lg italic text-[#DFA59E] pt-4 whitespace-pre-wrap">{t('text3')}</p>
                        </div>

                        <a href={`mailto:${t('email')}`} className="font-sans text-sm font-bold tracking-widest underline underline-offset-8 hover:text-[#DFA59E] transition-colors">{t('email')}</a>

                        <div className="flex gap-8 pt-8">
                            <a href="https://www.instagram.com/projet_parsifal/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DFA59E] transition-colors"><Instagram size={28} strokeWidth={1.5} /></a>
                            <a href="https://www.facebook.com/projetparsifal" target="_blank" rel="noopener noreferrer" className="hover:text-[#DFA59E] transition-colors"><Facebook size={28} strokeWidth={1.5} /></a>
                            <a href="https://www.youtube.com/@projetparsifal/videos" target="_blank" rel="noopener noreferrer" className="hover:text-[#DFA59E] transition-colors"><Youtube size={28} strokeWidth={1.5} /></a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[400px] md:h-auto min-h-[500px]">
                        <Image
                            src="/assets/img/about/about-hero.webp" // Need a "dancer" image like in screenshot
                            alt="Contact"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#211616]/80"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
