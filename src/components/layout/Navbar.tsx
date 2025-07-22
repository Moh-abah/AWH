'use client';
import { useState, useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: '#', label: 'من نحن' },
        { href: '#', label: 'خدماتنا' },
        { href: '#', label: 'أعمالنا' },
        { href: '#', label: 'تواصل معنا' },
    ];

    // إغلاق القائمة عند تغيير الصفحة
    const handleLinkClick = (href: SetStateAction<string>) => {
        setActiveLink(href);
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200'
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
                            className={`relative group ${activeLink === link.href ? 'text-blue-700' : ''
                                }`}
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
                        className="ml-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    >
                        احجز مشروعك الآن
                    </Link>
                </nav>

                {/* زر القائمة المتنقلة - تصميم متطور */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className={`md:hidden z-50 focus:outline-none transition-all duration-300 transform ${menuOpen ? 'rotate-90' : ''
                        } ${scrolled ? 'text-blue-700' : 'text-white'}`}
                >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <span
                            className={`absolute w-8 h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen
                                ? 'rotate-45 translate-y-0'
                                : '-translate-y-2'
                                }`}
                        ></span>
                        <span
                            className={`absolute w-8 h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                        ></span>
                        <span
                            className={`absolute w-8 h-0.5 rounded-full bg-current transition-all duration-300 ${menuOpen
                                ? '-rotate-45 translate-y-0'
                                : 'translate-y-2'
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* القائمة المتنقلة - تصميم مذهل للموبايل */}
            {menuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                        onClick={() => setMenuOpen(false)}
                    />

                    <div className="fixed top-0 right-0 w-full max-w-xs h-full z-50 overflow-hidden">
                        {/* خلفية متدرجة مع تأثيرات متطورة */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-95 backdrop-blur-xl"></div>

                        {/* أنماط هندسية متحركة */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/10 animate-pulse"></div>
                            <div className="absolute top-1/4 right-10 w-48 h-48 rounded-full bg-blue-500/10 animate-ping" style={{ animationDuration: '3s' }}></div>
                            <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-purple-500/15 animate-pulse"></div>
                            <div className="absolute bottom-10 right-1/3 w-20 h-20 rounded-full bg-cyan-500/10 animate-ping" style={{ animationDuration: '4s' }}></div>
                        </div>

                        {/* عناصر واجهة المستخدم */}
                        <div className="relative h-full flex flex-col py-16 px-6 z-50">
                            {/* زر الإغلاق المميز */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="absolute top-6 left-6 text-white text-2xl w-12 h-12 rounded-full bg-gradient-to-r from-rose-600 to-pink-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                                aria-label="Close menu"
                            >
                                &times;
                            </button>

                            {/* شعار الشركة في القائمة */}
                            <div className="flex flex-col items-center mb-10 mt-8">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 p-1 mb-4">
                                    <div className="w-full h-full rounded-full bg-gray-200 border-2 border-dashed border-white/30 flex items-center justify-center">
                                        <span className="text-xl font-bold text-white">DWH</span>
                                    </div>
                                </div>
                                <h2 className="text-white text-2xl font-bold">
                                    Digital World Horizon
                                </h2>
                                <p className="text-blue-300 mt-2">حلول رقمية متميزة</p>
                            </div>

                            {/* روابط القائمة بتصميم مميز */}
                            <div className="flex flex-col gap-5">
                                {links.map((link, index) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => handleLinkClick(link.href)}
                                        className={`relative py-4 px-6 rounded-xl text-white text-lg font-bold transition-all duration-300 overflow-hidden group
                                            ${activeLink === link.href ? 'bg-white/20 backdrop-blur-md' : 'bg-white/10 backdrop-blur-sm'}`}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        {/* تأثير الخلفية المتحركة */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* الشريط الجانبي المميز */}
                                        <div className={`absolute right-0 top-0 h-full w-1 rounded-l-full bg-gradient-to-b from-blue-400 to-indigo-500 transition-all duration-500
                                            ${activeLink === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

                                        {/* نص الرابط مع أيقونة */}
                                        <span className="relative flex items-center gap-3">
                                            <span className="w-6 h-6 flex items-center justify-center text-blue-300">
                                                {index + 1}
                                            </span>
                                            <span>{link.label}</span>
                                        </span>

                                        {/* تأثير تحريك النص */}
                                        <span className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-8 transition-all duration-300">
                                            →
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            {/* زر CTA بتصميم مميز */}
                            <div className="mt-auto mb-8 pt-8 border-t border-white/20">
                                <Link
                                    href="#"
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-center rounded-xl shadow-xl relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
                                >
                                    {/* تأثير اللمعان */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>

                                    <span className="relative z-10">
                                        احجز مشروعك الآن
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}