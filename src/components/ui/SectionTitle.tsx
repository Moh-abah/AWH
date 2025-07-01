'use client';

export default function SectionTitle({ title }: { title: string }) {
    return (
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8 relative">
            {title}
            <span className="block w-16 h-1 bg-indigo-600 mx-auto mt-2 rounded-full"></span>
        </h2>

        
    
        
    );
}
