import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Gallery from '@/components/ui/Gallery';

// Enhanced paintings data structure to support captions
const excludedIds = [2, 3, 8, 9, 12]; // IDs matching ali-1, ali-2, ali-3, ali-4 duplicates + painting-02
const paintings = Array.from({ length: 15 }, (_, i) => i + 1)
    .filter(id => !excludedIds.includes(id))
    .map(id => ({
        src: `/assets/img/paintings/painting-${String(id).padStart(2, '0')}.webp`,
        caption: id % 3 === 0 ? "Aurélien Alizadeh Fard - Paris, 1980" : "Trois mouvements à la guitare classique - Paris, 1978" // Mock captions
    }));

export default function PaintingsPage() {
    const t = useTranslations('Paintings');

    return (
        <div className="min-h-screen bg-[#2C1E1E] text-[#F2F0EB]">

            {/* Header */}
            <div className="py-20 text-center">
                <h1 className="font-display text-4xl tracking-widest uppercase mb-2 text-[#DFA59E]">{t('title')}</h1>
                <h2 className="font-display text-sm uppercase tracking-widest text-white/60 mb-8">{t('subtitle')}</h2>
                <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
            </div>

            <div className="container mx-auto px-4 pb-20 max-w-7xl">
                <Gallery images={paintings} />
            </div>

            {/* PART 2: Biography Section */}
            <div className="bg-[#3D2C2C]">
                <div className="grid md:grid-cols-2 min-h-[600px]">

                    <div className="grid grid-cols-2 grid-rows-3 h-[600px] md:h-auto gap-0 bg-black/20">
                        {/* ali-3 (Main) - Spanning top 2 rows? */}
                        <div className="relative col-span-2 row-span-2">
                            <Image src="/assets/img/paintings/ali3.webp" alt="Aurélien Alizadeh Fard" fill className="object-cover grayscale" />
                        </div>
                        {/* Other 3 images in bottom row */}
                        <div className="relative col-span-2 row-span-1 grid grid-cols-3">
                            <div className="relative border-r border-white/10">
                                <Image src="/assets/img/paintings/ali-1.webp" alt="Aurélien" fill className="object-cover grayscale" />
                            </div>
                            <div className="relative border-r border-white/10">
                                <Image src="/assets/img/paintings/ali-2.webp" alt="Aurélien" fill className="object-cover grayscale" />
                            </div>
                            <div className="relative">
                                <Image src="/assets/img/paintings/ali-4.webp" alt="Aurélien" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="bg-[#3D2929] p-12 md:p-20 flex flex-col justify-center text-[#F2F0EB]">
                        <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase leading-snug mb-2 text-[#DFA59E] whitespace-pre-wrap">
                            {t('bio_title')}
                        </h2>
                        <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[#DFA59E] mb-8">
                            {t('bio_subtitle')}
                        </h3>

                        <div className="space-y-6 font-sans text-sm font-light leading-relaxed text-white/80">
                            <p>{t('bio_p1')}</p>
                            <p>{t('bio_p2')}</p>
                            <p>{t('bio_p3')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
