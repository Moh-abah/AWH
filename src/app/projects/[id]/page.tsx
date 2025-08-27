import { notFound } from 'next/navigation';
import ProjectDetailsClient from './ProjectDetailsClient';
import { projects } from '@/constants/projects';

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

// ✅ params كمجموعة بيانات قادمة بصيغة Promise
export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailsClient project={project} />;
}

