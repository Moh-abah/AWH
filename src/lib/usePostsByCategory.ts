import { useState, useEffect } from "react";
import { Post } from "@/types/category";

export function usePostsByCategory(categoryId: number) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!categoryId) return;

        const fetchPosts = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[categories][id][$eq]=${categoryId}&populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
                        },
                    }
                );
                const data = await res.json();
                setPosts(data.data ?? []);
            } catch (err) {
                console.error(err);
                setError("فشل في تحميل المقالات");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [categoryId]);

    return { posts, loading, error };
}
