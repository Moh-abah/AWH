// components/Hero.tsx

export default function Hero() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/tech-bg.jpg')", // ضيف الصورة هنا
            }}
        >
            <div className="absolute inset-0 bg-black/60" /> {/* تعتيم للخلفية */}

            <div className="relative z-10 text-center text-white px-4 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    نبني مستقبل حضورك الرقمي.
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    مواقع احترافية، تطبيقات أندرويد، وخدمات برمجية تساعدك على التميز والانتشار.
                </p>
                <a
                    href="#contact"
                    className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-lg font-semibold"
                >
                    اطلب مشروعك الآن
                </a>
            </div>
        </section>
    );
}
  