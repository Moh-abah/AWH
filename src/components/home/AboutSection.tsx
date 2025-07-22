import SectionTitle from "../ui/SectionTitle";
import { Globe, Smartphone, Layout, Cpu, Wand2, Megaphone, BarChart, BookOpen, PenTool } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* من نحن */}
                <div>
                    <SectionTitle title="من نحن" />
                    <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        نحن شركة DWH – Digital World Horizon، نؤمن أن التواجد الرقمي ليس مجرد موقع أو تطبيق، بل تجربة متكاملة تبني ثقة العملاء وتدعم نمو الأعمال. نعمل بشغف على تقديم حلول برمجية متطورة تلبي احتياجاتك بدقة واحتراف.
                    </p>
                </div>

                {/* خدماتنا الأساسية */}
                <div>
                    <SectionTitle title="خدماتنا الأساسية" />

                    {/* تطوير المواقع والتطبيقات */}
                    <div className="space-y-4 mb-10">
                        <h3 className="text-2xl font-bold text-center">تطوير المواقع والتطبيقات</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <ServiceCard icon={<Globe className="w-8 h-8 mx-auto text-blue-600" />} title="متاجر إلكترونية" desc="نبني لك متجر رقمي احترافي للبيع والتوسع." />
                            <ServiceCard icon={<Smartphone className="w-8 h-8 mx-auto text-purple-600" />} title="تطبيقات الجوال ومواقع الويب" desc="نطور تطبيقات حديثة ومواقع متجاوبة بأداء عالي." />
                            <ServiceCard icon={<Layout className="w-8 h-8 mx-auto text-indigo-600" />} title="تطبيقات للسوق المحلي" desc="حلول مخصصة لاحتياجات السوق اليمني والخليجي." />
                            <ServiceCard icon={<Cpu className="w-8 h-8 mx-auto text-orange-600" />} title="حلول برمجية" desc="نصمّم أنظمة حسب الطلب (أنظمة حجز، إدارة، إلخ)." />
                            <ServiceCard icon={<Wand2 className="w-8 h-8 mx-auto text-pink-600" />} title="أدوات وتقنيات مبتكرة" desc="نطوّر أدوات ذكية تعزز أداءك الرقمي." />
                        </div>
                    </div>

                    {/* التسويق الرقمي */}
                    <div className="space-y-4 mb-10">
                        <h3 className="text-2xl font-bold text-center">التسويق الرقمي</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <ServiceCard icon={<Megaphone className="w-8 h-8 mx-auto text-red-600" />} title="إدارة حملات إعلانية" desc="نطلق حملاتك التسويقية بجودة ونتائج ملموسة." />
                            <ServiceCard icon={<BookOpen className="w-8 h-8 mx-auto text-yellow-600" />} title="إعداد استراتيجيات محتوى" desc="نُخطط وندير محتواك بما يتماشى مع جمهورك." />
                            <ServiceCard icon={<BarChart className="w-8 h-8 mx-auto text-green-600" />} title="تحليل أداء الحملات" desc="نرصد أداء الحملات ونحسن النتائج باستمرار." />
                        </div>
                    </div>

                    {/* الهوية البصرية */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-center">الهوية البصرية</h3>
                        <div className="grid md:grid-cols-2 gap-6 text-center">
                            <ServiceCard icon={<PenTool className="w-8 h-8 mx-auto text-blue-500" />} title="شعار احترافي + دليل استخدام" desc="نصمم شعارات مع أدلة متكاملة للاستخدام الصحيح." />
                            <ServiceCard icon={<Layout className="w-8 h-8 mx-auto text-teal-500" />} title="تصميم واجهات المستخدم (UI/UX)" desc="تصاميم تجربة مستخدم عصرية وسلسة واحترافية." />
                        </div>
                    </div>
                </div>

                {/* رؤيتنا التقنية */}
                <div>
                    <SectionTitle title="رؤيتنا التقنية" />
                    <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        في DWH، ندمج بين الإبداع والذكاء التقني لنقدم حلولاً عصرية. نستخدم تقنيات حديثة مثل Next.js وFlutter وFirebase لضمان الأداء العالي، الأمان، وسهولة التوسّع.
                    </p>
                </div>

            </div>
        </section>
    );
}

// مكون البطاقة الموحد
function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition h-full">
            {icon}
            <h3 className="font-semibold text-xl my-3">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
        </div>
    );
}
