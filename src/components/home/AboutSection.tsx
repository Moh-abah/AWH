// components/home/AboutSection.tsx

import SectionTitle from "../ui/SectionTitle";

export default function AboutSection() {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* من نحن */}
                <div>
                    <SectionTitle title="من نحن" />
                    <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        نحن شركة AWH – Awake World Horizon، نؤمن أن التواجد الرقمي ليس مجرد موقع أو تطبيق، بل تجربة متكاملة تبني ثقة العملاء وتدعم نمو الأعمال. نعمل بشغف على تقديم حلول برمجية متطورة تلبي احتياجاتك بدقة واحتراف.
                    </p>
                </div>

                {/* خدماتنا الأساسية */}
                <div>
                    <SectionTitle title="خدماتنا الأساسية" />
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="font-semibold text-xl mb-2">مواقع شخصية</h3>
                            <p className="text-gray-600">نعكس هويتك الرقمية بتصميمات أنيقة وسريعة.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="font-semibold text-xl mb-2">تطبيقات أندرويد</h3>
                            <p className="text-gray-600">نطوّر تطبيقات مخصصة لمجال عملك وتخدم جمهورك.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="font-semibold text-xl mb-2">مواقع تجارية</h3>
                            <p className="text-gray-600">نبني منصات تساعدك على البيع، النمو، والانتشار.</p>
                        </div>
                    </div>
                </div>

                {/* رؤيتنا التقنية */}
                <div>
                    <SectionTitle title="رؤيتنا التقنية" />
                    <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        في AWH، ندمج بين الإبداع والذكاء التقني لنقدم حلولاً عصرية. نستخدم تقنيات حديثة مثل Next.js وFlutter وFirebase لضمان الأداء العالي، الأمان، وسهولة التوسّع.
                    </p>
                </div>

            </div>
        </section>
    );
}
