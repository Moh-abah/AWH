'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-blue-900/30 text-gray-300 pt-14 pb-8">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* 1. شعار + وصف */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/logo1.png" alt="DWH Logo" width={118} height={118} className="rounded-full" />
                        <span className="text-white font-bold text-2xl tracking-wide">DWH</span>
                    </Link>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        نطوّر مواقع وتطبيقات تلبي احتياجاتك الرقمية، تساعدك على جذب عملاء وتحقيق نمو استراتيجي.
                    </p>
                </div>

                {/* 2. روابط سريعة */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-5 border-b border-gray-700 pb-2">روابط سريعة</h3>
                    <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                        <li><Link href="/" className="hover:text-blue-400 transition duration-300">الرئيسية</Link></li>
                        <li><Link href="/about" className="hover:text-blue-400 transition duration-300">من نحن</Link></li>
                        <li><Link href="/services" className="hover:text-blue-400 transition duration-300">خدماتنا</Link></li>
                        <li><Link href="/work" className="hover:text-blue-400 transition duration-300">أعمالنا</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400 transition duration-300">تواصل معنا</Link></li>
                        {/* <li><Link href="#" className="hover:text-blue-400 transition duration-300">من نحن</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition duration-300">خدماتنا</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition duration-300">أعمالنا</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition duration-300">تواصل معنا</Link></li> */}
                    </ul>
                </div>

                {/* 3. تواصل معنا */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-5 border-b border-gray-700 pb-2">تواصل معنا</h3>
                    <div className="space-y-3 text-gray-300 text-sm md:text-base">
                        <p>📞 <a href="tel:+966560090882" className="hover:text-blue-400 transition duration-300">+966 56 476 2038</a></p>
                        <p>✉️ <a href="mailto:musst92@gmail.com" className="hover:text-blue-400 transition duration-300">help@digitalworldhorizon.com</a></p>
                    </div>
                </div>

                {/* 4. تواصل اجتماعي + CTA */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-5 border-b border-gray-700 pb-2">تابعنا أو تواصل</h3>
                    <div className="flex items-center gap-5 mb-6">
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition duration-300">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-sky-400 transition duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700 transition duration-300">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                    <Link
                        href="#"
                        className="inline-block w-full text-center px-5 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        احجز استشارة الآن
                    </Link>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm select-none">
                © {new Date().getFullYear()} DWH – كل الحقوق محفوظة.
            </div>
        </footer>
    );
}
