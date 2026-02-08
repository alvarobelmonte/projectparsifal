"use client";

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const t = useTranslations('Navigation');
    const locale = useLocale();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/about', label: t('about') },
        { href: '/art-videos', label: t('videos') },
        { href: '/compositions', label: t('compositions') },
        { href: '/paintings', label: t('paintings') },
        { href: '/projects', label: t('projects') },
        { href: '/team', label: t('team') },
        { href: '/contact', label: t('contact') },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#2C1E1E]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* Left: Logo */}
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <img src="/assets/img/project-logo.webp" alt="Logo" className="h-12 w-auto" />
                    <span className="font-display text-2xl font-normal tracking-wide text-white uppercase">
                        Projet Parsifal
                    </span>
                </Link>

                {/* Center: Social Icons (Removed) */}
                {/* <div className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2 text-white/80">
                    <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
                </div> */}

                {/* Right: Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                    <nav className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-xs font-sans font-light text-white hover:text-[#DFA59E] transition-colors uppercase tracking-wider">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 text-xs font-light border-l border-white/30 pl-4 ml-2">
                        <Link href={pathname} locale="fr" className={`${locale === 'fr' ? 'text-white' : 'text-white/50 hover:text-white'}`}>FR</Link>
                        <Link href={pathname} locale="en" className={`${locale === 'en' ? 'text-white' : 'text-white/50 hover:text-white'}`}>EN</Link>
                    </div>
                </div>

                {/* Mobile Menu Button - Visible when closed */}
                {!isOpen && (
                    <button onClick={() => setIsOpen(true)} className="lg:hidden text-white hover:text-[#DFA59E] transition-colors z-50">
                        <Menu size={28} />
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay - Portal */}
            <AnimatePresence>
                {isOpen && (
                    <MobileMenuOverlay onClose={() => setIsOpen(false)} navLinks={navLinks} currentLocale={locale} currentPath={pathname} />
                )}
            </AnimatePresence>
        </header>
    );
}

function MobileMenuOverlay({ onClose, navLinks, currentLocale, currentPath }: { onClose: () => void, navLinks: any[], currentLocale: string, currentPath: string }) {
    // Prevent scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const { createPortal } = require('react-dom');

    if (typeof window === 'undefined') return null;

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2C1E1E] z-[100] flex flex-col items-center justify-center lg:hidden"
        >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-[#DFA59E] transition-colors">
                <X size={28} />
            </button>

            <nav className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="font-display text-3xl text-white hover:text-[#DFA59E] transition-colors uppercase tracking-widest"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="flex gap-8 mt-12 text-white/80">
                <a href="https://www.instagram.com/projet_parsifal/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                <a href="https://www.facebook.com/projetparsifal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={24} /></a>
                <a href="https://www.youtube.com/@projetparsifal/videos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={24} /></a>
            </div>

            <div className="flex items-center gap-6 mt-12">
                <Link href={currentPath} locale="fr" className={`text-lg font-light ${currentLocale === 'fr' ? 'text-[#DFA59E] font-bold' : 'text-white/50'}`}>FR</Link>
                <span className="text-white/20">|</span>
                <Link href={currentPath} locale="en" className={`text-lg font-light ${currentLocale === 'en' ? 'text-[#DFA59E] font-bold' : 'text-white/50'}`}>EN</Link>
            </div>
        </motion.div>,
        document.body
    );
}
