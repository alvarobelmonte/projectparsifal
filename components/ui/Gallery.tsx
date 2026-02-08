"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryItem {
    src: string;
    caption: string;
}

export default function Gallery({ images }: { images: GalleryItem[] }) {
    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((item, index) => (
                <motion.div
                    key={item.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="break-inside-avoid relative group"
                >
                    <div className="relative overflow-hidden shadow-2xl bg-[#1A1010]">
                        <Image
                            src={item.src}
                            alt={item.caption}
                            width={800} // Masonry needs width/height usually or fill. Since we don't know aspect ratio, fill + break-inside-avoid is tricky.
                            height={600} // Fallback
                            className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <p className="mt-3 text-center font-sans text-[10px] uppercase tracking-widest text-[#F2F0EB]/60">
                        {item.caption}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
