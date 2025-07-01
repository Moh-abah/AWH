'use client';

import { useState, useEffect } from 'react';
import CounterCard from './CounterCard';
import { FaChartLine, FaProjectDiagram, FaRocket } from 'react-icons/fa';

export default function Counters() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const el = document.getElementById('counters-section');
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) setActive(true);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            id="counters-section"
            className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 shadow-2xl"
            aria-label="إحصائيات الشركة"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CounterCard
                    value={5}
                    label="سنوات من الخبرة"
                    icon={<FaChartLine className="text-3xl" />}
                    color="from-amber-500 to-orange-500"
                    active={active}
                    delay={0}
                />
                <CounterCard
                    value={120}
                    label="مشروع مكتمل"
                    icon={<FaProjectDiagram className="text-3xl" />}
                    color="from-emerald-500 to-teal-500"
                    active={active}
                    delay={200}
                />
                <CounterCard
                    value={85}
                    label="عميل راضٍ"
                    icon={<FaRocket className="text-3xl" />}
                    color="from-cyan-500 to-blue-500"
                    active={active}
                    delay={400}
                />
            </div>
        </div>
    );
}
