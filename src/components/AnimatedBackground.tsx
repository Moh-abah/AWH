'use client';

import { motion, useMotionValue } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';
import { easeInOut } from 'framer-motion';
export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [lightning, setLightning] = useState(false);

    // استخدام useRef لتخزين الجسيمات وطلبات الرسوم المتحركة
    const particles3DRef = useRef<any[]>([]);
    const goldenParticlesRef = useRef<any[]>([]);
    const animationFrameRef = useRef<number | null>(null);

    // تفاعل حركة الماوس
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // تأثير البرق
        const lightningInterval = setInterval(() => {
            setLightning(true);
            setTimeout(() => setLightning(false), 200);
        }, 15000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(lightningInterval);
        };
    }, []);

    // تأثير الدخان ثلاثي الأبعاد على Canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 1. تعيين حجم الكانفاس
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        // استخدام ResizeObserver بدلاً من event listener
        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(canvas);

        // 2. تهيئة الجسيمات (مرة واحدة فقط)
        if (particles3DRef.current.length === 0) {
            particles3DRef.current = Array.from({ length: 20 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 80 + 20,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                color: `rgba(${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.1 + 0.05})`,
                life: Math.random() * 100
            }));
        }

        if (goldenParticlesRef.current.length === 0) {
            goldenParticlesRef.current = Array.from({ length: 30 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4 + 1,
                speedX: (Math.random() - 0.5) * 0.2,
                speedY: (Math.random() - 0.5) * 0.2,
                color: Math.random() > 0.5
                    ? `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.3})`
                    : `rgba(192, 192, 192, ${Math.random() * 0.5 + 0.3})`,
                life: Math.random() * 100 + 50,
                visible: Math.random() > 0.7
            }));
        }

        // 3. دالة التصيير المحسنة
        const render = () => {
            ctx.fillStyle = 'rgba(5, 5, 15, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // الجسيمات ثلاثية الأبعاد
            particles3DRef.current.forEach((p, index) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;
                p.life -= 0.5;
                p.size *= 0.99;

                if (p.life <= 0 || p.size <= 2) {
                    particles3DRef.current[index] = {
                        ...p,
                        x: Math.random() * canvas.width,
                        y: canvas.height + 50,
                        size: Math.random() * 80 + 20,
                        life: Math.random() * 100 + 50
                    };
                }
            });

            // الجسيمات الذهبية
            goldenParticlesRef.current.forEach((p, index) => {
                if (p.visible) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();

                    p.x += p.speedX;
                    p.y += p.speedY;
                    p.life -= 0.3;

                    if (p.life <= 0) {
                        goldenParticlesRef.current[index] = {
                            ...p,
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            life: Math.random() * 100 + 50,
                            visible: Math.random() > 0.3
                        };
                    }
                } else if (Math.random() > 0.98) {
                    goldenParticlesRef.current[index].visible = true;
                }
            });

            animationFrameRef.current = requestAnimationFrame(render);
        };

        // بدء التصيير
        animationFrameRef.current = requestAnimationFrame(render);

        // 4. التنظيف الصحيح
        return () => {
            resizeObserver.disconnect();
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    // تفاعل الجسيمات مع الماوس
    const particles = Array.from({ length: 30 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // شعار ثلاثي الأبعاد يطفو في الوسط
    const logoVariants = {
        float: {
            y: [0, -20, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: easeInOut,
            }
        },
        rotate: {
            rotateY: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear" as any

            }
        }
    };

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden bg-[#050515]"
            style={{ pointerEvents: 'none' }}
        >
            {/* طبقات التدرج اللوني */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0a1f] via-[#050515] to-[#02020d] z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(65,105,225,0.1),transparent_40%)] z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(123,104,238,0.1),transparent_40%)] z-20" />

            {/* تأثير البرق */}
            {lightning && (
                <div className="absolute inset-0 bg-white opacity-20 z-15 animate-pulse" />
            )}

            {/* طبقة التألق المركزية */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_rgba(70,130,180,0.15),_transparent_70%)] blur-[80px] z-20" />

            {/* شبكة ثلاثية الأبعاد وهمية */}
            <div className="absolute inset-0 z-10 opacity-10" style={{
                backgroundImage: `linear-gradient(rgba(100, 149, 237, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 149, 237, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            {/* الفقاعات الدخانية */}
            <div className="absolute inset-0 z-30">
                {particles.map((_, i) => {
                    const size = Math.random() * 60 + 30;
                    const left = `${Math.random() * 100}%`;
                    const top = `${Math.random() * 100}%`;
                    const blur = Math.random() > 0.5 ? 'blur-xl' : 'blur-2xl';
                    const delay = Math.random() * 5;
                    const duration = Math.random() * 8 + 6;
                    const opacity = Math.random() * 0.1 + 0.05;
                    const colors = [
                        `rgba(100, 149, 237, ${opacity})`,
                        `rgba(123, 104, 238, ${opacity})`,
                        `rgba(70, 130, 180, ${opacity})`,
                        `rgba(176, 196, 222, ${opacity})`
                    ];
                    const color = colors[i % colors.length];

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: size,
                                height: size * (Math.random() * 0.7 + 0.5),
                                top,
                                left,
                                backgroundColor: color,
                                filter: blur,
                                boxShadow: `0 0 ${size}px ${size / 2}px ${color}`
                            }}
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                                y: 100
                            }}
                            animate={{
                                scale: [0.5, 1.2, 0],
                                opacity: [0, opacity, 0],
                                y: [100, Math.random() * -200 - 100],
                                x: [0, (Math.random() - 0.5) * 100]
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                delay,
                                ease: "easeOut"
                            }}
                        />
                    );
                })}
            </div>

            {/* تأثير الدخان ثلاثي الأبعاد */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-40 opacity-60"
            />

            {/* خطوط القوة والثقة */}
            <div className="absolute inset-0 z-10 overflow-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
                        style={{ left: `${(i + 1) * 20}%` }}
                        animate={{
                            opacity: [0.3, 0.7, 0.3],
                            boxShadow: ['0 0 5px rgba(70, 130, 180, 0)', '0 0 20px rgba(70, 130, 180, 0.3)', '0 0 5px rgba(70, 130, 180, 0)']
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>

            {/* شعار ثلاثي الأبعاد يطفو في الوسط */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 z-0"
                variants={logoVariants}
                animate={["float", "rotate"]}
            >
                <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-25 shadow-[0_0_50px_10px_rgba(123,104,238,0.3)]" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25 text-white font-bold text-2xl">
                        AWH
                    </div>
                </div>
            </motion.div>
        </div>
    );
}