import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden">
      <motion.div
        className="relative w-full h-1/2 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </motion.div>
      <div className="p-8">
        <motion.h2
          custom={1}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={variants}
          className="text-3xl font-bold mb-4"
        >
          {project.title}
        </motion.h2>
        <motion.p
          custom={2}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={variants}
          className="text-gray-600 mb-6"
        >
          {project.description}
        </motion.p>
        <motion.div
          custom={3}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={variants}
          className="flex flex-wrap gap-3"
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};