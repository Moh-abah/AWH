// constants/services.ts
import { IconType } from 'react-icons';
import {
    FaRocket,
    FaMobileAlt,
    FaStore,
    FaSearch,
    FaBrain,
    FaServer,
    FaBullhorn,
    FaPalette,
    FaEdit,
    FaUserCircle,
} from 'react-icons/fa';

export interface Service {
    slug: string;
    title: string;
    description: string;
    Icon: IconType;
    iconColorClass: `text-${string}-${number}`;
}

export const services: Service[] = [
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
        slug: 'ecommerce-stores',
        title: 'متاجر الكترونية',
        description: 'متاجر ذات سلة ومدفوعات تلقائية.',
        Icon: FaStore,
        iconColorClass: 'text-pink-600',
    },
    {
        slug: 'digital-marketing',
        title: 'التسويق الرقمي',
        description: 'تحسين ظهورك في محركات البحث.',
        Icon: FaSearch,
        iconColorClass: 'text-amber-600',
    },
    // {
    //     slug: 'artificial-intelligence',
    //     title: 'الذكاء الاصطناعي',
    //     description: 'دمج التعلم الآلي والخوارزميات.',
    //     Icon: FaBrain,
    //     iconColorClass: 'text-emerald-600',
    // },
    // {
    //     slug: 'hosting-and-server-management',
    //     title: 'الاستضافة وإدارة السيرفرات',
    //     description: 'خوادم سريعة وآمنة.',
    //     Icon: FaServer,
    //     iconColorClass: 'text-purple-600',
    // },
    {
        slug: 'social-media-management',
        title: 'إدارة السوشيال ميديا',
        description: 'من الإطلاق إلى الوصول لجمهور واسع وعلامة تجارية معروفة.',
        Icon: FaBullhorn,
        iconColorClass: 'text-cyan-600',
    },
    {
        slug: 'branding-and-graphics',
        title: 'تصميم هويات بصرية وبنرات',
        description: 'تصميم جذاب يميزك عن الجميع.',
        Icon: FaPalette,
        iconColorClass: 'text-orange-600',
    },
    {
        slug: 'content-marketing',
        title: 'تسويق وإدارة محتوى',
        description: 'إنتاج وتنسيق المحتوى الرقمي.',
        Icon: FaEdit,
        iconColorClass: 'text-yellow-600',
    },
    {
        slug: 'ux-design',
        title: 'تصميم تجربة المستخدم',
        description: 'واجهات جذابة وتفاعلية.',
        Icon: FaUserCircle,
        iconColorClass: 'text-teal-600',
    },
];

// Utility type for slug values
export type ServiceSlug = (typeof services)[number]['slug'];