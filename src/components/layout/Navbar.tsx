

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

        // { href: '/blogs', label: 'المدونة' },
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


// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import { FaRocket, FaGem, FaStar, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

// export default function LuxuryNavbar() {
//     const pathname = usePathname();
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [showNavbar, setShowNavbar] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [hoveredLink, setHoveredLink] = useState(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // إخفاء الناف بار عند التمرير لأسفل، إظهاره عند التمرير لأعلى
//             if (currentScrollY > lastScrollY && currentScrollY > 100) {
//                 setShowNavbar(false);
//             } else {
//                 setShowNavbar(true);
//             }

//             // تأثير التمرير بعد 50px
//             setScrolled(currentScrollY > 50);
//             setLastScrollY(currentScrollY);
//         };

//         const handleMouseMove = (e) => {
//             setMousePosition({
//                 x: (e.clientX / window.innerWidth) * 100,
//                 y: (e.clientY / window.innerHeight) * 100,
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('mousemove', handleMouseMove);
        
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, [lastScrollY]);

//     const links = [
//         { href: '/', label: 'الرئيسية', icon: '🏠' },
//         { href: '/about', label: 'من نحن', icon: '👥' },
//         { href: '/services', label: 'خدماتنا', icon: '⚡' },
//         { href: '/projects', label: 'أعمالنا', icon: '🎨' },
//         { href: '/blogs', label: 'المدونة', icon: '📝' },
//         { href: '/contact', label: 'تواصل معنا', icon: '📞' },
//     ];

//     return (
//         <>
//             {/* خلفية متحركة للناف بار */}
//             <div 
//                 className={`fixed w-full top-0 z-40 h-20 transition-all duration-700 ${
//                     scrolled ? 'opacity-100' : 'opacity-0'
//                 }`}
//                 style={{
//                     background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)`
//                 }}
//             />

//             <header
//                 className={`fixed w-full top-0 z-50 transition-all duration-700 transform ${
//                     scrolled
//                         ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-blue-500/10'
//                         : 'bg-transparent'
//                 } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
//             >
//                 {/* شريط علوي فاخر */}
//                 <div className={`w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-500 ${
//                     scrolled ? 'opacity-100' : 'opacity-0'
//                 }`} />

//                 <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    
//                     {/* الشعار الفاخر */}
//                     <Link href="/" className="group flex items-center gap-4" onClick={() => setMenuOpen(false)}>
//                         <div className="relative">
//                             {/* هالة متوهجة حول الشعار */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>
                            
//                             <Image
//                                 src="/images/logo1.png"
//                                 alt="DWH Logo"
//                                 width={56}
//                                 height={56}
//                                 className="relative w-14 h-14 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-all duration-300 group-hover:scale-110 object-cover shadow-2xl"
//                             />
                            
//                             {/* نجمة صغيرة متحركة */}
//                             <FaStar className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
//                         </div>
                        
//                         <div className="flex flex-col">
//                             <span className={`text-3xl font-black tracking-wider transition-all duration-300 ${
//                                 scrolled ? 'text-white' : 'text-white'
//                             } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400`}>
//                                 DWH
//                             </span>
//                             <span className="text-xs text-gray-300 font-medium tracking-widest">DIGITAL WORLD</span>
//                         </div>
//                     </Link>

//                     {/* التنقل المكتبي الفاخر */}
//                     <nav className="hidden lg:flex items-center gap-2">
//                         {links.map((link, index) => {
//                             const isActive = pathname === link.href;
//                             return (
//                                 <div key={link.href} className="relative">
//                                     <Link
//                                         href={link.href}
//                                         className={`group relative flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
//                                             isActive 
//                                                 ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30' 
//                                                 : 'text-gray-200 hover:text-white hover:bg-white/10 backdrop-blur-xl'
//                                         }`}
//                                         onMouseEnter={() => setHoveredLink(index)}
//                                         onMouseLeave={() => setHoveredLink(null)}
//                                     >
//                                         <span className="text-lg">{link.icon}</span>
//                                         <span className="relative z-10">{link.label}</span>
                                        
//                                         {/* تأثير الهوفر */}
//                                         {hoveredLink === index && !isActive && (
//                                             <motion.div
//                                                 layoutId="navbar-hover"
//                                                 className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/20"
//                                                 initial={{ opacity: 0, scale: 0.8 }}
//                                                 animate={{ opacity: 1, scale: 1 }}
//                                                 exit={{ opacity: 0, scale: 0.8 }}
//                                                 transition={{ duration: 0.2 }}
//                                             />
//                                         )}
                                        
//                                         {/* مؤشر النشاط */}
//                                         {isActive && (
//                                             <motion.div
//                                                 className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
//                                                 initial={{ scale: 0 }}
//                                                 animate={{ scale: 1 }}
//                                                 transition={{ duration: 0.3 }}
//                                             />
//                                         )}
//                                     </Link>
//                                 </div>
//                             );
//                         })}

