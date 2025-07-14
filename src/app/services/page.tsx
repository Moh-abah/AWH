// app/services/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaLaptopCode, FaMobileAlt, FaChartLine, FaPalette,
    FaServer, FaShieldAlt, FaLightbulb, FaChevronDown,
    FaArrowRight, FaArrowLeft, FaQuoteLeft, FaStar
} from 'react-icons/fa';
import AnimatedBackground from '@/components/AnimatedBackground';

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
                step: 1,
                title: 'الاكتشاف والتخطيط',
                description: 'نفهم احتياجاتك وأهدافك التجارية لنضع خطة استراتيجية'
            },
            {
                step: 2,
                title: 'التصميم والتطوير',
                description: 'ننشئ تصاميم فريدة ونطورها باستخدام أحدث التقنيات'
            },
            {
                step: 3,
                title: 'الاختبار والتطوير',
                description: 'نختبر كل جانب من جوانب الموقع للتأكد من جودته وأدائه'
            },
            {
                step: 4,
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
        // gallery: [
        //     { id: 1, title: 'نموذج متجر إلكتروني (تجريبي)', category: 'تجاره', image: '/images/memories-demo.png' },
        //     { id: 2, title: 'موقع رياضي تجريبي ', category: 'رياضه', image: '/images/memories-demo.png' },
        //     { id: 3, title: 'موقع لعرض الذكريات من عام 2000 (تجريبي) ', category: 'إدارة المحتوى', image: '/images/memories-demo.png' }
            
        // ]
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
                step: 1,
                title: 'دراسة الجدوى',
                description: 'تحليل السوق والمنافسين وتحديد المتطلبات'
            },
            {
                step: 2,
                title: 'تصميم واجهات المستخدم',
                description: 'إنشاء نماذج أولية واختبار تجربة المستخدم'
            },
            {
                step: 3,
                title: 'التطوير والاختبار',
                description: 'برمجة التطبيق واختباره على أجهزة مختلفة'
            },
            {
                step: 4,
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
        // gallery: [
        //     { id: 1, title: ' تطبيق اين  ', category: 'خدمات وخرائط وتجاره', image: '/images/memories-demo.png' },
        //     { id: 2, title: ' تطبيق غازك علينا', category: 'خدمات محلية في السوق اليمني', image: '/images/memories-demo.png' },
        //     { id: 3, title: 'أداة التقاط وتحليل الشاشة  ', category: 'أدوات ذكية', image: '/images/memories-demo.png' }
            
        // ]
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
                step: 1,
                title: 'تحليل الوضع الحالي',
                description: 'دراسة الوضع الحالي وتحليل المنافسين'
            },
            {
                step: 2,
                title: 'تطوير الاستراتيجية',
                description: 'وضع خطة تسويقية شاملة تحقق أهدافك'
            },
            {
                step: 3,
                title: 'تنفيذ الحملات',
                description: 'تنفيذ الحملات التسويقية ومراقبتها'
            },
            {
                step: 4,
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
        // gallery: [
        //     { id: 1, title: 'حملة تسويق رقمي', category: 'تجارة' },
        //     { id: 2, title: 'استراتيجية محتوى', category: 'خدمات' },
        //     { id: 3, title: 'تحسين SEO', category: 'تعليم' },
        //     { id: 4, title: 'إعلانات وسائل تواصل', category: 'سياحة' }
        // ]
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
                step: 1,
                title: 'اكتشاف',
                description: 'فهم العلامة التجارية والقيم المستهدفة'
            },
            {
                step: 2,
                title: 'بحث وإلهام',
                description: 'دراسة السوق وجمع الأفكار الإبداعية'
            },
            {
                step: 3,
                title: 'تصميم',
                description: 'إنشاء مفاهيم وتصاميم أولية'
            },
            {
                step: 4,
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
        // gallery: [
        //     { id: 1, title: 'هوية علامة تجارية', category: 'شركات', image: '/images/memories-demo.png' },
        //     { id: 2, title: 'تصميم شعار', category: 'جميع', image: '/images/memories-demo.png' },
        //     { id: 3, title: 'مواد ترويجية', category: 'تسويق', image: '/images/memories-demo.png' }
            
        // ]
    },
    // {
    //     id: 'hosting',
    //     title: 'الاستضافة والسحابة',
    //     icon: <FaServer className="text-4xl" />,
    //     color: 'from-cyan-500 to-sky-600',
    //     description: 'حلول استضافة قوية وآمنة لمواقعك وتطبيقاتك',
    //     overview: 'نقدم حلول استضافة متطورة توفر الأداء العالي والأمان المتقدم. مع بنية تحتية قوية وخدمة دعم فني على مدار الساعة، نضمن لموقعك أو تطبيقك التشغيل السلس دون انقطاع.',
    //     stats: [
    //         { label: 'وقت التشغيل', value: '99.99%' },
    //         { label: 'سرعة التحميل', value: 'أقل من 0.5 ثانية' },
    //         { label: 'عملاء راضون', value: '95%' }
    //     ],
    //     features: [
    //         {
    //             title: 'استضافة سحابية',
    //             description: 'حلول استضافة مرنة وقابلة للتوسع حسب احتياجاتك',
    //             icon: <div className="bg-cyan-100 p-3 rounded-full text-cyan-600"><FaServer /></div>
    //         },
    //         {
    //             title: 'أمان متقدم',
    //             description: 'حماية متعددة الطبقات ضد الاختراقات والهجمات',
    //             icon: <div className="bg-cyan-100 p-3 rounded-full text-cyan-600"><FaShieldAlt /></div>
    //         },
    //         {
    //             title: 'دعم فني',
    //             description: 'دعم فني متاح 24/7 لحل أي مشكلة تواجهك',
    //             icon: <div className="bg-cyan-100 p-3 rounded-full text-cyan-600"><FaLightbulb /></div>
    //         }
    //     ],
    //     process: [
    //         {
    //             step: 1,
    //             title: 'تقييم الاحتياجات',
    //             description: 'تحليل متطلباتك واختيار الحل الأمثل'
    //         },
    //         {
    //             step: 2,
    //             title: 'تهيئة البيئة',
    //             description: 'إعداد خادم مخصص أو خطة استضافة مناسبة'
    //         },
    //         {
    //             step: 3,
    //             title: 'الهجرة والدعم',
    //             description: 'نقل موقعك وتقديم الدعم المستمر'
    //         },
    //         {
    //             step: 4,
    //             title: 'المراقبة والتطوير',
    //             description: 'مراقبة الأداء وتقديم تحسينات مستمرة'
    //         }
    //     ],
    //     faqs: [
    //         {
    //             question: 'ما الفرق بين الاستضافة المشتركة والسحابية؟',
    //             answer: 'الاستضافة السحابية توفر موارد مخصصة وأداء أفضل مقارنة بالاستضافة المشتركة.'
    //         },
    //         {
    //             question: 'هل تقدمون نسخ احتياطية؟',
    //             answer: 'نعم، نقدم نسخ احتياطية يومية وأسبوعية وشهرية حسب الحزمة.'
    //         },
    //         {
    //             question: 'كيف أتأكد من أمان موقعي؟',
    //             answer: 'نوفر شهادات SSL مجانية، جدران حماية، ومراقبة مستمرة للأمان.'
    //         }
    //     ],
    //     gallery: [
    //         { id: 1, title: 'خوادم سحابية', category: 'تكنولوجيا' },
    //         { id: 2, title: 'حلول أمنية', category: 'أمان' },
    //         { id: 3, title: 'مراكز بيانات', category: 'بنية تحتية' },
    //         { id: 4, title: 'حلول نسخ احتياطي', category: 'حماية' }
    //     ]
    // }
];

