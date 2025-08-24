"use client";

import React from "react";
import Link from "next/link";
import { Category } from "@/types/category";
import Image from "next/image";

interface Props {
    category: Category;
}

export default function CategorySidebarCard({ category }: Props) {
    const name = category.Name ?? "بدون اسم";
    const cover = category.CoverImage?.url ?? null;
    const postsCount = category.posts?.length ?? 0;

    return (
        <Link href={`/blogs/${category.id}`}>
            <div className="flex items-center bg-white rounded-lg shadow p-2 hover:shadow-md transition-shadow cursor-pointer">
                {/* صورة مصغرة للفئة */}
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                        src={cover ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${cover}` : "/placeholder.png"}
                        alt={name || "Category Image"}
                        width={64}   // قيمة تقريبية حسب تصميمك
                        height={64}  // قيمة تقريبية حسب تصميمك
                        className="w-full h-full object-cover"
                        style={{ objectFit: "cover" }}
                    />
                </div>


                {/* بيانات الفئة */}
                <div className="ml-3 flex-1">
                    <h4 className="text-gray-800 font-semibold text-sm line-clamp-1">{name}</h4>
                    <span className="text-blue-600 text-xs bg-blue-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {postsCount} مقالات
                    </span>
                </div>
            </div>
        </Link>
    );
}
