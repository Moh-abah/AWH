import { Theme } from '@/lib/theme';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';



interface ParticleBackgroundProps {
    particleCount?: number;
    className?: string;
    theme: Theme;
}

const ParticleBackground = ({
    particleCount = 80,
    className = '',
    theme
}: ParticleBackgroundProps) => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    // اختيار لون الجسيمات بناءً على الثيم
    const particlesColor = theme === 'dark' ? '#ffffff' : '#1e40af';

    return (
        <div className={className}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: true, zIndex: -1 },
                    background: { color: 'transparent' },
                    particles: {
                        number: { value: particleCount },
                        size: { value: 3 },
                        move: {
                            enable: true,
                            speed: 1,
                            outModes: {
                                default: "out"
                            }
                        },
                        links: {
                            enable: true,
                            color: particlesColor,
                            opacity: theme === 'dark' ? 0.5 : 0.3,
                            distance: 150
                        },
                        color: { value: particlesColor },
                        opacity: {
                            value: theme === 'dark' ? 0.5 : 0.3,
                        },
                        shape: {
                            type: "circle"
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab"
                            },
                            onClick: {
                                enable: true,
                                mode: "push"
                            }
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                links: {
                                    opacity: 1
                                }
                            },
                            push: {
                                quantity: 4
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default ParticleBackground;