/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// src/app/posts/[slug]/page.tsx

import React from "react";
import PostPageClient from "./PostPageClient";
import Script from "next/script";

// إعادة التحقق كل 10 دقائق
export const revalidate = 600;

async function fetchPostBySlug(slug: string): Promise<PostItem | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[Slug][$eq]=${slug}&populate=*`,
      {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}` },
        next: { revalidate },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.data?.[0] ?? null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

type Props = { params: { id: string; slug: string } };

export default async function Page({ params }: Props) {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1>المقال غير موجود</h1>
      </main>
    );
  }

  const canonicalUrl = `https://digitalworldhorizon.com/blogs/${post.id}/${post.Slug}`;
  const coverImage = post.CoverImage?.[0]?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.CoverImage[0].url}`
    : "";

  return (
    <>
      <PostPageClient serverPost={post} />

      {/* ✅ Structured Data: Article */}
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.SEOTitle || post.Tital,
          description: post.MetaDescription || post.Excerpt,
          image: coverImage,
          author: {
            "@type": "Person",
            name: "فريق Digital World Horizon",
          },
          publisher: {
            "@type": "Organization",
            name: "Digital World Horizon",
            logo: {
              "@type": "ImageObject",
              url: "https://digitalworldhorizon.com/logo.png",
            },
          },
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
          },
        })}
      </Script>

      {/* ✅ Structured Data: FAQ */}
      {post.FAQs?.length > 0 && (
        <Script id="faq-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.FAQs.map((faq: any) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </Script>
      )}
    </>
  );
}

// ✅ تحسين الميتاداتا
export async function generateMetadata({ params }: Props) {
  const { slug, id } = params;
  const post = await fetchPostBySlug(slug);
  if (!post) return { title: "المقال غير موجود" };

  const canonicalUrl = `https://digitalworldhorizon.com/blogs/${id}/${post.Slug}`;
  const coverImage = post.CoverImage?.[0]?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.CoverImage[0].url}`
    : "";

  return {
    title: post.SEOTitle || post.Tital,
    description: post.MetaDescription || post.Excerpt || "مقالة مفيدة",
    keywords: post.FocusKeyword ? [post.FocusKeyword] : [],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.SEOTitle || post.Tital,
      description: post.MetaDescription || post.Excerpt,
      url: canonicalUrl,
      type: "article",
      images: coverImage ? [coverImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.SEOTitle || post.Tital,
      description: post.MetaDescription || post.Excerpt,
      images: [coverImage],
    },
  };
}




// /* eslint-disable @typescript-eslint/ban-ts-comment */
// // @ts-nocheck
// //src/app/posts/[slug]/page.tsx Server Component.
// import React from "react";
// import PostPageClient from "./PostPageClient";


// // إعادة التحقق يوميًا
// export const revalidate = 600;

// async function fetchPostBySlug(slug: string): Promise<PostItem | null> {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[Slug][$eq]=${slug}&populate=*`, {
//       headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}` },
//       next: { revalidate },
//     });
//     console.log("📡 Response status:", res.status);
//     if (!res.ok) {
//       console.error("❌ Response not OK:", res.statusText);
//       return null;
//     }
//     const data = await res.json();
//     console.log("📦 Raw data from Strapi:", JSON.stringify(data, null, 2));
//     return data.data?.[0] ?? null; // مباشرة العنصر الأول
    
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return null;
//   }
// }

// type Props = { params: { id: string; slug: string } };

// export default async function Page({ params }: Props) {
//   const { slug } = params;
//   const post = await fetchPostBySlug(slug);

//   if (!post) {
//     return (
//       <main className="min-h-screen flex items-center justify-center">
//         <h1>المقال غير موجود</h1>
//       </main>
//     );
//   }

//   return <PostPageClient serverPost={post} />;
// }


// export async function generateMetadata({ params }: Props) {
//   console.log("📝 generateMetadata params:", params);

//   const { slug, id } = params; // خذ الاثنين
//   console.log("📌 slug:", slug, " | id:", id);

//   const post = await fetchPostBySlug(slug);
//   if (!post) return { title: "المقال غير موجود" };

//   return {
//     title: post.Tital,
//     description: post.MetaDescription || post.Excerpt || "مقالة مفيدة",
//     openGraph: {
//       title: post.Tital,
//       description: post.MetaDescription || post.Excerpt || "مقالة مفيدة",
//       images: post.CoverImage?.[0]?.url
//         ? [`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.CoverImage[0].url}`]
//         : [],
//     },
//   };
// }

