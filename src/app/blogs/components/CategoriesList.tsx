"use client";

import React, { useState, useEffect } from "react";
import { useCategories } from "../../../lib/useCategories";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

export default function CategoriesList() {
    const { categories, loading, error } = useCategories();
    const [filteredCategories, setFilteredCategories] = useState<any[]>([]);
    const [activeFilter, setActiveFilter] = useState("الكل");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (categories && categories.length) {
            let filtered = [...categories];

            // تطبيق البحث
            if (searchQuery) {
                filtered = filtered.filter(category =>
                    category.attributes?.Name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    category.attributes?.Description?.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            setFilteredCategories(filtered);
        }
    }, [categories, searchQuery, activeFilter]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 py-8 px-4">
                {/* تأثيرات الخلفية */}
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold text-blue-800 mb-4"
                        >
                            أقسام المقالات
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl text-blue-600"
                        >
                            جاري تحميل الأقسام...
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-blue-100/30"
                            >
                                <div className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 animate-pulse"></div>
                                <div className="p-6">
                                    <div className="h-6 bg-blue-100 rounded mb-4"></div>
                                    <div className="h-4 bg-blue-100 rounded mb-2"></div>
                                    <div className="h-4 bg-blue-100 rounded w-3/4"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-100 max-w-md mx-auto">
                        <div className="text-red-500 text-5xl mb-4">⚠️</div>
                        <h2 className="text-2xl font-bold text-red-700 mb-2">حدث خطأ</h2>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                        >
                            إعادة المحاولة
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (!categories || categories.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 max-w-md mx-auto">
                        <div className="text-blue-500 text-5xl mb-4">📝</div>
                        <h2 className="text-2xl font-bold text-blue-800 mb-2">لا توجد أقسام</h2>
                        <p className="text-gray-600">لا توجد أقسام متاحة حالياً</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 py-8 px-4">
            {/* تأثيرات الخلفية */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* الهيدر */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl p-8 text-center mb-8 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold mb-4">أقسام المقالات</h1>
                        <p className="text-xl opacity-90">
                            استكشف مجموعة متنوعة من المقالات في مجالات تصميم وتطوير الويب، تجربة المستخدم، وأمن المعلومات
                        </p>
                    </div>
                </motion.header>

                {/* شريط التصفية والبحث */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-blue-100/30"
                >
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full md:w-1/2">
                            <input
                                type="text"
                                placeholder="ابحث عن قسم..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-3 pr-12 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {["الكل", "التصميم", "التطوير", "الأمان", "التسويق"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                                            ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg"
                                            : "bg-white/80 text-blue-700 hover:bg-blue-50 border border-blue-200"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* نتائج البحث */}
                {filteredCategories.length === 0 && searchQuery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center mb-8 shadow-lg border border-blue-100/30"
                    >
                        <p className="text-gray-600">لم يتم العثور على أي نتائج لـ "{searchQuery}"</p>
                    </motion.div>
                )}

                {/* شبكة الفئات */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    {filteredCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <CategoryCard category={category} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* الترقيم */}
                {filteredCategories.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex justify-center gap-2"
                    >
                        <button className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all border border-blue-200">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>

                        <button className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full shadow-md">1</button>
                        <button className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all border border-blue-200">2</button>
                        <button className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all border border-blue-200">3</button>

                        <button className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all border border-blue-200">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}