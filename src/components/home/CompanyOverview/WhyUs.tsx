'use client';
import { FaBolt, FaTools, FaMapMarkedAlt } from 'react-icons/fa';

const items = [
    {
        icon: <FaTools className="text-3xl text-blue-600" />,
        title: 'حلول مخصصة لاحتياجك',
        desc: 'كل مشروع له متطلبات مختلفة، ولهذا نقدم حلول تقنية مصممة خصيصًا لتناسب أهدافك.',
    },
    {
        icon: <FaBolt className="text-3xl text-indigo-600" />,
        title: 'سرعة واحترافية',
        desc: 'نلتزم بالتسليم في الوقت المحدد دون التضحية بالجودة، مع دعم متواصل.',
    },
    {
        icon: <FaMapMarkedAlt className="text-3xl text-amber-600" />,
        title: 'فهم السوق المحلي',
        desc: 'نحن من السوق اليمني ونعرف تحدياته، لذلك نقدم حلول عملية قابلة للتطبيق.',
    },
];

export default function WhyUs() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">لماذا تختار DWH؟</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow hover:shadow-md transition"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
