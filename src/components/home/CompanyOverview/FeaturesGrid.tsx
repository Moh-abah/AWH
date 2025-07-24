'use client';

import { FaServer, FaLightbulb, FaChartLine, FaRocket, FaArrowLeft, FaRegClock, FaHandshake, FaHeadset, FaCogs, FaMedal } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const features = [
    {
        id: 1,
        title: 'تقنيات مرنة ومتعددة الاستخدام',
        desc: 'نغطي مجموعة واسعة من التقنيات التي تخدم قطاعات متنوعة مثل التجارة، التعليم، الصحة، الإعلام، والخدمات. حلولنا مصممة خصيصًا لتناسب طبيعة كل نشاط وتحقق له نتائج ملموسة.',
        icon: <FaServer className="text-xl" />,
        bgColor: 'from-sky-400 to-blue-900',
        delay: 0.1,
        details: [
            'تصميم وتطوير تطبيقات الويب والجوال',
            'حلول التجارة الإلكترونية المتكاملة',
            'أنظمة إدارة المحتوى المتطورة',
            'حلول التعليم الإلكتروني التفاعلية',
            'أنظمة إدارة المستشفيات والعيادات'
        ]
    },
    {
        id: 2,
        title: 'استشارات رقمية مخصصة',
        desc: 'نعمل جنبًا إلى جنب معك لفهم مشروعك، وتقديم خارطة طريق تقنية تضمن أفضل استخدام للموارد وتحقيق أقصى عائد من التحول الرقمي.',
        icon: <FaLightbulb className="text-xl" />,
        bgColor: 'from-blue-600 to-blue-900',
        delay: 0.3,
        details: [
            'تحليل احتياجات العمل وتحديد الأهداف',
            'تصميم تجربة المستخدم (UX) وواجهة المستخدم (UI)',
            'تخطيط البنية التحتية التقنية',
            'استشارات الأمن السيبراني وحماية البيانات',
            'تحسين الأداء وتحليل النتائج'
        ]
    },
    {
        id: 3,
        title: 'خبرة عملية ونتائج فعلية',
        desc: 'بخبرة تمتد لسنوات في السوق العربي أنجزنا مشاريع ناجحة بواجهات جذابة، وتجربة مستخدم مريحة، وأداء عالي على مختلف الأجهزة.',
        icon: <FaChartLine className="text-xl" />,
        bgColor: 'from-sky-500 to-blue-800',
        delay: 0.5,
        details: [
            'أكثر من 200 مشروع ناجح في المنطقة',
            'شراكات استراتيجية مع كبرى المؤسسات',
            'حلول محلية تلبي احتياجات السوق العربي',
            'فريق عمل متخصص ذو خبرة عالية',
            'دعم فني متواصل وخدمة ما بعد البيع'
        ]
    },
    {
        id: 4,
        title: 'ابتكار مستمر وحلول متطورة',
        desc: 'نواكب أحدث التقنيات العالمية ونطور حلولاً مبتكرة تلبي متطلبات السوق المتغيرة وتضمن لك التميز على المنافسين.',
        icon: <FaCogs className="text-xl" />,
        bgColor: 'from-indigo-500 to-purple-800',
        delay: 0.2,
        details: [
            'بحث وتطوير مستمر للحلول التقنية',
            'تبني أحدث التقنيات مثل الذكاء الاصطناعي والبلوك تشين',
            'تصميم حلول مبتكرة لمشاكل العمل الفريدة',
            'تطوير منتجات رقمية مبتكرة',
            'استشراف المستقبل الرقمي لعملك'
        ]
    },
    {
        id: 5,
        title: 'جودة لا مثيل لها',
        desc: 'نلتزم بأعلى معايير الجودة في كل مرحلة من مراحل المشروع، بدءًا من التخطيط وحتى التسليم النهائي ومراقبة الأداء.',
        icon: <FaMedal className="text-xl" />,
        bgColor: 'from-amber-500 to-orange-700',
        delay: 0.4,
        details: [
            'اختبارات صارمة على جميع مراحل التطوير',
            'التزام بمعايير الجودة العالمية ISO',
            'مراجعات دورية لضمان الجودة',
            'تطبيق أفضل الممارسات في التطوير والتصميم',
            'تحسين مستمر بناءً على ملاحظات العملاء'
        ]
    },
    {
        id: 6,
        title: 'التزام بالمواعيد',
        desc: 'نفهم أهمية الوقت في عالم الأعمال، لذلك نضمن تسليم مشاريعنا في المواعيد المتفق عليها دون تأخير أو تهاون.',
        icon: <FaRegClock className="text-xl" />,
        bgColor: 'from-emerald-500 to-teal-800',
        delay: 0.6,
        details: [
            'خطط زمنية واقعية ومدروسة',
            'تسليم المشروع على مراحل مع تواريخ واضحة',
            'مراقبة مستمرة للتقدم وضمان الالتزام بالجدول',
            'تواصل فوري في حال وجود أي تحديات',
            'عقوبات تعاقدية في حال التأخير غير المبرر'
        ]
    },
    {
        id: 7,
        title: 'خدمة ما بعد البيع',
        desc: 'علاقتنا معك لا تنتهي عند تسليم المشروع، بل نقدم دعمًا فنيًا متكاملاً وخدمات صيانة وتطوير مستمرة.',
        icon: <FaHeadset className="text-xl" />,
        bgColor: 'from-violet-500 to-fuchsia-800',
        delay: 0.7,
        details: [
            'دعم فني متواصل على مدار الساعة',
            'صيانة دورية وتحديثات مستمرة',
            'تدريب كامل على استخدام الحلول المقدمة',
            'تطوير إضافات وميزات جديدة حسب الطلب',
            'تقارير أداء شهرية واقتراحات تحسين'
        ]
    },
    {
        id: 8,
        title: 'تواصل مستمر وشفافية',
        desc: 'نؤمن بأهمية التواصل الواضح والمستمر مع عملائنا، مع تقديم تقارير منتظمة وشفافة عن سير العمل والتقدم.',
        icon: <FaHandshake className="text-xl" />,
        bgColor: 'from-rose-500 to-pink-800',
        delay: 0.8,
        details: [
            'قناة اتصال مباشرة مع مدير المشروع',
            'اجتماعات أسبوعية لمتابعة التقدم',
            'تقارير مفصلة عن مراحل التنفيذ',
            'شفافية كاملة في التكاليف والجداول',
            'استجابة سريعة لاستفساراتك وملاحظاتك'
        ]
    }
];

