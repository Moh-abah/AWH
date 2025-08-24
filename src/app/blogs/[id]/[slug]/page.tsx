
"use client";

import React, { useEffect, useState, useRef, ReactNode } from "react";
import { useParams } from "next/navigation";
import { usePostBySlug } from "@/lib/usePostBySlug"; // تأكد من صحة المسار
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CategoriesSidebar from "@/lib/CategoriesSidebar"; // تأكد من صحة المسار
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
const ContentRenderer = ({ content }: { content: any[] }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  if (!content || !Array.isArray(content)) return null;

  // دالة ذكية لتحديد نوع العنصر تلقائياً من خصائص العنصر
  const detectElementType = (element: any) => {
    if (!element) return 'paragraph';

    // إذا كان هناك حقل type موجود، استخدمه
    if (element.type) return element.type;

    const children = Array.isArray(element.children) ? element.children : [];
    const text = children.map((c: any) => c?.text || "").join("").trim();

    // فحص الخصائص المختلفة لتحديد النوع

    // تحديد العناوين
    if (element.level || element.heading) return 'heading';

    // تحديد القوائم
    if (element.listType || element.format === 'ordered' || element.format === 'unordered') return 'list';
    if (element.type === 'list-item' || element.listItem) return 'list';

    // تحديد الاقتباسات
    if (element.quote || text.startsWith('>')) return 'quote';

    // تحديد الكود
    if (element.code || text.startsWith('```') || text.includes('```')) return 'code';

    // تحديد الصور
    if (element.src || element.url || element.image) return 'image';

    // فحص النص لتحديد إذا كان عنوان أم فقرة
    if (text.length > 0) {
      // إذا كان النص قصير ولا يحتوي على نقاط، قد يكون عنوان
      if (text.length < 80 && !text.includes('.') && !text.includes('،')) {
        // فحص إضافي: إذا كان النص يحتوي على تنسيق عريض، قد يكون عنوان
        const hasBoldFormatting = children.some((child: any) => child.bold);
        if (hasBoldFormatting) return 'heading';
      }

      // إذا كان النص طويل أو يحتوي على نقاط، فهو فقرة
      return 'paragraph';
    }

    // افتراضي
    return 'paragraph';
  };

  // معالجة النقاط المتتالية مع تحسينات بصرية
  const processTextWithDots = (text: string) => {
    if (!text) return text;

    // إذا كان النص ينتهي بنقطتين أو أكثر
    if (text.match(/\.{2,}$/)) {
      const dotCount = (text.match(/\.+$/) || [''])[0].length;
      const baseText = text.replace(/\.+$/, '');

      return (
        <span className="relative">
          {baseText}
          <span className="dot-sequence absolute">
            {Array.from({ length: Math.min(dotCount, 5) }).map((_, i) => (
              <span
                key={i}
                className="dot"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  fontSize: `${1 + i * 0.08}em`,
                  color: i > 2 ? '#3b82f6' : i > 1 ? '#1e40af' : '#1e3a8a'
                }}
              >
                •
              </span>
            ))}
          </span>
        </span>
      );
    }

    // إذا كان النص يحتوي على نقاط متتالية في المنتصف
    const parts = text.split(/(\.{2,})/);
    return parts.map((part, i) => {
      if (part.match(/\.{2,}/)) {
        const dotCount = Math.min(part.length, 5);
        return (
          <span key={i} className="dot-sequence inline">
            {Array.from({ length: dotCount }).map((_, j) => (
              <span
                key={j}
                className="dot"
                style={{
                  animationDelay: `${j * 0.15}s`,
                  fontSize: `${1 + j * 0.08}em`,
                  color: j > 2 ? '#3b82f6' : j > 1 ? '#1e40af' : '#1e3a8a'
                }}
              >
                •
              </span>
            ))}
          </span>
        );
      }
      return part;
    });
  };

  // تأثيرات الحركة المحسّنة للعناصر
  const getMotionProps = (index: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-5% 0px -5% 0px" },
    transition: {
      duration: 0.6,
      delay: index * 0.08,
      ease: "easeOut" as const
    }
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="prose prose-xl max-w-none 
                  prose-p:text-gray-900 prose-p:leading-relaxed prose-p:my-6
                  prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mt-10 prose-headings:mb-6
                  prose-a:text-blue-700 prose-a:underline hover:prose-a:text-blue-900
                  prose-strong:text-slate-900 prose-strong:font-extrabold
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
                  prose-blockquote:bg-gradient-to-r prose-blockquote:from-blue-50 prose-blockquote:to-white
                  prose-blockquote:p-8 prose-blockquote:rounded-r-xl prose-blockquote:text-gray-800
                  prose-ul:my-6 prose-li:my-2
                  prose-hr:my-10 prose-hr:border-t-2 prose-hr:border-blue-300"
      >
        {content.map((block, index) => {
          const children = Array.isArray(block.children) ? block.children : [];
          const text = children.map((c: any) => c?.text || "").join("").trim();

          // تخطي العناصر الفارغة
          if (!text && !block.src && !block.url) return null;

          // تحديد نوع العنصر تلقائياً
          const elementType = detectElementType(block);

          // عرض العناوين
          if (elementType === "heading") {
            const level = block.level || (text.length < 50 ? 2 : 3);
           

            return (
              <motion.div key={index} id={`heading-${index}`} className="scroll-mt-24" {...getMotionProps}>
                {level === 1 && <h1 className="relative inline-block">{processTextWithDots(text)}<span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span></h1>}
                {level === 2 && <h2 className="relative inline-block">{processTextWithDots(text)}<span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span></h2>}
                {level === 3 && <h3 className="relative inline-block">{processTextWithDots(text)}<span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span></h3>}
                {level === 4 && <h4 className="relative inline-block">{processTextWithDots(text)}<span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span></h4>}
                {level === 5 && <h5 className="relative inline-block">{processTextWithDots(text)}<span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span></h5>}
                {level === 6 && <h6 className="relative inline-block">{processTextWithDots(text)}<span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span></h6>}
              </motion.div>
            );
          }

          // عرض الفقرات
          // if (elementType === "paragraph") {
          //   return (
          //     <motion.p
          //       key={index}
          //       {...getMotionProps(index)}
          //       className="text-justify text-gray-900 leading-loose text-lg"
          //     >
          //       {children.map((child: any, i: number) => {
          //         const content = processTextWithDots(child.text || "");

          //         let el = <span key={i}>{content}</span>;
          //         if (child.bold) el = <strong key={i} className="font-black text-slate-900 bg-yellow-100 px-1 py-0.5 rounded">{content}</strong>;
          //         if (child.italic) el = <em key={i} className="italic text-blue-800 font-medium">{content}</em>;
          //         if (child.underline) el = <u key={i} className="underline decoration-wavy decoration-blue-500 decoration-2 underline-offset-4">{content}</u>;
          //         if (child.code) el = <code key={i} className="bg-gray-900 text-green-400 px-3 py-1.5 rounded-md text-sm font-mono border border-gray-700">{content}</code>;
          //         return el;
          //       })}
          //     </motion.p>
          //   );
          // }

          if (elementType === "paragraph") {
            return (
              <motion.p
                key={index}
                {...getMotionProps(index)}
                className="text-justify text-gray-900 leading-loose text-lg"
              >
                {children.map((child: any, i: number) => {
                  
                  let el = <span key={i}>{content}</span>;
                  if (child.bold)
                    el = (
                      <strong
                        key={i}
                        className="font-black text-slate-900 bg-yellow-100 px-1 py-0.5 rounded"
                      >
                        {content}
                      </strong>
                    );
                  if (child.italic)
                    el = (
                      <em key={i} className="italic text-blue-800 font-medium">
                        {content}
                      </em>
                    );
                  if (child.underline)
                    el = (
                      <u className="underline decoration-wavy decoration-blue-500 decoration-2 underline-offset-4">
                        {content}
                      </u>
                    );
                  if (child.code)
                    el = (
                      <code className="bg-gray-900 text-green-400 px-3 py-1.5 rounded-md text-sm font-mono border border-gray-700">
                        {content}
                      </code>
                    );
                  return el;
                })}
              </motion.p>
            );
          }



          // عرض الاقتباسات
          if (elementType === 'quote') {
            return (
              <motion.blockquote
                key={index}
                {...getMotionProps(index)}
                className="relative my-8 p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 border-l-4 border-blue-500 rounded-r-xl shadow-lg"
              >
                <div className="absolute top-4 left-4 text-4xl text-blue-400 opacity-30"></div>
                <div className="ml-8 text-gray-800 text-xl leading-relaxed font-medium italic">
                  {processTextWithDots(text)}
                </div>
                {block.author && (
                  <footer className="text-right text-gray-600 mt-4 font-semibold">
                    — {block.author}
                  </footer>
                )}
              </motion.blockquote>
            );
          }

          // عرض القوائم
          if (elementType === 'list') {
            const isOrdered = block.listType === 'ordered' || block.format === 'ordered';
            const ListTag = isOrdered ? 'ol' : 'ul';

            return (
              <motion.div
                key={index}
                {...getMotionProps(index)}
                className="my-8"
              >
                <ListTag className={isOrdered ?
                  'list-decimal list-inside space-y-3 marker:font-bold marker:text-blue-700' :
                  'list-disc list-inside space-y-3 marker:text-blue-600'
                }>
                  {children.map((item: any, i: number) => {
                    const itemChildren = Array.isArray(item.children) ? item.children : [];
                    const itemText = itemChildren.map((c: any) => c?.text || "").join("");

                    return (
                      <li key={i} className="text-gray-900 text-lg leading-relaxed pl-2">
                        {processTextWithDots(itemText)}
                      </li>
                    );
                  })}
                </ListTag>
              </motion.div>
            );
          }

          // عرض الكود
          if (elementType === 'code') {
            return (
              <motion.pre
                key={index}
                {...getMotionProps(index)}
                className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-8 font-mono text-sm border border-gray-700 shadow-2xl"
              >
                <code className="text-green-400">{text}</code>
              </motion.pre>
            );
          }

          // عرض الصور
          if (elementType === 'image') {
            return (
              <motion.figure
                key={index}
                {...getMotionProps(index)}
                className="my-10 text-center"
              >
                <div className="relative inline-block">
                  <Image
                    src={block.src || block.url}
                    alt={block.alt || block.alternativeText || 'صورة'}
                    className="mx-auto rounded-2xl shadow-2xl max-w-full h-auto border border-gray-200"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-gray-600 mt-4 italic text-lg">
                    {processTextWithDots(block.caption)}
                  </figcaption>
                )}
              </motion.figure>
            );
          }

          // عرض افتراضي للعناصر غير المعروفة (كفقرة)
          return (
            <motion.p
              key={index}
              {...getMotionProps(index)}
              className="text-justify text-gray-900 leading-loose text-lg"
            >
              {processTextWithDots(text)}
            </motion.p>
          );
        })}
      </motion.div>

      <style jsx>{`
        .dot-sequence {
          display: inline-block;
          white-space: nowrap;
          margin-left: 2px;
        }
        .dot {
          display: inline-block;
          animation: pulse 2s infinite alternate;
          font-weight: bold;
          text-shadow: 0 0 8px currentColor;
        }
        @keyframes pulse {
          0% { 
            opacity: 0.6; 
            transform: translateY(0) scale(1); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(-3px) scale(1.1); 
          }
        }
      `}</style>
    </div>
  );
};






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
  id: number;
}

