// app/about/page.tsx
"use client";
import { motion } from "framer-motion";
import Achievements from "@/components/about/Achievements";
import CompanyIntro from "@/components/about/CompanyIntro";
import TeamSection from "@/components/about/TeamSection";
import ValuesVision from "@/components/about/ValuesVision";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function About() {
    return (
        <div className="relative min-h-screen">
            <AnimatedBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 space-y-20">
                
                {/* عنوان الصفحة */}
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-center text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    من نحن
                </motion.h1>

                {/* صورة مع نص تعريفي */}
                <motion.section
                    className="flex flex-col md:flex-row items-center gap-10 bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl bg-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <motion.img
                        src="/images/logo.png"
                        alt="صورة الشركة"
                        className="rounded-lg shadow-lg max-w-full md:max-w-md"
                        loading="lazy"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <p className="text-lg leading-relaxed text-800 max-w-xl">
                        شركة AWH متخصصة في تصميم وتطوير المواقع والتطبيقات باستخدام أحدث التقنيات،
                        نسعى لتقديم حلول رقمية مبتكرة تساعد عملائنا على النجاح والتوسع في السوق الرقمي.
                    </p>
                </motion.section>

                {/* بقية المكونات مع تأثيرات الحركة */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <CompanyIntro />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <TeamSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <ValuesVision />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                >
                    <Achievements />
                </motion.div>
            </div>
        </div>
    );
}