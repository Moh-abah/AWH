import { motion } from 'framer-motion';
import { services } from '@/constants/services';

// التهيئات المتحركة
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 120
        }
    }
};

export default function ServicesList() {
    return (
        <section className="section-padding bg-white/80 backdrop-blur-sm text-blue-900 from-dwh-navy via-dwh-navy-dark to-black relative overflow-hidden  py-38">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-dwh-neon-green/5 via-transparent to-dwh-sky-blue/1" />
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 20%, rgba(10, 83, 193, 0.18) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 80%, rgba(14, 63, 168, 0.29) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 80%, rgba(198, 38, 38, 0.07) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(74, 168, 240, 0.1) 0%, transparent 50%)',
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                />
            </div>
            <div className="container-custom mx-auto relative z-10">
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
            {/* تأثير خلفي ديناميكي */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-dwh-neon-green/5 via-transparent to-dwh-sky-blue/1" />
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 20%, rgba(10, 83, 193, 0.18) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 80%, rgba(14, 63, 168, 0.29) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 80%, rgba(198, 38, 38, 0.07) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(74, 168, 240, 0.1) 0%, transparent 50%)',
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                />
            </div>

            {services.map(({ slug, title, description, Icon, iconColorClass }) => (
                <motion.div
                    key={slug}
                    variants={item}
                    whileHover={{
                        y: -15,
                        scale: 1.03,
                        transition: { duration: 0.3 }
                    }}
                    className="relative overflow-hidden"
                >
                    {/* التأثير الإشعاعي */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* البطاقة الرئيسية */}
                    <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-2xl shadow-2xl shadow-blue-500/10 hover:shadow-indigo-500/20 transition-all duration-300 h-full flex flex-col">

                        {/* رأس البطاقة مع تأثير مميز */}
                        <div className="flex items-start gap-4 mb-4 relative">
                            <div className={`p-3 rounded-xl ${iconColorClass.replace('text-', 'bg-')}/20 backdrop-blur-sm border border-white/50`}>
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Icon className={`text-2xl ${iconColorClass} drop-shadow-md`} />
                                </motion.div>
                            </div>
                            <h4 className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-blue-700 group-hover:to-indigo-800 transition-all duration-500">
                                {title}
                            </h4>
                        </div>

                        {/* محتوى الوصف */}
                        <p className="text-gray-600 text-sm pl-1 mb-4 flex-grow">{description}</p>

                        {/* زر تفاعلي */}
                        <div className="mt-auto pt-3 border-t border-gray-100">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-xs font-bold px-4 py-2 rounded-full ${iconColorClass.replace('text-', 'bg-')} text-white shadow-md hover:shadow-lg transition-shadow`}
                            >
                                اكتشف المزيد
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
            </div>
        </section>
    );
}

