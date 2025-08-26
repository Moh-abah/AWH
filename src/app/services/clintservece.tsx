// app/services/page.tsx
'use client';

import { useState, useEffect, useRef, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaLaptopCode, FaMobileAlt, FaChartLine, FaPalette,
    FaServer, FaShieldAlt, FaLightbulb, FaChevronDown,
    FaArrowRight, FaQuoteLeft, FaStar, FaPaintBrush,
    FaRocket, FaCogs, FaQuestionCircle, FaEye,
    FaProjectDiagram,
    FaChartBar,
    FaTags
} from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa6';
import Script from "next/script";

// بيانات الخدمات المحدثة
const services = [
    
        {
            id: 'web',
            title: 'تطوير مواقع الويب',
            icon: <FaLaptopCode className="text-4xl" />,
            color: 'from-blue-800 to-sky-600',
            description: 'تصميم وتطوير مواقع ويب احترافية، سريعة، وآمنة تجمع الشكل مع الوظيفة.',
            overview: 'نصمم مواقع تعكس قوة علامتك وتُحوّل الزوار إلى عملاء. ندمج الأداء العالي، الأمان، وتجربة مستخدم صلبة بالشكل الجذاب الذي يعطي ثقة ويُسرّع التحويل.',
            pricing: [
                {
                    tier: 'أساس',
                    price: '3,000 ريال',
                    includes: [
                        'موقع من 3 صفحات (الرئيسية، من نحن، تواصل)',
                        'تصميم متجاوب بسيط',
                        'تحسين أولي لـ SEO',
                        'دعم فني أسبوع واحد'
                    ]
                },
                {
                    tier: 'احترافي',
                    price: '6,000 ريال',
                    includes: [
                        'موقع ديناميكي كامل (مدونة، خدمات، لوحة إدارة بسيطة)',
                        'تصميم متجاوب مخصص',
                        'تحسين SEO متقدم',
                        'تكامل مع أدوات تحليل',
                        'دعم 1 شهر + تدريب بسيط'
                    ]
                },
                {
                    tier: 'مؤسسي',
                    price: '9,000 ريال+ حسب الاحتياج',
                    includes: [
                        'نظام ويب مخصص (بوابات عملاء، تكاملات API، التجارة الإلكترونية)',
                        'أداء عالي و CDN + أمان متعدد الطبقات',
                        'تحليلات متقدمة وتقارير',
                        'خطة صيانة ودعم مستمر'
                    ]
                }
            ],
            stats: [
                { label: 'زيادة التحويلات', value: '40%' },
                { label: 'وقت التحميل', value: '<2 ثانية' },
                { label: 'رضا العملاء', value: '91%' }
            ],
            features: [
                {
                    title: 'تصميم متجاوب',
                    description: 'مواقع تعمل بسلاسة على كل الأجهزة. تجربة مستخدم موحدة وقوية.',
                    icon: <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaMobileAlt /></div>
                },
                {
                    title: 'تحسين محركات البحث',
                    description: 'بنية وتهيئة تحسّن الظهور العضوي وتزيد الزيارات المستهدفة.',
                    icon: <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaChartLine /></div>
                },
                {
                    title: 'أمان متقدم',
                    description: 'حماية من هجمات شائعة، تشفير، وسياسات وصول محكمة.',
                    icon: <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaShieldAlt /></div>
                }
            ],
            process: [
                {
                    title: 'الاكتشاف والتخطيط',
                    description: 'نفهم هدفك، جمهورك، ونبني خارطة طريق واضحة.'
                },
                {
                    title: 'التصميم والتطوير',
                    description: 'ننفذ واجهة وتجربة متقنة ثم نبرمجها باستخدام تقنيات حديثة.'
                },
                {
                    title: 'الاختبار والتصفية',
                    description: 'نتأكد من الأداء، التوافق، والأمان قبل الإطلاق.'
                },
                {
                    title: 'الإطلاق والدعم',
                    description: 'نطلق الموقع مع متابعة ودعم لتثبيت النتائج.'
                }
            ],
            faqs: [
                {
                    question: 'كم تحتاجون من وقت لتنفيذ موقع محترف؟',
                    answer: 'من 1 إلى 3 أسابيع للباقة الاحترافية، والمشاريع المؤسسية تُحدد حسب النطاق (عادة 3–7 أسبوع).'
                },
                {
                    question: 'ما الفرق بين الباقات؟',
                    answer: 'الأساس بسيط لعرض وجود، الاحترافي يعطي وظائف كاملة وتحسينات، والمؤسسي يُبنى مخصص مع تكاملات ودعم دائم.'
                },
                {
                    question: 'هل أقدر أبدأ ببساطة وأتطور بعدين؟',
                    answer: 'نعم. كل نظام قابل للتدرج، نقدر نطور الباقة بالتدرج بدون إعادة بناء من الصفر.'
                },
                {
                    question: 'وش يشمل الدعم بعد الإطلاق؟',
                    answer: 'تحديثات أمنية، مراقبة أداء، إصلاحات سريعة، وتعديلات ضمن خطة متفق عليها.'
                }
            ],
        },
        {
            id: 'mobile',
            title: 'تطبيقات الجوال',
            icon: <FaMobileAlt className="text-4xl" />,
            color: 'from-green-700 to-teal-500',
            description: 'تطبيقات جوال قوية أصلية أو هجينة ترفع تجربة المستخدم لأقصى حد.',
            overview: 'نبني تطبيقات على iOS و Android تركز على سرعة الأداء، استقرار الوظائف، وتفاعل المستخدم. نُحول الفكرة إلى منتج ملموس يُستخدم باستمرار ويخدم أهدافك التجارية.',
            pricing: [
                {
                    tier: 'أساس',
                    price: '3,500 ريال',
                    includes: [
                        'تطبيق بسيط (وظيفة واحدة رئيسية)',
                        'تصميم واجهة جاهز',
                        'نشر على منصة واحدة',
                        'دعم أسبوعين'
                    ]
                },
                {
                    tier: 'متقدم',
                    price: '11,500 ريال',
                    includes: [
                        'تطبيق متعدد الشاشات والميزات',
                        'تكامل مع API خارجي',
                        'تصميم مخصص وتجربة مستخدم محسنة',
                        'نشر على متجرين (iOS/Android)',
                        'تدريب ودعم 1 شهر'
                    ]
                },
                {
                    tier: 'مؤسسي',
                    price: 'حسب الاتفاق',
                    includes: [
                        'حل متكامل (CRM، إشعارات، خلفية ذكية)',
                        'تكاملات متعددة وخوارزميات أعمال',
                        'تحليلات، أتمتة، ودعم دائم'
                    ]
                }
            ],
            stats: [
                { label: 'زيادة المبيعات', value: '35%' },
                { label: 'تقييم المستخدمين', value: '4.1/5' },
                { label: 'نسبة الاحتفاظ', value: '75%' }
            ],
            features: [
                {
                    title: 'تصميم أصيل',
                    description: 'تجربة تُماثل النظام نفسه، مخصصة لكل منصة.',
                    icon: <div className="bg-green-100 p-3 rounded-full text-green-600"><FaPalette /></div>
                },
                {
                    title: 'أداء خفيف',
                    description: 'تطبيقات سريعة لا تستهلك موارد زائدة.',
                    icon: <div className="bg-green-100 p-3 rounded-full text-green-600"><FaChartLine /></div>
                },
                {
                    title: 'تكامل عميق',
                    description: 'ربط مع أنظمة موجودة، إشعارات، وتحديثات في الوقت الحقيقي.',
                    icon: <div className="bg-green-100 p-3 rounded-full text-green-600"><FaServer /></div>
                }
            ],
            process: [
                {
                    title: 'دراسة الجدوى',
                    description: 'تحديد القيمة والأولوية في الوظائف الأساسية.'
                },
                {
                    title: 'تصميم وتجربة المستخدم',
                    description: 'نماذج تفاعلية تختبر قبل التطوير.'
                },
                {
                    title: 'التطوير والاختبار',
                    description: 'برمجة ثابتة مع تغطية اختبارات حقيقية.'
                },
                {
                    title: 'الإطلاق والمتابعة',
                    description: 'نشر، مراقبة، وترقية حسب الاستخدام.'
                }
            ],
            faqs: [
                {
                    question: 'هل أقدر أبدأ بتطبيق بسيط وأكبر بعدين؟',
                    answer: 'نعم، البنية مرنة وتسمح بالتوسع بدون إعادة بناء كامل.'
                },
                {
                    question: 'كم تكلف الباقة المتقدمة؟',
                    answer: 'حوالي 11,500 ريال لتطبيق مع وظائف متعددة ونشر على النظامين.'
                },
                {
                    question: 'وش يشمل الدعم بعد التسليم؟',
                    answer: 'تصحيحات، تحديثات نظام، وإمكانية إضافة ميزات ضمن خطة توسعية.'
                }
            ],
        },
        {
            id: 'marketing',
            title: 'الحلول التسويقية',
            icon: <FaChartLine className="text-4xl" />,
            color: 'from-purple-500 to-fuchsia-600',
            description: 'استراتيجيات تسويقية مدروسة تعطي عائد واضح وتوسع وجودك.',
            overview: 'نُشغّل حملات تركّز على النتائج: زيادات في الزيارات، تحويلات أعلى، وعائد استثمار ملموس. ندمج تحليل بيانات مع تنفيذ دقيق لتصنع حملات تدفع عملك للأمام.',
            pricing: [
                {
                    tier: 'البداية',
                    price: '1,500 ريال / شهر',
                    includes: [
                        'تحليل مبدئي',
                        'حملة محتوى أساسية',
                        'متابعة أسبوعية ',
                        'تقارير أساسية'
                    ]
                },
                {
                    tier: 'النمو',
                    price: '3,000 ريال / شهر',
                    includes: [
                        'حملات متعددة على منصات',
                        'تحسين SEO + إعلانات مدفوعة',
                        'تقارير مفصلة',
                        'تحسين مستمر'
                    ]
                },
                {
                    tier: 'التحكم الكامل',
                    price: '6,000 ريال+ / شهر',
                    includes: [
                        'استراتيجية كاملة مخصصة',
                        'إدارة متعددة القنوات',
                        'تحليلات متقدمة وعائد استثمار',
                        'تسويق آلي وتجزئة جمهور'
                    ]
                }
            ],
            stats: [
                { label: 'زيادة الزيارات', value: '200%' },
                { label: 'نسبة التحويل', value: '15%' },
                { label: 'عائد الاستثمار', value: '300%' }
            ],
            features: [
                {
                    title: 'تحليل ذكي',
                    description: 'فهم سلوك الجمهور وتحديد نقاط الضعف والقوة.',
                    icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaChartLine /></div>
                },
                {
                    title: 'إعلانات مركزة',
                    description: 'حملات مدفوعة تعطي أعلى عائد بأقل هدر.',
                    icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaMobileAlt /></div>
                },
                {
                    title: 'محتوى يحوّل',
                    description: 'رسالة تناسب جمهورك وتدفعهم لاتخاذ إجراء.',
                    icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaPalette /></div>
                }
            ],
            process: [
                {
                    title: 'تحليل الوضع الحالي',
                    description: 'نمسك الواقع: منافسين، جمهور، ونقاط قوة وضعف.'
                },
                {
                    title: 'بناء الاستراتيجية',
                    description: 'خطّة تعتمد على بيانات واضحة وأهداف قابلة للقياس.'
                },
                {
                    title: 'تنفيذ متزامن',
                    description: 'تشغيل الحملات، تتبع الأداء، وضبط الوقت الحقيقي.'
                },
                {
                    title: 'تحسين مستمر',
                    description: 'نعدل ونكرر بناءً على نتائج حية لزيادة الكفاءة.'
                }
            ],
            faqs: [
                {
                    question: 'متى تبدأ النتائج تظهر؟',
                    answer: 'أغلب الحملات تعطي إشارات أولى خلال 1–3 أشهر، والأثر الكامل يتراكم بعد ذلك.'
                },
                {
                    question: 'هل تديرون كل القنوات؟',
                    answer: 'نقدر ندير القنوات الأساسية ونبني توسعة تدريجية بحسب الهدف والميزانية.'
                },
                {
                    question: 'كيف تقيسون النجاح؟',
                    answer: 'بمؤشرات واضحة: تحويل، تكلفة اكتساب، عائد استثمار، وتفاعل حقيقي.'
                }
            ],
        },
        {
            id: 'design',
            title: 'التصميم الجرافيكي',
            icon: <FaPalette className="text-4xl" />,
            color: 'from-amber-600 to-red-500',
            description: 'هوية بصرية حادة وقوية تجعل علامتك لا تُنسى.',
            overview: 'نوصل جوهر علامتك بصريًا. من الشعار للهوية الكاملة، نخلق تجربة بصرية تجمع بين التميّز والوضوح في السوق.',
            pricing: [
                {
                    tier: 'هوية أساسية',
                    price: '1,000 ريال',
                    includes: [
                        'شعار واحد',
                        'ألوان وهوية بسيطة',
                        'نموذج بطاقة عمل'
                    ]
                },
                {
                    tier: 'الهوية المتكاملة',
                    price: '3,000 ريال',
                    includes: [
                        'شعار متعدد النسخ',
                        'دليل هوية مختصر',
                        'قوالب منشورات',
                        'مواد تسويقية أولية'
                    ]
                },
                {
                    tier: 'بريميوم',
                    price: '5,500 ريال',
                    includes: [
                        'هوية كاملة + دليل مفصل',
                        'تصاميم واجهات وتطبيق',
                        'مواد تسويقية متقدمة',
                        'جلسة استراتيجية علامة'
                    ]
                }
            ],
            stats: [
                { label: 'زيادة الاعتراف بالعلامة', value: '70%' },
                { label: 'رضا العملاء', value: '95%' },
                { label: 'مشاريع مكتملة', value: '40+' }
            ],
            features: [
                {
                    title: 'هوية بصرية قوية',
                    description: 'شعار، ألوان، ونبرة تعكس شخصيتك.',
                    icon: <div className="bg-amber-100 p-3 rounded-full text-amber-600"><FaPalette /></div>
                },
                {
                    title: 'تصميم واجهات',
                    description: 'تصاميم UX/UI تخدم الاستخدام وتحافظ على الجاذبية.',
                    icon: <div className="bg-amber-100 p-3 rounded-full text-amber-600"><FaLaptopCode /></div>
                },
                {
                    title: 'مواد تسويقية',
                    description: 'منشورات، بروشورات، وعروض بصريّة متناسقة.',
                    icon: <div className="bg-100 p-3 rounded-full text-amber-600"><FaChartLine /></div>
                }
            ],
            process: [
                {
                    title: 'اكتشاف',
                    description: 'نمسك جوهر العلامة وقيمها.'
                },
                {
                    title: 'بحث',
                    description: 'نمسح السوق ونبني مرجع بصري مميز.'
                },
                {
                    title: 'تصميم',
                    description: 'نولد أفكار ثم نكرّس أفضلها.'
                },
                {
                    title: 'تسليم',
                    description: 'نقدم الأصول جاهزة للاستخدام الفوري.'
                }
            ],
            faqs: [
                {
                    question: 'هل يمكنني طلب تغييرات بعد التسليم؟',
                    answer: 'نعم، جولات تعديل مضمّنة حسب الباقة، ويمكن إضافة دعم إضافي.'
                },
                {
                    question: 'كم من الوقت تاخذ الهوية المتكاملة؟',
                    answer: 'من 5 إلى 12 يوم حسب عمق العمل.'
                },
                {
                    question: 'أقدر أطور الهوية بعدين؟',
                    answer: 'البنية مرنة؛ نقدر نضيف امتدادات أو مكتبات بصرية جديدة لاحقًا.'
                }
            ],
        },
    


    {
        id: 'crm',
        title: 'تصميم وبناء الأنظمة الداخلية',
        icon: <FaProjectDiagram className="text-4xl" />,
        color: 'from-purple-600 to-indigo-700',
        description: 'نصمم ونبني أنظمة مخصصة لإدارة عمليات الشركات مثل CRM و ERP وحلول الأعمال الذكية.',
        overview: 'نساعد الشركات على امتلاك أنظمة داخلية مصممة خصيصًا لإدارة عملياتها بكفاءة عالية. سواءً كان النظام CRM لإدارة العملاء أو ERP لإدارة الموارد، فإننا نركز على الأمان، الأداء العالي، وسهولة الاستخدام لضمان تطوير أعمالك.',
        pricing: [
            {
                tier: 'أساس',
                price: '8,000 ريال',
                includes: [
                    'تحليل احتياجات أساسي',
                    'نظام بسيط لإدارة العملاء',
                    'لوحة تحكم رئيسية',
                    'دعم محدود (شهر واحد)'
                ]
            },
            {
                tier: 'متوسط',
                price: '20,000 ريال',
                includes: [
                    'تحليل معمق للعمليات',
                    'CRM كامل مع تكامل بسيط',
                    'تقارير وتصورات',
                    'تدريب للمستخدمين',
                    'دعم 3 أشهر'
                ]
            },
            {
                tier: 'متقدم',
                price: 'حسب الاتفاق',
                includes: [
                    'نظام مخصص كامل (CRM + ERP إذا لزم)',
                    'تكاملات متعددة (بريد، محاسبة، مخازن...)',
                    'أتمتة سير العمل',
                    'تشفير وحماية متقدمة',
                    'دعم وصيانة مستمرة'
                ]
            }
        ],
        stats: [
            { label: 'تحسين الإنتاجية', value: '60%' },
            { label: 'رضا العملاء', value: '4.7/5' },
            { label: 'توفير التكاليف', value: '45%' }
        ],
        features: [
            {
                title: 'لوحات تحكم تفاعلية',
                description: 'تصميم واجهات بصرية تعرض جميع مؤشرات الأداء بسهولة.',
                icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaChartBar /></div>
            },
            {
                title: 'تكامل مع خدمات متعددة',
                description: 'ربط سلس مع أنظمة البريد، المحاسبة، والمخازن.',
                icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaNetworkWired /></div>
            },
            {
                title: 'حماية عالية للبيانات',
                description: 'أنظمة مؤمنة بتشفير متقدم لحماية معلومات الشركة.',
                icon: <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaShieldAlt /></div>
            }
        ],
        process: [
            {
                title: 'تحليل المتطلبات',
                description: 'نجمع كل تفاصيل العمليات الداخلية للشركة ونحللها.'
            },
            {
                title: 'تصميم النظام',
                description: 'إنشاء هيكلة مرنة وواجهات استخدام تناسب طبيعة العمل.'
            },
            {
                title: 'تطوير النظام واختباره',
                description: 'برمجة النظام مع اختبارات مكثفة لضمان الأداء والاستقرار.'
            },
            {
                title: 'إطلاق وصيانة مستمرة',
                description: 'نقوم بنشر النظام مع تقديم دعم فني وتحديثات دورية.'
            }
        ],
        faqs: [
            {
                question: 'كيف تحددون السعر المناسب لشركتي؟',
                answer: 'نبدأ بتحليل شامل لعملياتك واحتياجاتك، ثم نعرض خطة وتقسيم سعر واضح بناءً على التعقيد، التكامل، والدعم المطلوب.'
            },
            {
                question: 'ما الفرق بين الباقة المتوسطة والمتقدمة؟',
                answer: 'الباقة المتوسطة تغطي نظام CRM جاهز مع تكامل محدود ودعم مؤقت. المتقدمة تُبنى من الصفر حسب البنية التشغيلية، تشمل ERP أو أتمتة إضافية، ودعم مستمر وتكاملات متعددة.'
            },
            {
                question: 'هل أقدر أبدأ بأساس وأترقى بعدين؟',
                answer: 'نعم. النظام مبني بطريقة قابلة للتوسيع والترقية، نقدر نضيف مميزات أو نغير الباقة بدون إعادة بناء من الصفر.'
            },
            {
                question: 'كم مدة التنفيذ لكل باقة؟',
                answer: 'الأساس: 4–6 أسابيع، المتوسط: 8–12 أسبوع، المتقدم: حسب نطاق المشروع (عادة 3–6 أشهر).'
            },
            {
                question: 'وش شامل الدعم بعد التسليم؟',
                answer: 'تشمل الباقات دعمًا أوليًا، بعدها نوفر خطط صيانة ودعم مستمر (تحديثات، إصلاحات، مراقبة أداء) حسب الاتفاق.'
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
const getSectionsForService = (service: any) => {
    const order = ['overview', 'stats', 'features', 'process', 'pricing', 'faqs'];
    return order.filter(section => {
        if (section === 'overview') return !!service.overview;
        if (section === 'stats') return Array.isArray(service.stats) && service.stats.length > 0;
        if (section === 'features') return Array.isArray(service.features) && service.features.length > 0;
        if (section === 'process') return Array.isArray(service.process) && service.process.length > 0;
        if (section === 'pricing') return Array.isArray(service.pricing) && service.pricing.length > 0;
        if (section === 'faqs') return Array.isArray(service.faqs) && service.faqs.length > 0;
        return false;
    });
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

    useEffect(() => {
        const handleScroll = () => {
            const sections = getSectionsForService(activeService);
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
    }, [activeService]);

    useEffect(() => {
        const sections = getSectionsForService(activeService);
        sections.forEach(section => {
            sectionRefs.current[section] = document.getElementById(section);
        });
    }, [activeService]);

    // Sidebar metadata
    const availableSections = getSectionsForService(activeService);
    const sectionMeta: Record<string, { label: string; icon: JSX.Element }> = {
        overview: { label: 'نظرة عامة', icon: <FaEye /> },
        stats: { label: 'الإحصائيات', icon: <FaChartLine /> },
        features: { label: 'مميزاتنا', icon: <FaStar /> },
        process: { label: 'كيف نعمل', icon: <FaCogs /> },
        pricing: { label: 'الباقات', icon: <FaTags /> },
        faqs: { label: 'الأسئلة الشائعة', icon: <FaQuestionCircle /> }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-900/40 to-sky-500/50 text-gray-700 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-25 via-sky-300/90 to-sky-25 z-10" />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(173,216,230,0.3) 60%, rgba(135,206,235,0.4) 100%)'
                    }}
                />
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-sky-100/30"
                            style={{
                                width: Math.random() * 20 + 5,
                                height: Math.random() * 20 + 5,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`
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

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                

                <Script
                    id="services-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "itemListElement": services.map((service: any, index: number) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@type": "Service",
                                    "name": service.title,
                                    "description": service.description,
                                    "provider": {
                                        "@type": "Organization",
                                        "name": "آفاق العالم الرقمي",
                                        "url": "https://digitalworldhorizon.com"
                                    },
                                    "offers": service.pricing.map((p: any) => ({
                                        "@type": "Offer",
                                        "name": p.tier,
                                        "price": p.price,
                                        "priceCurrency": "SAR" // غير العملة حسب الحاجة
                                    }))
                                }
                            }))
                        })
                    }}
                />

                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                    >
                        خدماتنا المتميزة
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl text-white max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        حلول تقنية متكاملة مصممة خصيصاً لتحقيق أهداف عملك وتميزك في السوق
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {services.map(s => (
                        <motion.button
                            key={s.id}
                            onClick={() => handleServiceChange(s)}
                            className={`
                flex flex-col items-center px-6 py-5 rounded-2xl border-2 transition-all duration-500
                ${activeService.id === s.id
                                    ? `bg-black/40 ${s.color} shadow-lg shadow-blue-950 text-white scale-115 border-sky-400`
                                    : 'bg-white/80 border-black-1 text-gray-700 hover:shadow-md'}
              `}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div className="mb-3 text-3xl text-sky-500">{s.icon}</div>
                            <span className="font-semibold">{s.title}</span>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-sky-300 shadow-xl shadow-sky-200/20"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
                            <div className="max-w-xl">
                                <motion.h2
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-transparent bg-clip-text"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {activeService.title}
                                </motion.h2>
                                <motion.p
                                    className="text-lg text-gray-600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {activeService.description}
                                </motion.p>
                            </div>
                            <motion.button
                                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-md hover:opacity-95 transition"
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14,165,233,0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                اطلب الخدمة الآن <FaArrowRight className="ml-3" />
                            </motion.button>
                        </div>

                        {isTransitioning ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin w-12 h-12 border-4 border-sky-500 rounded-full" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                <nav className="lg:col-span-1 sticky top-32 space-y-4">
                                    {availableSections.map(sectionId => {
                                        const meta = sectionMeta[sectionId];
                                        if (!meta) return null;
                                        return (
                                            <motion.button
                                                key={sectionId}
                                                onClick={() => scrollToSection(sectionId)}
                                                className={`
                          flex items-center w-full px-4 py-3 rounded-lg text-lg transition
                          ${activeSection === sectionId
                                                        ? 'bg-sky-100 text-gray-900 border border-sky-300 shadow'
                                                        : 'hover:bg-sky-50'}
                        `}
                                                whileHover={{ x: 8 }}
                                            >
                                                <span className="text-xl text-sky-500 ml-3">{meta.icon}</span>
                                                {meta.label}
                                            </motion.button>
                                        );
                                    })}
                                </nav>

                                <div className="lg:col-span-3 space-y-16">
                                    {/* نظرة عامة */}
                                    {availableSections.includes('overview') && (
                                        <section
                                            id="overview"
                                            ref={el => {
                                                sectionRefs.current.overview = el;
                                            }}
                                            className="scroll-mt-24"
                                        >
                                            <div className="bg-white p-6 rounded-2xl border border-sky-200 shadow-sm">
                                                <h3 className="text-2xl font-bold text-sky-600 mb-4">نظرة عامة</h3>
                                                <p className="text-gray-700 leading-relaxed">{activeService.overview}</p>
                                            </div>
                                        </section>
                                    )}

                                    {/* إحصائيات */}
                                    {availableSections.includes('stats') && (
                                        <section
                                            id="stats"
                                            ref={el => {
                                                sectionRefs.current.stats = el;
                                            }}
                                            className="scroll-mt-24"
                                        >
                                            <h3 className="text-2xl font-bold text-sky-600 mb-6">الإحصائيات</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                {activeService.stats.map((s: any, i: number) => (
                                                    <div
                                                        key={i}
                                                        className="bg-white p-6 rounded-xl border border-sky-200 shadow-sm flex flex-col"
                                                    >
                                                        <span className="text-sm uppercase font-medium text-gray-500">
                                                            {s.label}
                                                        </span>
                                                        <span className="mt-2 text-3xl font-bold text-gray-800">
                                                            {s.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* مميزاتنا */}
                                    {availableSections.includes('features') && (
                                        <section
                                            id="features"
                                            ref={el => {
                                                sectionRefs.current.features = el;
                                            }}
                                            className="scroll-mt-24"
                                        >
                                            <h3 className="text-2xl font-bold text-sky-600 mb-6">مميزاتنا</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {activeService.features.map((f: any, i: number) => (
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
                                    )}

                                    {/* كيف نعمل */}
                                    {availableSections.includes('process') && (
                                        <section
                                            id="process"
                                            ref={el => {
                                                sectionRefs.current.process = el;
                                            }}
                                            className="scroll-mt-24"
                                        >
                                            <h3 className="text-2xl font-bold text-sky-600 mb-6">كيف نعمل</h3>
                                            <div className="relative pl-8 before:absolute before:left-4 before:top-6 before:bottom-6 before:w-0.5 before:bg-sky-300">
                                                {activeService.process.map((p: any, i: number) => (
                                                    <motion.div
                                                        key={i}
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
                                    )}

                                    {/* الباقات */}
                                    {availableSections.includes('pricing') && (
                                        <section
                                            id="pricing"
                                            ref={el => {
                                                sectionRefs.current.pricing = el;
                                            }}
                                            className="scroll-mt-24"
                                        >
                                            <h3 className="text-2xl font-bold text-sky-600 mb-6">الباقات</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {activeService.pricing.map((p: any, i: number) => (
                                                    <div
                                                        key={i}
                                                        className="bg-white p-6 rounded-2xl border border-sky-200 shadow-lg flex flex-col"
                                                    >
                                                        <div className="flex items-center justify-between mb-4">
                                                            <h4 className="text-xl font-semibold">{p.tier}</h4>
                                                            <span className="text-lg font-bold">{p.price}</span>
                                                        </div>
                                                        <ul className="flex-1 mb-4 space-y-1 text-gray-700">
                                                            {p.includes.map((inc: string, idx: number) => (
                                                                <li key={idx} className="flex items-start">
                                                                    <span className="mr-2">•</span> {inc}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <button className="mt-auto px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-lg font-semibold">
                                                            اختر
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* الأسئلة الشائعة */}
                                    {availableSections.includes('faqs') && (
                                        <section
                                            id="faqs"
                                            ref={el => {
                                                sectionRefs.current.faqs = el;
                                            }}
                                            className="scroll-mt-24"
                                        >
                                            <h3 className="text-2xl font-bold text-sky-600 mb-6">الأسئلة الشائعة</h3>
                                            <div className="space-y-4">
                                                {activeService.faqs.map((q: any, i: number) => (
                                                    <FAQItem key={i} question={q.question} answer={q.answer} />
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}







