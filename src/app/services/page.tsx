// app/services/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaLaptopCode, FaMobileAlt, FaChartLine, FaPalette,
    FaServer, FaShieldAlt, FaLightbulb, FaChevronDown,
    FaArrowRight, FaQuoteLeft, FaStar, FaPaintBrush,
    FaRocket, FaCogs, FaQuestionCircle, FaEye
} from 'react-icons/fa';

// بيانات الخدمات المحدثة
const services = [
    {
        id: 'web',
        title: 'تطوير مواقع الويب',
        icon: <FaLaptopCode className="text-4xl" />,
        color: 'from-blue-500 to-indigo-600',
        description: 'تصميم وتطوير مواقع ويب احترافية بتجربة مستخدم استثنائية',
        overview: 'نقدم حلولاً متكاملة لتصميم وتطوير مواقع الويب التي تجمع بين الجماليات والوظائف المتقدمة. نستخدم أحدث التقنيات لإنشاء مواقع سريعة، آمنة، وسهلة الاستخدام.',
        stats: [
            { label: 'زيادة التحويلات', value: '40%' },
            { label: 'وقت التحميل', value: '<2 ثانية' },
            { label: 'رضا العملاء', value: '91%' }
        ],
        features: [
            {
                title: 'تصميم متجاوب',
                description: 'مواقع تعمل بسلاسة على جميع الأجهزة من الجوال إلى سطح المكتب',
                icon: <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaMobileAlt /></div>
            },
            {
                title: 'تحسين محركات البحث',
                description: 'تحسين متوافق مع معايير SEO لزيادة ظهور موقعك في نتائج البحث',
                icon: <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaChartLine /></div>
            },
            {
                title: 'أمان متقدم',
                description: 'حماية متعددة المستويات ضد الاختراقات والهجمات الإلكترونية',
                icon: <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaShieldAlt /></div>
            }
        ],
        process: [
            {
                title: 'الاكتشاف والتخطيط',
                description: 'نفهم احتياجاتك وأهدافك التجارية لنضع خطة استراتيجية'
            },
            {
                title: 'التصميم والتطوير',
                description: 'ننشئ تصاميم فريدة ونطورها باستخدام أحدث التقنيات'
            },
            {
                title: 'الاختبار والتطوير',
                description: 'نختبر كل جانب من جوانب الموقع للتأكد من جودته وأدائه'
            },
            {
                title: 'الإطلاق والدعم',
                description: 'نطلق موقعك وندعمه بشكل مستمر لضمان استمرارية عمله'
            }
        ],
        faqs: [
            {
                question: 'كم يستغرق تطوير موقع ويب متكامل؟',
                answer: 'يتراوح الوقت من 4 إلى 12 أسبوعًا حسب تعقيد المشروع والميزات المطلوبة.'
            },
            {
                question: 'هل تقدمون خدمات الصيانة بعد الإطلاق؟',
                answer: 'نعم، نقدم حزم صيانة شهرية وسنوية تشمل التحديثات، النسخ الاحتياطي، والدعم الفني.'
            },
            {
                question: 'ما هي تكلفة تطوير موقع ويب؟',
                answer: 'تبدأ التكلفة من 5,000 ريال وتختلف حسب احتياجات المشروع وتعقيده.'
            }
        ],
    },
    {
        id: 'mobile',
        title: 'تطبيقات الجوال',
        icon: <FaMobileAlt className="text-4xl" />,
        color: 'from-green-500 to-teal-600',
        description: 'تطبيقات جوال مبتكرة لنظامي iOS و Android',
        overview: 'نطور تطبيقات جوال عالية الجودة توفر تجربة مستخدم استثنائية. نركز على الأداء والتصميم الجذاب والوظائف المتقدمة التي تلبي احتياجات المستخدمين وتفوق توقعاتهم.',
        stats: [
            { label: 'زيادة المبيعات', value: '35%' },
            { label: 'تقييم المستخدمين', value: '4.1/5' },
            { label: 'نسبة الاحتفاظ', value: '75%' }
        ],
        features: [
            {
                title: 'تصميم أصلي',
                description: 'واجهات مصممة خصيصًا لكل نظام (iOS و Android)',
                icon: <div className="bg-green-100 p-3 rounded-full text-green-600"><FaPalette /></div>
            },
            {
                title: 'أداء مرن ',
                description: 'تطبيقات سريعة وخفيفة لا تستهلك موارد الجهاز',
                icon: <div className="bg-green-100 p-3 rounded-full text-green-600"><FaChartLine /></div>
            },
            {
                title: 'تكامل متقدم',
                description: 'تكامل سلس مع الأنظمة والخدمات الخارجية',
                icon: <div className="bg-green-100 p-3 rounded-full text-green-600"><FaServer /></div>
            }
        ],
        process: [
            {
                title: 'دراسة الجدوى',
                description: 'تحليل السوق والمنافسين وتحديد المتطلبات'
            },
            {
                title: 'تصميم واجهات المستخدم',
                description: 'إنشاء نماذج أولية واختبار تجربة المستخدم'
            },
            {
                title: 'التطوير والاختبار',
                description: 'برمجة التطبيق واختباره على أجهزة مختلفة'
            },
            {
                title: 'النشر والتحديثات',
                description: 'نشر التطبيق على المتاجر وتقديم تحديثات دورية'
            }
        ],
        faqs: [
            {
                question: 'هل تطورون تطبيقات هجينة أم أصلية؟',
                answer: 'نطور كلا النوعين حسب احتياجاتك، لكننا نوصي بالتطبيقات الأصلية للأداء الأمثل.'
            },
            {
                question: 'كم تكلفة تطوير تطبيق جوال؟',
                answer: 'تبدأ التكلفة من 4,000 ريال وتختلف حسب تعقيد التطبيق والمنصات المستهدفة.'
            },
            {
                question: 'هل تدعمون التطبيق بعد الإطلاق؟',
                answer: 'نعم، نقدم حزم دعم وصيانة تشمل التحديثات وإصلاح المشكلات.'
            }
        ],
    },
    {
        id: 'marketing',
        title: 'الحلول التسويقية',
        icon: <FaChartLine className="text-4xl" />,
        color: 'from-purple-500 to-fuchsia-600',
        description: 'استراتيجيات تسويقية مدروسة لتعزيز حضورك الرقمي',
        overview: 'نقدم حلولاً تسويقية متكاملة تبدأ بدراسة السوق وتحليل المنافسين وتنتهي بحملات فعالة تحقق أهدافك التجارية. نستخدم أحدث أدوات التحليل لضمان تحقيق أفضل النتائج.',
        stats: [
            { label: 'زيادة الزيارات', value: '200%' },
            { label: 'نسبة التحويل', value: '15%' },
            { label: 'عائد الاستثمار', value: '300%' }
        ],
        features: [
            {
                title: 'تحسين محركات البحث',
                description: 'تحسين موقعك لتحسين ظهوره في نتائج البحث',
                icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaChartLine /></div>
            },
            {
                title: 'إعلانات مدفوعة',
                description: 'حملات إعلانية دقيقة على منصات التواصل الاجتماعي ومحركات البحث',
                icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaMobileAlt /></div>
            },
            {
                title: 'تسويق بالمحتوى',
                description: 'إنشاء محتوى جذاب يجذب ويحول الزوار إلى عملاء',
                icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaPalette /></div>
            }
        ],
        process: [
            {
                title: 'تحليل الوضع الحالي',
                description: 'دراسة الوضع الحالي وتحليل المنافسين'
            },
            {
                title: 'تطوير الاستراتيجية',
                description: 'وضع خطة تسويقية شاملة تحقق أهدافك'
            },
            {
                title: 'تنفيذ الحملات',
                description: 'تنفيذ الحملات التسويقية ومراقبتها'
            },
            {
                title: 'القياس والتحسين',
                description: 'تحليل النتائج وتحسين الحملات المستمر'
            }
        ],
        faqs: [
            {
                question: 'كم تستغرق الحملة التسويقية لتحقيق النتائج؟',
                answer: 'تحتاج الحملات عادة من 3 إلى 6 أشهر لبدء تحقيق نتائج ملموسة.'
            },
            {
                question: 'هل تقدمون خدمات إدارة وسائل التواصل الاجتماعي؟',
                answer: 'نعم، نقدم حزم متكاملة لإدارة المحتوى والتفاعل على منصات التواصل.'
            },
            {
                question: 'كيف تقيسون نجاح الحملات التسويقية؟',
                answer: 'نستخدم مؤشرات أداء رئيسية (KPIs) مثل معدل التحويل، تكلفة الاكتساب، وعائد الاستثمار.'
            }
        ],
    },
    {
        id: 'design',
        title: 'التصميم الجرافيكي',
        icon: <FaPalette className="text-4xl" />,
        color: 'from-amber-500 to-orange-600',
        description: 'هوية بصرية قوية تعكس جوهر علامتك التجارية',
        overview: 'نصمم هويات بصرية متكاملة تترك انطباعاً قوياً لدى جمهورك. نخلق تصاميم مبتكرة تعبر عن قيم علامتك التجارية وتجذب انتباه عملائك المحتملين.',
        stats: [
            { label: 'زيادة الاعتراف بالعلامة', value: '70%' },
            { label: 'رضا العملاء', value: '95%' },
            { label: 'مشاريع مكتملة', value: '40+' }
        ],
        features: [
            {
                title: 'هوية بصرية',
                description: 'تصميم شعار، دليل هوية، وأصول بصرية متكاملة',
                icon: <div className="bg-amber-100 p-3 rounded-full text-amber-600"><FaPalette /></div>
            },
            {
                title: 'تصميم واجهات',
                description: 'تصميم واجهات جذابة وسهلة الاستخدام',
                icon: <div className="bg-amber-100 p-3 rounded-full text-amber-600"><FaLaptopCode /></div>
            },
            {
                title: 'مواد ترويجية',
                description: 'تصميم بطاقات عمل، بروشورات، وإعلانات',
                icon: <div className="bg-amber-100 p-3 rounded-full text-amber-600"><FaChartLine /></div>
            }
        ],
        process: [
            {
                title: 'اكتشاف',
                description: 'فهم العلامة التجارية والقيم المستهدفة'
            },
            {
                title: 'بحث وإلهام',
                description: 'دراسة السوق وجمع الأفكار الإبداعية'
            },
            {
                title: 'تصميم',
                description: 'إنشاء مفاهيم وتصاميم أولية'
            },
            {
                title: 'تنفيذ',
                description: 'تطوير التصاميم النهائية وتسليمها'
            }
        ],
        faqs: [
            {
                question: 'كم عدد التصاميم التي أحصل عليها؟',
                answer: 'نقدم عادة 3-5 مفاهيم تصميمية مختلفة لتختار منها.'
            },
            {
                question: 'هل يمكنني طلب تعديلات على التصاميم؟',
                answer: 'نعم، نقدم عدداً من جولات التعديلات المجانية ضمن الحزمة.'
            },
            {
                question: 'ما هي المدة اللازمة لتصميم هوية بصرية؟',
                answer: 'تتراوح المدة من 2 إلى 4 أسابيع حسب تعقيد المشروع.'
            }
        ],
    },
];

