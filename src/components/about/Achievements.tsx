// components/about/Achievements.tsx
import { motion } from "framer-motion";

const achievementsData = [
    {
        title: " أفضل مزود حلول رقمية تقنية   ",
        description: " أفضل شركة تقنية في المنطقة  .",
        date: "2023",
    },
    {
        title: "مشاريع ناجحة أكثر من 17 مشروع",
        description: "أكملنا بنجاح أكثر من 120 مشروعًا في مجالات متعددة.",
        date: "2018-2025",
    },
    // {
    //     title: "شهادات جودة ISO 9001",
    //     description: "حصلنا على شهادة ISO 9001 لضمان جودة الخدمات.",
    //     date: "2022",
    // },
    {
        title: "تطوير تطبيقات حائزة على جوائز",
        description: "طورنا تطبيقات نالت جوائز محلية وعالمية في مجال تجربة المستخدم.",
        date: "2025-2024",
    },
];

export default function Achievements() {
    return (
        <section className="max-w-6xl mx-auto py-12 px-6 bg-white/30 backdrop-blur-sm opacity-70 rounded-xl shadow-md mt-12">
            <motion.h2
                className="text-3xl font-semibold text-center mb-10 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                إنجازاتنا 
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 ">
                {achievementsData.map(({ title, description, date }, idx) => (
                    <motion.div
                        key={idx}
                        className="border-l-4 border-blue-600 pl-5 py-3 hover:shadow-lg transition-shadow rounded bg-white/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-xl font-bold text-blue-700">{title}</h3>
                        <p className="text-gray-700 mt-1">{description}</p>
                        <span className="text-sm text-gray-500 mt-1 block">{date}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}