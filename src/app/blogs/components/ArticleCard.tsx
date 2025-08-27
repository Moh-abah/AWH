

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Post } from "@/types/category"; // تأكد من أن هذا المسار صحيح
import Image from "next/image";
// أيقونات لتحسين التصميم
const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface Props {
    post: Post;
}

export default function LuxuryArticleCard({ post }: Props) {
    const [imageError, setImageError] = useState(false);

    // --- معالجة البيانات ---
    const category = post.categories?.[0];
    const categoryName = category?.Name || "قسم غير محدد";
    const categorySlug = category?.id || "general";
    const slug = post.Slug || post.id;

    const coverUrl = post.CoverImage?.[0]?.formats?.large?.url || post.CoverImage?.[0]?.url;
    const title = post.Tital || "عنوان المقال غير متوفر";
    const excerpt = post.Excerpt || "لا يوجد وصف مختصر لهذا المقال.";
    const readingTime = post.ReadingTime || 0;
    const views = post.Views || 0;
    const authorName = post.users_permissions_user?.username || "كاتب غير معروف";
    const authorImageUrl = post.users_permissions_user?.Avatar?.formats?.thumbnail?.url;

    // --- التعامل مع الصور المعطوبة ---
    const handleImageError = () => setImageError(true);
    const finalCoverUrl = imageError ? "/placeholder.png" : `${process.env.NEXT_PUBLIC_STRAPI_URL}${coverUrl}`;
    const finalAuthorImageUrl = authorImageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${authorImageUrl}` : `https://ui-avatars.com/api/?name=${authorName}&background=0D8ABC&color=fff`;

    return (
        <Link href={`/blogs/${category?.id}/${post.Slug}`}>
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out border border-sky-300 flex flex-col h-full font-sans">
                {/* --- قسم الصورة --- */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <Image
                        src={finalCoverUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            {categoryName}
                        </span>
                    </div>
                </div>

                {/* --- قسم المحتوى --- */}
                <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-3 line-clamp-3 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                        {title}
                    </h2>
                    <p className="text-gray-600 mb-5 line-clamp-3 flex-grow">
                        {excerpt}
                    </p>

                    {/* --- معلومات إضافية --- */}
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4 mt-auto">
                        <div className="flex items-center">
                            <EyeIcon />
                            <span>{views.toLocaleString('ar-EG')} مشاهدة</span>
                        </div>
                        {readingTime > 0 && (
                            <div className="flex items-center">
                                <ClockIcon />
                                <span>{readingTime} دقيقة قراءة</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- قسم الكاتب --- */}
                <div className="bg-gray-50/70 p-4 flex items-center justify-between rounded-b-2xl border-t">
                    <div className="flex items-center">
                        <Image
                            src={finalAuthorImageUrl}
                            alt={authorName}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                            width={40}
                            height={40}

                        />
                        <span className="mr-3 font-semibold text-gray-800">{authorName}</span>
                    </div>
                    <span className="text-blue-600 font-bold text-sm group-hover:underline">
                        اقرأ المزيد ←
                    </span>
                </div>
            </div>
        </Link>
    );
}
