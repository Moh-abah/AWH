'use client';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'محمد القادري',
        company: 'يمن سوفت',
        quote: 'تجربة رائعة مع AWH، سرعة في الإنجاز ودقة في تنفيذ التفاصيل. أنصح بهم!',
        image: '/images/clients/user1.jpg',
    },
    {
        name: 'نجلاء الشامي',
        company: 'مؤسسة حلول',
        quote: 'فريق مبدع ومتعاون لأقصى درجة، ساعدونا في إنجاح المشروع من البداية للنهاية.',
        image: '/images/clients/user2.jpg',
    },
    {
        name: 'وليد الجماعي',
        company: 'متجر الراقي',
        quote: 'التصميم عصري ومتجاوب، ولمسنا فرق واضح في المبيعات بعد الإطلاق.',
        image: '/images/clients/user3.jpg',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">عملاؤنا يتحدثون</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100 text-right"
                        >
                            <FaQuoteLeft className="text-2xl text-blue-400 mb-4" />
                            <p className="text-gray-700 leading-relaxed mb-4 text-sm">{t.quote}</p>
                            <div className="flex items-center gap-4 mt-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-300"
                                />
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
