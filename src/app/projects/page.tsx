// about/page.tsx (server component)
import { Metadata } from 'next';
import ProjectsPage from './clintproject';

export const metadata: Metadata = {
    title: "مشاريعنا - آفاق العالم الرقمي | تطوير مواقع وتطبيقات مبتكرة",
    description: "استعرض أبرز مشاريعنا في تطوير مواقع الويب، تطبيقات الجوال، التجارة الإلكترونية المدعومة بالخريطة التفاعلية، التصميم الجرافيكي، والهوية البصرية. اكتشف إبداعاتنا الآن.",
};

export default function About() {
    return <ProjectsPage />;
}