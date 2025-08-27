
"use client";

import React, { useEffect, useState, useRef, ReactNode, use, JSX } from "react";
import { useParams } from "next/navigation";
import { usePostBySlug } from "@/lib/usePostBySlug"; // تأكد من صحة المسار
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CategoriesSidebar from "@/lib/CategoriesSidebar"; // تأكد من صحة المسار
import StrapiContentRenderer from "../../components/contant";
// import CommentSection from "../../components/Comment"; // تأكد من صحة المسار


/*
================================================================================
  1. الأنواع والواجهات (Types & Interfaces) - شاملة لكل بياناتك
================================================================================
*/
interface Media { id: number; url?: string; alternativeText?: string; name?: string; }
interface User { id: number; username: string; }
interface Category { id: number; Name: string; Slug: string; }
interface Tag { id: number; Name: string; Slug: string; }
interface Comment { id: number; author_name: string; content: string; rating?: number | null; createdAt: string; }

interface PostItem {
  id: number;
  Tital: string;
  Slug?: string;
  Excerpt?: string;
  contant?: any[];
  CoverImage?: Media[];
  AdditionalImages?: Media[];
  users_permissions_user?: User;
  categories?: Category[];
  socialShareLinks?: { facebook?: string; twitter?: string; linkedin?: string; };
  Featured?: boolean;
  ReadingTime?: number;
  Views?: number | null;
  tags?: Tag[];
  publishedAt?: string;
  you_may_also_likes?: PostItem[];
  MetaDescription?: string;
  comments?: Comment[];
}

interface Props {
  postId?: number;
}

/*
================================================================================
  2. الدوال والمكونات المساعدة (Helpers & Sub-components)
================================================================================
*/
const getImageUrl = (img?: Media | null): string | null => {
  if (!img) return null;
  const url = img.url || img.name || "";
  if (!url) return null;
  if (url.startsWith("http")) return url;
  const base = process.env.NEXT_PUBLIC_STRAPI_URL || "";
  return `${base}${url}`;
};

// شاشة تحميل فخمة
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
    <div className="text-center">
      <motion.div className="w-20 h-20 mx-auto" animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <svg viewBox="0 0 100 100">
          <motion.path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" fill="none" stroke="url(#loadingGradient)" strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
          <defs><linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient></defs>
        </svg>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg font-medium text-blue-800 mt-4">نُحضّر لك تجربة قراءة فريدة...</motion.p>
    </div>
  </div>
);

// رسالة خطأ بتصميم راقٍ
const ErrorMessage = ({ error }: { error: any }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center p-10 bg-white rounded-3xl shadow-2xl max-w-lg mx-auto border border-gray-100">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-4">عذرًا، حدث خطأ ما</h1>
      <p className="text-gray-600 text-lg mb-8">لم نتمكن من العثور على المقال الذي تبحث عنه. قد يكون الرابط غير صحيح أو تم حذف المقال.</p>
      <Link href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">العودة إلى الصفحة الرئيسية</Link>
    </motion.div>
  </div>
);

// عارض محتوى ذكي وفاخر

// ==================================================================
// ==   عارض المحتوى المحسّن - Enhanced Content Renderer   ==
// ==================================================================









