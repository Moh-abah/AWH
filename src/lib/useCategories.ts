import { Category } from '@/types/category';
import { useState, useEffect } from 'react';

export function useCategories() {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    // `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=CoverImage`,
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate[posts][populate][0]=tags&populate[posts][populate][1]=CoverImage&populate[posts][populate][2]=AdditionalImages&populate=CoverImage`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
                        },
                    }
                );

                const data = await response.json();

                console.log("Categories in CategoriesList:", data.data); // للتأكد
                const formattedCategories: Category[] = data.data.map((cat: any) => ({
                    id: cat.id,
                    Name: cat.Name,
                    Slug: cat.Slug,
                    Description: cat.Description,
                    CoverImage: cat.CoverImage
                        ? {
                            id: cat.CoverImage.id,
                            name: cat.CoverImage.name,
                            url: cat.CoverImage.url,
                            formats: cat.CoverImage.formats,
                            width: cat.CoverImage.width,
                            height: cat.CoverImage.height,
                            createdAt: cat.CoverImage.createdAt,
                            updatedAt: cat.CoverImage.updatedAt,
                            publishedAt: cat.CoverImage.publishedAt,
                        }
                        : undefined,
                    posts: cat.posts.map((post: any) => ({
                        id: post.id,
                        documentId: post.documentId,
                        Tital: post.Tital,
                        Excerpt: post.Excerpt,
                        CoverImage: post.CoverImage || [],
                        AdditionalImages: post.AdditionalImages || [],
                        tags: post.tags || [],
                        createdAt: post.createdAt,
                        updatedAt: post.updatedAt,
                        publishedAt: post.publishedAt,
                        SEOTitle: post.SEOTitle,
                        MetaDescription: post.MetaDescription,
                        FocusKeyword: post.FocusKeyword,
                        Views: post.Views,
                        
                    })),
                    createdAt: cat.createdAt,
                    updatedAt: cat.updatedAt,
                    publishedAt: cat.publishedAt,
                }));

                setCategories(formattedCategories);
 // هنا نضع المصفوفة الصحيحة
            } catch (err) {
                setError('فشل في تحميل البيانات');
                console.error('Error fetching categories:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories, loading, error };
}
