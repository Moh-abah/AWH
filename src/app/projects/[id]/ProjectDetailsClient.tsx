'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaArrowLeft,
    FaExternalLinkAlt,
    FaGithub,
    FaCalendarAlt,
    FaUser,
    FaLaptopCode,
    FaLightbulb,
    FaChartLine,
    FaStar,
} from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Project } from '@/constants/projects';


const ResultCard = ({ metric, value, icon }: { metric: string; value: string; icon: string }) => (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 flex flex-col items-center ">
        <div className="text-blue-400 text-2xl mb-2">
            {icon === 'FaChartLine' && <FaChartLine />}
            {icon === 'FaUsers' && <FaUser />}
            {icon === 'FaCode' && <FaLaptopCode />}
            {icon === 'FaLightbulb' && <FaLightbulb />}
            {icon === 'FaStar' && <FaStar />}
            {icon === 'FaClock' && <FaCalendarAlt />}
        </div>
        <h4 className="font-bold text-lg">{value}</h4>
        <p className="text-gray-400 text-sm">{metric}</p>
    </div>
);

const TestimonialCard = ({
    name,
    position,
    content,
    avatar,
}: {
    name: string;
    position: string;
    content: string;
    avatar: string;
}) => (
    <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6"
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
        <div className="flex items-center mb-4">
            <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mr-3 overflow-hidden">
                {avatar ? (
                    <Image src={avatar} alt={name} width={48} height={48} className="object-cover" />
                ) : (
                    <div className="bg-gray-600 w-full h-full rounded-full" />
                )}
            </div>
            <div>
                <h4 className="font-bold">{name}</h4>
                <p className="text-gray-400 text-sm">{position}</p>
            </div>
        </div>
        <p className="text-gray-300 italic">&quot;{content}&quot;</p>
    </motion.div>
);

export default function ProjectDetailsClient({ project }: { project: Project }) {
    const [activeTab, setActiveTab] = useState('overview');
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-500 to-sky-500/50 text-black/70 overflow-hidden">
            {/* <div className="min-h-screen bg-gradient-to-b from-blue-900/40 to-sky-500/50  text-gray-700 overflow-hidden"></div>
            رأس الصفحة */}
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

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-48">

                {/* زر العودة */}
                

                {/* معلومات المشروع */}
                <div className="relative z-30 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        className="text-xl text-black max-w-3xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 justify-center mt-6 " 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="flex items-center px-4 py-3 rounded-full text-lg bg-sky-100 text-gray-900 border border-sky-500 shadow ">{project.category}</span>
                        <div className=" flex items-center px-4 py-3 rounded-full text-lg transition bg-sky-100 text-gray-900 border border-sky-500 shadow ">
                            <FaCalendarAlt />
                            <span>{project.year}</span>
                        </div>
                        {project.client && (
                            <div className="flex items-center px-4 py-3 rounded-full text-lg transition bg-sky-100 text-gray-900 border border-sky-500 shadow ">
                                <FaUser />
                                <span>{project.client}</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* محتوى الصفحة */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* العمود الأيسر - معلومات المشروع */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sticky top-6">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-700 rounded-full p-2">
                                        <FaCalendarAlt className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">المدة</p>
                                        <p className="font-medium">{project.duration}</p>
                                    </div>
                                </div>

                                {project.liveUrl && (
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gray-700 rounded-full p-2">
                                            <FaExternalLinkAlt className="text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">رابط المشروع</p>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium hover:text-blue-400 transition"
                                            >
                                                زيارة الموقع
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {project.githubUrl && (
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gray-700 rounded-full p-2">
                                            <FaGithub className="text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">الكود المصدري</p>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium hover:text-blue-400 transition"
                                            >
                                                عرض على GitHub
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-4">النتائج الرئيسية</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {project.results.map((result, index) => (
                                        <ResultCard key={index} metric={result.metric} value={result.value} icon={result.icon} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* العمود الأيمن - محتوى المشروع */}
                    <div className="lg:col-span-2">
                        {/* علامات التبويب */}
                        <div className="flex border-b border-gray-300 mb-8 relative z-30">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`pb-3 px-6 ${activeTab === 'overview' ? 'text-black border-b-5 border-black' : 'text-sky-800'
                                    }`}
                            >
                                نظرة عامة
                            </button>
                            <button
                                onClick={() => setActiveTab('challenges')}
                                className={`pb-3 px-6 ${activeTab === 'challenges' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                                    }`}
                            >
                                التحديات والحلول
                            </button>
                            <button
                                onClick={() => setActiveTab('gallery')}
                                className={`pb-3 px-6 ${activeTab === 'gallery' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                                    }`}
                            >
                                المعرض
                            </button>
                            {project.testimonials.length > 0 && (
                                <button
                                    onClick={() => setActiveTab('testimonials')}
                                    className={`pb-3 px-6 ${activeTab === 'testimonials' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                                        }`}
                                >
                                    آراء العملاء
                                </button>
                            )}
                        </div>

                        {/* محتوى علامات التبويب */}
                        {activeTab === 'overview' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                                <h2 className="text-2xl font-bold mb-4">نظرة عامة</h2>
                                <p className="text-gray-300 mb-6">{project.overview}</p>

                                <h3 className="text-xl font-bold mb-4">الهدف</h3>
                                <p className="text-gray-300">{project.goal}</p>
                            </motion.div>
                        )}

                        {activeTab === 'challenges' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">التحديات</h2>
                                    <ul className="space-y-3">
                                        {project.challenges.map((challenge, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="bg-red-500/20 text-red-400 rounded-full p-1 mt-1">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">الحلول</h2>
                                    <ul className="space-y-3">
                                        {project.solutions.map((solution, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="bg-green-500/20 text-green-400 rounded-full p-1 mt-1">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{solution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'gallery' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.gallery.map((item, index) => (
                                    <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden">
                                        <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                                            {item.type === 'image' ? (
                                                <Image src={item.url} alt={item.caption} fill className="object-cover" />
                                            ) : (
                                                <div className="flex flex-col items-center justify-center text-gray-500">
                                                    <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>عرض الفيديو</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-400 text-sm">{item.caption}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'testimonials' && project.testimonials.length > 0 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.testimonials.map((testimonial, index) => (
                                    <TestimonialCard
                                        key={index}
                                        name={testimonial.name}
                                        position={testimonial.position}
                                        content={testimonial.content}
                                        avatar={testimonial.avatar}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* دعوة للعمل */}
                <div className="mt-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 overflow-hidden">
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
                                <button
                                    onClick={() => router.push('/projects')}
                                    className="bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-700 transition"
                                >
                                    تصفح المشاريع
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
                </div>
            </div>
        </div>
    );
}
