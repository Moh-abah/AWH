// constants/services.ts
// import { ReactNode } from 'react';
// import { IconType } from 'react-icons';
// import {
//     FaRocket,
//     FaMobileAlt,
//     FaStore,
//     FaSearch,
//     FaBrain,
//     FaServer,
//     FaBullhorn,
//     FaPalette,
//     FaEdit,
//     FaUserCircle,
// } from 'react-icons/fa';

// export interface Service {
//     id: any;
//     color: any;
    
//     overview: ReactNode;
//     features: any;
//     process: any;
//     faqs: any;
//     slug: string;
//     title: string;
//     description: string;
//     Icon: IconType;
//     iconColorClass: `text-${string}-${number}`;
// }

// export const services: Service[] = [
//     {
//         slug: 'website-development',
//         title: 'تطوير المواقع',
//         description: 'مواقع ديناميكية وتجارية متكاملة.',
//         Icon: FaRocket,
//         iconColorClass: 'text-blue-600',
//         id: 'web-dev-01',
//         color: 'blue',
        
//         overview: 'نقدم حلولاً متكاملة لتصميم وتطوير المواقع الإلكترونية التي تلبي احتياجات عملك، بدءًا من المواقع الشخصية البسيطة وحتى المتاجر الإلكترونية المعقدة. نستخدم أحدث التقنيات لضمان سرعة وأمان وجودة عالية.',
//         features: [
//             'تصميم وتطوير مواقع متجاوبة مع جميع الأجهزة',
//             'تحسين محركات البحث (SEO)',
//             'ربط مع وسائل الدفع الإلكتروني',
//             'لوحة تحكم سهلة الاستخدام',
//             'تحديثات وصيانة مستمرة'
//         ],
//         process: [
//             { step: 1, title: 'التحليل والتخطيط', description: 'نفهم متطلباتك ونضع خطة عمل' },
//             { step: 2, title: 'التصميم', description: 'نصمم واجهات جذابة وسهلة الاستخدام' },
//             { step: 3, title: 'التطوير', description: 'نبني الموقع باستخدام أفضل الممارسات' },
//             { step: 4, title: 'الاختبار', description: 'نختبر الموقع للتأكد من جودته' },
//             { step: 5, title: 'الإطلاق والدعم', description: 'نطلق الموقع ونقدم الدعم المستمر' }
//         ],
//         faqs: [
//             { question: 'كم تستغرق عملية تطوير موقع؟', answer: 'تختلف المدة حسب تعقيد الموقع، لكنها تتراوح بين 2 إلى 8 أسابيع.' },
//             { question: 'هل تدعمون التعديلات بعد التسليم؟', answer: 'نعم، نقدم فترة دعم مجانية بعد التسليم.' },
//             { question: 'ما التقنيات التي تستخدمونها؟', answer: 'نستخدم تقنيات حديثة مثل React, Next.js, Node.js, وغيرها.' }
//         ]
//     },
//     {
//         slug: 'android-apps',
//         title: 'تطبيقات أندرويد',
//         description: 'تطبيقات أصلية بأداء عالي.',
//         Icon: FaMobileAlt,
//         iconColorClass: 'text-indigo-600',
//         id: 'android-02',
//         color: 'indigo',
       
