/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from "react";
import BlogCategoryPage from "./BlogCategoryPage";
import { Category, Post } from "@/types/category";

export const revalidate = 86400; // إعادة التحقق يوميًا

async function fetchCategory(id: string): Promise<Category | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate[posts][populate][0]=tags&populate[posts][populate][1]=CoverImage&populate[posts][populate][2]=AdditionalImages&populate=CoverImage`,
            {
                headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}` },
                next: { revalidate },
            }
        );
        if (!res.ok) {
            console.error("fetchCategory failed, status:", res.status);
            return null;
        }
        const data = await res.json();
        return data.data ?? null; // البيانات جاهزة بدون attributes
    } catch (error) {
        console.error("Error fetching category:", error);
        return null;
    }
}

async function fetchPostsByCategory(id: string): Promise<Post[]> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[categories][id][$eq]=${id}&populate=*`,
            {
                headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}` },
                next: { revalidate },
            }
        );
        if (!res.ok) {
            console.error("fetchPostsByCategory failed, status:", res.status);
            return [];
        }
        const data = await res.json();
        return data.data ?? []; // البيانات جاهزة بدون attributes
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
    const id = params.id;
    console.log("Page params.id:", id);

    const [category, posts] = await Promise.all([
        fetchCategory(id),
        fetchPostsByCategory(id),
    ]);

    console.log("Page category:", category);
    console.log("Page posts:", posts);

    if (!category) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <h1>الفئة غير موجودة</h1>
            </main>
        );
    }

    return <BlogCategoryPage serverCategory={category} serverPosts={posts} />;
}

export async function generateMetadata({ params }: Props) {
    const id = params.id;
    console.log("generateMetadata params.id:", id);

    const category = await fetchCategory(id);
    console.log("generateMetadata category:", category);

    if (!category) return { title: "الفئة غير موجودة" };

    return {
        title: category.Name,
        description: category.Description || `مقالات في فئة ${category.Name}`,
        openGraph: {
            title: category.Name,
            description: category.Description || `مقالات في فئة ${category.Name}`,
            images: category.CoverImage?.url
                ? [`${process.env.NEXT_PUBLIC_STRAPI_URL}${category.CoverImage.url}`]
                : [],
        },
    };
}
