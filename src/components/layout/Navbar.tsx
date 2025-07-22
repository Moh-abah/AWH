'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '/', label: 'الرئيسية' },
        // { href: '/about', label: 'من نحن' },
        // { href: '/services', label: 'خدماتنا' },
        // { href: '/projects', label: 'أعمالنا' },
        // { href: '/contact', label: 'تواصل معنا' },
        { href: '#', label: 'من نحن' },
        { href: '#', label: 'خدماتنا' },
        { href: '#', label: 'أعمالنا' },
        { href: '#', label: 'تواصل معنا' },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* الشعار */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/logokk.png"
                        alt="DWH Logo"
                        width={48}
                        height={48}
                        className="rounded-full transition-transform duration-300 hover:scale-110"
                    />
                    <span
                        className={`text-2xl font-extrabold tracking-wide transition-colors duration-300 ${scrolled ? 'text-blue-700' : 'text-white'
                            }`}
                    >
                        DWH
                    </span>
                </Link>

                {/* روابط القائمة - سطح المكتب */}
                <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-gray-700">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative group"
                        >
                            <span className="transition-colors duration-300 group-hover:text-blue-700">
                                {link.label}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* زر CTA */}
                    <Link
                        href="/contact"
                        className="ml-6 px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
                    >
                        احجز مشروعك الآن
                    </Link>
                </nav>

                {/* زر القائمة المتنقلة */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className={`md:hidden z-50 focus:outline-none transition-colors duration-300 ${scrolled ? 'text-blue-700' : 'text-white'
                        }`}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                                menuOpen
                                    ? 'M6 18L18 6M6 6l12 12'
                                    : 'M4 6h16M4 12h16M4 18h16'
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* القائمة المتنقلة مع تراكب الخلفية */}
            {menuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
                        onClick={() => setMenuOpen(false)}
                    />
                    <nav className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6 animate-slide-in-from-right">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-800 text-lg font-semibold border-b border-gray-200 pb-2 hover:text-blue-700 transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#"
                            // href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-auto px-4 py-3 bg-blue-700 text-white rounded-lg text-center font-bold shadow hover:bg-blue-800 transition"
                        >
                            احجز مشروعك الآن
                        </Link>
                    </nav>
                </>
            )}

            <style jsx>{`
        @keyframes slide-in-from-right {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide-in-from-right {
          animation: slide-in-from-right 0.3s ease forwards;
        }
      `}</style>
        </header>
    );
}
