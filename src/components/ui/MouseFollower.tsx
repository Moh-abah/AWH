'use client';

import { useEffect, useRef, useState } from 'react';

export default function MouseFollower() {
    const followerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement[]>([]);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [activeType, setActiveType] = useState<'default' | 'link' | 'button' | 'input'>('default');

    // توليد جسيمات متحركة
    const createParticles = (x: number, y: number) => {
        return Array.from({ length: 10 }).map((_, i) => {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 30 + 20;
            return {
                id: i,
                x: x + radius * Math.cos(angle),
                y: y + radius * Math.sin(angle),
                size: Math.random() * 4 + 2,
                duration: Math.random() * 500 + 300
            };
        });
    };

    // تأثيرات اللمس الحديثة
    useEffect(() => {
        const move = (e: MouseEvent) => {
            setCoords({ x: e.clientX, y: e.clientY });
        };

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (target.tagName === 'A') {
                setIsHovering(true);
                setActiveType('link');
            } else if (target.tagName === 'BUTTON' || target.closest('button')) {
                setIsHovering(true);
                setActiveType('button');
            } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                setIsHovering(true);
                setActiveType('input');
            } else {
                setIsHovering(false);
                setActiveType('default');
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseover', checkHover);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseover', checkHover);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // حركة سلسلة مع فيزياء الجسيمات
    useEffect(() => {
        let animationFrame: number;
        const particles: any[] = [];
        let lastTime = 0;
        const friction = 0.85;

        const animate = (timestamp: number) => {
            if (!followerRef.current) return;

            // تأخير حركة المؤشر لمظهر سلس
            const delayFactor = isHovering ? 0.15 : 0.08;
            const dx = coords.x - parseFloat(followerRef.current.style.left || '0');
            const dy = coords.y - parseFloat(followerRef.current.style.top || '0');

            followerRef.current.style.left = `${parseFloat(followerRef.current.style.left || '0') + dx * delayFactor}px`;
            followerRef.current.style.top = `${parseFloat(followerRef.current.style.top || '0') + dy * delayFactor}px`;

            // توليد جسيمات عند النقر
            if (isClicking && (timestamp - lastTime > 100)) {
                lastTime = timestamp;
                const newParticles = createParticles(coords.x, coords.y);
                particles.push(...newParticles);
            }

            // تحريك الجسيمات
            particles.forEach((p, i) => {
                p.x += p.vx || (Math.random() - 0.5) * 4;
                p.y += p.vy || (Math.random() - 0.5) * 4;
                p.alpha = Math.max(0, p.alpha - 0.01);

                if (p.alpha <= 0) {
                    particles.splice(i, 1);
                }
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [coords, isHovering, isClicking]);

    // إضافة تأثيرات بصرية حسب نوع العنصر
    const getTypeStyles = () => {
        const base = 'transition-all duration-300 ease-out';

        switch (activeType) {
            case 'link':
                return `${base} bg-transparent border-blue-400 scale-125`;
            case 'button':
                return `${base} bg-yellow-400/20 border-yellow-500 scale-150`;
            case 'input':
                return `${base} bg-green-400/20 border-green-500 scale-75`;
            default:
                return `${base} bg-white border-purple-500`;
        }
    };

    return (
        <div
            ref={followerRef}
            className={`pointer-events-none fixed z-[9999] rounded-full transform -translate-x-1/2 -translate-y-1/2
        ${isClicking ? 'scale-50' : 'scale-100'} ${getTypeStyles()}`}
            style={{
                left: `${coords.x}px`,
                top: `${coords.y}px`,
                width: isHovering ? '24px' : '16px',
                height: isHovering ? '24px' : '16px',
                borderWidth: isHovering ? '2px' : '1.5px',
                boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)'
            }}
        >
            {/* حلقة متحركة خارجية */}
            <div className={`
        absolute rounded-full border transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]
        ${isHovering
                    ? 'w-12 h-12 border-purple-300 opacity-70'
                    : 'w-8 h-8 border-purple-500 opacity-40'
                }
        -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2
      `} />

            {/* تأثير النقر */}
            {isClicking && (
                <div className="
          absolute rounded-full bg-purple-400/30
          -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2
          animate-ping-slow
          w-full h-full
        " />
            )}
        </div>
    );
}