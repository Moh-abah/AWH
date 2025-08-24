"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export function usePostBySlug(slug: string | undefined) {
    const [post, setPost] = useState<any | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return; // لو ما فيه slug، ما ننفذ

        setLoading(true);

        axios
            .get(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[Slug][$eq]=${slug}&populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
                    },
                }
            )
            .then(async (res) => {
                const data = res.data?.data?.[0] ?? null;
                const comments = data?.comments ?? [];
                setPost({ ...data, comments });



                const categoryId = data?.categories?.[0]?.id ?? null;
                if (categoryId) {
                    const relatedRes = await axios.get(
                        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[categories][id][$eq]=${categoryId}&filters[Slug][$ne]=${slug}&populate=categories`,
                        {
                            headers: {
                                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
                            },
                        }
                    );
                    setRelatedPosts(relatedRes.data?.data ?? []);
                }

                
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [slug]);

    return { post, loading, error };
}
