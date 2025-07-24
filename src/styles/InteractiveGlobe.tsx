'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Theme } from '@/lib/theme';


// Component for the rotating globe
const Globe = ({ theme }: { theme: Theme }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { mouse } = useThree();

    useFrame((state) => {
        if (meshRef.current) {
            // Rotate the globe
            meshRef.current.rotation.y += 0.005;

            // Add mouse interaction
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                mouse.y * 0.1,
                0.02
            );
            meshRef.current.rotation.z = THREE.MathUtils.lerp(
                meshRef.current.rotation.z,
                mouse.x * 0.1,
                0.02
            );
        }
    });

    // اختيار الألوان بناءً على الثيم
    const wireframeColor = theme === 'dark' ? '#4AA8F0' : '#3b82f6';
    const opacity = theme === 'dark' ? 0.3 : 0.5;

    return (
        <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial
                color={wireframeColor}
                wireframe
                transparent
                opacity={opacity}
            />
        </Sphere>
    );
};

// Component for floating particles
const FloatingParticles = ({ theme }: { theme: Theme }) => {
    const pointsRef = useRef<THREE.Points>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(1000 * 3);

        for (let i = 0; i < 1000; i++) {
            const radius = 4 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }

        return positions;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.002;
            pointsRef.current.rotation.x += 0.001;
        }
    });

    // اختيار لون الجسيمات بناءً على الثيم
    const particlesColor = theme === 'dark' ? '#39FF14' : '#3b82f6';

    return (
        <Points ref={pointsRef} positions={particlesPosition} stride={3}>
            <PointMaterial
                transparent
                color={particlesColor}
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    );
};

// Component for orbiting rings
const OrbitingRings = ({ theme }: { theme: Theme }) => {
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);
    const ring3Ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (ring1Ref.current) {
            ring1Ref.current.rotation.z = time * 0.5;
            ring1Ref.current.rotation.x = Math.PI / 4;
        }

        if (ring2Ref.current) {
            ring2Ref.current.rotation.z = -time * 0.3;
            ring2Ref.current.rotation.y = Math.PI / 3;
        }

        if (ring3Ref.current) {
            ring3Ref.current.rotation.z = time * 0.7;
            ring3Ref.current.rotation.x = -Math.PI / 6;
        }
    });

    // اختيار ألوان الحلقات بناءً على الثيم
    const ring1Color = theme === 'dark' ? '#39FF14' : '#1e40af';
    const ring2Color = theme === 'dark' ? '#4AA8F0' : '#3b82f6';
    const ring3Color = theme === 'dark' ? '#6E7B8B' : '#93c5fd';

    return (
        <>
            <mesh ref={ring1Ref}>
                <torusGeometry args={[3, 0.02, 16, 100]} />
                <meshBasicMaterial
                    color={ring1Color}
                    transparent
                    opacity={theme === 'dark' ? 0.6 : 0.8}
                />
            </mesh>

            <mesh ref={ring2Ref}>
                <torusGeometry args={[3.5, 0.015, 16, 100]} />
                <meshBasicMaterial
                    color={ring2Color}
                    transparent
                    opacity={theme === 'dark' ? 0.4 : 0.6}
                />
            </mesh>

            <mesh ref={ring3Ref}>
                <torusGeometry args={[4, 0.01, 16, 100]} />
                <meshBasicMaterial
                    color={ring3Color}
                    transparent
                    opacity={theme === 'dark' ? 0.3 : 0.5}
                />
            </mesh>
        </>
    );
};

// Main Interactive Globe Component
interface InteractiveGlobeProps {
    theme: Theme;
}

const InteractiveGlobe: React.FC<InteractiveGlobeProps> = ({ theme }) => {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight
                    position={[-10, -10, -10]}
                    intensity={0.5}
                    color={theme === 'dark' ? '#39FF14' : '#3b82f6'}
                />

                <Globe theme={theme} />
                <FloatingParticles theme={theme} />
                <OrbitingRings theme={theme} />
            </Canvas>
        </div>
    );
};

export default InteractiveGlobe;