//         overview: 'نطور تطبيقات أندرويد مخصصة تلبي احتياجات عملك وتوفر تجربة مستخدم ممتازة. نركز على الأداء والجودة والأمان.',
//         features: [
//             'تطوير تطبيقات أصلية (Native) باستخدام Kotlin وJava',
//             'تطبيقات هجينة (Hybrid) باستخدام Flutter أو React Native',
//             'تكامل مع الخدمات السحابية',
//             'اختبارات شاملة للتطبيق',
//             'نشر التطبيق على متجر جوجل'
//         ],
//         process: [
//             { step: 1, title: 'دراسة المتطلبات', description: 'نحدد أهداف التطبيق ووظائفه' },
//             { step: 2, title: 'تصميم واجهات المستخدم', description: 'نصمم تجربة مستخدم جذابة وسهلة' },
//             { step: 3, title: 'التطوير والبرمجة', description: 'نطور التطبيق بجودة عالية' },
//             { step: 4, title: 'الاختبار والتجربة', description: 'نختبر التطبيق على أجهزة مختلفة' },
//             { step: 5, title: 'النشر والصيانة', description: 'ننشر التطبيق ونوفر تحديثات مستمرة' }
//         ],
//         faqs: [
//             { question: 'كم تكلفة تطوير تطبيق أندرويد؟', answer: 'التكلفة تعتمد على تعقيد التطبيق والميزات المطلوبة.' },
//             { question: 'هل يمكن تطوير التطبيق لنظام iOS أيضًا؟', answer: 'نعم، يمكننا تطوير التطبيق لنظام iOS باستخدام تقنيات الهجين أو التطوير الأصلي.' }
//         ]
//     },
//     {
//         slug: 'ecommerce-stores',
//         title: 'متاجر الكترونية',
//         description: 'متاجر ذات سلة ومدفوعات تلقائية.',
//         Icon: FaStore,
//         iconColorClass: 'text-pink-600',
//         id: 'ecommerce-03',
//         color: 'pink',
//         // icon: <FaStore className="text-3xl" />,
//         overview: 'نصمم ونطور متاجر إلكترونية متكاملة مع أنظمة الدفع والشحن، لتحويل زوارك إلى عملاء.',
//         features: [
//             'تطوير متجر باستخدام WooCommerce أو Shopify أو Magento',
//             'تكامل مع بوابات الدفع (مثل PayPal, Stripe, مدى)',
//             'إدارة المخزون والطلبات',
//             'تصميم سهل الاستخدام وجذاب',
//             'تحسين تجربة المستخدم لزيادة المبيعات'
//         ],
//         process: [
//             { step: 1, title: 'تحديد المنتجات والمتطلبات', description: 'نحدد معًا المنتجات والميزات المطلوبة' },
//             { step: 2, title: 'تصميم المتجر', description: 'نصمم واجهات المتجر بما يتناسب مع هويتك' },
//             { step: 3, title: 'تطوير المتجر', description: 'نطور المتجر بكافة ميزاته' },
//             { step: 4, title: 'إعداد طرق الدفع والشحن', description: 'نربط المتجر بطرق الدفع والشحن' },
//             { step: 5, title: 'الإطلاق والتسويق', description: 'نطلق المتجر ونسوق له' }
//         ],
//         faqs: [
//             { question: 'ما هي منصة المتجر التي تنصحون بها؟', answer: 'نختار المنصة بناءً على حجم المتجر واحتياجاته، مثل WooCommerce للمتاجر الصغيرة والمتوسطة وMagento للمتاجر الكبيرة.' },
//             { question: 'هل تدعمون المتاجر متعددة اللغات؟', answer: 'نعم، يمكننا تطوير متاجر تدعم عدة لغات.' }
//         ]
//     },
//     {
//         slug: 'digital-marketing',
//         title: 'التسويق الرقمي',
//         description: 'تحسين ظهورك في محركات البحث.',
//         Icon: FaSearch,
//         iconColorClass: 'text-amber-600',
//         id: 'marketing-04',
//         color: 'amber',
//         // icon: <FaSearch className="text-3xl" />,
//         overview: 'نطور استراتيجيات تسويق رقمي فعالة لزيادة ظهور علامتك التجارية وجذب العملاء المحتملين.',
//         features: [
//             'تحسين محركات البحث (SEO)',
//             'التسويق عبر محركات البحث (SEM)',
//             'التسويق عبر وسائل التواصل الاجتماعي',
//             'إدارة الحملات الإعلانية',
//             'تحليل النتائج وتقارير الأداء'
//         ],
//         process: [
//             { step: 1, title: 'تحليل السوق والمنافسين', description: 'نحلل السوق والمنافسين لفهم البيئة' },
//             { step: 2, title: 'تطوير استراتيجية التسويق', description: 'نضع خطة تسويقية شاملة' },
//             { step: 3, title: 'تنفيذ الحملات', description: 'ننفذ الحملات على القنوات المناسبة' },
//             { step: 4, title: 'المراقبة والتحسين', description: 'نراقب النتائج ونحسن الحملات' },
//             { step: 5, title: 'تقارير الأداء', description: 'نقدم تقارير دورية عن النتائج' }
//         ],
//         faqs: [
//             { question: 'كم من الوقت يستغرق ظهور نتائج SEO؟', answer: 'عادةً من 3 إلى 6 أشهر لظهور نتائج ملموسة.' },
//             { question: 'ما الفرق بين SEO و SEM؟', answer: 'SEO هو تحسين ظهورك الطبيعي في نتائج البحث، بينما SEM يشمل الإعلانات المدفوعة.' }
//         ]
//     },
//     {
//         slug: 'social-media-management',
//         title: 'إدارة السوشيال ميديا',
//         description: 'من الإطلاق إلى الوصول لجمهور واسع وعلامة تجارية معروفة.',
//         Icon: FaBullhorn,
//         iconColorClass: 'text-cyan-600',
//         id: 'social-media-05',
//         color: 'cyan',
//         // icon: <FaBullhorn className="text-3xl" />,
//         overview: 'ندير حساباتك على وسائل التواصل الاجتماعي لنشر محتوى جذاب وزيادة التفاعل وبناء مجتمع حول علامتك التجارية.',
//         features: [
//             'إنشاء استراتيجية محتوى',
//             'تصميم ونشر محتوى يومي',
//             'إدارة التفاعل مع المتابعين',
//             'إعلانات وسائل التواصل الاجتماعي',
//             'تحليل الأداء والتقارير'
//         ],
//         process: [
//             { step: 1, title: 'تحليل الحساب والأهداف', description: 'نحدد أهدافك ونحلل أداءك الحالي' },
//             { step: 2, title: 'تخطيط المحتوى', description: 'نخطط للمحتوى المناسب لجمهورك' },
//             { step: 3, title: 'إنشاء المحتوى', description: 'نصمم وننتج محتوى جذاب' },
//             { step: 4, title: 'النشر والتفاعل', description: 'ننشر المحتوى ونتفاعل مع المتابعين' },
//             { step: 5, title: 'التحليل والتطوير', description: 'نحلل النتائج ونطور الاستراتيجية' }
//         ],
//         faqs: [
//             { question: 'كم مرة تنشرون في اليوم؟', answer: 'حسب المنصة، عادةً من 1 إلى 3 منشورات في اليوم.' },
//             { question: 'هل تنشرون نفس المحتوى على جميع المنصات؟', answer: 'لا، نعدل المحتوى ليناسب كل منصة وجمهورها.' }
//         ]
//     },
//     {
//         slug: 'branding-and-graphics',
//         title: 'تصميم هويات بصرية وبنرات',
//         description: 'تصميم جذاب يميزك عن الجميع.',
//         Icon: FaPalette,
//         iconColorClass: 'text-orange-600',
//         id: 'branding-06',
//         color: 'orange',
//         // icon: <FaPalette className="text-3xl" />,
//         overview: 'نصمم هوية بصرية متكاملة لعلامتك التجارية تعكس قيمك وتميزك في السوق.',
//         features: [
//             'تصميم شعار احترافي',
//             'دليل الهوية البصرية',
//             'تصميم بطاقات العمل والمراسلات',
//             'تصميم البنرات والمواد التسويقية',
//             'تصميم العبوات والتغليف'
//         ],
//         process: [
//             { step: 1, title: 'اكتشاف العلامة التجارية', description: 'نفهم قيم علامتك التجارية وجمهورك' },
//             { step: 2, title: 'التصميم الأولي', description: 'نقدم أفكارًا أولية للشعار والهوية' },
//             { step: 3, title: 'تطوير التصاميم', description: 'نطور التصاميم بناءً على ملاحظاتك' },
//             { step: 4, title: 'تسليم الملفات', description: 'نسلم جميع الملفات بجودة عالية' },
//             { step: 5, title: 'الدعم', description: 'نقدم دعمًا لاستخدام التصاميم' }
//         ],
//         faqs: [
//             { question: 'كم عدد التعديلات المسموحة؟', answer: 'نسمح بـ 3 تعديلات في كل مرحلة تصميم.' },
//             { question: 'هل تقدمون ملفات مفتوحة المصدر؟', answer: 'نعم، نسلم الملفات الأصلية المفتوحة.' }
//         ]
//     },
//     {
//         slug: 'content-marketing',
//         title: 'تسويق وإدارة محتوى',
//         description: 'إنتاج وتنسيق المحتوى الرقمي.',
//         Icon: FaEdit,
//         iconColorClass: 'text-yellow-600',
//         id: 'content-07',
//         color: 'yellow',
//         // icon: <FaEdit className="text-3xl" />,
//         overview: 'ننتج محتوى عالي الجودة لجذب جمهورك وزيادة الثقة بعلامتك التجارية وتحويل الزوار إلى عملاء.',
//         features: [
//             'استراتيجية محتوى',
//             'كتابة المقالات والمدونات',
//             'إنتاج الفيديوهات والإنفوجرافيك',
//             'إدارة المدونات وقنوات اليوتيوب',
//             'تحليل أداء المحتوى'
//         ],
//         process: [
//             { step: 1, title: 'تحديد الجمهور والأهداف', description: 'نحدد جمهورك المستهدف وأهداف المحتوى' },
//             { step: 2, title: 'تخطيط المحتوى', description: 'نخطط للمواضيع والأشكال المناسبة' },
//             { step: 3, title: 'إنشاء المحتوى', description: 'ننتج محتوى أصلي وجذاب' },
//             { step: 4, title: 'النشر والتوزيع', description: 'ننشر المحتوى على القنوات المناسبة' },
//             { step: 5, title: 'القياس والتحسين', description: 'نقيس النتائج ونحسن الاستراتيجية' }
//         ],
//         faqs: [
//             { question: 'هل تكتبون محتوى بلغات أخرى؟', answer: 'نعم، نكتب محتوى بالعربية والإنجليزية.' },
//             { question: 'كم عدد المقالات التي يمكنكم كتابتها شهريًا؟', answer: 'حسب احتياجاتك، من 4 إلى 20 مقالًا في الشهر.' }
//         ]
//     },
//     {
//         slug: 'ux-design',
//         title: 'تصميم تجربة المستخدم',
//         description: 'واجهات جذابة وتفاعلية.',
//         Icon: FaUserCircle,
//         iconColorClass: 'text-teal-600',
//         id: 'ux-08',
//         color: 'teal',
//         // icon: FaUserCircle,
//         overview: 'نصمم تجارب مستخدم متميزة لمنتجاتك الرقمية لضمان سهولة الاستخدام ورضا العملاء.',
//         features: [
//             'بحث المستخدم',
//             'تخطيط تجربة المستخدم',
//             'تصميم واجهات المستخدم (UI)',
//             'إنشاء النماذج الأولية التفاعلية',
//             'اختبارات سهولة الاستخدام'
//         ],
//         process: [
//             { step: 1, title: 'بحث وفهم', description: 'نفهم المستخدمين واحتياجاتهم' },
//             { step: 2, title: 'تخطيط الهيكل', description: 'نخطط لهيكل المنتج وتدفق المستخدم' },
//             { step: 3, title: 'تصميم الواجهات', description: 'نصمم واجهات جذابة وسهلة الاستخدام' },
//             { step: 4, title: 'اختبار النموذج', description: 'نختبر النموذج مع المستخدمين' },
//             { step: 5, title: 'التسليم والمتابعة', description: 'نسلم التصاميم وندعم التطوير' }
//         ],
//         faqs: [
//             { question: 'ما الفرق بين UI و UX؟', answer: 'UX (تجربة المستخدم) تركز على رحلة المستخدم ومشاعره، بينما UI (واجهة المستخدم) تركز على الشكل والمظهر.' },
//             { question: 'هل تصممون واجهات للتطبيقات والمواقع؟', answer: 'نعم، نصمم واجهات لكل المنتجات الرقمية.' }
//         ]
//     },
// ];

