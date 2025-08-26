// about/page.tsx (server component)
import { Metadata } from 'next';
import ContactPage from './clintcontact';

export const metadata: Metadata = {
    title: "اتصل بنا - آفاق العالم الرقمي",
    description: "صفحة الاتصال بشركة آفاق العالم الرقمي. تواصل معنا للحصول على استفسارات حول تطوير المواقع والتطبيقات، الهوية البصرية، التسويق الإلكتروني والحلول الرقمية.",
};


export default function contact() {
    return < ContactPage />;
}