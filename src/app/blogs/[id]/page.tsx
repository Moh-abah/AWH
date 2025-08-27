"use client";

import React, { useState, useEffect, use } from "react";
import { useParams } from "next/navigation";
import { useCategories } from "@/lib/useCategories";
import { usePostsByCategory } from "@/lib/usePostsByCategory";
import ArticleCard from "../../blogs/components/ArticleCard"; 
import { Category, Post } from "@/types/category";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// ==================================================================
// ==   تأثيرات بصرية (محسّنة لتكون أكثر تكاملاً)   ==
// ==================================================================
const BackgroundEffects = () => (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-sky-100">
        {/* تم جعلها أفتح وأكثر نعومة */}
        <div className="absolute -top-20 -right-20 w-[40rem] h-[40rem] bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-cyan-200/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
    </div>
);
const AnimatedParticles = () => {
    const [particles, setParticles] = useState<Array<React.ReactNode>>([]);

    useEffect(() => {
        setParticles(
            [...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-br from-sky-200/50 to-blue-200/50"
                    style={{
                        width: Math.random() * 15 + 5,
                        height: Math.random() * 15 + 5,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, (Math.random() - 0.5) * 200, 0],
                        x: [0, (Math.random() - 0.5) * 200, 0],
                        opacity: [0, 0.8, 0],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 8,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut"
                    }}
                />
            ))
        );
    }, []);

    return <div className="absolute inset-0 -z-10">{particles}</div>;
};

// ==================================================================
// ==   مكون عرض الحالات (بتصميم أكثر فخامة)   ==
// ==================================================================
const StatusDisplay = ({ icon, title, message, children }: { icon: string, title: string, message: string, children?: React.ReactNode }) => (
    <div className="relative min-h-screen flex items-center justify-center text-center p-4 overflow-hidden">
        <BackgroundEffects />
        <AnimatedParticles />
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/50 max-w-lg"
        >
            <div className="text-6xl mb-4">{icon}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-lg">{message}</p>
            {children && <div className="mt-6">{children}</div>}
        </motion.div>
    </div>
);

// ==================================================================
// ==                   المكون الرئيسي للصفحة                     ==
// ==================================================================


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props { }

export default function BlogCategoryPage(_: Props) {
   
    const params = useParams(); 
    console.log("route params:", params);

    const routeId = (params as any)?.id ?? (params as any)?.categoryId;
    const categoryIdNum: number | undefined = routeId ? Number(routeId) : undefined;
    console.log("resolved categoryIdNum:", categoryIdNum);

    const { categories, loading: catLoading, error: catError } = useCategories();
    const [category, setCategory] = useState<Category | null>(null);

    useEffect(() => {
        console.log("useEffect - categories length:", categories?.length, "catLoading:", catLoading);
        if (!catLoading && Array.isArray(categories) && categoryIdNum != null) {
            // ابحث بالمطابقة على id (تحويل إلى سترينغ لتجنب اختلاف النوع)
            const found = (categories as any[]).find((c) => String(c.id) === String(categoryIdNum)) || null;
            console.log("found category:", found);
            setCategory(found);
        }
        // لو categories فارغة أو categoryIdNum undefined نبقي category كما هو (أو null)
    }, [categories, catLoading, categoryIdNum]);

    // استدعاء hook دائماً (ترتيب الـ hooks ثابت) وتمرير رقم أو undefined
    const { posts, loading: postsLoading, error: postsError } = usePostsByCategory(categoryIdNum as number);
    console.log("Posts hook:", { categoryIdNum, postsLoading, postsError, posts });

    const isLoading = catLoading || (categoryIdNum != null && !category && !catError) || postsLoading;
    if (isLoading) {
        return <StatusDisplay icon="⏳" title="جاري التحميل..." message="جارٍ جلب بيانات الفئة والمقالات..." />;
    }

    if (catError || postsError) {
        return (
            <StatusDisplay icon="⚠️" title="حدث خطأ" message={`${catError || postsError}`}>
                <button onClick={() => window.location.reload()}>إعادة المحاولة</button>
            </StatusDisplay>
        );
    }

    if (!category) {
        return <StatusDisplay icon="🔍" title="الفئة غير موجودة" message="عذرًا، لم نتمكن من العثور على الفئة المطلوبة." />;
    }

    const coverUrl = category?.CoverImage?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${category.CoverImage.url}` : undefined;


    return (
        <div className="relative min-h-screen">
            <BackgroundEffects />
            <AnimatedParticles />

            {/* رأس الصفحة: تم تحسينه ليكون أكثر درامية */}
            <header
                className="relative h-[50vh] flex flex-col items-center justify-center text-center p-4 text-white"
            >
                {/* طبقة الصورة: الآن داخل الهيدر للتحكم بشكل أفضل */}
                {coverUrl && (
                    <div className="absolute inset-0 -z-10">
                        <motion.div
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full h-full"
                        >
                            {/* <img src={coverUrl} alt={category.Name} className="w-full h-full object-cover" /> */}
                            {coverUrl && (
                                <Image
                                    src={coverUrl}
                                    alt={category.Name || "Category Image"}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                    priority
                                />
                            )}

                        </motion.div>
                    </div>
                )}
                {/* طبقة التراكب: لضمان وضوح النص */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-black/30 to-transparent"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold" style={{ textShadow: '0 3px 20px rgba(0,0,0,0.6)' }}>
                        {category.Name}
                    </h1>
                    {category.Description && (
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                            {category.Description}
                        </p>
                    )}
                    <div className="mt-8 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full inline-block border border-white/30">
                        {posts.length} مقالة
                    </div>
                </motion.div>
            </header>

            {/* جسم الصفحة: الآن بخلفية متدرجة أنيقة */}
            <main className="bg-gradient-to-b from-gray-900/60 via-gray-100 to-gray-100 py-16">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimatePresence>
                        {posts && posts.length > 0 ? (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1 },
                                    },
                                }}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {posts.map((post) => (
                                    <motion.div key={post.id} variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
                                        <ArticleCard post={post as Post} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <StatusDisplay
                                        icon="📝"
                                        title="لا توجد مقالات بعد"
                                        message={`لم يتم نشر أي مقالات في فئة &quot;${category.Name}&quot; حتى الآن.`}
                                    />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