export default function FeaturesGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredFeatures, setFilteredFeatures] = useState(features);
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredFeatures(features);
        } else {
            setFilteredFeatures(
                features.filter(feature =>
                    feature.title.includes(activeFilter) ||
                    feature.desc.includes(activeFilter)
                )
            );
        }
    }, [activeFilter]);

    const handleCardClick = (id: number) => {
        if (expandedCard === id) {
            setExpandedCard(null);
        } else {
            setExpandedCard(id);
        }
    };

    return (
        <div className="py-16 px-4 bg-gradient-to-br from-sky-50 to-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-blue-900/10 text-blue-900 font-medium px-4 py-2 rounded-full mb-4"
                    >
                        <FaRocket className="text-sky-500" />
                        <span>لماذا نتميز؟</span>
                    </motion.div>

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        مميزاتنا الاستثنائية
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        نقدم حلولاً رقمية متكاملة تجمع بين الابتكار والأداء العالي لتحقيق أهداف عملك
                    </motion.p>

                    {/* فلتر المميزات */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'all'
                                    ? 'bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow-lg'
                                    : 'bg-white text-blue-900 border border-blue-200 hover:border-blue-400'
                                }`}
                        >
                            الكل
                        </button>
                        <button
                            onClick={() => setActiveFilter('ابتكار')}
                            className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'ابتكار'
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-700 text-white shadow-lg'
                                    : 'bg-white text-blue-900 border border-blue-200 hover:border-blue-400'
                                }`}
                        >
                            الابتكار
                        </button>
                        <button
                            onClick={() => setActiveFilter('جودة')}
                            className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'جودة'
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-700 text-white shadow-lg'
                                    : 'bg-white text-blue-900 border border-blue-200 hover:border-blue-400'
                                }`}
                        >
                            الجودة
                        </button>
                        <button
                            onClick={() => setActiveFilter('الالتزام')}
                            className={`px-4 py-2 rounded-full transition-all ${activeFilter === 'الالتزام'
                                    ? 'bg-gradient-to-r from-emerald-500 to-teal-700 text-white shadow-lg'
                                    : 'bg-white text-blue-900 border border-blue-200 hover:border-blue-400'
                                }`}
                        >
                            الالتزام بالمواعيد
                        </button>
                    </motion.div>
                </div>

                <AnimatePresence>
                    {expandedCard ? (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <button
                                onClick={() => setExpandedCard(null)}
                                className="absolute top-4 left-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-900 px-4 py-2 rounded-full z-20 hover:bg-white transition-all shadow-md"
                            >
                                <FaArrowLeft />
                                العودة إلى القائمة
                            </button>

                            <div className="bg-gradient-to-br from-sky-400 to-blue-900 rounded-3xl p-1 shadow-2xl">
                                <div className="bg-white rounded-2xl p-8 min-h-[500px]">
                                    {features
                                        .filter(feature => feature.id === expandedCard)
                                        .map((feature) => (
                                            <div key={feature.id} className="flex flex-col md:flex-row gap-8">
                                                <div className="md:w-1/3 flex flex-col items-center">
                                                    <div className={`bg-gradient-to-br ${feature.bgColor} w-24 h-24 rounded-full flex items-center justify-center text-white mb-6 shadow-lg`}>
                                                        <div className="text-3xl">{feature.icon}</div>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-center text-blue-900 mb-4">{feature.title}</h3>
                                                    <p className="text-gray-700 text-center">{feature.desc}</p>
                                                </div>

                                                <div className="md:w-2/3">
                                                    <h4 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">تفاصيل الخدمة:</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {feature.details.map((detail, index) => (
                                                            <motion.li
                                                                key={index}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="flex items-start gap-3 bg-sky-50 p-4 rounded-xl border border-blue-100"
                                                            >
                                                                <div className="bg-blue-100 p-2 rounded-full mt-1">
                                                                    <div className="bg-gradient-to-br from-sky-400 to-blue-700 w-3 h-3 rounded-full"></div>
                                                                </div>
                                                                <span className="text-gray-800">{detail}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
                        >
                            {/* خطوط متحركة بين البطاقات */}
                            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-900 hidden lg:block z-0"></div>
                            <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-900 hidden lg:block z-0"></div>
                            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-900 hidden lg:block z-0"></div>

                            {filteredFeatures.map(({ id, title, desc, icon, bgColor, delay }, i) => (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay }}
                                    className="relative z-10 cursor-pointer"
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => handleCardClick(id)}
                                >
                                    <div className={`bg-gradient-to-br ${bgColor} p-1 rounded-2xl shadow-xl transition-all duration-300 ${hoveredIndex === i ? 'scale-[1.02]' : ''}`}>
                                        <motion.div
                                            className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col"
                                            whileHover={{
                                                y: -10,
                                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`bg-gradient-to-br ${bgColor} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md`}>
                                                    {icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-blue-900">{title}</h3>
                                            </div>

                                            <p className="text-gray-700 mb-6 flex-grow">{desc}</p>

                                            <motion.button
                                                className="mt-auto w-full bg-gradient-to-r from-sky-100 to-blue-100 text-blue-900 font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                اكتشف المزيد
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                </svg>
                                            </motion.button>
                                        </motion.div>
                                    </div>

                                    {/* تأثير الإضاءة عند التحويم */}
                                    {hoveredIndex === i && (
                                        <div className="absolute inset-0 -z-10">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* قسم إضافي للرسالة */}
                <motion.div
                    className="mt-16 bg-gradient-to-r from-sky-400 to-blue-900 rounded-2xl p-8 text-white text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    style={{
                        boxShadow: '0 20px 25px -5px rgba(6, 182, 212, 0.3), 0 10px 10px -5px rgba(6, 182, 212, 0.1)'
                    }}
                >
                    {/* تأثيرات بصرية */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-300 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-[100px] opacity-10"></div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4">جاهزون لبدء مشروعك الرقمي؟</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        تواصل معنا اليوم لتحويل رؤيتك إلى واقع رقمي متميز
                    </p>
                    <motion.button
                        className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity relative overflow-hidden group"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">تواصل معنا الآن</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </motion.button>
                </motion.div>
            </div>

            {/* تأثيرات متحركة في الخلفية */}
            {!expandedCard && (
                <>
                    <motion.div
                        className="fixed top-20 right-10 w-6 h-6 rounded-full bg-sky-400 z-0"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="fixed top-1/3 left-10 w-8 h-8 rounded-full bg-blue-600 z-0"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div
                        className="fixed bottom-20 left-1/4 w-4 h-4 rounded-full bg-blue-800 z-0"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    />
                    <motion.div
                        className="fixed top-2/3 right-1/4 w-5 h-5 rounded-full bg-indigo-500 z-0"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    />
                </>
            )}
        </div>
    );
}