// // Utility type for slug values
// export type ServiceSlug = (typeof services)[number]['slug'];



// constants/services.ts



import type { ReactNode } from "react"
import type { IconType } from "react-icons"
import { FaRocket, FaMobileAlt, FaStore, FaSearch, FaBullhorn, FaPalette, FaEdit, FaUserCircle } from "react-icons/fa"

export interface Service {
    id: any
    color: any

    overview: ReactNode
    features: any
    process: any
    faqs: any
    slug: string
    title: string
    description: string
    Icon: IconType
    iconColorClass: `text-${string}-${number}`
}

export const services: Service[] = [
    {
        slug: "website-development",
        title: "تطوير المواقع",
        description: "مواقع ديناميكية وتجارية متكاملة.",
        Icon: FaRocket,
        iconColorClass: "text-blue-600",
        id: "web-dev-01",
        color: "blue",

        overview:
            "نقدم حلولاً متكاملة لتصميم وتطوير المواقع الإلكترونية التي تلبي احتياجات عملك، بدءًا من المواقع الشخصية البسيطة وحتى المتاجر الإلكترونية المعقدة. نستخدم أحدث التقنيات لضمان سرعة وأمان وجودة عالية.",
        features: [
            "تصميم وتطوير مواقع متجاوبة مع جميع الأجهزة",
            "تحسين محركات البحث (SEO)",
            "ربط مع وسائل الدفع الإلكتروني",
            "لوحة تحكم سهلة الاستخدام",
            "تحديثات وصيانة مستمرة",
        ],
        process: [
            { step: 1, title: "التحليل والتخطيط", description: "نفهم متطلباتك ونضع خطة عمل" },
            { step: 2, title: "التصميم", description: "نصمم واجهات جذابة وسهلة الاستخدام" },
            { step: 3, title: "التطوير", description: "نبني الموقع باستخدام أفضل الممارسات" },
            { step: 4, title: "الاختبار", description: "نختبر الموقع للتأكد من جودته" },
            { step: 5, title: "الإطلاق والدعم", description: "نطلق الموقع ونقدم الدعم المستمر" },
        ],
        faqs: [
            {
                question: "كم تستغرق عملية تطوير موقع؟",
                answer: "تختلف المدة حسب تعقيد الموقع، لكنها تتراوح بين 2 إلى 8 أسابيع.",
            },
            { question: "هل تدعمون التعديلات بعد التسليم؟", answer: "نعم، نقدم فترة دعم مجانية بعد التسليم." },
            { question: "ما التقنيات التي تستخدمونها؟", answer: "نستخدم تقنيات حديثة مثل React, Next.js, Node.js, وغيرها." },
        ],
    },
    {
        slug: "android-apps",
        title: "تطبيقات أندرويد",
        description: "تطبيقات أصلية بأداء عالي.",
        Icon: FaMobileAlt,
        iconColorClass: "text-indigo-600",
        id: "android-02",
        color: "indigo",

        overview:
            "نطور تطبيقات أندرويد مخصصة تلبي احتياجات عملك وتوفر تجربة مستخدم ممتازة. نركز على الأداء والجودة والأمان.",
        features: [
            "تطوير تطبيقات أصلية (Native) باستخدام Kotlin وJava",
            "تطبيقات هجينة (Hybrid) باستخدام Flutter أو React Native",
            "تكامل مع الخدمات السحابية",
            "اختبارات شاملة للتطبيق",
            "نشر التطبيق على متجر جوجل",
        ],
        process: [
            { step: 1, title: "دراسة المتطلبات", description: "نحدد أهداف التطبيق ووظائفه" },
            { step: 2, title: "تصميم واجهات المستخدم", description: "نصمم تجربة مستخدم جذابة وسهلة" },
            { step: 3, title: "التطوير والبرمجة", description: "نطور التطبيق بجودة عالية" },
            { step: 4, title: "الاختبار والتجربة", description: "نختبر التطبيق على أجهزة مختلفة" },
            { step: 5, title: "النشر والصيانة", description: "ننشر التطبيق ونوفر تحديثات مستمرة" },
        ],
        faqs: [
            { question: "كم تكلفة تطوير تطبيق أندرويد؟", answer: "التكلفة تعتمد على تعقيد التطبيق والميزات المطلوبة." },
            {
                question: "هل يمكن تطوير التطبيق لنظام iOS أيضًا؟",
                answer: "نعم، يمكننا تطوير التطبيق لنظام iOS باستخدام تقنيات الهجين أو التطوير الأصلي.",
            },
        ],
    },
    {
        slug: "ecommerce-stores",
        title: "متاجر الكترونية",
        description: "متاجر ذات سلة ومدفوعات تلقائية.",
        Icon: FaStore,
        iconColorClass: "text-pink-600",
        id: "ecommerce-03",
        color: "pink",
        // icon: <FaStore className="text-3xl" />,
        overview: "نصمم ونطور متاجر إلكترونية متكاملة مع أنظمة الدفع والشحن، لتحويل زوارك إلى عملاء.",
        features: [
            "تطوير متجر باستخدام WooCommerce أو Shopify أو Magento",
            "تكامل مع بوابات الدفع (مثل PayPal, Stripe, مدى)",
            "إدارة المخزون والطلبات",
            "تصميم سهل الاستخدام وجذاب",
            "تحسين تجربة المستخدم لزيادة المبيعات",
        ],
        process: [
            { step: 1, title: "تحديد المنتجات والمتطلبات", description: "نحدد معًا المنتجات والميزات المطلوبة" },
            { step: 2, title: "تصميم المتجر", description: "نصمم واجهات المتجر بما يتناسب مع هويتك" },
            { step: 3, title: "تطوير المتجر", description: "نطور المتجر بكافة ميزاته" },
            { step: 4, title: "إعداد طرق الدفع والشحن", description: "نربط المتجر بطرق الدفع والشحن" },
            { step: 5, title: "الإطلاق والتسويق", description: "نطلق المتجر ونسوق له" },
        ],
        faqs: [
            {
                question: "ما هي منصة المتجر التي تنصحون بها؟",
                answer:
                    "نختار المنصة بناءً على حجم المتجر واحتياجاته، مثل WooCommerce للمتاجر الصغيرة والمتوسطة وMagento للمتاجر الكبيرة.",
            },
            { question: "هل تدعمون المتاجر متعددة اللغات؟", answer: "نعم، يمكننا تطوير متاجر تدعم عدة لغات." },
        ],
    },
    {
        slug: "digital-marketing",
        title: "التسويق الرقمي",
        description: "تحسين ظهورك في محركات البحث.",
        Icon: FaSearch,
        iconColorClass: "text-amber-600",
        id: "marketing-04",
        color: "amber",
        // icon: <FaSearch className="text-3xl" />,
        overview: "نطور استراتيجيات تسويق رقمي فعالة لزيادة ظهور علامتك التجارية وجذب العملاء المحتملين.",
        features: [
            "تحسين محركات البحث (SEO)",
            "التسويق عبر محركات البحث (SEM)",
            "التسويق عبر وسائل التواصل الاجتماعي",
            "إدارة الحملات الإعلانية",
            "تحليل النتائج وتقارير الأداء",
        ],
        process: [
            { step: 1, title: "تحليل السوق والمنافسين", description: "نحلل السوق والمنافسين لفهم البيئة" },
            { step: 2, title: "تطوير استراتيجية التسويق", description: "نضع خطة تسويقية شاملة" },
            { step: 3, title: "تنفيذ الحملات", description: "ننفذ الحملات على القنوات المناسبة" },
            { step: 4, title: "المراقبة والتحسين", description: "نراقب النتائج ونحسن الحملات" },
            { step: 5, title: "تقارير الأداء", description: "نقدم تقارير دورية عن النتائج" },
        ],
        faqs: [
            { question: "كم من الوقت يستغرق ظهور نتائج SEO؟", answer: "عادةً من 3 إلى 6 أشهر لظهور نتائج ملموسة." },
            {
                question: "ما الفرق بين SEO و SEM؟",
                answer: "SEO هو تحسين ظهورك الطبيعي في نتائج البحث، بينما SEM يشمل الإعلانات المدفوعة.",
            },
        ],
    },
    {
        slug: "social-media-management",
        title: "إدارة السوشيال ميديا",
        description: "من الإطلاق إلى الوصول لجمهور واسع وعلامة تجارية معروفة.",
        Icon: FaBullhorn,
        iconColorClass: "text-cyan-600",
        id: "social-media-05",
        color: "cyan",
        // icon: <FaBullhorn className="text-3xl" />,
        overview:
            "ندير حساباتك على وسائل التواصل الاجتماعي لنشر محتوى جذاب وزيادة التفاعل وبناء مجتمع حول علامتك التجارية.",
        features: [
            "إنشاء استراتيجية محتوى",
            "تصميم ونشر محتوى يومي",
            "إدارة التفاعل مع المتابعين",
            "إعلانات وسائل التواصل الاجتماعي",
            "تحليل الأداء والتقارير",
        ],
        process: [
            { step: 1, title: "تحليل الحساب والأهداف", description: "نحدد أهدافك ونحلل أداءك الحالي" },
            { step: 2, title: "تخطيط المحتوى", description: "نخطط للمحتوى المناسب لجمهورك" },
            { step: 3, title: "إنشاء المحتوى", description: "نصمم وننتج محتوى جذاب" },
            { step: 4, title: "النشر والتفاعل", description: "ننشر المحتوى ونتفاعل مع المتابعين" },
            { step: 5, title: "التحليل والتطوير", description: "نحلل النتائج ونطور الاستراتيجية" },
        ],
        faqs: [
            { question: "كم مرة تنشرون في اليوم؟", answer: "حسب المنصة، عادةً من 1 إلى 3 منشورات في اليوم." },
            { question: "هل تنشرون نفس المحتوى على جميع المنصات؟", answer: "لا، نعدل المحتوى ليناسب كل منصة وجمهورها." },
        ],
    },
    {
        slug: "branding-and-graphics",
        title: "تصميم هويات بصرية وبنرات",
        description: "تصميم جذاب يميزك عن الجميع.",
        Icon: FaPalette,
        iconColorClass: "text-orange-600",
        id: "branding-06",
        color: "orange",
        // icon: <FaPalette className="text-3xl" />,
        overview: "نصمم هوية بصرية متكاملة لعلامتك التجارية تعكس قيمك وتميزك في السوق.",
        features: [
            "تصميم شعار احترافي",
            "دليل الهوية البصرية",
            "تصميم بطاقات العمل والمراسلات",
            "تصميم البنرات والمواد التسويقية",
            "تصميم العبوات والتغليف",
        ],
        process: [
            { step: 1, title: "اكتشاف العلامة التجارية", description: "نفهم قيم علامتك التجارية وجمهورك" },
            { step: 2, title: "التصميم الأولي", description: "نقدم أفكارًا أولية للشعار والهوية" },
            { step: 3, title: "تطوير التصاميم", description: "نطور التصاميم بناءً على ملاحظاتك" },
            { step: 4, title: "تسليم الملفات", description: "نسلم جميع الملفات بجودة عالية" },
            { step: 5, title: "الدعم", description: "نقدم دعمًا لاستخدام التصاميم" },
        ],
        faqs: [
            { question: "كم عدد التعديلات المسموحة؟", answer: "نسمح بـ 3 تعديلات في كل مرحلة تصميم." },
            { question: "هل تقدمون ملفات مفتوحة المصدر؟", answer: "نعم، نسلم الملفات الأصلية المفتوحة." },
        ],
    },
    {
        slug: "content-marketing",
        title: "تسويق وإدارة محتوى",
        description: "إنتاج وتنسيق المحتوى الرقمي.",
        Icon: FaEdit,
        iconColorClass: "text-yellow-600",
        id: "content-07",
        color: "yellow",
        // icon: <FaEdit className="text-3xl" />,
        overview: "ننتج محتوى عالي الجودة لجذب جمهورك وزيادة الثقة بعلامتك التجارية وتحويل الزوار إلى عملاء.",
        features: [
            "استراتيجية محتوى",
            "كتابة المقالات والمدونات",
            "إنتاج الفيديوهات والإنفوجرافيك",
            "إدارة المدونات وقنوات اليوتيوب",
            "تحليل أداء المحتوى",
        ],
        process: [
            { step: 1, title: "تحديد الجمهور والأهداف", description: "نحدد جمهورك المستهدف وأهداف المحتوى" },
            { step: 2, title: "تخطيط المحتوى", description: "نخطط للمواضيع والأشكال المناسبة" },
            { step: 3, title: "إنشاء المحتوى", description: "ننتج محتوى أصلي وجذاب" },
            { step: 4, title: "النشر والتوزيع", description: "ننشر المحتوى على القنوات المناسبة" },
            { step: 5, title: "القياس والتحسين", description: "نقيس النتائج ونحسن الاستراتيجية" },
        ],
        faqs: [
            { question: "هل تكتبون محتوى بلغات أخرى؟", answer: "نعم، نكتب محتوى بالعربية والإنجليزية." },
            { question: "كم عدد المقالات التي يمكنكم كتابتها شهريًا؟", answer: "حسب احتياجاتك، من 4 إلى 20 مقالًا في الشهر." },
        ],
    },
    {
        slug: "ux-design",
        title: "تصميم تجربة المستخدم",
        description: "واجهات جذابة وتفاعلية.",
        Icon: FaUserCircle,
        iconColorClass: "text-teal-600",
        id: "ux-08",
        color: "teal",
        // icon: FaUserCircle,
        overview: "نصمم تجارب مستخدم متميزة لمنتجاتك الرقمية لضمان سهولة الاستخدام ورضا العملاء.",
        features: [
            "بحث المستخدم",
            "تخطيط تجربة المستخدم",
            "تصميم واجهات المستخدم (UI)",
            "إنشاء النماذج الأولية التفاعلية",
            "اختبارات سهولة الاستخدام",
        ],
        process: [
            { step: 1, title: "بحث وفهم", description: "نفهم المستخدمين واحتياجاتهم" },
            { step: 2, title: "تخطيط الهيكل", description: "نخطط لهيكل المنتج وتدفق المستخدم" },
            { step: 3, title: "تصميم الواجهات", description: "نصمم واجهات جذابة وسهلة الاستخدام" },
            { step: 4, title: "اختبار النموذج", description: "نختبر النموذج مع المستخدمين" },
            { step: 5, title: "التسليم والمتابعة", description: "نسلم التصاميم وندعم التطوير" },
        ],
        faqs: [
            {
                question: "ما الفرق بين UI و UX؟",
                answer: "UX (تجربة المستخدم) تركز على رحلة المستخدم ومشاعره، بينما UI (واجهة المستخدم) تركز على الشكل والمظهر.",
            },
            { question: "هل تصممون واجهات للتطبيقات والمواقع؟", answer: "نعم، نصمم واجهات لكل المنتجات الرقمية." },
        ],
    },
]