// معرض صور متكامل
const ImageGallery = ({ images }: { images: Media[] }) => {
  const [selected, setSelected] = useState<string | null>(null);
  if (!images || images.length === 0) return null;
  
  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">معرض الصور</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(image => {
          const url = getImageUrl(image);
          if (!url) return null;
          return (
            <motion.div key={image.id} className="relative aspect-square rounded-xl overflow-hidden cursor-pointer" layoutId={`image-${image.id}`} onClick={() => setSelected(url)} whileHover={{ scale: 1.05, zIndex: 10 }}>
              <Image src={url} alt={image.alternativeText || "صورة إضافية"} layout="fill" objectFit="cover" className="transition-transform duration-300" />
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <motion.div className="relative max-w-4xl max-h-[90vh]" layoutId={`image-${selected}`}>
              <Image src={selected} alt="صورة مكبرة" width={1200} height={800} className="rounded-lg object-contain max-h-[90vh]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// أزرار المشاركة الاجتماعية
const SocialShare = ({ postTitle, postUrl }: { postTitle: string, postUrl: string }) => {
  const networks = [
    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>, color: "bg-blue-600 hover:bg-blue-700" },
    { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${postUrl}&text=${encodeURIComponent(postTitle)}`, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>, color: "bg-sky-500 hover:bg-sky-600" },
    { name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`, icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, color: "bg-blue-700 hover:bg-blue-800" },
  ];
  return (
    <div className="flex items-center gap-4">
      <h3 className="font-bold text-blue-900">شارك المقال:</h3>
      <div className="flex gap-3">{networks.map(net => <a key={net.name} href={net.url} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 ${net.color}`} aria-label={`مشاركة على ${net.name}`}>{net.icon}</a>)}</div>
    </div>
  );
};

/*
================================================================================
  3. المكون الرئيسي (The Main Component) - النسخة النهائية الفاخرة
================================================================================
*/



interface PostPageProps {
  params: Promise<{ id: string; slug?: string }>;
}
export default  function  PostPage({ params }: PostPageProps) {
  
  const { id, slug } = use(params);
  const postId = Number(id);

  // ───────────── Hooks الأساسية ─────────────
  const { post, loading, error } = usePostBySlug(slug) as { post?: PostItem | null; loading: boolean; error: any };

  const [userComment, setUserComment] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
    post: 0,
  });

  useEffect(() => {
    if (post?.id) {
      setUserComment(prev => ({ ...prev, post: post.id }));
      console.log("✅ تم جلب البوست:", post);
      console.log("Post IDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDIDID:", post.id);
    }
  }, [post]);


  // console.log("serComment:", userComment.post);
  const [showAll, setShowAll] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  // const [userComment, setUserComment] = useState({
  //   name: "",
  //   email: "",
  //   rating: 0,
  //   comment: "",
   
  // });

  // ───────────── Effects ─────────────
  console.log("Current Slug:", slug);
  console.log("Loading State:", loading);
  console.log("Error State:", error);
  console.log("Post Object:", post);
  // 
  useEffect(() => { setCurrentUrl(window.location.href); }, []);


  

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // ───────────── التعامل مع حالات التحميل والخطأ ─────────────
  if (loading) return <LoadingSpinner />;
  if (error || !post) return <ErrorMessage error={error} />;

  // ───────────── المتغيرات الأخرى ─────────────
  const commentsArray = Array.isArray(post?.comments) ? post!.comments : [];
  const visibleComments = showAll ? commentsArray : commentsArray.slice(0, 3);
  const remainingCount = commentsArray.length - 3;

  const coverUrl = getImageUrl(post.CoverImage?.[0]);
  const comments = post.comments || [];
  const tags = post.tags || [];
  const iddd = post.id;
  // console.log("Current idddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddidddddddddddddddddddddddddddddddddddddddddiddddddddddddddddddddddddddddddddddddddddd:", iddd);
  const categories = post.categories || [];
  const relatedPosts = post.you_may_also_likes || [];
  


  // ───────────── إرسال التعليق ─────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postId = Number(post?.id); // نضمن أنه رقم
    if (!postId) { // هذا التحقق لا يزال مهمًا
      alert("لا يمكن إرسال التعليق لأن معرف المقال غير موجود.");
      return;
    }

    const payload = {
      data: {
        author_name: userComment.name,
        author_email: userComment.email,
        content: userComment.comment,
        rating: userComment.rating,
        post: 37, // <--- التغيير الرئيسي: استخدم post.id مباشرة من هنا
      },
    };


    try {
      console.log("🚀 Sending comment payload:", payload);
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/comments?status=draft`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("✅ Response from Strapi:", data);

      if (res.ok) {
        alert(
          `شكراً لك على تعليقك! سيتم مراجعته قبل النشر.\n\nالبيانات المرسلة:\n` +
          `الاسم: ${userComment.name}\n` +
          `الإيميل: ${userComment.email}\n` +
          `التقييم: ${userComment.rating}\n` +
          `التعليق: ${userComment.comment}\n` +
          `Post ID: ${postId }`
            
        );

        // setUserComment({ name: "", email: "", rating: 0, comment: "",post:""});
      }

else {
        alert("❌ خطأ أثناء إرسال التعليق: " + (data.error?.message || "غير معروف"));
      }
    } catch (error) {
      console.error("❌ Error submitting comment:", error);
      alert("حدث خطأ، حاول مرة أخرى.");
    }
  };



  return (
    <div className="bg-white/80">
      {/* 1. شريط التقدم الفاخر */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 origin-left z-50" style={{ scaleX }} />

      {/* 2. رأس المقال السينمائي */}
      <header className="relative h-[70vh] md:h-[90vh] flex items-end pb-16 md:pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {coverUrl && <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}><Image src={coverUrl} alt={post.Tital} layout="fill" objectFit="cover" priority /></motion.div>}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="relative z-10 container mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map(cat => <Link key={cat.id} href={`/category/${cat.Slug}`} className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm hover:bg-white/20 transition-colors">{cat.Name}</Link>)}
            {post.Featured && <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">مقال مميز</span>}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>{post.Tital}</h1>
          {post.Excerpt && <p className="mt-4 text-lg md:text-xl max-w-3xl text-gray-200">{post.Excerpt}</p>}
        </motion.div>
      </header>

      {/* 3. جسم المقال ومنطقة القراءة */}
      <div className="bg-gradient-to-br from-blue-50/70 to-sky-100/30">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white/50 rounded-3xl shadow-2xl shadow-blue-100/50 border border-sky-500/80 overflow-hidden"
          >
            <div className="grid grid-cols-12 lg:gap-x-10">

              {/* ============================================= */}
              {/* ==      العمود الرئيسي: محتوى المقال      == */}
              {/* ============================================= */}
              <main className="col-span-12 lg:col-span-8">
                <div className="p-8 md:p-12 lg:p-16">
                  {/* وصف الميتا: تم تحويله إلى مقدمة أنيقة */}
                  {post.MetaDescription && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, rotateX: 5 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 p-8 bg-gradient-to-br from-blue-50/80 to-sky-100/60 rounded-2xl border-l-4 border-blue-400 shadow-sm"
                    >
                      <span className="absolute -top-4 -right-4 text-blue-300 bg-white p-2 rounded-full shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                          <path d="M9.983 3v7.391A1 1 0 0 0 11 11.391h7.391a1 1 0 0 0 .983-1.416l-7.39-7.391a.998.998 0 0 0-1.984.416zM14.017 21v-7.391A1 1 0 0 0 13 12.609H5.609a1 1 0 0 0-.983 1.416l7.39 7.391c.54.54 1.443.124 1.443-.616z"></path>
                        </svg>
                      </span>
                      <div className="text-blue-600 font-medium text-sm mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        ملخص المقال
                      </div>
                      {post.MetaDescription}
                    </motion.div>
                  )}

                  {/* المحتوى الفعلي للمقال */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    
                  >
                    {/* تأثير خلفية زخرفية */}
                  
                    <StrapiContentRenderer content={post.contant || []} />
                  </motion.div>

                  {/* معرض الصور الإضافية */}
                  {post.AdditionalImages && post.AdditionalImages.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="mt-12"
                    >
                      <ImageGallery images={post.AdditionalImages} />
                    </motion.div>
                  )}
                </div>
              </main>

              {/* ============================================= */}
              {/* ==   العمود الجانبي: معلومات وأدوات مساعدة   == */}
              {/* ============================================= */}
              <aside className="col-span-12 lg:col-span-4">
                <div className="bg-gradient-to-b from-sky-50/30 to-blue-50/20 lg:h-full p-8 space-y-12 border-black lg:space-y-14 lg:sticky top-8 lg:py-16">

                  {/* معلومات المقال */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-blue-500/50"
                  >
                    <h3 className="font-bold text-xl text-blue-900 border-b-2 border-sky-200 pb-3 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      تفاصيل المقال
                    </h3>
                    <div className="flex justify-between items-center text-gray-600 py-2 border-b border-gray-100 last:border-b-0">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        الكاتب
                      </span>
                      <strong className="text-gray-900 font-medium">{post.users_permissions_user?.username || "غير معروف"}</strong>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 py-2 border-b border-gray-100 last:border-b-0">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        تاريخ النشر
                      </span>
                      <strong className="text-gray-900 font-medium">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("ar-EG", { day: 'numeric', month: 'long', year: 'numeric' }) : "غير محدد"}</strong>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 py-2 border-b border-gray-100 last:border-b-0">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        وقت القراءة
                      </span>
                      <strong className="text-gray-900 font-medium">{post.ReadingTime || 5} دقائق</strong>
                    </div>
                    {post.Views && (
                      <div className="flex justify-between items-center text-gray-600 py-2 border-b border-gray-100 last:border-b-0">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          المشاهدات
                        </span>
                        <strong className="text-gray-900 font-medium">{post.Views}</strong>
                      </div>
                    )}
                  </motion.div>

                  {/* الوسوم */}
                  {tags.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-blue-500/50"
                    >
                      <h3 className="font-bold text-xl text-blue-900 border-b-2 border-sky-200 pb-3 mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        الوسوم
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {tags.map(tag => (
                          <motion.div
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            key={tag.id}
                          >
                            <Link
                              href={`/tag/${tag.Slug}`}
                              className="bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-4 py-2 rounded-xl text-sm font-medium hover:from-sky-200 hover:to-blue-200 hover:text-sky-900 transition-all duration-300 shadow-sm inline-flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                              #{tag.Name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* المشاركة */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-blue-500/50"
                  >
                    <h3 className="font-bold text-xl text-blue-900 border-b-2 border-sky-200 pb-3 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      شارك المقال
                    </h3>
                    <SocialShare postTitle={post.Tital} postUrl={currentUrl} />
                  </motion.div>

                </div>
              </aside>

            </div>
          </motion.div>
        </div>
      </div>


        
      </div>
    
  );
}

