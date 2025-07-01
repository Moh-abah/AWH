// components/common/DynamicBackground.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface DynamicBackgroundProps {
    children: ReactNode;
    particleCount?: number;
    particleColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    showScrollIndicator?: boolean;
}

const DynamicBackground = ({
    children,
    particleCount = 30,
    particleColor = 'bg-blue-500/10',
    gradientFrom = 'from-black',
    gradientTo = 'to-black',
    showScrollIndicator = true
}: DynamicBackgroundProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Dynamic background with particles */}
            <div className="absolute inset-0 z-0">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${gradientFrom} via-black/70 to-transparent z-10`}></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black z-20"></div>

                {/* Animated particles */}
                {isMounted && (
                    <div className="absolute inset-0">
                        {[...Array(particleCount)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`absolute rounded-full ${particleColor}`}
                                style={{
                                    width: Math.random() * 20 + 5,
                                    height: Math.random() * 20 + 5,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -100],
                                    x: [0, (Math.random() - 0.5) * 50],
                                    opacity: [0.1, 0.8, 0],
                                    scale: [1, 1.5]
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 3
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="relative z-30">{children}</div>

            {/* Scroll indicator */}
            {showScrollIndicator && isMounted && (
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="w-8 h-14 rounded-full border-2 border-blue-400 flex justify-center p-1">
                        <motion.div
                            className="w-3 h-3 bg-blue-400 rounded-full"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default DynamicBackground;