export default function PostPage({ id }: PostPageProps) {
  const params = useParams();
  const slug = (params?.slug as string) || "";

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
                  
                    <ContentRenderer content={post.contant || []} />
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


        {/* 4. الأقسام الإضافية (مقالات ذات صلة والتعليقات) */}
        {/* <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">مقالات قد تعجبك أيضًا</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.slice(0, 4).map(p => (
                  <Link key={p.id} href={`/blog/${p.categories?.[0]?.id ?? 0}/${p.Slug}`} className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                    <h3 className="font-bold text-xl text-blue-800 mb-2">{p.Tital}</h3>
                    <p className="text-gray-600 line-clamp-2">{p.Excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}


        </div> */}
      </div>
    
  );
}




{/* <section className="mt-20">
  <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">التعليقات ({comments.length})</h2>

  {visibleComments.map((comment) => (
    <div key={comment.id} className="bg-gray-50 rounded-xl p-6 mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center text-white font-bold">
          {comment.author_name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-blue-800">{comment.author_name}</h4>
          <p className="text-gray-500 text-sm">
            {new Date(comment.createdAt).toLocaleDateString("ar-SA")}
          </p>
          {/* عرض النجوم */}
//           <div className="flex mt-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span
//                 key={star}
//                 className={
//                   star <= (comment.rating ?? 0)
//                     ? "text-yellow-400"
//                     : "text-gray-300"
//                 }
//               >
//                 ★
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <p className="text-gray-700 leading-7">{comment.content}</p>
//     </div>
//   ))}