//                         {/* زر الإجراء الفاخر */}
//                         <div className="ml-6">
//                             <Link
//                                 href="/contact"
//                                 className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-sm shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
//                             >
//                                 <span className="relative z-10 flex items-center gap-2">
//                                     <FaRocket className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
//                                     ابدأ مشروعك
//                                 </span>
                                
//                                 {/* تأثير الخلفية المتحركة */}
//                                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
//                                 {/* جزيئات متحركة */}
//                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
//                                     <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full animate-ping delay-100"></div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </nav>

//                     {/* زر القائمة المحمولة الفاخر */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         aria-label="Toggle menu"
//                         className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all duration-300"
//                     >
//                         <AnimatePresence mode="wait">
//                             {menuOpen ? (
//                                 <motion.div
//                                     key="close"
//                                     initial={{ rotate: -90, opacity: 0 }}
//                                     animate={{ rotate: 0, opacity: 1 }}
//                                     exit={{ rotate: 90, opacity: 0 }}
//                                     transition={{ duration: 0.2 }}
//                                 >
//                                     <FaTimes className="w-5 h-5" />
//                                 </motion.div>
//                             ) : (
//                                 <motion.div
//                                     key="menu"
//                                     initial={{ rotate: 90, opacity: 0 }}
//                                     animate={{ rotate: 0, opacity: 1 }}
//                                     exit={{ rotate: -90, opacity: 0 }}
//                                     transition={{ duration: 0.2 }}
//                                 >
//                                     <FaBars className="w-5 h-5" />
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </button>
//                 </div>
//             </header>

//             {/* القائمة المحمولة الفاخرة */}
//             <AnimatePresence>
//                 {menuOpen && (
//                     <>
//                         {/* خلفية ضبابية */}
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
//                             onClick={() => setMenuOpen(false)}
//                         />
                        
//                         {/* القائمة */}
//                         <motion.div
//                             initial={{ x: '100%', opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             exit={{ x: '100%', opacity: 0 }}
//                             transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//                             className="fixed top-0 right-0 z-50 w-80 h-full bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-2xl border-l border-white/20 lg:hidden"
//                         >
//                             {/* رأس القائمة */}
//                             <div className="p-6 border-b border-white/10">
//                                 <div className="flex items-center gap-3">
//                                     <div className="relative">
//                                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50"></div>
//                                         <Image
//                                             src="/images/logo1.png"
//                                             alt="DWH Logo"
//                                             width={48}
//                                             height={48}
//                                             className="relative w-12 h-12 rounded-full border-2 border-white/30"
//                                         />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-white font-bold text-lg">DWH</h3>
//                                         <p className="text-gray-400 text-xs">Digital World Horizon</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* روابط القائمة */}
//                             <nav className="flex flex-col p-6 space-y-2">
//                                 {links.map((link, index) => {
//                                     const isActive = pathname === link.href;
//                                     return (
//                                         <motion.div
//                                             key={link.href}
//                                             initial={{ x: 50, opacity: 0 }}
//                                             animate={{ x: 0, opacity: 1 }}
//                                             transition={{ delay: index * 0.1, duration: 0.3 }}
//                                         >
//                                             <Link
//                                                 href={link.href}
//                                                 className={`flex items-center gap-4 px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
//                                                     isActive
//                                                         ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20'
//                                                         : 'text-gray-300 hover:text-white hover:bg-white/10'
//                                                 }`}
//                                                 onClick={() => setMenuOpen(false)}
//                                             >
//                                                 <span className="text-xl">{link.icon}</span>
//                                                 <span>{link.label}</span>
//                                                 {isActive && (
//                                                     <FaGem className="w-4 h-4 text-purple-400 ml-auto" />
//                                                 )}
//                                             </Link>
//                                         </motion.div>
//                                     );
//                                 })}

//                                 {/* زر الإجراء في القائمة المحمولة */}
//                                 <motion.div
//                                     initial={{ y: 20, opacity: 0 }}
//                                     animate={{ y: 0, opacity: 1 }}
//                                     transition={{ delay: 0.6, duration: 0.3 }}
//                                     className="pt-6"
//                                 >
//                                     <Link
//                                         href="/contact"
//                                         className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold shadow-2xl shadow-blue-500/25"
//                                         onClick={() => setMenuOpen(false)}
//                                     >
//                                         <FaRocket className="w-4 h-4" />
//                                         ابدأ مشروعك الآن
//                                     </Link>
//                                 </motion.div>
//                             </nav>

//                             {/* معلومات التواصل */}
//                             <div className="absolute bottom-6 left-6 right-6">
//                                 <div className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
//                                     <p className="text-gray-400 text-sm text-center">
//                                         جاهزون لتحويل أفكارك إلى واقع رقمي مذهل
//                                     </p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>

//             {/* CSS مخصص للحركات */}
//             <style jsx>{`
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px); }
//                     50% { transform: translateY(-10px); }
//                 }
//                 .animate-float {
//                     animation: float 3s ease-in-out infinite;
//                 }
//             `}</style>
//         </>
//     );
// }
