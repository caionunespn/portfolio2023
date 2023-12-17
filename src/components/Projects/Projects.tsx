import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { getKeys } from '@/languages';

import ProjectCard, {Project} from './ProjectCard';

interface ProjectsProps {}

const Projects: React.FC = () => {
  const router = useRouter();
  const languageTexts = getKeys("projects", router.locale) as any;

  const myProjects: Project[] = [
    {
      name: 'AGNES escola',
      image: '/escola.png',
      technologies: ['React Native', 'Node JS'],
      description: languageTexts.agnesEscola.description,
      learned: languageTexts.agnesEscola.learned,
    },
    {
      name: 'AGNES',
      image: '/agnes.png',
      technologies: ['React Native', 'Node JS'],
      description: languageTexts.agnes.description,
      learned: languageTexts.agnes.learned,
    },
    {
      name: 'Contatos de Emergência',
      image: '/emergency.png',
      technologies: ['Kotlin', 'Firebase'],
      description: languageTexts.emergency.description,
      learned: languageTexts.emergency.learned,
    },
    {
      name: 'SMD Carpool',
      image: '/smdcarpool.png',
      technologies: ['React Native', 'Laravel', 'Google Cloud Storage'],
      description: languageTexts.smdCarpool.description,
      learned: languageTexts.smdCarpool.learned,
    },
    {
      name: 'Notitas',
      image: '/notitas.png',
      technologies: ['Javascript', 'P5.js'],
      description: languageTexts.notitas.description,
      learned: languageTexts.notitas.learned,
    },
    {
      name: 'Satyr',
      image: '/satyr.png',
      technologies: ['Game Maker Language'],
      description: languageTexts.satyr.description,
      learned: languageTexts.satyr.learned,
    },
  ];

  return (
    <section id="projects" className="flex w-screen">
      <div className="flex flex-col justify-center w-full p-8 lg:p-16 bg-gradient-to-r from-purple-500 to-purple-600">
        <motion.h2
          className="text-3xl lg:text-4xl font-semibold mb-2 lg:mb-8 self-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {languageTexts.title}
        </motion.h2>
        <div className="grid grid-cols-1 gap-4">
          {myProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.displayName = 'Projects';

export default Projects;