'use client';

import { FaRocket, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, ShoppingCart, Database, Shield, Zap, Users, Mail, Phone, MapPin } from "lucide-react"
import Script from "next/script"
export default function Intro() {

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "آفاق العالم الرقمي - Digital World Horizon",
        alternateName: "DWH",
        url: "https://digitalworldhorizon.com",
        logo: "https://digitalworldhorizon.com/logo.png",
        description: "شركة متخصصة في تطوير البرمجيات المتكاملة والحلول التقنية المبتكرة في المملكة العربية السعودية",
        address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressRegion: "المملكة العربية السعودية",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+966 55 586 4375",
            contactType: "customer service",
            email: "digitalworldhorizon@gmail.com",
            availableLanguage: ["Arabic", "English"],
        },
        sameAs: ["https://twitter.com/digworldhorizon", "https://linkedin.com/company/digitalworldhorizon"],
        foundingDate: "2025",
        numberOfEmployees: "10-50",
        areaServed: {
            "@type": "Country",
            name: "Saudi Arabia",
        },
        serviceType: [
            "تطوير مواقع الويب",
            "تطوير تطبيقات الجوال",
            "التجارة الإلكترونية",
            "الحلول السحابية",
            "الأمان السيبراني",
        ],
    }

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "تطوير البرمجيات",
        provider: {
            "@type": "Organization",
            name: "آفاق العالم الرقمي",
        },
        areaServed: {
            "@type": "Country",
            name: "Saudi Arabia",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "خدمات تطوير البرمجيات",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "تطوير مواقع الويب",
                        description: "تطوير مواقع ويب حديثة ومتجاوبة باستخدام أحدث التقنيات",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "تطوير تطبيقات الجوال",
                        description: "تطوير تطبيقات جوال متطورة لأنظمة iOS و Android",
                    },
                },
            ],
        },
    }
    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <Script
                id="services-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(servicesSchema),
                }}
            />
        <section
            className="relative bg-cover bg-center py-16 md:py-34 px-4 overflow-hidden "
            
        >

            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/vid/viddwhhh.mp4" type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
            </video>
            {/* Overlay متدرج بدلاً من الأبيض الصلب */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-sky-500/40"></div>


            {/* تأثيرات بصرية إضافية */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

            {/* نقاط متحركة في الخلفية */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
                {/* النص والزر */}
                <motion.div
                    className="space-y-6 text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    

                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight border-black">
                        <span className="block mb-2">مرحباً بك في</span>
                        <span className="block text-5xl sm:text-6xl bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
                            Digital World Horizon
                        </span>
                        <span className="block text-2xl sm:text-3xl text-black-300 mt-3 font-normal">
                            آفاق العالم الرقمي
                        </span>
                    </h1>

                    <motion.div
                        className="bg-white-30   backdrop-blur-lg p-6 rounded-xl border border-black/20 shadow-xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-lg leading-relaxed text-white-900/80 border-black/20">
                            نحن مزوّد حلول رقمية متعددة، نقدم تصميم وتطوير مواقع ويب، متاجر إلكترونية، وتطبيقات أندرويد حديثة تساعد المشاريع على التوسع والظهور وجذب، انظمة مخصصه وخدمات سيرفرات والدومينات. كما نقدّم تصاميم جرافيكية فريدة ذات هوية بصرية مميّزة، إدارة سوشيال ميديا، وصنع إعلانات فعّالة ذات عائد مرتفع.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <motion.a
                            href="/about"
                            className="flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-900 text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            اعرف المزيد عنا
                            <FaArrowRight />
                        </motion.a>

                        <motion.a
                            href="/contact"
                            className="flex items-center gap-3 bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            تواصل معنا
                            <FaArrowRight />
                        </motion.a>
                    </div>
                </motion.div>

                {/* الصورة التوضيحية */}
                <motion.div
                    className="hidden lg:flex justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    
                </motion.div>
            </div>

            {/* موجات في الأسفل */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
                    <path
                        fill="#FFFFFF"
                        fillOpacity="0.2"
                        d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,74.7C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
                    ></path>
                </svg>
            </div>
        </section>
        </>
    );
}