"use client";

import React from "react";
import { useCategories } from "../lib/useCategories";
import CategorySidebarCard from "@/app/blogs/components/CategorySidebarCard";


export default function CategoriesSidebar() {
    const { categories, loading, error } = useCategories();

    if (loading) return <div>جاري التحميل...</div>;
    if (error) return <div>حدث خطأ: {error}</div>;

    return (
        <div className="lg:col-span-1 space-y-2 p-4 bg-white rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-3">الفئات</h3>
            {categories.map((category) => (
                <CategorySidebarCard key={category.id} category={category} />
            ))}
        </div>
    );
}