// مكون بطاقة العملاء
const TestimonialCard = ({
    name,
    position,
    content,
    rating,
}: {
    name: string;
    position: string;
    content: string;
    rating: number;
}) => (
  
    <motion.div
        className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
        whileHover={{ y: -5 }}
    >
        <div className="flex items-center mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16" />
            <div className="ml-4">
                <p className="font-bold">{name}</p>
                <p className="text-sm text-gray-300">{position}</p>
            </div>
        </div>
        <FaQuoteLeft className="text-gray-400 mb-3" />
        <p className="italic mb-4">{content}</p>
        <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"} />
            ))}
        </div>
    </motion.div>
);

// مكون الأسئلة الشائعة
const FAQItem = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
  
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <FaChevronDown />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="mt-3 text-gray-300">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// مكون بطاقة المشروع في المعرض
const ProjectCard = ({
    title,
    category,
    color,
    image,
}: {
    title: string;
    category: string;
    color: string;
    image?: string;
}) => (
  
    <motion.div
        className="relative overflow-hidden rounded-xl h-48"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}


    >
        {image ? (
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
            />
        ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`}></div>
        )}


        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`}></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <span className="text-sm bg-black/30 px-2 py-1 rounded">{category}</span>
        </div>
    </motion.div>
);

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

    // شهادات العملاء
    // const testimonials = [
    //     {
    //         id: 1,
    //         name: 'محمد العلي',
    //         position: 'مدير تسويق، شركة التقنية',
    //         content: 'بعد التعاون مع فريقكم، زادت حركة الزوار لموقعنا بنسبة 200% في أول 3 أشهر. الاحترافية في العمل والدقة في التنفيذ تفوق التوقعات.',
    //         rating: 5
    //     },
    //     {
    //         id: 2,
    //         name: 'سارة عبدالله',
    //         position: 'مالكة متجر إلكتروني',
    //         content: 'التطبيق الذي طورتموه لنا غير تجربة عملائنا تماماً. المبيعات زادت بنسبة 40% في الشهر الأول بعد الإطلاق. شكراً على الإبداع والاحترافية.',
    //         rating: 5
    //     },
    //     {
    //         id: 3,
    //         name: 'خالد الحميد',
    //         position: 'مدير تقنية المعلومات',
    //         content: 'حلول الاستضافة التي تقدمونها غيرت أداء مواقعنا بشكل جذري. السرعة والاستقرار والدعم الفني الممتاز جعلتنا نثق بكم كشريك تقني دائم.',
    //         rating: 4
    //     }
    // ];

    // ربط الأقسام مع الـ refs
    useEffect(() => {
        const sections = ['overview', 'features', 'process', 'faqs', 'gallery', 'testimonials'];
        sections.forEach(section => {
            sectionRefs.current[section] = document.getElementById(section);
        });
    }, [activeService]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
                        


            
            <AnimatedBackground />
            
            

            <div className="relative z-10 container mx-auto px-4 py-16 pointer-events-auto">
                    <div className="text-center mb-16">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-4 text-white"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            خدماتنا <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">المتميزة</span>
                        </motion.h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            حلول تقنية متكاملة مصممة خصيصاً لتحقيق أهداف عملك وتميزك في السوق
                        </p>
                    </div>

                    {/* خدمة التنقل */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {services.map((service) => (
                            <motion.button
                                key={service.id}
                                onClick={() => handleServiceChange(service)}
                                className={`flex flex-col items-center px-6 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm ${activeService.id === service.id
                                        ? `bg-gradient-to-r ${service.color} shadow-lg shadow-blue-500/30 transform -translate-y-1`
                                        : 'bg-gray-800/70 hover:bg-gray-700/80'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="mb-3 text-2xl">{service.icon}</div>
                                <span className="font-medium text-gray-100">{service.title}</span>
                            </motion.button>
                        ))}
                    </div>
                

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700"
                    >
                        {/* رأس الخدمة */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                            <div>
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {activeService.title}
                                </motion.h2>
                                <p className="text-xl text-gray-300 max-w-2xl">
                                    {activeService.description}
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <motion.button
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-lg flex items-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    اطلب الخدمة الآن <FaArrowRight className="ml-2" />
                                </motion.button>
                            </div>
                        </div>

                        {isTransitioning ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                            </div>
                        ) : (
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* التنقل الجانبي */}
                                <div className="lg:w-1/4">
                                    <div className="sticky top-24 bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                                        <h3 className="text-xl font-bold mb-4">أقسام الخدمة</h3>
                                        <ul className="space-y-2">
                                            {[
                                                { id: 'overview', label: 'نظرة عامة' },
                                                { id: 'features', label: 'مميزاتنا' },
                                                { id: 'process', label: 'كيف نعمل' },
                                                { id: 'faqs', label: 'الأسئلة الشائعة' }
                                                //{ id: 'gallery', label: 'معرض أعمالنا' },
                                               // { id: 'testimonials', label: 'آراء العملاء' }
                                            ].map((item) => (
                                                <li key={item.id}>
                                                    <button
                                                        onClick={() => scrollToSection(item.id)}
                                                        className={`w-full text-left px-4 py-3 rounded-lg transition ${activeSection === item.id
                                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
                                                                : 'hover:bg-gray-600'
                                                            }`}
                                                    >
                                                        {item.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* محتوى الخدمة */}
                                <div className="lg:w-3/4">
                                    {/* نظرة عامة */}
                                    <section
                                        id="overview"
                                        className="mb-16 scroll-mt-24"
                                        // ref={(el) => sectionRefs.current['overview'] = el}
                                    >
                                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl mb-8">
                                            <h3 className="text-2xl font-bold mb-4">نظرة عامة</h3>
                                            <p className="mb-6">{activeService.overview}</p>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                                    {activeService.stats.map((stat: { label: string; value: string | number }, index) => (

                                                    <motion.div
                                                        key={index}
                                                        className="bg-gray-800/50 p-4 rounded-lg text-center"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 * index }}
                                                    >
                                                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                                        <div className="text-gray-300">{stat.label}</div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>

                                    {/* مميزاتنا */}
                                    <section
                                        id="features"
                                        className="mb-16 scroll-mt-24"
                                        // ref={(el) => sectionRefs.current['features'] = el}
                                    >
                                        <h3 className="text-2xl font-bold mb-6">مميزاتنا</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {activeService.features.map((feature: { icon: React.ReactNode; title: string; description: string }, index) => (

                                                <motion.div
                                                    key={index}
                                                    className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 * index }}
                                                >
                                                    <div className="flex items-start mb-4">
                                                        {feature.icon}
                                                        <h4 className="text-xl font-bold ml-4">{feature.title}</h4>
                                                    </div>
                                                    <p className="text-gray-300">{feature.description}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* كيف نعمل */}
                                    <section
                                        id="process"
                                        className="mb-16 scroll-mt-24"
                                        // ref={(el) => sectionRefs.current['process'] = el}
                                    >
                                        <h3 className="text-2xl font-bold mb-6">كيف نعمل</h3>
                                        <div className="relative">
                                            <div className="absolute left-0 top-10 bottom-10 w-0.5 bg-gray-700 transform translate-x-4"></div>

                                            <div className="space-y-12">
                                                    {activeService.process.map((step: { title: string; description: string }, index) => (

                                                    <motion.div
                                                        key={index}
                                                        className="flex relative"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * index }}
                                                    >
                                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center z-10">
                                                            {/* {step} */}
                                                        </div>
                                                        <div className="ml-8">
                                                            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                                            <p className="text-gray-300">{step.description}</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>

                                    {/* الأسئلة الشائعة */}
                                    <section
                                        id="faqs"
                                        className="mb-16 scroll-mt-24"
                                        // ref={(el) => sectionRefs.current['faqs'] = el}
                                    >
                                        <h3 className="text-2xl font-bold mb-6">الأسئلة الشائعة</h3>
                                        <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6">
                                                {activeService.faqs.map((faq: { question: string; answer: string }, index) => (

                                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                                            ))}
                                        </div>
                                    </section>

                                    {/* معرض أعمالنا */}
                                    {/* <section
                                        id="gallery"
                                        className="mb-16 scroll-mt-24"
                                        // ref={(el) => sectionRefs.current['gallery'] = el}
                                    >
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-2xl font-bold">معرض أعمالنا</h3>
                                            <div className="flex space-x-2">
                                                <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                                                    <FaArrowLeft />
                                                </button>
                                                <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {activeService.gallery.map((project, index) => (

                                                <ProjectCard
                                                    key={project.id}
                                                    title={project.title}
                                                    category={project.category}
                                                    color={activeService.color}
                                                    image={project.image}
                                                />
                                            ))}
                                        </div>
                                    </section> */}

                                    {/* آراء العملاء */}
                                    {/* <section
                                        id="testimonials"
                                        className="scroll-mt-24"
                                        ref={(el) => sectionRefs.current['testimonials'] = el}
                                    >
                                        <h3 className="text-2xl font-bold mb-6">آراء العملاء</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {testimonials.map((testimonial) => (
                                                <TestimonialCard key={testimonial.id} {...testimonial} />
                                            ))}
                                        </div>
                                    </section> */}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* قسم العملاء */}
                {/* <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-6 text-center">عملاؤنا الثقة</h2>
                    <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-center">
                        نفتخر بشراكتنا مع أبرز العلامات التجارية في المنطقة
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="bg-gray-800 p-6 rounded-xl flex items-center justify-center h-32"
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                            </motion.div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
}