// constants/services.ts
// import { IconType } from 'react-icons';
// import {
//     FaRocket,
//     FaMobileAlt,
//     FaStore,
//     FaSearch,
//     FaBrain,
//     FaServer,
//     FaBullhorn,
//     FaPalette,
//     FaEdit,
//     FaUserCircle,
// } from 'react-icons/fa';

// export interface Service {
//     id: any;
//     color: any;
//     icon: ReactNode;
//     overview: ReactNode;
//     features: any;
//     process: any;
//     faqs: any;
//     slug: string;
//     title: string;
//     description: string;
//     Icon: IconType;
//     iconColorClass: `text-${string}-${number}`;
// }

// export const services: Service[] = [
//     {
//         slug: 'website-development',
//         title: 'تطوير المواقع',
//         description: 'مواقع ديناميكية وتجارية متكاملة.',
//         Icon: FaRocket,
//         iconColorClass: 'text-blue-600',
//         id: undefined,
//         color: undefined,
//         icon: undefined,
//         overview: undefined,
//         features: undefined,
//         process: undefined,
//         faqs: undefined
//     },
//     {
//         slug: 'android-apps',
//         title: 'تطبيقات أندرويد',
//         description: 'تطبيقات أصلية بأداء عالي.',
//         Icon: FaMobileAlt,
//         iconColorClass: 'text-indigo-600',
//         id: undefined,
//         color: undefined,
//         icon: undefined,
//         overview: undefined,
//         features: undefined,
//         process: undefined,
//         faqs: undefined
//     },
//     {
//         slug: 'ecommerce-stores',
//         title: 'متاجر الكترونية',
//         description: 'متاجر ذات سلة ومدفوعات تلقائية.',
//         Icon: FaStore,
//         iconColorClass: 'text-pink-600',
//         id: undefined,
//         color: undefined,
//         icon: undefined,
//         overview: undefined,
//         features: undefined,
//         process: undefined,
//         faqs: undefined
//     },
//     {
//         slug: 'digital-marketing',
//         title: 'التسويق الرقمي',
//         description: 'تحسين ظهورك في محركات البحث.',
//         Icon: FaSearch,
//         iconColorClass: 'text-amber-600',
//         id: undefined,
//         color: undefined,
//         icon: undefined,
//         overview: undefined,
//         features: undefined,
//         process: undefined,
//         faqs: undefined
//     },
    
