'use client';

import { FaServer, FaLightbulb, FaChartLine } from 'react-icons/fa';

const features = [
    {
        title: 'تقنيات مرنة ومتعددة الاستخدام',
        desc: 'نغطي مجموعة واسعة من التقنيات التي تخدم قطاعات متنوعة مثل التجارة، التعليم، الصحة، الإعلام، والخدمات. حلولنا مصممة خصيصًا لتناسب طبيعة كل نشاط وتحقق له نتائج ملموسة.',
        icon: <FaServer className="text-xl" />,
        bgColor: 'bg-indigo-100 text-indigo-600',
        borderColor: 'hover:border-blue-400',
    },
    {
        title: 'استشارات رقمية مخصصة',
        desc: 'نعمل جنبًا إلى جنب معك لفهم مشروعك، وتقديم خارطة طريق تقنية تضمن أفضل استخدام للموارد وتحقيق أقصى عائد من التحول الرقمي.',
        icon: <FaLightbulb className="text-xl" />,
        bgColor: 'bg-blue-100 text-blue-600',
        borderColor: 'hover:border-blue-400',
    },
    {
        title: 'خبرة عملية ونتائج فعلية',
        desc: 'بخبرة تمتد لسنوات في السوق  العربي أنجزنا مشاريع ناجحة بواجهات جذابة، وتجربة مستخدم مريحة، وأداء عالي على مختلف الأجهزة.',
        icon: <FaChartLine className="text-xl" />,
        bgColor: 'bg-amber-100 text-amber-600',
        borderColor: 'hover:border-amber-400',
    },
];

export default function FeaturesGrid() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ title, desc, icon, bgColor, borderColor }, i) => (
                <div
                    key={i}
                    className={`bg-white p-6 rounded-xl shadow-md border border-white/70 transition-all duration-500 hover:shadow-xl ${borderColor} cursor-pointer transform hover:-translate-y-1 hover:scale-105`}
                    role="region"
                    aria-labelledby={`feature-title-${i}`}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor}`}>
                            {icon}
                        </div>
                        <h3 id={`feature-title-${i}`} className={`text-xl font-semibold ${bgColor.split(' ')[1]}`}>
                            {title}
                        </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{desc}</p>
                </div>
            ))}
        </div>
    );
}
