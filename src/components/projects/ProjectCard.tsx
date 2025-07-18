// components/projects/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

import Link from 'next/link';
import { Project } from '@/constants/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    // ألوان حسب الفئة
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'web':
                return 'from-blue-600 to-indigo-700';
            case 'mobile':
                return 'from-green-600 to-teal-700';
            // case 'marketing':
            //     return 'from-purple-600 to-fuchsia-700';
            // case 'design':
            //     return 'from-amber-600 to-orange-700';
            
            case 'identity':
                return 'from-pink-600 to-rose-700'; // الهوية البصرية
            case 'social':
                return 'from-indigo-600 to-violet-700'; // السوشيال ميديا
            case 'digitalMarketing':
                return 'from-red-600 to-orange-800'; // التسويق الإلكتروني
            case 'banars':
                return 'from-yello-600 to-red-800'; 
            case 'hosting':
                return 'from-cyan-600 to-sky-700';
            default:
                return 'from-gray-600 to-gray-800';
        }
    };


    return (
        <Link href={`/projects/${project.id}`} passHref>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/30 transition-all group cursor-pointer"
                whileHover={{ y: -10 }}
            >
                {/* حاوية الصورة */}
                <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4 z-10">
                        <span className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-sm`}>
                            {project.category === 'web' && 'موقع ويب'}
                            {project.category === 'mobile' && 'تطبيق جوال'}
                            {project.category === 'hosting' && 'استضافة وسحابة'}
                            {project.category === 'identity' && 'هوية بصرية'}
                            {project.category === 'social' && 'سوشيال ميديا'}
                            {project.category === 'digitalMarketing' && 'تسويق إلكتروني'}
                            {project.category === 'banars' && 'بانرات'}
                        </span>
                    </div>
                    <Image
                        src={project.gallery[0]?.url || '/images/default.jpg'}
                        alt={project.gallery[0]?.caption || project.title}
                        fill
                        className="object-cover"
                    />
                </div>
                
            

                {/* باقي محتوى الكارد */}

                <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                        <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>

                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2 text-blue-400 group">
                        <span>عرض التفاصيل</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </motion.div>
        </Link>

    );
}