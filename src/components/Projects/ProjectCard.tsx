import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { getKeys } from '@/languages';

export interface Project {
  name: string;
  image: string;
  technologies: string[];
  description: string;
  learned: string[];
}

const ProjectCard: React.FC<Project> = ({ name, technologies, description, image, learned }) => {
  const router = useRouter();
  const languageTexts = getKeys("projects", router.locale) as any;

  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [keep, setKeep] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setKeep(true);
    }
  }, [isVisible]);

  return (
    <div ref={cardRef}>
      <motion.div
        className={`relative overflow-hidden bg-opacity-100 bg-white dark:bg-gray-600 rounded-xl shadow-md w-full max-w-5xl mx-auto mt-8 p-4 lg:p-[48px] backdrop-blur-lg backdrop-filter ${
          isVisible ? 'scale-in' : ''
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : keep ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
      <div className="flex justify-between items-start mb-6">
        <div className="h-fit-content w-[100%] lg:w-[50%]">
          <h3 className="text-2xl lg:text-4xl font-semibold mb-4 dark:text-white">{name}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-blue-200 text-gray-800 rounded-md text-lg">
                {tech}
              </span>
            ))}
          </div>
          <img
            className="h-48 w-full mb-8 lg:mb-0 lg:h-[400px] lg:w-[500px] rounded-md lg:rounded-tl-3xl object-cover lg:ml-4 lg:mb-4 lg:absolute right-0 -bottom-8"
            src={image}
            alt={`Screenshot do ${name}`}
          />
          <p className="text-lg text-gray-700 my-2 dark:text-white">{description}</p>
          <div className="mt-4">
            <h4 className="font-semibold text-lg dark:text-white">{languageTexts.whatILearned}</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {learned.map((learn, index) => (
                <span key={index} className="px-2 py-1 bg-green-200 text-green-900 rounded-md text-lg">
                  {learn}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
