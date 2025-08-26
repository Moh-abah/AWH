"use client"

import { motion } from "framer-motion"
import { services } from "@/constants/services"
import { useRouter } from "next/navigation"

// التهيئات المتحركة
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 120,
        },
    },
} // أولاً، نعرّف نوعًا للمفاتيح الصالحة

type ColorKey = "blue" | "indigo" | "pink" | "amber" | "cyan" | "orange" | "yellow" | "teal"

// ثم نعدل الدالة لاستخدام هذا النوع
const getColorClasses = (color: string | number) => {
    const colorMap = {
        blue: {
            bgGradient: "from-blue-400 to-blue-600",
            bgLight: "bg-blue-50",
            borderLight: "border-blue-100",
            text: "text-blue-600",
            shadow: "shadow-blue-500/30",
            button: "from-blue-500 to-blue-600",
        },
        indigo: {
            bgGradient: "from-indigo-400 to-indigo-600",
            bgLight: "bg-indigo-50",
            borderLight: "border-indigo-100",
            text: "text-indigo-600",
            shadow: "shadow-indigo-500/30",
            button: "from-indigo-500 to-indigo-600",
        },
        pink: {
            bgGradient: "from-pink-400 to-pink-600",
            bgLight: "bg-pink-50",
            borderLight: "border-pink-100",
            text: "text-pink-600",
            shadow: "shadow-pink-500/30",
            button: "from-pink-500 to-pink-600",
        },
        amber: {
            bgGradient: "from-amber-400 to-amber-600",
            bgLight: "bg-amber-50",
            borderLight: "border-amber-100",
            text: "text-amber-600",
            shadow: "shadow-amber-500/30",
            button: "from-amber-500 to-amber-600",
        },
        cyan: {
            bgGradient: "from-cyan-400 to-cyan-600",
            bgLight: "bg-cyan-50",
            borderLight: "border-cyan-100",
            text: "text-cyan-600",
            shadow: "shadow-cyan-500/30",
            button: "from-cyan-500 to-cyan-600",
        },
        orange: {
            bgGradient: "from-orange-400 to-orange-600",
            bgLight: "bg-orange-50",
            borderLight: "border-orange-100",
            text: "text-orange-600",
            shadow: "shadow-orange-500/30",
            button: "from-orange-500 to-orange-600",
        },
        yellow: {
            bgGradient: "from-yellow-400 to-yellow-600",
            bgLight: "bg-yellow-50",
            borderLight: "border-yellow-100",
            text: "text-yellow-600",
            shadow: "shadow-yellow-500/30",
            button: "from-yellow-500 to-yellow-600",
        },
        teal: {
            bgGradient: "from-teal-400 to-teal-600",
            bgLight: "bg-teal-50",
            borderLight: "border-teal-100",
            text: "text-teal-600",
            shadow: "shadow-teal-500/30",
            button: "from-teal-500 to-teal-600",
        },
    }

    // نتحقق مما إذا كان color موجودًا في المفاتيح الصالحة
    const validColor = Object.keys(colorMap).includes(color.toString()) ? (color.toString() as ColorKey) : "blue" // نستخدم الأزرق كقيمة افتراضية

    return colorMap[validColor]
}

