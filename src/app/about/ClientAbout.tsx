// app/about/page.tsx
"use client";
import Achievements from "@/components/about/Achievements";
import CompanyIntro from "@/components/about/CompanyIntro";
import TeamSection from "@/components/about/TeamSection";
import ValuesVision from "@/components/about/ValuesVision";
import { motion } from "framer-motion";
import Script from "next/script";

import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaMedal, FaGlobe } from "react-icons/fa";

export default function ClientAbout() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900/40 to-sky-500/50  text-gray-700 overflow-hidden">
            {/* خلفية جسيمات متحركة */}


            {/* تأثيرات بصرية إضافية */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-25 via-sky-300/90  to-sky-25 z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-sky-25/60 to-sky-50/40 z-20"></div>

                {/* تأثير جسيمات متحركة */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
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

                <Script
                    id="organization-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "آفاق العالم الرقمي",
                            url: "https://digitalworldhorizon.com",
                            logo: "https://digitalworldhorizon.com/logo1.png",
                            description: "شركة متخصصة في تطوير المواقع والتطبيقات، التصميم الجرافيكي، الهوية البصرية، التسويق الإلكتروني وحلول السوشيال ميديا في السعودية.",
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+966555864375",
                                contactType: "customer service",
                                email: "info@digitalworldhorizon.com"
                            },
                            sameAs: [
                                "https://twitter.com/digitalworldhorizon",
                                "https://linkedin.com/company/digitalworldhorizon"
                            ]
                        })
                    }}
                />
                <h1 className="sr-only">
                    آفاق العالم الرقمي - تطوير مواقع، تطبيقات، هوية بصرية، وتسويق إلكتروني في السعودية
                </h1>
                {/* عنوان الصفحة مع تأثير مميز */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-700 text-white px-6 py-3 rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaRocket className="text-xl" />
                        <span className="font-bold">DWH</span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold text-center text-white mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        من <span className="text-sky-400">نحن</span>؟
                    </motion.h1>

                    <motion.p
                        className="text-xl text-sky-200 max-w-3xl mx-auto py-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        آفاق العالم الرقمي توفر تقنية إبداعية متكاملة، نساعد العلامات التجارية على النمو والتأثير باحترافية
                    </motion.p>
                </motion.div>

                {/* بطاقة تعريف الشركة مع تأثيرات متقدمة */}
                <motion.section
                    className="flex flex-col lg:flex-row items-center gap-10 bg-gradient-to-br from-blue-800/30 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-sky-500/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div className="relative flex-shrink-0">
                        <motion.img
                            src="/images/logo1.png"
                            alt="شعار DWH"
                            className="rounded-2xl shadow-xl w-full max-w-md"
                            loading="lazy"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                        <div className="absolute -inset-4 bg-gradient-to-br from-sky-500 to-blue-700 rounded-2xl blur-xl opacity-30 -z-10"></div>
                    </div>

                    <div className="space-y-6">
                        <motion.div
                            className="inline-flex items-center gap-3 bg-sky-900/50 px-4 py-2 rounded-full mb-4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <FaLightbulb className="text-sky-400" />
                            <span className="font-medium text-sky-200">رؤيتنا</span>
                        </motion.div>

                        <motion.p
                            className="text-lg leading-relaxed text-sky-100 max-w-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <span className="font-bold text-sky-300">آفاق العالم الرقمي</span> متخصصة في تصميم وتطوير المواقع والتطبيقات باستخدام أحدث التقنيات،
                            نسعى لتقديم حلول رقمية مبتكرة تساعد عملائنا على النجاح والتوسع في السوق الرقمي.
                        </motion.p>

                        <motion.p
                            className="text-lg leading-relaxed text-sky-100 max-w-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            نحن موفرون تقنيات إبداعية متكاملة، نقدم خدمات تطوير المواقع والتطبيقات، التصميم الجرافيكي،
                            الهوية البصرية، التسويق الإلكتروني، وحلول السوشيال ميديا، لتساعد العلامات التجارية
                            على النمو والتأثير باحترافية.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3 mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                        >
                            <div className="bg-sky-900/40 px-4 py-2 rounded-full flex items-center gap-2">
                                <FaChartLine className="text-sky-400" />
                                <span className="text-sky-100">تطوير المواقع</span>
                            </div>
                            <div className="bg-sky-900/40 px-4 py-2 rounded-full flex items-center gap-2">
                                <FaChartLine className="text-sky-400" />
                                <span className="text-sky-100">تطوير البرامج المخصصه والانظمة الداخليه</span>
                            </div>
                            <div className="bg-sky-900/40 px-4 py-2 rounded-full flex items-center gap-2">
                                <FaMedal className="text-sky-400" />
                                <span className="text-sky-100">الهوية البصرية</span>
                            </div>
                            <div className="bg-sky-900/40 px-4 py-2 rounded-full flex items-center gap-2">
                                <FaGlobe className="text-sky-400" />
                                <span className="text-sky-100">التسويق الإلكتروني</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* بطاقات الأرقام والإنجازات */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  py-18"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    {[
                        { value: "17+", label: "مشروع ناجح", icon: <FaMedal className="text-2xl text-amber-400" /> },
                        { value: "10+", label: "عميل راضي", icon: <FaUsers className="text-2xl text-sky-400" /> },
                        { value: "99%", label: "رضا العملاء", icon: <FaChartLine className="text-2xl text-emerald-400" /> },
                        { value: "2+", label: "سنوات خبرة", icon: <FaRocket className="text-2xl text-purple-400" /> }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-blue-800/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-6 border border-sky-500/20 shadow-lg"
                            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)" }}
                            transition={{ duration: 0.3 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        // transition={{ delay: 0.9 + index * 0.1 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-4xl font-bold text-white">{item.value}</div>
                                <div className="bg-sky-900/50 p-3 rounded-full">{item.icon}</div>
                            </div>
                            <div className="text-lg text-sky-200 font-medium">{item.label}</div>
                            <div className="mt-4 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* قسم "مهمتنا" */}
                <motion.div
                    className="bg-gradient-to-br from-sky-700/40 to-blue-900/40 backdrop-blur-xl rounded-3xl p-10 border border-sky-500/30 shadow-2xl "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-3 rounded-full">
                                <FaRocket className="text-2xl text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">مهمتنا</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-sky-100">
                                مهمتنا في <span className="font-bold text-sky-300">آفاق العالم الرقمي </span> هي تمكين الشركات والعلامات التجارية من خلال تقديم حلول رقمية مبتكرة
                                تعزز وجودها في السوق الرقمي وتدفع نمو أعمالها إلى الأمام.
                            </p>

                            <p className="text-xl leading-relaxed text-sky-100">
                                نؤمن بأن التكنولوجيا يجب أن تكون أداة لتحقيق الأهداف وليس مجرد تكلفة، لذلك نركز على
                                تقديم حلول مخصصة تلبي احتياجات عملائنا بدقة وتوفر لهم قيمة حقيقية.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {[
                                    "تطوير حلول رقمية مبتكرة",
                                    "بناء هويات بصرية قوية",
                                    "تحسين تجربة المستخدم",
                                    "زيادة التفاعل والوصول",
                                    "تحسين التحويلات والمبيعات",
                                    "تقديم دعم فني متكامل"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3 bg-sky-900/40 p-4 rounded-xl"
                                        whileHover={{ x: 5 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.3 + index * 0.1 }}
                                    >
                                        <div className="bg-sky-700 p-1 rounded-full mt-1">
                                            <div className="w-2 h-2 bg-sky-300 rounded-full"></div>
                                        </div>
                                        <span className="text-lg text-sky-100">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* قسم فريق العمل
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-3 bg-sky-900/50 px-6 py-19 rounded-full mb-15 ">
                        <FaUsers className="text-sky-400" />
                        <h2 className="text-2xl font-bold text-sky-200">فريقنا المتميز</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12  py-18" >
                        {[
                            { name: "فريق التطوير", desc: "مطورون مبدعون يمتلكون مهارات متقدمة في أحدث التقنيات" },
                            { name: "فريق التصميم", desc: "مصممون مبدعون يخلقون هويات بصرية لا تنسى" },
                            { name: "فريق التسويق", desc: "خبراء تسويق رقمي يحولون الزوار إلى عملاء" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-blue-800/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-8 border border-sky-500/20 shadow-xl"
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                            >
                                <div className="bg-gradient-to-r from-sky-600 to-indigo-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaUsers className="text-3xl text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>
                                <p className="text-sky-200">{item.desc}</p>
                                <div className="mt-6">
                                    <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
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
                </motion.div> */}

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