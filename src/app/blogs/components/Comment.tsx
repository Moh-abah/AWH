"use client";

import React, { useEffect, useState } from "react";



interface Props {
    id: number; // ID البوست الحالي
}

export default function CommentSection({ id }: Props) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [userComment, setUserComment] = useState({
        name: "",
        email: "",
        rating: 0,
        comment: ""
    });
    const [loading, setLoading] = useState(false);

    // جلب التعليقات المنشورة
    const fetchComments = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/comments?filters[post][id][$eq]=${id}&filters[status][$eq]=published&sort[0]=createdAt:desc`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
})
            
            const data = await res.json();
            setComments(data.data || []);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [id]);

    // إرسال تعليق جديد كمسودة
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!id) {
            alert("لا يمكن إرسال التعليق لأن معرف المقال غير موجود.");
            return; // أوقف الدالة هنا
        }
        setLoading(true);

        const payload = {
            data: {
                author_name: userComment.name,
                author_email: userComment.email,
                content: userComment.comment,
                rating: userComment.rating,
                post: id, // ID البوست الحالي
               
            },
        };

        try {
            // اطبع البيانات في الكونسول
            console.log("🚀 Sending comment payload:", payload);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/comments?status=draft`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
                    },
                    body: JSON.stringify(payload),
                }
            );

            const data = await res.json();
            console.log("✅ Response from Strapi:", data);

            if (res.ok) {
                alert("شكراً لك على تعليقك! سيتم مراجعته قبل النشر.");
                setUserComment({ name: "", email: "", rating: 0, comment: "" });
            } else {
                alert("❌ خطأ أثناء إرسال التعليق: " + (data.error?.message || "غير معروف"));
            }
        } catch (error) {
            console.error("❌ Error submitting comment:", error);
            alert("حدث خطأ، حاول مرة أخرى.");
        }
        setLoading(false);
    };

    return (
        <div className="mt-12 pt-8 border-t border-gray-200">
           
            {/* قائمة التعليقات */}
            {/* عرض التعليقات */}
            {/* {post?.comments?.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                            {comment.author_name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-800">{comment.author_name}</h4>
                            <p className="text-gray-500 text-sm">{new Date(comment.createdAt).toLocaleDateString("ar-SA")}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-7">{comment.content}</p>
                </div>
            ))} */}
            {/* إضافة تعليق جديد */}
            <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-blue-800 mb-6">أضف تعليقك</h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2">الاسم</label>
                            <input
                                id="name"
                                type="text"
                                value={userComment.name}
                                onChange={(e) => setUserComment({ ...userComment, name: e.target.value })}
                                className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sky-700"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                            <input
                                id="email"
                                type="email"
                                value={userComment.email}
                                onChange={(e) => setUserComment({ ...userComment, email: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sky-700"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">التقييم</label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setUserComment({ ...userComment, rating: star })}
                                    className="text-2xl focus:outline-none"
                                >
                                    {star <= userComment.rating ? <span className="text-yellow-400">★</span> : <span className="text-gray-500">☆</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="comment" className="block text-gray-700 mb-2">التعليق</label>
                        <textarea
                            id="comment"
                            rows={5}
                            value={userComment.comment}
                            onChange={(e) => setUserComment({ ...userComment, comment: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sky-700"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 flex items-center gap-2"
                    >
                        إرسال التعليق
                    </button>
                </form>
            </div>
        </div>
    );
}