export default function ServicesList() {
    const router = useRouter()
    const handleServiceClick = () => {
        // الانتقال إلى صفحة الخدمة مع تأثير سلس
        router.push(`/services`)
    }

    const servicesStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "آفاق العالم الرقمي",
        url: "https://www.digitalworldhorizon.com",
        description: "شركة تطوير برمجيات متكاملة تقدم حلول رقمية متطورة",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "خدمات التطوير الرقمي",
            itemListElement: services.map((service, index) => ({
                "@type": "Offer",
                name: service.title,
                description: service.description,
                url: `https://www.digitalworldhorizon.com/services/${service.slug}`,
                category: "خدمات تطوير البرمجيات",
                position: index + 1,
            })),
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(servicesStructuredData),
                }}
            />

            <section
                className="section-padding bg-white/80 py-20 relative overflow-hidden"
                aria-labelledby="services-heading"
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-dwh-neon-green/5 via-transparent to-dwh-sky-blue/1" />
                    <motion.div
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 20%, rgba(10, 83, 193, 0.18) 0%, transparent 50%)",
                                "radial-gradient(circle at 80% 80%, rgba(14, 63, 168, 0.29) 0%, transparent 50%)",
                                "radial-gradient(circle at 20% 80%, rgba(198, 38, 38, 0.07) 0%, transparent 50%)",
                                "radial-gradient(circle at 80% 20%, rgba(74, 168, 240, 0.1) 0%, transparent 50%)",
                            ],
                        }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="absolute inset-0"
                    />
                </div>
                {/* تأثيرات الخلفية */}

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h1 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            خدماتنا{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                المتميزة
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            حلول متكاملة مصممة خصيصًا لتحقيق أهدافك الرقمية وتميزك في السوق
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        role="list"
                        aria-label="قائمة خدمات آفاق العالم الرقمي"
                    >
                        {services.map(({ slug, title, description, Icon, color }, index) => {
                            const colorClasses = getColorClasses(color)

                            return (
                                <motion.article
                                    key={slug}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.02,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="group relative"
                                    role="listitem"
                                    itemScope
                                    itemType="https://schema.org/Service"
                                >
                                    {/* تأثير إشعاعي عند التمرير */}
                                    <div
                                        className={`absolute -inset-0.5 bg-gradient-to-br ${colorClasses.bgLight.replace("bg-", "from-")} to-white rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500`}
                                    ></div>

                                    {/* البطاقة الرئيسية */}
                                    <div className="relative bg-white p-6 rounded-2xl shadow-lg shadow-sky-400/50 hover:shadow-xl hover:shadow-bla-300/30 transition-all duration-300 h-full flex flex-col border border-blue-100">
                                        {/* شريط لوني علوي */}
                                        <div
                                            className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colorClasses.bgGradient} rounded-t-2xl`}
                                        ></div>

                                        {/* رأس البطاقة */}
                                        <div className="flex flex-col items-center text-center mb-5 mt-2">
                                            <div
                                                className={`p-3 rounded-xl ${colorClasses.bgLight} mb-4 border ${colorClasses.borderLight} shadow-sm`}
                                            >
                                                <motion.div
                                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                                    transition={{ type: "spring", stiffness: 400 }}
                                                >
                                                    <Icon className={`text-2xl ${colorClasses.text}`} aria-hidden="true" />
                                                </motion.div>
                                            </div>
                                            <h2
                                                className="font-bold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300"
                                                itemProp="name"
                                            >
                                                {title}
                                            </h2>
                                        </div>

                                        {/* محتوى الوصف */}
                                        <p
                                            className="text-gray-600 text-sm mb-5 flex-grow text-center leading-relaxed px-2"
                                            itemProp="description"
                                        >
                                            {description}
                                        </p>

                                        {/* زر التفاعل */}
                                        <div className="mt-auto pt-4 border-t border-gray-100/80">
                                            <motion.button
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: `0 10px 25px -5px rgba(var(--${color}-500-rgb), 0.3)`,
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleServiceClick()
                                                }}
                                                className={`w-full text-sm font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r ${colorClasses.button} text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:${colorClasses.shadow}`}
                                                aria-label={`اكتشف المزيد عن خدمة ${title}`}
                                            >
                                                <span>اكتشف المزيد</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.article>
                            )
                        })}
                    </motion.div>

                    {/* قسم دعوة للعمل */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mt-16 pt-10 border-t border-gray-200/50"
                    >
                        <p className="text-gray-600 mb-6">لا تجد الخدمة التي تبحث عنها؟</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            تواصل معنا للحصول على حل مخصص
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
