"use client";

import React from "react";
import Link from "next/link";
import { Post } from "@/types/category";
import Image from "next/image";

interface Props {
    posts: Post[];
}

export default function SimilarPostsWidget({ posts }: Props) {
    if (!posts || posts.length === 0) {
        return <div>لا توجد مقالات مشابهة</div>;
    }

    return (
        <div className="space-y-4">
            {posts.map((post) => {
                const coverUrl =
                    post.CoverImage?.[0]?.formats?.thumbnail?.url ||
                    post.CoverImage?.[0]?.url ||
                    "/placeholder.png";
                const duration = post.readTime ?? "5"; // الوقت التقديري للقراءة بالدقائق
                const views = post.views ?? 0; // عدد المشاهدات إذا موجود

                return (
                    <Link
                        key={post.id}
                        href={`/blogs/${post.categories[0]?.id}/${post.Slug}`}
                        className="flex gap-4 hover:bg-sky-50 rounded-lg p-2 transition-all"
                    >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${coverUrl}`}
                                alt={post.Tital}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium text-gray-800 mb-1 line-clamp-2">
                                {post.Tital}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                                <span>{duration} دقائق</span>
                                <span>{views.toLocaleString()} مشاهدة</span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
