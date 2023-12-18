import React, {useState, useEffect, useRef} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import ExperienceCard, {Experience} from './ExperienceCard';
import { getKeys } from '@/languages';

const Experience: React.FC = () => {
  const router = useRouter();
  const languageTexts = getKeys("experience", router.locale) as any;

  const [inView, setInView] = useState<boolean[]>([]);

  const experiences: Experience[] = [
    {
      companyName: 'SUMA Connect',
      position: languageTexts.suma.position,
      startDate: languageTexts.suma.startDate,
      endDate: languageTexts.suma.endDate,
      description: languageTexts.suma.description,
      stack: ['ReactJS', 'React Native', 'Flutter', 'Django', 'PostgreSQL'],
    },
    {
      companyName: 'Devari Tecnologia',
      position: languageTexts.devari.position,
      startDate: languageTexts.devari.startDate,
      endDate: languageTexts.devari.endDate,
      description: languageTexts.devari.description,
      stack: ['ReactJS', 'React Native', 'Django', 'NodeJS', 'MongoDB', 'PostgreSQL'],
    },
    {
      companyName: 'IPLANFOR - Instituto de Planejamento de Fortaleza',
      position: languageTexts.iplanfor.position,
      startDate: languageTexts.iplanfor.startDate,
      endDate: languageTexts.iplanfor.endDate,
      description: languageTexts.iplanfor.description,
    },
  ];

  const experienceControls = useAnimation();
  const stackControls = useAnimation();

  const handleExperienceAnimation = (index: number) => {
    experienceControls.start({
      opacity: inView[index] ? 1 : 0,
      y: inView[index] ? 0 : 20,
      transition: {
        duration: 0.5,
      },
    });
  };

  const handleStackAnimation = (index: number) => {
    stackControls.start({
      opacity: inView[index] ? 1 : 0,
      y: inView[index] ? 0 : 20,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    });
  };

  const experienceRefs = useRef<HTMLDivElement[]>(new Array(experiences.length).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    inView.forEach((_, index) => {
      handleExperienceAnimation(index);
      handleStackAnimation(index);
    });
  }, [inView]);

  return (
    <section id="experience" className="p-4 lg:px-24 lg:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto relative bg-gradient-to-r from-violet-500 to-violet-600 dark:from-gray-700 dark:to-gray-700 rounded-2xl p-4 w-full lg:w-[80%]">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-white">{languageTexts.title}</h2>
        <ol className="relative border-s border-white">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              ref={(element) => (experienceRefs.current[index] = element as HTMLDivElement)}
              animate={experienceControls}
            >
              <ExperienceCard
                key={index}
                companyName={experience.companyName}
                position={experience.position}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                stack={experience.stack}
                lastCard={index === experiences.length - 1}
                index={index}
              />
            </motion.div>
          ))}
        </ol>
      </div>
    </section>
  );
};

Experience.displayName = 'Experience';

export default Experience;