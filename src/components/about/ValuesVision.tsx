// components/about/ValuesVision.tsx

export default function ValuesVision() {
    return (
        <section className="max-w-6xl mx-auto py-12 px-6 bg-blue-50 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">قيمنا ورؤيتنا</h2>

            <div className="grid md:grid-cols-2 gap-10">
                {/* القيم الأساسية */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-700">قيمنا الأساسية</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>الابتكار والإبداع في كل ما نقدمه.</li>
                        <li>الشفافية والنزاهة مع عملائنا وشركائنا.</li>
                        <li>التركيز على تجربة المستخدم وجودة الأداء.</li>
                        <li>العمل الجماعي وروح الفريق.</li>
                        <li>الالتزام بالمواعيد وتحقيق النتائج.</li>
                    </ul>
                </div>

                {/* الرؤية */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-700">رؤيتنا المستقبلية</h3>
                    <p className="text-gray-700 leading-relaxed">
                        نسعى لنكون من أبرز الشركات التقنية في المنطقة، رائدين في تقديم حلول رقمية مبتكرة تساعد عملائنا على النجاح والنمو في عالم متغير سريع.
                        نؤمن بأن التكنولوجيا هي المفتاح لبناء مستقبل رقمي مزدهر ونلتزم بتطوير خدماتنا باستمرار لتلبية احتياجات السوق.
                    </p>
                </div>
            </div>
        </section>
    );
}
  