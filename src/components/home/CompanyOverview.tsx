// components/home/CompanyOverview.tsx
'use client';

import { JSX, useEffect, useState } from 'react';
import SectionTitle from "../ui/SectionTitle";
import { FaRocket, FaLightbulb, FaChartLine, FaServer, FaMobileAlt, FaSearch, FaBrain, FaProjectDiagram } from 'react-icons/fa';

export default function CompanyOverview() {
    const [countersActive, setCountersActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const countersSection = document.getElementById('counters-section');
            if (countersSection) {
                const rect = countersSection.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    setCountersActive(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 relative overflow-hidden">
            {/* عناصر زخرفية */}
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-indigo-200/30 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-blue-200/30 blur-3xl animate-pulse"></div>

            <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                {/* تعريف عام */}
                <div className="text-center">
                    <SectionTitle title="مرحباً بك في AWH" />
                    <div className="relative inline-block">
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white transition-all duration-500 hover:shadow-lg">
                            نحن مزوّد حلول رقمية موثوق، نقدم تصميم وتطوير مواقع ويب وتطبيقات أندرويد حديثة تساعد المشاريع على التوسع، الظهور، وجذب العملاء. ندمج الإبداع بالتقنية الحديثة لتقديم تجربة رقمية متكاملة.
                        </p>
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                            <FaRocket className="animate-bounce" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* تقنيات مرنة */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-white/70 transition-all duration-500 hover:shadow-xl hover:border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                <FaServer className="text-xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-600">تقنيات مرنة ومتعددة الاستخدام</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            نغطي مجموعة واسعة من التقنيات التي تخدم قطاعات متنوعة مثل التجارة، التعليم، الصحة، الإعلام، والخدمات. حلولنا مصممة خصيصًا لتناسب طبيعة كل نشاط وتحقق له نتائج ملموسة.
                        </p>
                    </div>

                    {/* الاستشارات الرقمية */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-white/70 transition-all duration-500 hover:shadow-xl hover:border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <FaLightbulb className="text-xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-600">استشارات رقمية مخصصة</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            نعمل جنبًا إلى جنب معك لفهم مشروعك، وتقديم خارطة طريق تقنية تضمن أفضل استخدام للموارد وتحقيق أقصى عائد من التحول الرقمي.
                        </p>
                    </div>

                    {/* خبرتنا وأسلوب العمل */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-white/70 transition-all duration-500 hover:shadow-xl hover:border-blue-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                <FaChartLine className="text-xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-600">خبرة عملية ونتائج فعلية</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            بخبرة تمتد لسنوات في السوق اليمني والعربي، أنجزنا مشاريع ناجحة بواجهات جذابة، وتجربة مستخدم مريحة، وأداء عالي على مختلف الأجهزة.
                        </p>
                    </div>
                </div>

                {/* العداد المتحرك */}
                <div id="counters-section" className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <CounterCard
                            value={5}
                            label="سنوات من الخبرة"
                            icon={<FaChartLine className="text-3xl" />}
                            color="from-amber-500 to-orange-500"
                            active={countersActive}
                        />
                        <CounterCard
                            value={120}
                            label="مشروع مكتمل"
                            icon={<FaProjectDiagram className="text-3xl" />}
                            color="from-emerald-500 to-teal-500"
                            active={countersActive}
                        />
                        <CounterCard
                            value={85}
                            label="عميل راضٍ"
                            icon={<FaRocket className="text-3xl" />}
                            color="from-cyan-500 to-blue-500"
                            active={countersActive}
                        />
                    </div>
                </div>

                {/* قائمة مختصرة للخدمات */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {[
                        ["تطوير المواقع", "مواقع ديناميكية وتجارية متكاملة.", <FaRocket className="text-2xl text-blue-600" />],
                        ["تطبيقات أندرويد", "تطبيقات أصلية بأداء عالي.", <FaMobileAlt className="text-2xl text-indigo-600" />],
                        ["التسويق الرقمي", "تحسين ظهورك في محركات البحث.", <FaSearch className="text-2xl text-amber-600" />],
                        ["الذكاء الاصطناعي", "دمج التعلم الآلي والخوارزميات.", <FaBrain className="text-2xl text-emerald-600" />],
                        ["الاستضافة وإدارة السيرفرات", "خوادم سريعة وآمنة.", <FaServer className="text-2xl text-purple-600" />],
                        ["إدارة مشاريع", "من التخطيط إلى الإطلاق الفعلي.", <FaProjectDiagram className="text-2xl text-cyan-600" />],
                        ["تصميم تجربة المستخدم", "واجهات جذابة وتفاعلية.", <FaLightbulb className="text-2xl text-orange-600" />],
                        ["تحليل البيانات", "تحويل البيانات إلى قرارات ذكية.", <FaChartLine className="text-2xl text-teal-600" />],
                    ].map(([title, desc, icon], i) => (
                        <div
                            key={i}
                            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-blue-200"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                    {icon}
                                </div>
                                <h4 className="font-bold text-lg text-gray-800 group-hover:text-blue-700 transition-colors">{title}</h4>
                            </div>
                            <p className="text-gray-600 text-sm pl-11">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// مكون العداد المتحرك
const CounterCard = ({ value, label, icon, color, active }: {
    value: number;
    label: string;
    icon: JSX.Element;
    color: string;
    active: boolean;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (active) {
            const duration = 2000; // مدة العد بالمللي ثانية
            const increment = Math.ceil(value / (duration / 20));
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(current);
                }
            }, 20);

            return () => clearInterval(timer);
        }
    }, [active, value]);

    return (
        <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="flex justify-center mb-4">
                <div className={`bg-gradient-to-r ${color} p-3 rounded-full text-white`}>
                    {icon}
                </div>
            </div>
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {active ? count : '0'}+
            </div>
            <div className="text-gray-600 font-medium">{label}</div>
        </div>
    );
};