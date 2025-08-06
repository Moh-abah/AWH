/* LeadFormWithTracking.tsx */
'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const LeadFormWithTracking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const pathname = usePathname();
    const searchParams = useSearchParams();

    // إعداد تتبع البيانات
    useEffect(() => {
        const page_path = pathname + '?' + searchParams.toString();
        const page_location = window.location.href;
        const page_title = document.title;

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'page_view', {
                page_path,
                page_location,
                page_title,
            });
        }

        const utmParams = ['utm_source', 'utm_medium', 'utm_campaign'];
        utmParams.forEach((param) => {
            const value = searchParams.get(param);
            if (value) localStorage.setItem(param, value);
        });

        if (!localStorage.getItem('visit_start')) {
            localStorage.setItem('visit_start', Date.now().toString());
        }

        if (!localStorage.getItem('country')) {
            localStorage.setItem('country', 'Yemen');
        }

        const currentPage = window.location.pathname + window.location.search;
        const pages = localStorage.getItem('visited_pages');
        const pagesArray = pages ? JSON.parse(pages) : [];
        if (!pagesArray.includes(currentPage)) {
            pagesArray.push(currentPage);
            localStorage.setItem('visited_pages', JSON.stringify(pagesArray));
        }
    }, [pathname, searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const cUtmsource = localStorage.getItem("cUtmsource") || "";
        const cUtmmedium = localStorage.getItem("cUtmmedium") || "";
        const cUtmcampaign = localStorage.getItem("cUtmcampaign") || "";
        const addressCountry = localStorage.getItem("addressCountry") || "Yemen";
        const visitStart = localStorage.getItem("visit_start");
        const cVisitDurationMs = visitStart ? Date.now() - parseInt(visitStart, 10) : 0;
        const cVisitedPages = localStorage.getItem("cVisitedPages") || "[]";

        const payload = {
            name: formData.name,
            firstName: formData.name,
            emailAddress: formData.email,
            phoneNumber: formData.phoneNumber,
            cUtmsource,
            cUtmmedium,
            cUtmcampaign,
            addressCountry,
            cVisitDurationMs,
            cVisitedPages: JSON.parse(cVisitedPages)
        };

        try {
            const res = await fetch("http://62.169.17.101:8080/api/v1/Lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "66812b53c6f13a7200fd0376aba832fd",
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' });
            } else {
                console.error("فشل إرسال البيانات:", await res.text());
            }
        } catch (err) {
            console.error("خطأ أثناء الإرسال إلى EspoCRM:", err);
        }

        setIsSubmitting(false);
        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow max-w-md mx-auto">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="الاسم"
                required
                className="w-full border border-gray-300 rounded p-2"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                required
                className="w-full border border-gray-300 rounded p-2"
            />
            <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="رقم الهاتف"
                required
                className="w-full border border-gray-300 rounded p-2"
            />
            <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="الموضوع (اختياري)"
                className="w-full border border-gray-300 rounded p-2"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="رسالتك (اختياري)"
                className="w-full border border-gray-300 rounded p-2"
            ></textarea>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
            </button>
            {submitSuccess && <p className="text-green-600 text-center">تم إرسال البيانات بنجاح!</p>}
        </form>
    );
};

export default LeadFormWithTracking;
