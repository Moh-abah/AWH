// about/page.tsx (server component)
import { Metadata } from 'next';
import ProjectsPage from './clintproject';

export const metadata: Metadata = {
    title: "Projects",
};

export default function About() {
    return <ProjectsPage />;
}