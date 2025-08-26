// about/page.tsx (server component)
import { Metadata } from 'next';
import ClientAbout from './ClientAbout';

export const metadata: Metadata = {
    title: "من نحن - آفاق العالم الرقمي | حلول برمجية متكاملة",
    description: "آفاق العالم الرقمي شركة متخصصة في تطوير المواقع والتطبيقات، التصميم الجرافيكي، الهوية البصرية، التسويق الإلكتروني وحلول السوشيال ميديا في السعودية. اكتشف خبرتنا ورؤيتنا.",
};

export default function About() {
    return <ClientAbout />;
}