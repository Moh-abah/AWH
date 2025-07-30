'use client';

import { useState, useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // إذا نزل المستخدم لتحت
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            // إذا تجاوز حد معين فعل scrolled
            setScrolled(currentScrollY > 30);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: 'about', label: 'من نحن' },
        { href: 'services', label: 'خدماتنا' },
        { href: 'projects', label: 'أعمالنا' },
        { href: 'contact', label: 'تواصل معنا' },
    ];

    const handleLinkClick = (href: SetStateAction<string>) => {
        setActiveLink(href);
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 transform ${scrolled
                    ? 'bg-white/10 backdrop-blur-lg'
                    : 'bg-white/10'
                } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* logo */}
                <Link href="/" className="flex items-center gap-3 h-full">
                    <Image
                        src="/images/logo1.png"
                        alt="DWH Logo"
                        width={48}
                        height={48}
                        className="h-full w-auto rounded-full transition-transform duration-300 hover:scale-110 object-cover"
                    />
                    <span
                        className={`text-2xl font-extrabold tracking-wide transition-colors duration-300 ${scrolled ? 'text-sky-200' : 'text-white'
                            }`}
                    >
                        DWH
                    </span>
                </Link>

                {/* desktop links */}
                <nav className=" hidden md:flex items-center gap-8 text-base font-semibold text-black/500">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative group ${activeLink === link.href ? 'text-blue-700' : ''
                                }`}
                        >
                            <span className="transition-colors duration-300 group-hover:text-blue-700">
                                {link.label}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="ml-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    >
                        احجز مشروعك الآن
                    </Link>
                </nav>

                {/* mobile menu toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className={`md:hidden z-50 focus:outline-none text-2xl transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'
                        }`}
                >
                    {menuOpen ? '×' : '☰'}
                </button>
            </div>

            {/* mobile dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden bg-black/20 backdrop-blur-lg text-white flex flex-col items-center text-center space-y-4 px-6 py-5 text-base font-medium tracking-wide"
                    >
                        <div className="flex flex-col py-4 text-center space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`block text-lg font-semibold transition-colors duration-200 ${activeLink === link.href ? 'text-blue-900' : 'text-sky-200'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
