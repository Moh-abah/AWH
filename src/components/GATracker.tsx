// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// const GA_MEASUREMENT_ID = "G-K953T969DH";

// declare global {
//     interface Window {
//         dataLayer: any[];
//         gtag: (...args: any[]) => void;
//     }
// }

// export default function GATracker() {
//     const pathname = usePathname();

//     useEffect(() => {
//         if (!window.gtag) return;
//         window.gtag("config", GA_MEASUREMENT_ID, {
//             page_path: pathname,
//         });
//     }, [pathname]);

//     return null;
// }

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-K953T969DH";

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

export default function GATracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // 1. تتبع صفحة العرض وتخزين UTM
    useEffect(() => {
        if (typeof window.gtag !== "function") return;

        const page_path = pathname + "?" + searchParams.toString();
        const page_location = window.location.href;
        const page_title = document.title;

        // إرسال حدث page_view إلى Google Analytics
        window.gtag("event", "page_view", {
            page_path,
            page_location,
            page_title,
        });

        // تخزين UTM parameters في localStorage
        const utmParams = ["utm_source", "utm_medium", "utm_campaign"];
        utmParams.forEach((param) => {
            const value = searchParams.get(param);
            if (value) {
                localStorage.setItem(param, value);
            }
        });

        // تخزين وقت الدخول لو لم يكن مخزناً مسبقاً
        if (!localStorage.getItem("visit_start")) {
            localStorage.setItem("visit_start", Date.now().toString());
        }

        // تخزين البلد (مثال ثابت، يمكن تعديله لجلب البلد من API خارجي)
        if (!localStorage.getItem("country")) {
            localStorage.setItem("country", "Yemen");
        }
        
        // تخزين الصفحة الحالية في سجل الصفحات المزارَة
        const currentPage = window.location.pathname + window.location.search;
        const pages = localStorage.getItem("visited_pages");
        const pagesArray = pages ? JSON.parse(pages) : [];
        if (!pagesArray.includes(currentPage)) {
            pagesArray.push(currentPage);
            localStorage.setItem("visited_pages", JSON.stringify(pagesArray));
        }
    }, [pathname, searchParams]);

    // 2. تتبع ضغط زر CTA (مثلاً زر تواصل)
    useEffect(() => {
        const handleClick = () => {
            if (typeof window.gtag === "function") {
                window.gtag("event", "click_contact_button", {
                    event_category: "engagement",
                    event_label: "Contact CTA",
                });
            }
        };

        const btn = document.getElementById("contact-cta");
        if (btn) {
            btn.addEventListener("click", handleClick);
        }

        return () => {
            if (btn) {
                btn.removeEventListener("click", handleClick);
            }
        };
    }, []);

    // 3. التعامل مع إرسال النموذج إلى EspoCRM مع جميع البيانات
    useEffect(() => {
        const form = document.getElementById("lead-form") as HTMLFormElement | null;
        if (!form) return;

        const handleSubmit = async (e: Event) => {
            e.preventDefault();

            const name = (document.getElementById("lead-name") as HTMLInputElement)?.value || "";
            const email = (document.getElementById("lead-email") as HTMLInputElement)?.value || "";
            const phone = (document.getElementById("lead-phone") as HTMLInputElement)?.value || "";

            // استرجاع بيانات UTM
            const cUtmsource = localStorage.getItem("utm_source") || "";
            const cUtmmedium = localStorage.getItem("utm_medium") || "";
            const cUtmcampaign = localStorage.getItem("utm_campaign") || "";

            // بيانات البلد
            const addressCountry = localStorage.getItem("country") || "";

            // مدة التصفح بالميللي ثانية
            const visitStart = localStorage.getItem("visit_start");
            const visitDuration = visitStart ? Date.now() - parseInt(visitStart, 10) : 0;

            // الصفحات التي زارها (كمصفوفة)
            const cVisitedPages = localStorage.getItem("visited_pages") || "[]";

            const payload = {
                name: name,
                emailAddress: email,
                phoneNumber: phone,
                cUtmsource,
                cUtmmedium,
                cUtmcampaign,
                addressCountry,
                cVisitDurationMs: visitDuration,
                cVisitedPages: JSON.parse(cVisitedPages),
            };

            try {
                const res = await fetch(" http://62.169.17.101:8080/api/v1/Lead", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "66812b53c6f13a7200fd0376aba832fd",
                    },
                    body: JSON.stringify(payload),
                });

                if (res.ok) {
                    console.log("Lead submitted to EspoCRM.");
                    // هنا ممكن تنظف localStorage أو تبقيه حسب رغبتك
                } else {
                    console.error("Failed to submit lead.", await res.text());
                }
            } catch (err) {
                console.error("Error sending to EspoCRM:", err);
            }
        };

        form.addEventListener("submit", handleSubmit);

        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, []);
    

    return null;
}

