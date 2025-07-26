// app/projects/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSearch, FaFilter, FaArrowRight, FaLaptopCode, FaMobileAlt, FaChartLine, FaPalette, FaServer } from 'react-icons/fa';
import ProjectCard from '@/components/projects/ProjectCard';

import { projects } from '@/constants/projects';

import Image from 'next/image';
import Link from 'next/link';
import { getCategoryColor } from '@/components/ui/categoryColors';

// مكون بطاقة الفئة
const CategoryCard = ({
    icon,
    label,
    color,
    isActive,
    onClick,
}: {
    icon: React.ReactNode;
    label: string;
    color: string;
    isActive: boolean;
    onClick: () => void;
}) => (
    <motion.button
        onClick={onClick}
        className={`flex flex-col items-center p-5 rounded-2xl transition-all duration-300 ${isActive
            ? `bg-gradient-to-br ${color} shadow-lg text-white`
            : 'bg-white hover:bg-sky-50 text-gray-700 border border-sky-200'}
            }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className="text-3xl mb-3 text-sky-500">{icon}</div>
        <span className="font-medium">{label}</span>
    </motion.button>
);

// مكون شريط البحث
const SearchBar = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative w-full max-w-2xl mx-auto mb-12"
    >
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400 text-xl" />
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e)}
            placeholder="ابحث عن مشروع..."
            className="w-full bg-white border border-sky-200 rounded-2xl py-4 pl-12 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent transition-all shadow-sm"
        />
    </motion.div>
);

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [isGrid, setIsGrid] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const projectsSectionRef = useRef<HTMLDivElement>(null);

    // دالة تمرير عند الضغط على الزر
    const scrollToProjects = () => {
        if (projectsSectionRef.current) {
            projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // الفئات
    const categories = [
        { id: 'all', label: 'جميع المشاريع', icon: <FaFilter />, color: 'from-sky-400 to-sky-600' },
        { id: 'web', label: 'مواقع الويب', icon: <FaLaptopCode />, color: 'from-blue-300 to-sky-500' },
        { id: 'mobile', label: 'تطبيقات الجوال', icon: <FaMobileAlt />, color: 'from-cyan-300 to-teal-400' },
        { id: 'hosting', label: 'استضافة وسحابة', icon: <FaServer />, color: 'from-indigo-300 to-indigo-500' },
        { id: 'identity', label: 'هويه بصريه', icon: <FaPalette />, color: 'from-pink-300 to-rose-400' },
        { id: 'digitalMarketing', label: ' التسويق الالكتروني   ', icon: <FaChartLine />, color: 'from-amber-300 to-orange-400' },
        { id: 'social', label: 'سوشيال ميديا ', icon: <FaServer />, color: 'from-purple-300 to-purple-500' },
        { id: 'banars', label: 'بانرات   ', icon: <FaPalette />, color: 'from-yellow-300 to-yellow-500' }
    ];

    // تصفية المشاريع
    const filteredProjects = projects
        .filter(project =>
            (activeCategory === 'all' || project.category === activeCategory) &&
            (project.title.includes(searchQuery) ||
                project.description.includes(searchQuery) ||
                project.category.includes(searchQuery))
        )

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900/40 to-sky-500/50  text-gray-700 overflow-hidden">

            {/* قسم البطل (Hero) */}
            <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* خلفية ديناميكية */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-25 via-sky-300/90  to-sky-25 z-10"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-sky-25/60 to-sky-50/40 z-20"></div>

                    {/* تأثير جسيمات متحركة */}
                    <div className="absolute inset-0">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-sky-100/30"
                                style={{
                                    width: Math.random() * 20 + 5,
                                    height: Math.random() * 20 + 5,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -100],
                                    x: [0, (Math.random() - 0.5) * 50],
                                    opacity: [0.1, 0.8, 0],
                                    scale: [1, 1.5]
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 3
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative z-30 text-center px-4">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-800"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        معرض أعمالنا
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        اكتشف إبداعاتنا التي تجمع بين الجمال والوظائف المتقدمة
                    </motion.p>

                    <motion.div
                        className="flex gap-4 justify-center flex-wrap"
                        initial={{ y: 70, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button
                            onClick={scrollToProjects}
                            className="bg-gradient-to-r from-sky-600 to-blue-800 text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition shadow-lg hover:shadow-xl"
                        >
                            تصفح المشاريع
                        </button>
                        <Link
                            href="/contact"
                            className="bg-white text-sky-700 border border-sky-300 px-8 py-3 rounded-xl font-medium hover:bg-sky-50 transition shadow hover:shadow-md"
                        >
                            تواصل معنا
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="w-8 h-14 rounded-full border-2 border-sky-300 flex justify-center p-1">
                        <motion.div
                            className="w-3 h-3 bg-sky-400 rounded-full"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* محتوى الصفحة */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-300 ">اكتشف إبداعاتنا</span>
                    </h2>
                    <p className="text-x3 text-white/90 max-w-3xl mx-auto">
                        مشاريعنا تعكس شغفنا بالابتكار وتفانينا في تقديم حلول رقمية استثنائية
                    </p>
                </motion.div>

                {/* عناصر التحكم */}
                <div className="flex flex-col gap-6 mb-12 md:flex-row md:justify-between md:items-center">
                    {/* الأقسام (الفئات) */}
                    <div className=" hidden sm:flex flex-wrap gap-4 justify-center md:justify-start">
                        {categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                icon={category.icon}
                                label={category.label}
                                color={category.color}
                                isActive={activeCategory === category.id}
                                onClick={() => setActiveCategory(category.id)}
                            />
                        ))}
                    </div>

                    {/* أدوات التصفية والعرض */}
                    <div className="flex flex-col gap-4 items-center w-full md:flex-row md:justify-end md:w-auto">
                        {/* قائمة الفرز */}
                        <div className="relative w-full md:w-auto">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full bg-white border border-sky-200 rounded-xl py-3 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-sky-300 text-gray-700"
                            >
                                <option value="newest">الأحدث</option>
                                <option value="oldest">الأقدم</option>
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* زر العرض الشبكي أو القائمي */}
                        <div className="hidden sm:flex bg-white rounded-xl overflow-hidden border border-sky-200">
                            <button
                                onClick={() => setIsGrid(true)}
                                className={`p-3 ${isGrid ? 'bg-sky-50' : 'hover:bg-sky-50'}`}
                            >
                                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setIsGrid(false)}
                                className={`p-3 ${!isGrid ? 'bg-sky-50' : 'hover:bg-sky-50'}`}
                            >
                                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* شريط البحث */}
                <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                {/* عرض المشاريع */}
                {filteredProjects.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="bg-sky-100 inline-block p-6 rounded-full mb-6">
                            <FaSearch className="text-4xl text-sky-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700">لا توجد مشاريع تطابق بحثك</h3>
                        <p className="text-gray-500 mt-2">جرب تغيير كلمات البحث أو الفئة المحددة</p>
                    </div>
                ) : isGrid ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => {
                            const extraTechs = project.technologies.length - 3;

                            return (
                                <div
                                    key={project.id}
                                    className="bg-sky-50 rounded-2xl shadow-sm border border-sky-100 hover:border-sky-300 p-4 transition-all flex flex-col"
                                >
                                    <div className="aspect-video bg-white rounded-xl overflow-hidden relative border border-sky-100 mb-4">
                                        <Image
                                            src={project.gallery[0]?.url || '/images/default.jpg'}
                                            alt={project.gallery[0]?.caption || project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h3 className="text-base font-bold mb-1 text-gray-800 truncate">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                                        {project.description}
                                        <Link href={`/projects/${project.id}`} className="text-sky-500 ml-1">
                                            قراءة المزيد
                                        </Link>
                                    </p>

                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {extraTechs > 0 && (
                                            <span className="bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded-full">
                                                +{extraTechs}
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="mt-auto text-sky-600 text-sm flex items-center gap-1 group font-medium"
                                    >
                                        <span>عرض التفاصيل</span>
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredProjects.map((project, index) => {
                            const extraTechs = project.technologies.length - 3;

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col md:flex-row gap-5 bg-sky-50 backdrop-blur-sm rounded-2xl p-5 border border-sky-100 hover:border-sky-300 transition-all shadow-sm hover:shadow-md"
                                >
                                    <div className="md:w-1/3 aspect-video bg-white rounded-xl overflow-hidden relative border border-sky-100">
                                        <Image
                                            src={project.gallery[0]?.url || '/images/default.jpg'}
                                            alt={project.gallery[0]?.caption || project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="md:w-2/3 mt-4 md:mt-0">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <span
                                                className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-sm`}
                                            >
                                                {{
                                                    web: 'موقع ويب',
                                                    mobile: 'تطبيق جوال',
                                                    hosting: 'استضافة وسحابة',
                                                    identity: 'هوية بصرية',
                                                    social: 'سوشيال ميديا',
                                                    digitalMarketing: 'تسويق إلكتروني',
                                                }[project.category]}
                                            </span>
                                            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">
                                                {project.year}
                                            </span>
                                        </div>

                                        <h3 className="text-base font-bold mb-1 text-gray-800">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                                            {project.description}
                                            <Link href={`/projects/${project.id}`} className="text-sky-500 ml-1">
                                                قراءة المزيد
                                            </Link>
                                        </p>

                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {extraTechs > 0 && (
                                                <span className="bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded-full">
                                                    +{extraTechs}
                                                </span>
                                            )}
                                        </div>

                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="text-sky-600 text-sm flex items-center gap-1 group font-medium"
                                        >
                                            <span>عرض التفاصيل</span>
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}


                {/* قسم الإحصائيات */}
                <motion.div
                    className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-2">
                            7+
                        </div>
                        <div className="text-gray-700">مشروع مكتمل</div>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent mb-2">
                            92%
                        </div>
                        <div className="text-gray-700">رضا العملاء</div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2">
                            1+
                        </div>
                        <div className="text-gray-700">جائزة عالمية</div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
                            3+
                        </div>
                        <div className="text-gray-700">عميل دولي</div>
                    </div>
                </motion.div>

                {/* دعوة للعمل */}
                <motion.div
                    className="mt-24 bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-sky-200 overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">مستعد لبدء مشروعك القادم؟</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                دعنا نحول أفكارك إلى واقع رقمي مذهل مع حلول مبتكرة تلبي احتياجات عملك
                            </p>
                           

                            <div className="relative">
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <div
                                            key={item}
                                            className="aspect-square bg-white rounded-xl border border-sky-100 shadow-sm"
                                        />
                                    ))}
                                </div>

                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-sky-300 animate-ping"></div>
                            </div>
                        
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