// مكون الأسئلة الشائعة
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="mb-4 last:mb-0 border-b border-gray-700 pb-4 "
            whileHover={{ borderColor: "rgba(56, 189, 248, 0.5)" }}
        >
            <button
                className="flex justify-between items-center w-full text-left text-lg font-medium text-sky-900"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-cyan-400"
                >
                    <FaChevronDown />
                </motion.span>
            </button>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                className="overflow-hidden"
            >
                <p className="pt-3 text-sky-700">{answer}</p>
            </motion.div>
        </motion.div>
    );
};

// المكون الرئيسي لصفحة الخدمات
export default function ServicesPage() {
    const [activeService, setActiveService] = useState(services[0]);
    const [activeSection, setActiveSection] = useState('overview');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const handleServiceChange = (service: any) => {
        if (service.id === activeService.id) return;

        setIsTransitioning(true);
        setActiveSection('overview');

        setTimeout(() => {
            setActiveService(service);
            setIsTransitioning(false);
        }, 300);
    };

    // تنقل سلس إلى الأقسام
    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const section = sectionRefs.current[sectionId];
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    // تحديد القسم النشط أثناء التمرير
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'features', 'process', 'faqs'];
            const scrollPosition = window.scrollY + 150;

            for (const sectionId of sections) {
                const section = sectionRefs.current[sectionId];
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // تهيئة المراجع للأقسام
    useEffect(() => {
        const sections = ['overview', 'features', 'process', 'faqs'];
        sections.forEach(section => {
            sectionRefs.current[section] = document.getElementById(section);
        });
    }, [activeService]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900/40 to-sky-500/50  text-gray-700 overflow-hidden">
            {/* Blobs */}
            

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

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-38">
                {/* Title */}
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800"
                        initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                    >
                        <h3 className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 text-transparent bg-clip-text">خدماتنا المتميزة </h3>
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-white max-w-3xl mx-auto"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        حلول تقنية متكاملة مصممة خصيصاً لتحقيق أهداف عملك وتميزك في السوق
                    </motion.p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {services.map(s => (
                        <motion.button
                            key={s.id}
                            onClick={() => handleServiceChange(s)}
                            className={`
                flex flex-col items-center px-6 py-5 rounded-2xl border-2 transition-all duration-500
                ${activeService.id === s.id
                                ? `bg-black/40 ${s.color} shadow-lg shadow-blue-950 text-white scale-115 border-sky-400`
                                    : 'bg-white/80 border-black-1 text-gray-700 hover:shadow-red'}
              `}
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                        >
                            <div className="mb-3 text-3xl text-sky-500">{s.icon}</div>
                            <span className="font-semibold">{s.title}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Content Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-sky-300 shadow-xl shadow-sky-200/20"
                    >
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
                            <div className="max-w-xl">
                                <motion.h2
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-transparent bg-clip-text"
                                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                                >
                                    {activeService.title}
                                </motion.h2>
                                <motion.p
                                    className="text-lg text-gray-600"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                                >
                                    {activeService.description}
                                </motion.p>
                            </div>
                            <motion.button
                                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-md hover:opacity-95 transition"
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14,165,233,0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            >
                                اطلب الخدمة الآن <FaArrowRight className="ml-3" />
                            </motion.button>
                        </div>

                        {/* Sections */}
                        {isTransitioning
                            ? <div className="flex justify-center items-center h-64"><div className="animate-spin w-12 h-12  border-4 border-sky-500 rounded-full"></div></div>
                            : (
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                    {/* Sidebar */}
                                    <nav className="lg:col-span-1 sticky top-32 space-y-4">
                                        {[
                                            { id: 'overview', label: 'نظرة عامة', icon: <FaEye /> },
                                            { id: 'features', label: 'مميزاتنا', icon: <FaStar /> },
                                            { id: 'process', label: 'كيف نعمل', icon: <FaCogs /> },
                                            { id: 'faqs', label: 'الأسئلة الشائعة', icon: <FaQuestionCircle /> }
                                        ].map(it => (
                                            <motion.button
                                                key={it.id}
                                                onClick={() => scrollToSection(it.id)}
                                                className={`
                          flex items-center w-full px-4 py-3 rounded-lg text-lg transition
                          ${activeSection === it.id
                                                        ? 'bg-sky-100 text-gray-900 border border-sky-300 shadow'
                                                        : 'hover:bg-sky-50'}
                        `}
                                                whileHover={{ x: 8 }}
                                            >
                                                <span className="text-xl text-sky-500 ml-3">{it.icon}</span>
                                                {it.label}
                                            </motion.button>
                                        ))}
                                    </nav>

                                    {/* Main Content */}
                                    <div className="lg:col-span-3 space-y-16">
                                        {/* نظرة عامة */}
                                        <section id="overview" ref={el => { sectionRefs.current.overview = el }} className="scroll-mt-24">
                                            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm">
                                                <h3 className="text-2xl font-bold text-sky-600 mb-4">نظرة عامة</h3>
                                                <p className="text-gray-700 leading-relaxed">{activeService.overview}</p>
                                            </div>
                                        </section>

                                        {/* مميزاتنا */}
                                        <section id="features" ref={el => { sectionRefs.current.features = el }} className="scroll-mt-24">
                                            <h3 className="text-2xl font-bold text-sky-600 mb-6">مميزاتنا</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {activeService.features.map((f, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="bg-white p-6 rounded-xl border border-sky-200 shadow-sm"
                                                        whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(125,211,252,0.2)' }}
                                                    >
                                                        <div className="flex items-center mb-4">
                                                            <div className="text-2xl text-sky-500">{f.icon}</div>
                                                            <h4 className="text-xl font-semibold ml-3">{f.title}</h4>
                                                        </div>
                                                        <p className="text-gray-700">{f.description}</p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </section>

                                        {/* كيف نعمل */}
                                        <section id="process" ref={el => { sectionRefs.current.process = el }} className="scroll-mt-24">
                                            <h3 className="text-2xl font-bold text-sky-600 mb-6">كيف نعمل</h3>
                                            <div className="relative pl-8 before:absolute before:left-4 before:top-6 before:bottom-6 before:w-0.5 before:bg-sky-300">
                                                {activeService.process.map((p, i) => (
                                                    <motion.div key={i}
                                                        className="flex items-start mb-8"
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">
                                                            {i + 1}
                                                        </div>
                                                        <div className="mr-6">
                                                            <h4 className="text-lg font-semibold mb-1">{p.title}</h4>
                                                            <p className="text-gray-700">{p.description}</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </section>

                                        {/* الأسئلة الشائعة */}
                                        <section id="faqs" ref={el => { sectionRefs.current.faqs = el }} className="scroll-mt-24">
                                            <h3 className="text-2xl font-bold text-sky-600 mb-6">الأسئلة الشائعة</h3>
                                            <div className="space-y-4 ">
                                                {activeService.faqs.map((q, i) => (
                                                    <FAQItem key={i} question={q.question} answer={q.answer }  />
                                                )) }
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            )
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );


}