'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    Award,
    Users,
    TrendingUp,
    Clock,
    Coffee,
    Code,
    Globe,
    Heart
} from 'lucide-react';


const StatsSection: React.FC = () => {
    const [counters, setCounters] = useState({
        projects: 0,
        clients: 0,
        satisfaction: 0,
        experience: 0,
       
        codeLines: 0,
        countries: 0,
        teamMembers: 0,
    });

    const finalStats = useMemo(() => ({
        projects: 17,
        clients: 15,
        satisfaction: 99,
        experience: 2,
        codeLines: 50000,
        countries: 3,
        teamMembers: 15,
    }), []);

    const stats = [
        {
            key: 'projects',
            icon: Award,
            value: finalStats.projects,
            label: 'مشروع مكتمل',
            suffix: '+',
            color: 'text-dwh-neon-green',
            bgColor: 'bg-dwh-neon-green/10',
            description: 'مشاريع ناجحة تم تسليمها بأعلى جودة',
        },
        {
            key: 'clients',
            icon: Users,
            value: finalStats.clients,
            label: 'عميل راضٍ',
            suffix: '+',
            color: 'text-dwh-sky-blue',
            bgColor: 'bg-dwh-sky-blue/10',
            description: 'عملاء يثقون في خدماتنا المتميزة',
        },
        {
            key: 'satisfaction',
            icon: TrendingUp,
            value: finalStats.satisfaction,
            label: 'معدل الرضا',
            suffix: '%',
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
            description: 'نسبة رضا العملاء عن خدماتنا',
        },
        {
            key: 'experience',
            icon: Clock,
            value: finalStats.experience,
            label: 'سنوات خبرة',
            suffix: '+',
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
            description: 'سنوات من الخبرة في التطوير',
        },
        
        {
            key: 'codeLines',
            icon: Code,
            value: finalStats.codeLines,
            label: 'سطر كود',
            suffix: '+',
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            description: 'أسطر الكود المكتوبة بعناية',
        },
        {
            key: 'countries',
            icon: Globe,
            value: finalStats.countries,
            label: 'دولة',
            suffix: '+',
            color: 'text-indigo-500',
            bgColor: 'bg-indigo-500/10',
            description: 'دول حول العالم خدمنا عملاء فيها',
        },
        {
            key: 'teamMembers',
            icon: Heart,
            value: finalStats.teamMembers,
            label: 'عضو فريق',
            suffix: '+',
            color: 'text-red-500',
            bgColor: 'bg-red-500/10',
            description: 'أعضاء فريق متخصصين ومبدعين',
        },
    ];

    useEffect(() => {
        const animateCounters = () => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const interval = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                setCounters({
                    projects: Math.floor(finalStats.projects * easeOutQuart),
                    clients: Math.floor(finalStats.clients * easeOutQuart),
                    satisfaction: Math.floor(finalStats.satisfaction * easeOutQuart),
                    experience: Math.floor(finalStats.experience * easeOutQuart),
                    codeLines: Math.floor(finalStats.codeLines * easeOutQuart),
                    countries: Math.floor(finalStats.countries * easeOutQuart),
                    teamMembers: Math.floor(finalStats.teamMembers * easeOutQuart),
                });

                if (currentStep >= steps) {
                    clearInterval(interval);
                    setCounters(finalStats);
                }
            }, stepDuration);

            return () => clearInterval(interval);
        };

        // Start animation when component mounts
        const timer = setTimeout(animateCounters, 500);
        return () => clearTimeout(timer);
    }, [finalStats]);

    const formatNumber = (num: number) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    };

    return (
        <section className="section-padding bg-white/80 backdrop-blur-sm text-blue-900 from-dwh-navy via-dwh-navy-dark to-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-dwh-neon-green/5 via-transparent to-dwh-sky-blue/1" />
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 20%, rgba(10, 83, 193, 0.18) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 80%, rgba(14, 63, 168, 0.29) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 80%, rgba(198, 38, 38, 0.07) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(74, 168, 240, 0.1) 0%, transparent 50%)',
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                />
            </div>

            <div className="container-custom mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 space-x-reverse bg-dwh-neon-green/10 text-dwh-neon-green px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <TrendingUp className="w-4 h-4" />
                        <span>إنجازاتنا بالأرقام</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dwh-white mb-6">
                        أرقام تتحدث عن <span className="text-gradient">نجاحنا</span>
                    </h2>

                    <p className="text-xl text-dwh-metallic-gray-light max-w-3xl mx-auto leading-relaxed">
                        كل رقم يحكي قصة نجاح، وكل إنجاز يعكس التزامنا بالتميز والجودة في كل ما نقدمه
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.key}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className="group"
                        >
                            <div className="bg-dwh-white/5 backdrop-blur-sm border border-dwh-white/10 rounded-2xl p-6 text-center hover:bg-dwh-white/10 transition-all duration-500 relative overflow-hidden">
                                {/* Background Glow Effect */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 0.1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    className={`absolute inset-0 ${stat.bgColor} rounded-2xl group-hover:opacity-20 transition-opacity duration-500`}
                                />

                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1 + 0.2,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:shadow-lg transition-all duration-300`}
                                >
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </motion.div>

                                {/* Number */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                                    className="relative z-10"
                                >
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-dwh-white mb-2">
                                        <motion.span
                                            animate={{
                                                textShadow: [
                                                    '0 0 10px rgba(255, 255, 255, 0.3)',
                                                    '0 0 20px rgba(255, 255, 255, 0.5)',
                                                    '0 0 10px rgba(255, 255, 255, 0.3)'
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                        >
                                            {formatNumber(counters[stat.key as keyof typeof counters])}
                                        </motion.span>
                                        <span className={`${stat.color} ml-1`}>{stat.suffix}</span>
                                    </div>
                                </motion.div>

                                {/* Label */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                                    className="text-lg font-bold text-dwh-white mb-2 relative z-10"
                                >
                                    {stat.label}
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                                    className="text-sm text-dwh-metallic-gray-light leading-relaxed relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    {stat.description}
                                </motion.p>

                                {/* Animated Border */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1 + 1 }}
                                    className={`absolute bottom-0 left-0 right-0 h-1 ${stat.color.replace('text-', 'bg-')} origin-left`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-dwh-white/5 backdrop-blur-sm border border-dwh-white/10 rounded-2xl p-8 max-w-2xl mx-auto"
                    >
                        <h3 className="text-2xl md:text-3xl font-playfair font-bold text-dwh-white mb-4">
                            هل تريد أن تكون جزءاً من هذه الأرقام؟
                        </h3>
                        <p className="text-dwh-metallic-gray-light mb-6 leading-relaxed">
                            انضم إلى قائمة عملائنا الراضين ودع مشروعك يصبح جزءاً من قصص نجاحنا
                        </p>
                        
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
