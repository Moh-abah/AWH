'use client';

import { useState, useEffect, JSX } from 'react';

interface CounterCardProps {
    value: number;
    label: string;
    icon: JSX.Element;
    color: string;
    active: boolean;
    delay?: number; // تأخير الدخول بالميلي ثانية
}

export default function CounterCard({ value, label, icon, color, active, delay = 0 }: CounterCardProps) {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (active) {
            setTimeout(() => setVisible(true), delay);

            const duration = 2000;
            const stepTime = 20;
            const increment = Math.ceil(value / (duration / stepTime));
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(current);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [active, value, delay]);

    return (
        <div
            className={`bg-white rounded-xl p-6 text-center shadow-lg transform transition-opacity duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            aria-live="polite"
        >
            <div className="flex justify-center mb-4">
                <div className={`bg-gradient-to-r ${color} p-3 rounded-full text-white`}>{icon}</div>
            </div>
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {active ? count : '0'}+
            </div>
            <div className="text-gray-600 font-medium">{label}</div>
        </div>
    );
}
