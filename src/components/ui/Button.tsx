'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({
    children,
    className,
    variant = 'primary',
    ...props
}: ButtonProps) {
    const base = 'px-6 py-2 rounded-xl font-medium transition-all duration-200';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-indigo-600 text-white hover:bg-indigo-700',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    };

    return (
        <button
            className={cn(base, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
