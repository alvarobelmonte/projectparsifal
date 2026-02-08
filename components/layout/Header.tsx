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

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white hover:text-[#DFA59E] transition-colors z-50">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#2C1E1E] z-40 flex flex-col items-center justify-center lg:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-display text-2xl text-white hover:text-[#DFA59E] transition-colors uppercase tracking-widest"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex gap-6 mt-12 text-white/80">
                            <a href="https://www.instagram.com/projet_parsifal/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                            <a href="https://www.facebook.com/projetparsifal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={24} /></a>
                            <a href="https://www.youtube.com/@projetparsifal/videos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={24} /></a>
                        </div>

                        <div className="flex items-center gap-4 mt-8">
                            <Link href={pathname} locale="fr" className={`text-sm ${locale === 'fr' ? 'text-white font-bold' : 'text-white/50'}`}>FR</Link>
                            <Link href={pathname} locale="en" className={`text-sm ${locale === 'en' ? 'text-white font-bold' : 'text-white/50'}`}>EN</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
