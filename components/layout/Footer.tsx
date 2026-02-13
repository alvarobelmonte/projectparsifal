"use client";

import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1A1010] text-white py-8 mt-auto border-t border-white/5">
            <div className="container mx-auto px-6 flex justify-center gap-8">
                <a href="https://www.instagram.com/projet_parsifal/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DFA59E] transition-colors" aria-label="Instagram">
                    <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a href="https://www.facebook.com/projetparsifal" target="_blank" rel="noopener noreferrer" className="hover:text-[#DFA59E] transition-colors" aria-label="Facebook">
                    <Facebook size={24} strokeWidth={1.5} />
                </a>
                <a href="https://www.youtube.com/@projetparsifal/videos" target="_blank" rel="noopener noreferrer" className="hover:text-[#DFA59E] transition-colors" aria-label="YouTube">
                    <Youtube size={24} strokeWidth={1.5} />
                </a>
            </div>
        </footer>
    );
}