//     {
//         slug: 'social-media-management',
//         title: 'إدارة السوشيال ميديا',
//         description: 'من الإطلاق إلى الوصول لجمهور واسع وعلامة تجارية معروفة.',
//         Icon: FaBullhorn,
//         iconColorClass: 'text-cyan-600',
//         id: undefined,
//         color: undefined,
//         icon: undefined,
//         overview: undefined,
//         features: undefined,
//         process: undefined,
//         faqs: undefined
//     },
//     {
//         slug: 'branding-and-graphics',
//         title: 'تصميم هويات بصرية وبنرات',
//         description: 'تصميم جذاب يميزك عن الجميع.',
//         Icon: FaPalette,
//         iconColorClass: 'text-orange-600',
//         id: undefined,
//         color: undefined,
//         icon: undefined,
//         overview: undefined,
//         features: undefined,
//         process: undefined,
//         faqs: undefined
//     },
//     {
//         slug: 'content-marketing',
//         title: 'تسويق وإدارة محتوى',
//         description: 'إنتاج وتنسيق المحتوى الرقمي.',
//         Icon: FaEdit,
//         iconColorClass: 'text-yellow-600',
//         id: undefined,
//         color: undefined,
//         icon: undefined,
//         overview: undefined,
//         features: undefined,
//         process: undefined,
//         faqs: undefined
//     },
//     {
//         slug: 'ux-design',
//         title: 'تصميم تجربة المستخدم',
//         description: 'واجهات جذابة وتفاعلية.',
//         Icon: FaUserCircle,
//         iconColorClass: 'text-teal-600',
//         id: undefined,
//         color: undefined,
//         icon: undefined,
//         overview: undefined,
//         features: undefined,
//         process: undefined,
//         faqs: undefined
//     },
// ];

