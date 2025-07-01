// app/projects/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaSearch, FaFilter, FaArrowRight, FaLaptopCode, FaMobileAlt, FaChartLine, FaPalette, FaServer } from 'react-icons/fa';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/constants/projects';
import AnimatedBackground from '@/components/AnimatedBackground';

// مكون بطاقة الفئة
const CategoryCard = ({ icon, label, color, isActive, onClick }: any) => (
    <motion.button
        onClick={onClick}
        className={`flex flex-col items-center p-5 rounded-2xl transition-all duration-300 ${isActive
                ? `bg-gradient-to-br ${color} shadow-xl text-white`
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className="text-3xl mb-3">{icon}</div>
        <span className="font-medium">{label}</span>
    </motion.button>
);

// مكون شريط البحث
const SearchBar = ({ value, onChange }: any) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative w-full max-w-2xl mx-auto mb-12"
    >
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="ابحث عن مشروع..."
            className="w-full bg-gray-800 border border-gray-700 rounded-2xl py-4 pl-12 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // الفئات
    const categories = [
        { id: 'all', label: 'جميع المشاريع', icon: <FaFilter />, color: 'from-gray-600 to-gray-800' },
        { id: 'web', label: 'مواقع الويب', icon: <FaLaptopCode />, color: 'from-blue-600 to-indigo-700' },
        { id: 'mobile', label: 'تطبيقات الجوال', icon: <FaMobileAlt />, color: 'from-green-600 to-teal-700' },
        { id: 'marketing', label: 'حلول تسويقية', icon: <FaChartLine />, color: 'from-purple-600 to-fuchsia-700' },
        { id: 'design', label: 'تصاميم جرافيك', icon: <FaPalette />, color: 'from-amber-600 to-orange-700' },
        { id: 'hosting', label: 'استضافة وسحابة', icon: <FaServer />, color: 'from-cyan-600 to-sky-700' }
    ];

    // تصفية المشاريع
    const filteredProjects = projects
        .filter(project =>
            (activeCategory === 'all' || project.category === activeCategory) &&
            (project.title.includes(searchQuery) ||
                project.description.includes(searchQuery) ||
                project.category.includes(searchQuery))
        )
        .sort((a, b) => {
            if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
            if (sortBy === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
            return 0;
        });

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            <AnimatedBackground />
            {/* قسم البطل (Hero) */}
            <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* خلفية ديناميكية */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black z-20"></div>

                    {/* تأثير جسيمات متحركة */}
                    <div className="absolute inset-0">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-blue-500/10"
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
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        معرض أعمالنا
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
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
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition shadow-lg">
                            تصفح المشاريع
                        </button>
                        <button className="bg-gray-800 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-700 transition">
                            تواصل معنا
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="w-8 h-14 rounded-full border-2 border-blue-400 flex justify-center p-1">
                        <motion.div
                            className="w-3 h-3 bg-blue-400 rounded-full"
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
                        اكتشف <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">إبداعاتنا</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        مشاريعنا تعكس شغفنا بالابتكار وتفانينا في تقديم حلول رقمية استثنائية
                    </p>
                </motion.div>

                {/* عناصر التحكم */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <div className="flex flex-wrap gap-4">
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

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-gray-800 border border-gray-700 rounded-xl py-3 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="newest">الأحدث</option>
                                <option value="oldest">الأقدم</option>
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex bg-gray-800 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setIsGrid(true)}
                                className={`p-3 ${isGrid ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setIsGrid(false)}
                                className={`p-3 ${!isGrid ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* شريط البحث */}
                <SearchBar value={searchQuery} onChange={setSearchQuery} />

                {/* عرض المشاريع */}
                {filteredProjects.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="bg-gray-800 inline-block p-6 rounded-full mb-6">
                            <FaSearch className="text-4xl text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-300">لا توجد مشاريع تطابق بحثك</h3>
                        <p className="text-gray-500 mt-2">جرب تغيير كلمات البحث أو الفئة المحددة</p>
                    </div>
                ) : isGrid ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="space-y-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all"
                            >
                                <div className="md:w-1/3 aspect-video bg-gray-700 rounded-xl overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                                </div>
                                <div className="md:w-2/3">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                                            {project.category}
                                        </span>
                                        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                            {project.year}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-400 mb-6">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-2 text-blue-400 group">
                                        <span>عرض التفاصيل</span>
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
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
                    <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/20 border border-blue-500/30 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                            200+
                        </div>
                        <div className="text-gray-300">مشروع مكتمل</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-green-700/20 border border-green-500/30 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent mb-2">
                            98%
                        </div>
                        <div className="text-gray-300">رضا العملاء</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/20 border border-purple-500/30 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent mb-2">
                            15+
                        </div>
                        <div className="text-gray-300">جائزة عالمية</div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-900/30 to-amber-700/20 border border-amber-500/30 rounded-2xl p-6 text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent mb-2">
                            50+
                        </div>
                        <div className="text-gray-300">عميل دولي</div>
                    </div>
                </motion.div>

                {/* دعوة للعمل */}
                <motion.div
                    className="mt-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">مستعد لبدء مشروعك القادم؟</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                دعنا نحول أفكارك إلى واقع رقمي مذهل مع حلول مبتكرة تلبي احتياجات عملك
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-xl">
                                    تواصل معنا
                                </button>
                                <button className="bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-700 transition">
                                    تصفح الخدمات
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div
                                        key={item}
                                        className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl border border-gray-600"
                                    />
                                ))}
                            </div>

                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-blue-500/30 animate-ping"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}