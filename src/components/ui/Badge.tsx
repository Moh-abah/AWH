'use client';

interface BadgeProps {
    text: string;
    color?: 'blue' | 'green' | 'amber' | 'gray';
}

export default function Badge({ text, color = 'blue' }: BadgeProps) {
    const colors = {
        blue: 'bg-blue-100 text-blue-700',
        green: 'bg-green-100 text-green-700',
        amber: 'bg-amber-100 text-amber-700',
        gray: 'bg-gray-100 text-gray-700',
    };

    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[color]}`}>
            {text}
        </span>
    );
}
