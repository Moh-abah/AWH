// app/projects/[id]/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import {
    FaArrowLeft, FaExternalLinkAlt, FaGithub, FaLightbulb, FaCode,
    FaChartLine, FaUsers, FaQuoteLeft, FaStar, FaChevronDown, FaArrowRight
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { projects } from '@/constants/projects';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [activeMedia, setActiveMedia] = useState<number | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // جلب بيانات المشروع بناءً على الـ id
    useEffect(() => {
        const foundProject = projects.find(p => p.id === params.id);
        if (foundProject) {
            setProject(foundProject);
        } else {
            router.push('/projects');
        }
    }, [params.id, router]);

    // تأثيرات الظهور عند التمرير
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    // الانتقال بين التبويبات بسلاسة
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    // عرض معرض الوسائط
    const openMedia = (index: number) => {
        setActiveMedia(index);
        document.body.style.overflow = 'hidden';
    };

    // إغلاق معرض الوسائط
    const closeMedia = () => {
        setActiveMedia(null);
        document.body.style.overflow = 'auto';
    };

    // التنقل بين وسائط المعرض
    const navigateMedia = (direction: 'next' | 'prev') => {
        if (activeMedia === null || !project) return;

        const newIndex = direction === 'next'
            ? (activeMedia + 1) % project.gallery.length
            : (activeMedia - 1 + project.gallery.length) % project.gallery.length;

        setActiveMedia(newIndex);
    };

    // التكبير/التصغير في وضع ملء الشاشة
    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    // تأثيرات الحركة
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
            {/* شريط التنقل العلوي */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg py-4 px-6 flex justify-between items-center"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 group"
                >
                    <FaArrowLeft className="text-blue-400 group-hover:text-blue-300 transition" />
                    <span className="text-blue-400 group-hover:text-blue-300 transition">العودة للأعمال</span>
                </button>

                <div className="flex gap-4">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-2 rounded-lg hover:opacity-90 transition group"
                    >
                        <span>عرض المشروع</span>
                        <FaExternalLinkAlt className="text-sm group-hover:scale-110 transition-transform" />
                    </a>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition group"
                        >
                            <span>الكود المصدر</span>
                            <FaGithub className="group-hover:scale-110 transition-transform" />
                        </a>
                    )}
                </div>
            </motion.div>

            {/* قسم البطل (Hero) */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black z-20"></div>

                    {/* خلفية ديناميكية ثلاثية الأبعاد */}
                    <div className="absolute inset-0">
                        <div className="grid grid-cols-5 grid-rows-5 h-full">
                            {[...Array(25)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="border border-gray-800"
                                    animate={{
                                        backgroundColor: [
                                            'rgba(30, 30, 40, 0.1)',
                                            'rgba(40, 40, 60, 0.3)',
                                            'rgba(30, 30, 40, 0.1)'
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.05
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* تأثيرات جسيمات متحركة */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-blue-500/20"
                                style={{
                                    width: Math.random() * 20 + 5,
                                    height: Math.random() * 20 + 5,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -100],
                                    x: [0, (Math.random() - 0.5) * 100],
                                    opacity: [0.2, 0.8, 0],
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

                <div className="relative z-30 text-center px-4 max-w-4xl">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm">
                            {project.category}
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
                        initial={{ y: 70, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                            <span className="text-gray-400">السنة:</span> {project.year}
                        </div>
                        <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                            <span className="text-gray-400">العميل:</span> {project.client}
                        </div>
                        <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                            <span className="text-gray-400">المدة:</span> {project.duration}
                        </div>
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

            {/* تبويبات التنقل */}
            <div className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-1 md:gap-4 py-3">
                        {['overview', 'challenges', 'technology', 'results', 'gallery', 'testimonials'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                {tab === 'overview' && 'نظرة عامة'}
                                {tab === 'challenges' && 'التحديات والحلول'}
                                {tab === 'technology' && 'التقنيات المستخدمة'}
                                {tab === 'results' && 'النتائج'}
                                {tab === 'gallery' && 'المعرض'}
                                {tab === 'testimonials' && 'آراء العملاء'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* المحتوى الرئيسي */}
            <div className="container mx-auto px-4 py-20 relative">
                {/* نظرة عامة */}
                {activeTab === 'overview' && (
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                                نظرة عامة على المشروع
                            </h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                {project.overview}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                    <div className="text-blue-400 text-lg font-bold mb-2">الهدف</div>
                                    <p>{project.goal}</p>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                    <div className="text-blue-400 text-lg font-bold mb-2">المدة</div>
                                    <p>{project.duration}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-700/20 z-10"></div>
                                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                                    <div className="text-5xl">💻</div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 w-2/3 h-40 bg-gradient-to-r from-indigo-700 to-blue-500 rounded-2xl shadow-xl -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-1/2 h-32 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-2xl shadow-xl -z-10"></div>
                        </motion.div>
                    </motion.div>
                )}

                {/* التحديات والحلول */}
                {activeTab === 'challenges' && (
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            التحديات والحلول المبتكرة
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-6 text-red-400 flex items-center gap-2">
                                    <span className="bg-red-500/20 p-2 rounded-lg">التحديات</span>
                                </h3>

                                <div className="space-y-4">
                                    {project.challenges.map((challenge: string, index: number) => (
                                        <div
                                            key={index}
                                            className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-red-400/30 transition"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="text-red-400 text-2xl font-bold">0{index + 1}</div>
                                                <p>{challenge}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-bold mb-6 text-green-400 flex items-center gap-2">
                                    <span className="bg-green-500/20 p-2 rounded-lg">الحلول</span>
                                </h3>

                                <div className="space-y-4">
                                    {project.solutions.map((solution: string, index: number) => (
                                        <div
                                            key={index}
                                            className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-green-400/30 transition"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="text-green-400 text-2xl font-bold">0{index + 1}</div>
                                                <p>{solution}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* التقنيات المستخدمة */}
                {activeTab === 'technology' && (
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            التقنيات المستخدمة
                        </motion.h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                            {project.technologies.map((tech: string, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group cursor-pointer"
                                >
                                    <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group-hover:-translate-y-2">
                                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <div className="text-2xl font-bold text-white">{tech.charAt(0)}</div>
                                        </div>
                                        <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">
                                            {tech}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
                        >
                            <h3 className="text-xl font-bold mb-4 text-blue-400">الهندسة المعمارية للنظام</h3>
                            <div className="aspect-video bg-gray-700/50 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-5xl mb-4">📊</div>
                                    <p>رسم بياني تفاعلي للهندسة المعمارية</p>
                                    <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                                        عرض الرسم البياني
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* النتائج */}
                {activeTab === 'results' && (
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            النتائج والتأثير
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {project.results.map((result: any, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="text-blue-400 text-3xl mb-4">
                                        {result.icon}
                                    </div>
                                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                        {result.value}
                                    </div>
                                    <h3 className="text-lg">{result.metric}</h3>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-blue-400">تأثير المشروع</h3>
                                <p className="text-gray-300 mb-6">
                                    {project.title} أحدث ثورة في مجاله، حيث سجلت نسبة تحويل أعلى بـ 3 مرات
                                    من المتوسط العالمي. نظام التوصيات الذكي ساهم في زيادة متوسط قيمة الطلب بنسبة 35%.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>رضا العملاء</span>
                                            <span>98%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full"
                                                style={{ width: '98%' }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>نسبة العودة</span>
                                            <span>75%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div
                                                className="bg-gradient-to-r from-indigo-500 to-blue-400 h-2.5 rounded-full"
                                                style={{ width: '75%' }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>نمو المبيعات</span>
                                            <span>150%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div
                                                className="bg-gradient-to-r from-green-500 to-cyan-400 h-2.5 rounded-full"
                                                style={{ width: '100%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 h-full">
                                <div className="aspect-video bg-gray-700/50 rounded-xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-5xl mb-4">📈</div>
                                        <p>رسم بياني تفاعلي للنمو</p>
                                        <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg hover:opacity-90 transition">
                                            عرض البيانات الكاملة
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                {/* المعرض */}
                {activeTab === 'gallery' && (
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            معرض المشروع
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.gallery.map((media: any, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group cursor-pointer"
                                    onClick={() => openMedia(index)}
                                >
                                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                                        {media.type === 'image' ? (
                                            <div className="bg-gray-700 w-full h-full flex items-center justify-center">
                                                <div className="text-5xl">🖼️</div>
                                            </div>
                                        ) : (
                                            <div className="bg-gray-700 w-full h-full flex items-center justify-center">
                                                <div className="text-5xl">▶️</div>
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                                            <h3 className="font-bold text-lg group-hover:text-blue-300 transition">
                                                {media.caption}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* آراء العملاء */}
                {activeTab === 'testimonials' && (
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            آراء العملاء
                        </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {project.testimonials.map((testimonial: any, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                        <div>
                                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                            <p className="text-gray-400">{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 mb-6 italic relative pl-6">
                                        <FaQuoteLeft className="absolute left-0 top-0 text-blue-500/30 text-3xl" />
                                        {testimonial.content}
                                    </p>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* معرض الوسائط الكامل */}
            <AnimatePresence>
                {activeMedia !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-3xl z-50"
                            onClick={closeMedia}
                        >
                            &times;
                        </button>

                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-3 rounded-full text-white z-50 hover:bg-gray-700 transition"
                            onClick={() => navigateMedia('prev')}
                        >
                            <FaArrowLeft />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-3 rounded-full text-white z-50 hover:bg-gray-700 transition"
                            onClick={() => navigateMedia('next')}
                        >
                            <FaArrowRight />
                        </button>

                        <button
                            className="absolute top-4 left-4 bg-gray-800/50 p-3 rounded-full text-white z-50 hover:bg-gray-700 transition"
                            onClick={toggleFullscreen}
                        >
                            {isFullscreen ? 'تصغير' : 'تكبير'}
                        </button>

                        <div className={`relative ${isFullscreen ? 'w-full h-full' : 'max-w-4xl max-h-[90vh]'}`}>
                            {project.gallery[activeMedia].type === 'image' ? (
                                <div className="bg-gray-700 w-full h-full flex items-center justify-center">
                                    <div className="text-5xl">🖼️</div>
                                </div>
                            ) : (
                                <div className="bg-gray-700 w-full h-full flex items-center justify-center">
                                    <div className="text-5xl">🎬</div>
                                </div>
                            )}
                            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                                {project.gallery[activeMedia].caption}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* التذييل */}
            <motion.div
                className="bg-gradient-to-r from-gray-900 to-black border-t border-gray-800 py-16"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">مستعد لبدء مشروعك القادم؟</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        دعنا نحول أفكارك إلى واقع رقمي مذهل مع حلول مبتكرة تلبي احتياجات عملك
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-xl">
                        اتصل بنا الآن
                    </button>
                </div>
            </motion.div>
        </div>
    );
}