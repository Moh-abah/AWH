// app/head.tsx
export default function Head() {
    return (
        <>
            {/* Google الجوجل */}
            <meta name="google-site-verification" content="sWFdmLk4UeLp9-e8_x4jOgFJHnRiCbvb0aEBpi9_3tw" />

            {/* اللغة والترميز */}
            <meta charSet="UTF-8" />
            <meta httpEquiv="Content-Language" content="ar" />

            {/* منع التنجيم التلقائي */}
            <meta name="format-detection" content="telephone=no,email=no,address=no" />

            {/* مظهر التطبيق على الأجهزة */}
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#0d9488" />
        </>
    );
}
