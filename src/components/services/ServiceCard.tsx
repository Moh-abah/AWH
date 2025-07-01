'use client';

import Link from 'next/link';

type ServiceCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    slug: string;
};

export default function ServiceCard({ title, description, icon, slug }: ServiceCardProps) {
    return (
        <Link href={`/services/${slug}`} className="block bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </Link>
    );
}
