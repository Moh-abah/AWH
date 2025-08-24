'use client';

import { useState, useEffect, useCallback } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/constants/projects';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function Workside() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const currentProject = projects[currentProjectIndex];

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection('right');
        setTimeout(() => {
            setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
            setIsAnimating(false);
        }, 300);
    }, [isAnimating]);


    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection('left');
        setTimeout(() => {
            setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);
        return () => clearInterval(interval);
    }, [handleNext]); // ✅ الآن التحذير اختفى
    const cardColor = {
        web: 'bg-blue-50',
        mobile: 'bg-green-50',
        ecommerce: 'bg-yellow-50',
        marketing: 'bg-purple-50',
    }[currentProject.category];

    return (
        <section id="work-section" className="py-20 px-4 sm:px-6 bg-sky-100 border border-sky-500  text-slate-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <SectionTitle title="أعمالنا التي نفخر بها" />
                </div>

                {/* عرض المشروع */}
                <div className="relative flex items-center justify-center min-h-[550px]">
                    {/* زر يسار */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:left-4 z-10 bg-sky-200 border border-blue-500 rounded-full p-4 shadow-md hover:bg-sky-400 hover:text-white transition-all duration-300 group"
                        aria-label="المشروع السابق"
                    >
                        <FaArrowLeft className="text-xl group-hover:scale-110 transition-transform" />
                    </button>

                    {/* البطاقة */}
                    <div className="w-full max-w-4xl mx-auto">
                        <div
                            className={`${cardColor} border border-blue-100 rounded-3xl shadow-lg overflow-hidden transition-all duration-500 
                            ${isAnimating
                                    ? direction === 'right'
                                        ? 'animate-slideOutLeft'
                                        : 'animate-slideOutRight'
                                    : direction === 'right'
                                        ? 'animate-slideInRight'
                                        : 'animate-slideInLeft'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* صورة المشروع */}
                                <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-all duration-1000 hover:scale-105"
                                        style={{
                                            backgroundImage: `url(${currentProject.gallery[0]?.url || '/fallback.jpg'})`
                                        }}
                                    />
                                </div>

                                {/* محتوى المشروع */}
                                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                                                {currentProject.category === 'web' && 'موقع ويب'}
                                                {currentProject.category === 'mobile' && 'تطبيق جوال'}
                                                {currentProject.category === 'ecommerce' && 'متجر إلكتروني'}
                                                {currentProject.category === 'marketing' && 'حل تسويقي'}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-blue-900 mb-4">
                                            {currentProject.title}
                                        </h3>

                                        <p className="text-slate-700 mb-6 leading-relaxed">
                                            {currentProject.description}
                                        </p>
                                    </div>

                                    <div>
                                        <a
                                            href={`/projects/`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-6 py-3 rounded-lg font-medium hover:opacity-90 transition shadow"
                                        >
                                            عرض المشاريع
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* زر يمين */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:right-4 z-10 bg-sky-200 border border-blue-500 rounded-full p-4 shadow-md hover:bg-sky-400 hover:text-white transition-all duration-300 group"
                        aria-label="المشروع التالي"
                    >
                        <FaArrowRight className="text-xl group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* المؤشر السفلي */}
                <div className="flex justify-center mt-10">
                    <div className="flex items-center gap-2 bg-white border border-blue-100 p-3 rounded-full shadow-sm">
                        <div className="text-blue-800 px-4 font-medium">
                            <span className="font-bold text-blue-600">{currentProjectIndex + 1}</span>
                            <span className="mx-1">/</span>
                            <span>{projects.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* أنميشن CSS */}
            <style jsx>{`
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes slideInLeft {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }

                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(-100%); opacity: 0; }
                }

                @keyframes slideOutLeft {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }

                .animate-slideInRight {
                    animation: slideInRight 0.5s forwards;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.5s forwards;
                }

                .animate-slideOutRight {
                    animation: slideOutRight 0.5s forwards;
                }

                .animate-slideOutLeft {
                    animation: slideOutLeft 0.5s forwards;
                }
            `}</style>
        </section>
    );
}
