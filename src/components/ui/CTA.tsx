'use client';

import Link from 'next/link';

export default function CTA() {
    return (
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6 text-center rounded-xl shadow-xl my-16 mx-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">جاهز تبني حضورك الرقمي؟</h2>
                <p className="text-lg mb-8">خلينا نساعدك تطلق موقعك أو تطبيقك بشكل احترافي، وابدأ تكبر مشروعك من اليوم.</p>
                <Link
                    href="/contact"
                    className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
                >
                    احجز مشروعك الآن
                </Link>
            </div>
        </section>
    );
}
