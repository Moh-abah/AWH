// constants/services.ts
import { FaRocket, FaMobileAlt, FaSearch, FaBrain, FaServer, FaProjectDiagram, FaLightbulb, FaChartLine } from 'react-icons/fa';

export const services = [
    {
        slug: 'website-development',
        title: 'تطوير المواقع',
        description: 'مواقع ديناميكية وتجارية متكاملة.',
        Icon: FaRocket,
        iconColorClass: 'text-blue-600',
    },
    {
        slug: 'android-apps',
        title: 'تطبيقات أندرويد',
        description: 'تطبيقات أصلية بأداء عالي.',
        Icon: FaMobileAlt,
        iconColorClass: 'text-indigo-600',
    },
    {
        slug: 'digital-marketing',
        title: 'التسويق الرقمي',
        description: 'تحسين ظهورك في محركات البحث.',
        Icon: FaSearch,
        iconColorClass: 'text-amber-600',
    },
    {
        slug: 'artificial-intelligence',
        title: 'الذكاء الاصطناعي',
        description: 'دمج التعلم الآلي والخوارزميات.',
        Icon: FaBrain,
        iconColorClass: 'text-emerald-600',
    },
    {
        slug: 'hosting-and-server-management',
        title: 'الاستضافة وإدارة السيرفرات',
        description: 'خوادم سريعة وآمنة.',
        Icon: FaServer,
        iconColorClass: 'text-purple-600',
    },
    {
        slug: 'project-management',
        title: 'إدارة مشاريع',
        description: 'من التخطيط إلى الإطلاق الفعلي.',
        Icon: FaProjectDiagram,
        iconColorClass: 'text-cyan-600',
    },
    {
        slug: 'user-experience-design',
        title: 'تصميم تجربة المستخدم',
        description: 'واجهات جذابة وتفاعلية.',
        Icon: FaLightbulb,
        iconColorClass: 'text-orange-600',
    },
    {
        slug: 'data-analysis',
        title: 'تحليل البيانات',
        description: 'تحويل البيانات إلى قرارات ذكية.',
        Icon: FaChartLine,
        iconColorClass: 'text-teal-600',
    },
];
