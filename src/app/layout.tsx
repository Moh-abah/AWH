
// app/layout.tsx


import type React from "react"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import type { Metadata } from "next"
import Script from "next/script"
import GATracker from "@/components/GATracker"

const GA_MEASUREMENT_ID = "G-K953T969DH"

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "آفاق العالم الرقمي - DWH",
  alternateName: "Digital World Horizon",
  url: "https://digitalworldhorizon.com",
  logo: "https://digitalworldhorizon.com/logo.png",
  description: "شركة متخصصة في تطوير البرمجيات المتكاملة، تطبيقات الويب والجوال، وحلول التجارة الإلكترونية",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressLocality: "الرياض",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["ar", "en"],
    telephone: "+966-55-555-5555", // TODO: استبدل هذا برقم الهاتف الصحيح
  },
  sameAs: ["https://twitter.com/digitalworldhorizon", "https://linkedin.com/company/digitalworldhorizon"],
  foundingDate: "2020",
  numberOfEmployees: "10-50",
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  serviceType: ["Software Development", "Web Development", "Mobile App Development", "E-commerce Solutions"],
}

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development Services",
  provider: {
    "@type": "Organization",
    name: "آفاق العالم الرقمي",
  },
  areaServed: "SA",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات تطوير البرمجيات",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "تطوير مواقع الويب",
          description: "تطوير مواقع ويب احترافية باستخدام أحدث التقنيات",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "تطوير تطبيقات الجوال",
          description: "تطوير تطبيقات Android و iOS باستخدام Flutter",
        },
      },
    ],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalworldhorizon.com"),
  title: {
    default: "تطوير برمجيات متكاملة وحلول رقمية | افاق العالم الرقمي (DWH)",
    template: `%s | افاق العالم الرقمي (DWH)`,
  },
  description:
    "شركة افاق العالم الرقمي (DWH) متخصصة في تطوير البرمجيات وحلول الويب. نقدم خدمات تطوير مواقع وتطبيقات جوال باستخدام Next.js وFlutter، تصميم واجهات UX/UI، وحلول تجارة إلكترونية متكاملة لنمو أعمالك في السعودية.",
  keywords: `
تطوير برمجيات,
تطوير مواقع ويب,
تطوير تطبيقات موبايل,
تطوير تطبيقات Android و iOS,
Flutter و Next.js,
حلول التجارة الإلكترونية,
تصميم واجهات UX/UI,
لوحات تحكم Power BI,
برمجة واجهات أمامية وخلفية,
خدمات برمجية احترافية في السعودية,
حلول تقنية متكاملة,
تحسين تجربة المستخدم,
تصميم وتطوير تطبيقات ذكية,
برمجة مواقع تفاعلية,
تطوير تطبيقات أعمال,
دعم وصيانة البرمجيات,
`,
  authors: [{ name: " DWH لتطوير البرمجيات" }],

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "DWH | افاق العالم الرقمي للتطور التكنولوجي - تطوير برمجيات متكامله",
    description: " DWH تقدم أحدث تقنيات تطوير الويب والموبايل وحلول تسويقيه وتصميمات بصريه مع حلول مخصصة بأعلى جودة.",
    url: "https://digitalworldhorizon.com/",
    siteName: " DWH",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/logo-og.png", // تأكد من وجود هذا الملف في public/
        width: 1200,
        height: 630,
        alt: "شعار شركة افاق العالم الرقمي (DWH)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DWH | حلول برمجية مبتكرة للأعمال",
    description: " DWH تقدم حلولاً تقنية متقدمة ومخصصة لاحتياجات عملك.",
    creator: "@dwh_sa", // TODO: استبدل هذا بحساب تويتر الفعلي
    images: ["/twitter-image.png"], // تأكد من وجود هذا الملف في public/
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo1.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      'ar-SA': '/',
    },
  },
}

export function generateViewport() {
  return {
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  }
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <Script
          id="services-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesStructuredData),
          }}
        />

        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WRGP5D2N');
    `,
          }}
        />

        {/* سكريبتات Google Analytics */}
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
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
        <div
          dangerouslySetInnerHTML={{
            __html: `
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRGP5D2N"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
    `,
          }}
        />

        <GATracker />

        <Navbar />

        <main>{children}</main>

        {/* <LeadFormWithTracking /> */}
        <Footer />
      </body>
    </html>
  )
}
