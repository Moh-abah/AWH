'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            // Add scrolled effect after 30px
            setScrolled(currentScrollY > 30);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: '/about', label: 'من نحن' },
        { href: '/services', label: 'خدماتنا' },
        { href: '/projects', label: 'أعمالنا' },
        { href: '/contact', label: 'تواصل معنا' },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 transform ${scrolled
                ? 'bg-sky-100/20 backdrop-blur-lg text-sky-900 shadow-md'
                    : 'bg-transparent text-sky-500'
                } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}

                
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                    <Image
                        src="/images/logo1.png"
                        alt="DWH Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full transition-transform duration-300 hover:scale-110 object-cover"
                    />
                    <span
                        className={`text-2xl font-extrabold tracking-wide ${scrolled ? 'text-sky-500' : 'text-white'
                            }`}
                    >
                        DWH
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-base font-semibold">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-2 px-1 transition-colors duration-300 ${isActive ? 'text-blue-700' : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transition-all" />
                                )}
                            </Link>
                        );
                    })}

                    <Link
                        href="/contact"
                        className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                    >
                        احجز مشروعك الآن
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className={`md:hidden z-50 focus:outline-none text-3xl transition-colors ${scrolled ? 'text-sky-500' : 'text-white'
                        }`}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-sky-900/95 backdrop-blur-xl"
                    >
                        <nav className="flex flex-col items-center py-4 space-y-5 text-lg font-medium">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`w-full py-2 text-center ${isActive
                                                ? 'text-blue-400 font-bold'
                                                : 'text-white/90 hover:text-blue-300'
                                            }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}

                            <Link
                                href="/contact"
                                className="mt-2 w-4/5 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg"
                                onClick={() => setMenuOpen(false)}
                            >
                                احجز مشروعك الآن
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}