// "use client";

// import React from "react";
// import { Category } from "../../../types/category";

// interface Props {
//     category: Category;
// }

// export default function CategoryCard({ category }: Props) {
//     const name = category.Name ?? "بدون اسم";
//     const description = category.Description ?? "لا يوجد وصف";
//     const cover = category.CoverImage?.url;

//     return (
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//             <div className="relative h-48 overflow-hidden">
//                 <img
//                     src={cover ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${cover}` : "/placeholder.png"}
//                     alt={name}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                 />
//                 <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     {category.articles?.length || 0} مقالات
//                 </div>
//             </div>
//             <div className="p-6">
//                 <h2 className="text-xl font-bold mb-3 text-gray-800">{name}</h2>
//                 <p className="text-gray-600 mb-4 leading-7 line-clamp-3">{description}</p>
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center text-gray-500 text-sm">
//                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
//                         </svg>
//                         {category.publishedAt ? new Date(category.publishedAt).toLocaleDateString("ar-YE") : "غير منشور"}
//                     </div>
//                     <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
//                         استكشاف
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Category } from "../../../types/category";

interface Props {
  category: Category;
}



export default function CategoryCard({ category }: Props) {

    useEffect(() => {
        console.log("Post data:", category );
    }, [category]);
  const name = category.Name ?? "بدون اسم";
  const description = category.Description ?? "لا يوجد وصف";
  const cover = category.CoverImage?.url ?? null;

  const posts = category.posts ?? [];
  const postsCount = posts.length;

  // جمع كل التاقات من مقالات الفئة
  const allTags = posts.flatMap((post) =>
    post.tags?.map((tag) => tag.Name) ?? []
  );

  const firstThreeTags = allTags.slice(0, 3);
  const remainingTagsCount = allTags.length - firstThreeTags.length;

  // تاريخ آخر مقال منشور
 const lastPostDate = posts
  .map((p) => p.publishedAt)
  .filter((date): date is string => !!date) // نأكد أن الباقي كلها string
  .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];
  return (
    <Link href={`/blogs/${category.id}`}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
        {/* صورة الفئة */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={cover ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${cover}` : "/placeholder.png"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {postsCount} مقالات
          </div>
        </div>

        {/* محتوى البطاقة */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-3 text-gray-800">{name}</h2>
          <p className="text-gray-600 mb-4 leading-7 line-clamp-3">{description}</p>

          {/* التاقات */}
          <div className="flex flex-wrap gap-2 mb-3">
            {firstThreeTags.map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                #{tag}
              </span>
            ))}
            {remainingTagsCount > 0 && (
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg text-xs">
                +{remainingTagsCount}
              </span>
            )}
          </div>

          {/* تاريخ آخر مقال */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>
              {lastPostDate
                ? `آخر مقال: ${new Date(lastPostDate).toLocaleDateString("ar-YE")}`
                : "لا يوجد مقالات منشورة"}
            </span>

            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
              استكشاف
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
