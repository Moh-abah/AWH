// app/contact/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import AnimatedBackground from '@/components/AnimatedBackground';
import ParticleBackground from '@/styles/ParticleBackground';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [activeTab, setActiveTab] = useState('form');
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // محاكاة إرسال البيانات
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // إعادة تعيين النجاح بعد 5 ثواني
        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-blue-500" />,
            title: 'الهاتف',
            content: '+966 555864375',
            description: 'اتصل بنا خلال ساعات العمل',
            action: 'اتصل الآن',
            link: 'tel:+966 555864375'
        },
        {
            icon: <FaEnvelope className="text-green-500" />,
            title: 'البريد الإلكتروني',
            content: 'digitalworldhorizon@gmail.com',
            description: 'ارسل لنا استفسارك على البريد',
            action: 'ارسل بريد',
            link: 'mailto:digitalworldhorizon@gmail.com'
        },
        {
            icon: <FaMapMarkerAlt className="text-red-500" />,
            title: 'العنوان',
            content: 'صنعاء، المملكة العربية السعودية',
            description: 'زيارة مقرنا الرئيسي',
            action: 'عرض الخريطة',
            link: '#map'
        },
        {
            icon: <FaClock className="text-purple-500" />,
            title: 'ساعات العمل',
            content: 'الأحد - الخميس: 9 صباحاً - 8 مساءً',
            description: 'الجمعة والسبت إجازة',
            action: 'جدولة موعد',
            link: '#'
        }
    ];

    const socialMedia = [
        { icon: <FaWhatsapp />, name: 'واتساب', link: '#', color: 'bg-green-500' },
        { icon: <FaTwitter />, name: 'تويتر', link: 'https://x.com/DigWorldHorizon/', color: 'bg-blue-400' },
        { icon: <FaLinkedin />, name: 'لينكد إن', link: 'https://www.linkedin.com/company/digitalworldhorizon/', color: 'bg-blue-600' },
        { icon: <FaInstagram />, name: 'إنستغرام', link: 'https://www.instagram.com/digitalworldhorizon/?utm_source=ig_web_button_share_sheet', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
        { icon: <FaTiktok />, name: 'تيك توك', link: 'http://www.tiktok.com/@digitalworldhorizon', color: 'bg-gray-500' },
    ];

    useEffect(() => {
        // تأثيرات عند التحميل
        if (formRef.current) {
            formRef.current.querySelectorAll('input, textarea').forEach((el, i) => {
                setTimeout(() => {
                    (el as HTMLElement).style.opacity = '1';
                    (el as HTMLElement).style.transform = 'translateY(0)';
                }, 300 + i * 100);
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900/40 to-sky-500/50  text-gray-700 overflow-hidden">
            {/* خلفية جسيمات متحركة */}


            {/* تأثيرات بصرية إضافية */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-25 via-sky-300/90  to-sky-25 z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-sky-25/60 to-sky-50/40 z-20"></div>

                {/* تأثير جسيمات متحركة */}
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-sky-100/30"
                            style={{
                                width: Math.random() * 20 + 5,
                                height: Math.random() * 20 + 5,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100],
                                x: [0, (Math.random() - 0.5) * 50],
                                opacity: [0.1, 0.8, 0],
                                scale: [1, 1.5]
                            }}
                            transition={{
                                duration: Math.random() * 5 + 3,
                                repeat: Infinity,
                                delay: Math.random() * 3
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* الترويسة */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-38">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6 text-white "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        تواصل معنا
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        نحن هنا للإجابة على استفساراتك ومساعدتك في أي شيء تحتاجه
                    </motion.p>
                </div>
            </div>

            {/* المحتوى الرئيسي */}
            <div className="container mx-auto px-4 py-8 -mt-16 relative z-20">
                <div className="flex justify-center mb-12">
                    <div className="bg-sky-400 border border-black/40 rounded-full p-1 shadow-md">
                        <button
                            onClick={() => setActiveTab('form')}
                            className={`px-6 py-3  rounded-full text-lg font-medium transition-all ${activeTab === 'form' ? 'border border-black/20 bg-sky-500 text-white ' : 'text-gray-600 hover:text-black'}`}
                        >
                            أرسل رسالة
                        </button>
                        <button
                            onClick={() => setActiveTab('info')}
                            className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${activeTab === 'info' ? 'border border-black/20 bg-sky-500 text-white' : 'text-gray-600 hover:text-black'}`}
                        >
                            معلومات التواصل
                        </button>
                    </div>
                </div>

                {activeTab === 'form' ? (
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* نموذج التواصل */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-black  ">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">أرسل لنا رسالة</h2>

                            {submitSuccess && (
                                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                                </div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2 ">
                                        الاسم الكامل
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300  rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition opacity-0 transform translate-y-4"
                                        placeholder="أدخل اسمك"
                                       
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        البريد الإلكتروني
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition opacity-0 transform translate-y-4"
                                        placeholder="أدخل بريدك الإلكتروني"
                                       
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                        الموضوع
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition opacity-0 transform translate-y-4"
                                        placeholder="موضوع الرسالة"
                                      
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        الرسالة
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition opacity-0 transform translate-y-4"
                                        placeholder="أدخل رسالتك"
                                        style={{ transition: 'opacity 0.5s, transform 0.5s' }}
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-sky-400 to-sky-700 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <span>جاري الإرسال...</span>
                                    ) : (
                                        <>
                                            <span>إرسال الرسالة</span>
                                            <FaPaperPlane className="mr-2" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>

                        {/* معلومات التواصل */}
                        <div>
                            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">طرق التواصل الأخرى</h2>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-sky-50 p-6 rounded-xl border border-sky-100 flex items-start"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="text-2xl mr-4 mt-1">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                                                <p className="text-gray-700 mb-2">{item.content}</p>
                                                <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                                                <a
                                                    href={item.link}
                                                    className="text-sky-600 font-medium hover:underline inline-flex items-center"
                                                >
                                                    {item.action}
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">تواصل معنا عبر</h3>
                                    <div className="flex gap-3 flex-wrap">
                                        {socialMedia.map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.link}
                                                className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-colors`}
                                                whileHover={{ y: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label={social.name }
                                            >
                                                {social.icon}
                                                
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    // تبويب معلومات التواصل
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* معلومات التواصل */}
                        <div>
                                <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-black">
                                <h2 className="text-3xl font-bold mb-8 text-gray-800">معلومات التواصل</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 ">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-sky-50 p-6 rounded-xl border border-black/20 flex flex-col "
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="flex items-start mb-4">
                                                <div className="text-2xl mr-3">
                                                    {item.icon}
                                                    item
                                                </div>
                                                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">{item.content}</p>
                                            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                                            <a
                                                href={item.link}
                                                className="mt-auto text-sky-600 font-medium hover:underline inline-flex items-center"
                                            >
                                                {item.action}
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">ساعات العمل</h3>
                                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                                        <div className="flex justify-between py-3 border-b border-gray-100">
                                            <span>السبت - الخميس</span>
                                            <span className="font-medium text-gray-700">9:00 صباحاً - 5:00 مساءً</span>
                                        </div>
                                        <div className="flex justify-between py-3">
                                            <span>الجمعة </span>
                                            <span className="font-medium text-red-500">إجازة</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* الخريطة ووسائل التواصل */}
                        <div className="space-y-12">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">موقعنا على الخريطة</h2>

                                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-sky-200 opacity-60"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-5xl mb-4 text-sky-500">📍</div>
                                                <p className="text-xl font-bold text-gray-800">الرياض، المملكة العربية السعودية </p>
                                            <p className="text-gray-600 mt-2">شارع الملك فهد، مبنى رقم 123</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button className="bg-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 transition flex items-center justify-center">
                                        <FaMapMarkerAlt className="ml-2" />
                                        الحصول على الاتجاهات
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">تواصل معنا عبر</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {socialMedia.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            className={`${social.color} p-4 rounded-xl text-white text-bold flex items-center transition-colors`}
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="text-5xl mr-3">
                                                {social.icon}
                                                
                                            </div>
                                            <div>
                                                <div className="font-medium mr-3">{social.name}</div>
                                                <div className="text-sm opacity-90 mr-3">تابعنا على {social.name}</div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* قسم الأسئلة الشائعة */}
            <div className="bg-sky-50 py-16 mt-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">أسئلة شائعة</h2>
                        <p className="text-gray-600">إجابات على أكثر الأسئلة شيوعاً حول التواصل معنا</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                question: 'كم تستغرق وقتاً للرد على استفساري؟',
                                answer: 'نحن نرد على جميع الاستفسارات خلال 24 ساعة عمل. في حالات الذروة قد يستغرق الرد حتى 48 ساعة.'
                            },
                            {
                                question: 'هل تقدمون الدعم خارج ساعات العمل؟',
                                answer: 'نعم، لدينا فريق دعم يعمل على مدار الساعة للرد على الاستفسارات العاجلة. يمكنك الاتصال بنا على الرقم المخصص للدعم العاجل.'
                            },
                            {
                                question: 'كيف يمكنني متابعة حالة طلبي؟',
                                answer: 'بعد إرسال طلبك، سنرسل لك رمز متابعة عبر البريد الإلكتروني. يمكنك استخدام هذا الرمز لمتابعة حالة طلبك على موقعنا.'
                            },
                            {
                                question: 'هل لديكم فروع أخرى في المملكة؟',
                                answer: 'نعم، لدينا فروع في الرياض، جدة، الدمام، والخبر. يمكنك زيارة صفحة الفروع على موقعنا لمعرفة العناوين التفصيلية.'
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="font-bold text-lg text-gray-800 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            
        </div>
    );
}