// // Utility type for slug values
// export type ServiceSlug = (typeof services)[number]['slug'];







// // constants/services.ts
// import { IconType } from 'react-icons';
// import {
//     FaRocket,
//     FaMobileAlt,
//     FaStore,
//     FaSearch,
//     FaBrain,
//     FaServer,
//     FaBullhorn,
//     FaPalette,
//     FaEdit,
//     FaUserCircle,
// } from 'react-icons/fa';

// export interface Service {
//     id: any;
//     color: any;
//     icon: ReactNode;
//     overview: ReactNode;
//     features: any;
//     process: any;
//     faqs: any;
//     slug: string;
//     title: string;
//     description: string;
//     Icon: IconType;
//     iconColorClass: `text-${string}-${number}`;
// }

// export const services: Service[] = [
//     {
//         slug: 'website-development',
//         title: 'تطوير المواقع',
//         description: 'مواقع ديناميكية وتجارية متكاملة.',
//         Icon: FaRocket,
//         iconColorClass: 'text-blue-600',
//     },
//     {
//         slug: 'android-apps',
//         title: 'تطبيقات أندرويد',
//         description: 'تطبيقات أصلية بأداء عالي.',
//         Icon: FaMobileAlt,
//         iconColorClass: 'text-indigo-600',
//     },
//     {
//         slug: 'ecommerce-stores',
//         title: 'متاجر الكترونية',
//         description: 'متاجر ذات سلة ومدفوعات تلقائية.',
//         Icon: FaStore,
//         iconColorClass: 'text-pink-600',
//     },
//     {
//         slug: 'digital-marketing',
//         title: 'التسويق الرقمي',
//         description: 'تحسين ظهورك في محركات البحث.',
//         Icon: FaSearch,
//         iconColorClass: 'text-amber-600',
//     },

//     {
//         slug: 'social-media-management',
//         title: 'إدارة السوشيال ميديا',
//         description: 'من الإطلاق إلى الوصول لجمهور واسع وعلامة تجارية معروفة.',
//         Icon: FaBullhorn,
//         iconColorClass: 'text-cyan-600',
//     },
//     {
//         slug: 'branding-and-graphics',
//         title: 'تصميم هويات بصرية وبنرات',
//         description: 'تصميم جذاب يميزك عن الجميع.',
//         Icon: FaPalette,
//         iconColorClass: 'text-orange-600',
//     },
//     {
//         slug: 'content-marketing',
//         title: 'تسويق وإدارة محتوى',
//         description: 'إنتاج وتنسيق المحتوى الرقمي.',
//         Icon: FaEdit,
//         iconColorClass: 'text-yellow-600',
//     },
//     {
//         slug: 'ux-design',
//         title: 'تصميم تجربة المستخدم',
//         description: 'واجهات جذابة وتفاعلية.',
//         Icon: FaUserCircle,
//         iconColorClass: 'text-teal-600',
//     },
// ];

// // Utility type for slug values
// export type ServiceSlug = (typeof services)[number]['slug'];