//   {/* زر عرض المزيد */}
//   {!showAll && remainingCount > 0 && (
//     <button
//       onClick={() => setShowAll(true)}
//       className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//     >
//       عرض {remainingCount} تعليق{remainingCount > 1 ? "ات" : ""}
//     </button>
//   )}
//   <div className="bg-gray-50 rounded-xl p-8">
//     <h4 className="text-xl font-bold text-blue-800 mb-6">أضف تعليقك</h4>
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label htmlFor="name" className="block text-gray-700 mb-2">الاسم</label>
//           <input
//             id="name"
//             type="text"
//             value={userComment.name}
//             onChange={(e) => setUserComment({ ...userComment, name: e.target.value })}
//             className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sky-700"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
//           <input
//             id="email"
//             type="email"
//             value={userComment.email}
//             onChange={(e) => setUserComment({ ...userComment, email: e.target.value })}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sky-700"
//             required
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-gray-700 mb-2">التقييم</label>
//         <div className="flex gap-1">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <button
//               key={star}
//               type="button"
//               onClick={() => setUserComment({ ...userComment, rating: star })}
//               className="text-2xl focus:outline-none"
//             >
//               {star <= userComment.rating ? <span className="text-yellow-400">★</span> : <span className="text-gray-500">☆</span>}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div>
//         <label htmlFor="comment" className="block text-gray-700 mb-2">التعليق</label>
//         <textarea
//           id="comment"
//           rows={5}
//           value={userComment.comment}
//           onChange={(e) => setUserComment({ ...userComment, comment: e.target.value })}
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sky-700"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 flex items-center gap-2"
//       >
//         إرسال التعليق
//       </button>
//     </form>
//   </div>


// </section> */}