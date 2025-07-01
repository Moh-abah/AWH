'use client';

import { FaRocket } from 'react-icons/fa';

export default function Intro() {
    return (
        <div className="text-center">
            
            <h2 className="text-4xl font-extrabold mb-6 text-indigo-700">مرحباً بك في AWH</h2>
            <div className="relative inline-block mx-auto max-w-3xl">
                <p className="text-gray-700 text-lg leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white transition-all duration-500 hover:shadow-lg">
                    نحن مزوّد حلول رقمية موثوق، نقدم تصميم وتطوير مواقع ويب وتطبيقات أندرويد حديثة تساعد المشاريع على التوسع، الظهور، وجذب العملاء. ندمج الإبداع بالتقنية الحديثة لتقديم تجربة رقمية متكاملة.
                </p>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-xl shadow-lg animate-bounce">
                    <FaRocket />
                </div>
            </div>
        </div>
    );
}
