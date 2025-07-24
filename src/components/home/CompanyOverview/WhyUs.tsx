'use client';

import { FaTools, FaBolt, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const items = [
    {
        icon: <FaTools className="text-3xl" />,
        title: 'حلول مخصصة لاحتياجك',
        desc: 'كل مشروع له متطلبات مختلفة، ولهذا نقدم حلول تقنية مصممة خصيصًا لتناسب أهدافك.',
        color: 'from-blue-500 to-blue-700',
        delay: 0.1
    },
    {
        icon: <FaBolt className="text-3xl" />,
        title: 'سرعة واحترافية',
        desc: 'نلتزم بالتسليم في الوقت المحدد دون التضحية بالجودة، مع دعم متواصل.',
        color: 'from-indigo-500 to-purple-700',
        delay: 0.3
    },
    {
        icon: <FaMapMarkedAlt className="text-3xl" />,
        title: 'فهم السوق المحلي',
        desc: 'نحن من السوق اليمني ونعرف تحدياته، لذلك نقدم حلول عملية قابلة للتطبيق.',
        color: 'from-amber-500 to-orange-700',
        delay: 0.5
    },
];

export default function WhyUs() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-sky-50 to-white relative overflow-hidden">
            {/* تأثيرات بصرية في الخلفية */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-[120px] opacity-20"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full mb-6">
                        <span className="font-bold">DWH</span>
                    </div>

                    <motion.h2
                        className="text-4xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        لماذا تختار <span className="text-blue-600">DWH</span>؟
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        نقدم لك تجربة فريدة تجمع بين الإبداع التقني والفهم العميق لاحتياجات عملك
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="relative"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`bg-gradient-to-br ${item.color} p-1 rounded-2xl shadow-xl`}>
                                <motion.div
                                    className="bg-white rounded-xl p-8 h-full flex flex-col relative overflow-hidden"
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* تأثير الخلفية عند التحويم */}
                                    {hoveredIndex === i && (
                                        <div className="absolute inset-0 -z-10">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-400 rounded-full filter blur-3xl opacity-10"></div>
                                        </div>
                                    )}

                                    {/* أيقونة مع تأثير التدرج */}
                                    <div className={`mb-6 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white mx-auto`}>
                                        <motion.div
                                            whileHover={{ rotate: 15, scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                    </div>

                                    <motion.h3
                                        className="text-xl font-bold mb-4 text-center text-gray-800"
                                        whileHover={{ color: "#2563eb" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.title}
                                    </motion.h3>

                                    <p className="text-gray-600 leading-relaxed text-center mb-6">
                                        {item.desc}
                                    </p>

                                    <motion.div
                                        className="mt-auto mx-auto"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* تأثير الضوء عند التحويم */}
                            {hoveredIndex === i && (
                                <div className="absolute inset-0 -z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

              
            </div>

            {/* تأثيرات متحركة في الخلفية */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-blue-500 z-0"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/3 left-1/3 w-10 h-10 rounded-full bg-indigo-500 z-0"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/3 w-6 h-6 rounded-full bg-amber-500 z-0"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
        </section>
    );
}