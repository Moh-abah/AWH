export default function Head() {
    return (
        <>
            {/* التحقق من جوجل */}
            <meta name="google-site-verification" content="sWFdmLk4UeLp9-e8_x4jOgFJHnRiCbvb0aEBpi9_3tw" />

            {/* وصف الموقع - مهم لمحركات البحث ولظهور النص المختصر */}
            <meta
                name="description"
                content="شركة AWH لتطوير البرمجيات، تقدم حلولاً احترافية في تطوير مواقع الويب، تطبيقات الجوال بـ Next.js وFlutter، لوحات تحكم Power BI، وخدمات تقنية متكاملة تلبي احتياجات أعمالك."
            />

            {/* الكلمات المفتاحية - تساعد محركات البحث في فهم المحتوى */}
            <meta
                name="keywords"
                content="تطوير برمجيات, تطوير مواقع ويب, تطوير تطبيقات موبايل, مطور Next.js, مطور Flutter, خدمات برمجية في اليمن, تصميم وبرمجة المواقع, حلول تقنية متكاملة"
            />

            {/* مؤلف الموقع أو الشركة */}
            <meta name="author" content="شركة AWH لتطوير البرمجيات" />

            {/* التوافق مع شاشات الأجهزة المختلفة */}
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

            {/* تعليمات لعناكب البحث (محركات البحث) */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* تحديد اللغة والمحتوى */}
            <meta httpEquiv="Content-Language" content="ar" />
            <meta charSet="UTF-8" />

            {/* منع التداخل والتهجئة التلقائية */}
            <meta name="format-detection" content="telephone=no" />
            <meta name="format-detection" content="address=no" />
            <meta name="format-detection" content="email=no" />

            {/* Open Graph - لتحسين مشاركة الرابط على فيسبوك ومنصات التواصل */}
            <meta property="og:title" content="شركة AWH | تطوير برمجيات متكاملة | اوقض افق العالم بالتقنية" />
            <meta property="og:description" content="شركة AWH تقدم أحدث تقنيات تطوير الويب والموبايل مع حلول مخصصة تلبي متطلبات عملك بدقة واحترافية." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://awh-smoky.vercel.app/" />
            <meta property="og:image" content="https://awh-smoky.vercel.app/og-image.jpg" />
            <meta property="og:locale" content="ar_SA" />
            <meta property="og:site_name" content="شركة AWH" />

            {/* Twitter Card - لتحسين مشاركة الرابط على تويتر */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="شركة AWH | محمد يحيى عبه - مطور برمجيات محترف" />
            <meta name="twitter:description" content="شركة AWH تقدم حلول برمجية مبتكرة في تطوير مواقع الويب وتطبيقات الموبايل مع أحدث التقنيات." />
            <meta name="twitter:image" content="https://awh-smoky.vercel.app/twitter-image.jpg" />
            <meta name="twitter:site" content="@YourTwitterHandle" />
            <meta name="twitter:creator" content="@YourTwitterHandle" />

            {/* أيقونات الموقع */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* روابط لملفات CSS أو خطوط خارجية يمكن إضافتها هنا */}
            {/* مثال: */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet" /> */}

            {/* إعدادات أخرى مهمة مثل manifest */}
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#0d9488" /> {/* لون شريط المتصفح في الهواتف */}

            {/* تحسين SEO: Canonical URL لتجنب المحتوى المكرر */}
            <link rel="canonical" href="https://awh-smoky.vercel.app/" />
        </>
    );
}
