// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/constants/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

// ✅ هنا المهم: توليد meta لكل مشروع
export async function generateMetadata({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return {
            title: "مشروع غير موجود | آفاق العالم الرقمي",
            description: "الصفحة التي تبحث عنها غير موجودة.",
        };
    }

    return {
        title: `${project.title} | آفاق العالم الرقمي`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.overview,
            images: project.gallery.length > 0 ? [project.gallery[0].url] : [],
        },
    };
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailsClient project={project} />;
}
