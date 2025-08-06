// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Script from "next/script";
import GATracker from "@/components/GATracker";

const GA_MEASUREMENT_ID = "G-K953T969DH";



export const metadata :Metadata={
  title: " تطوير برمجيات متكاملة |  افاق العالم الرقمي",
  description: " DWH لتطوير البرمجيات، تقدم حلولاً احترافية في تطوير مواقع الويب، تطبيقات الجوال  Next.js وFlutter، لوحات تحكم Power BI، وخدمات تقنية متكاملة تلبي احتياجات أعمالك.",
  keywords: `
تطوير برمجيات,
تطوير مواقع ويب,
تطوير تطبيقات موبايل,
مطور Next.js,
مطور Flutter,
خدمات برمجية في اليمن,
تطوير برمجيات احترافية,
شركة تطوير برمجيات,
تصميم وبرمجة المواقع,
تطوير لوحات تحكم Power BI,
مطور ويب وموبايل,
حلول تقنية متكاملة,
مطور برامج في اليمن,
مطور تطبيقات أندرويد في اليمن,
برمجة تطبيقات آيفون في اليمن,
شركات برمجيات في صنعاء,
برمجة واجهات استخدام عربية,
تصميم تطبيقات موبايل,
تطوير تطبيقات أندرويد,
تطوير تطبيقات iOS,
تصميم واجهات المستخدم,
تطوير واجهات الاستخدام,
حلول تكنولوجيا المعلومات,
برمجة مواقع تفاعلية,
تطوير حلول الأعمال,
تطوير مواقع التجارة الإلكترونية,
خدمات دعم برمجي,
تطوير تطبيقات متقدمة,
تكامل APIs,
برمجة الواجهات الأمامية,
برمجة الواجهات الخلفية,
تطوير أنظمة معلومات,
تصميم واجهات UX/UI,
تحسين أداء التطبيقات,
خدمات استضافة مواقع,
صيانة البرمجيات,
تطوير برمجيات مخصصة,
تطوير برمجيات للشركات الصغيرة,
تطوير تطبيقات للقطاع الحكومي,
تحليل وتصميم النظم,
تطوير تطبيقات متعددة المنصات,
برمجة تطبيقات هجين,
تطوير تطبيقات React Native,
تصميم تطبيقات ذكية,
مطور برمجيات محترف في اليمن,
حلول ذكاء الأعمال,
تحليل البيانات باستخدام Power BI,
تطوير لوحات بيانات تفاعلية,
خدمات استشارية تقنية,
خدمات تطوير البرمجيات حسب الطلب,
تطوير برمجيات تعليمية,
تطوير تطبيقات تواصل اجتماعي,
تطوير تطبيقات تسويقية,
تطوير تطبيقات للأعمال التجارية,
تحسين تجربة المستخدم,
برمجة تطبيقات ذات جودة عالية,
خدمات برمجة في اليمن,
شركات برمجة تطبيقات في اليمن,
مطور برمجيات مستقل في اليمن,
تطوير برامج مخصصة للأعمال,
تطوير تطبيقات موبايل بسرعة عالية,
تقنيات حديثة في تطوير البرمجيات,
تطوير تطبيقات تكنولوجية متطورة,
شركة تطوير تطبيقات موبايل في اليمن,
تصميم وبرمجة مواقع متجاوبة,
خدمات تصميم واجهات تفاعلية,
برمجة مواقع ويب احترافية,
خدمات تطوير الويب المتقدمة,
حلول تطوير تطبيقات الهواتف الذكية,
شركات برمجيات رائدة في اليمن,
تطوير تطبيقات فريدة,
تطوير برمجيات للشركات الكبرى,
دعم فني لتطبيقات الموبايل,
تطوير مواقع شركات,
تطوير برامج متكاملة,
برمجة أنظمة متقدمة,
تطوير تطبيقات مبتكرة,
تصميم مواقع جذابة,
تطوير تطبيقات ويب متقدمة,
خدمات برمجة متميزة,
تطوير تطبيقات الأعمال,
حلول تقنية متكاملة للأعمال,
مطور ويب محترف في اليمن,
مطور تطبيقات Flutter محترف,
خدمات برمجة عالية الجودة,
تصميم برمجيات مبتكرة,
تطوير برمجيات تعتمد على Next.js,
شركات تطوير برمجيات في اليمن,
تطوير تطبيقات أعمال ناجحة,
برمجة وتطوير مواقع مخصصة,
تطوير تطبيقات واجهات استخدام عربية,
تصميم وتطوير تطبيقات موبايل ذكية,
`,
  authors: [{ name: " DWH لتطوير البرمجيات" }],
  
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: " DWH |    افاق العالم الرقمي للتطور التكنولوجي - تطوير برمجيات متكامله",
    description: " DWH تقدم أحدث تقنيات تطوير الويب والموبايل وحلول تسويقيه وتصميمات بصريه مع حلول مخصصة بأعلى جودة.",
    url: "https://digitalworldhorizon.com/",
    siteName: " DWH",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "https://digitalworldhorizon.com/logo.png",
        width: 1200,
        height: 630,
        alt: " DWH – تطوير برمجيات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: " DWH | مطور برمجيات محترف",
    description: " DWH تقدم حلولاً تقنية متقدمة ومخصصة لاحتياجات عملك.",
    creator: "@YourTwitterHandle",
    images: ["https://digitalworldhorizon.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo1.png",
  },
};
export function generateViewport() {
  return {
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">

      <head>
        {/* سكريبتات Google Analytics */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900">
        <GATracker />
        
        
        <Navbar />
        
        <main>{children} </main>

        {/* <LeadFormWithTracking /> */}
        <Footer />
      </body>
    </html>
  );
}
