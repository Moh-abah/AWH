// components/work/WorkPage.tsx
'use client';

import { useState, useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/constants/projects';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function Workside() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const currentProject = projects[currentProjectIndex];

    const handleNext = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setDirection('right');
        setTimeout(() => {
            setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
            setIsAnimating(false);
        }, 300);
    };
    const cardColor = {
        web: 'bg-blue-100',
        mobile: 'bg-green-100',
        ecommerce: 'bg-yellow-100',
        marketing: 'bg-purple-100',
    }[currentProject.category];
      

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
        // تغيير المشروع تلقائيًا كل 7 ثواني
        const interval = setInterval(() => {
            handleNext();
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="work-section" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <SectionTitle
                        title="أعمالنا التي نفخر بها"
                        
                    />
                </div>

                {/* عرض المشروع الحالي */}
                <div className="relative flex items-center justify-center min-h-[550px]">
                    {/* زر التمرير لليسار */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:left-4 z-10 bg-white rounded-full p-4 shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                        aria-label="المشروع السابق"
                    >
                        <FaArrowLeft className="text-xl group-hover:scale-110 transition-transform" />
                    </button>

                    {/* بطاقة المشروع */}
                    <div className="w-full max-w-4xl mx-auto">


                        <div className={`${cardColor} rounded-3xl shadow-xl overflow-hidden transition-all duration-500
                ${isAnimating ? (direction === 'right'
                                ? 'animate-slideOutLeft'
                                : 'animate-slideOutRight') :
                                (direction === 'right'
                                    ? 'animate-slideInRight'
                                    : 'animate-slideInLeft')}`}
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

                                {/* تفاصيل المشروع */}
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

                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                            {currentProject.title}
                                        </h3>

                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {currentProject.description}
                                        </p>
                                    </div>

                                    <div>
                                        <a
                                            href={currentProject.liveUrl}

                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-6 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-lg"
                                        >
                                            عرض المشروع
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* زر التمرير لليمين */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:right-4 z-10 bg-white rounded-full p-4 shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                        aria-label="المشروع التالي"
                    >
                        <FaArrowRight className="text-xl group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* مؤشر المشاريع */}
                <div className="flex justify-center mt-10">
                    <div className="flex items-center gap-2 bg-white p-3 rounded-full shadow-md">
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 md:left-4 z-10 bg-white rounded-full p-4 shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                            aria-label="المشروع السابق"
                        >
                            <FaArrowLeft className="text-xl group-hover:scale-110 transition-transform" />
                        </button>


                        <div className="text-gray-700 px-4">
                            <span className="font-bold text-blue-600">{currentProjectIndex + 1}</span>
                            <span className="mx-1">/</span>
                            <span>{projects.length}</span>
                        </div>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 md:right-4 z-10 bg-white rounded-full p-4 shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                            aria-label="المشروع التالي"
                        >
                            <FaArrowRight className="text-xl group-hover:scale-110 transition-transform" />
                        </button>

                    </div>
                </div>
            </div>

            {/* أنماط CSS للرسوم المتحركة */}
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