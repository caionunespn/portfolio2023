import React, {useState, useEffect, useRef} from 'react';
import { motion, useAnimation } from 'framer-motion';
import ExperienceCard, {Experience} from './ExperienceCard';

const experiences: Experience[] = [
  {
    companyName: 'SUMA Connect',
    position: 'Desenvolvedor Full Stack',
    startDate: 'Dezembro de 2022',
    endDate: 'Presente',
    description: 'Nesse cargo, desenvolvo aplicações para plataformas web e mobile, utilizando Flutter e React, e integro com APIs REST e bancos de dados PostgreSQL. Além disso, participo de todo o ciclo de desenvolvimento, desde a análise de requisitos até os testes e a implantação.',
    stack: ['ReactJS', 'React Native', 'Flutter', 'Django', 'PostgreSQL'],
  },
  {
    companyName: 'Devari Tecnologia',
    position: 'Desenvolvedor Full Stack',
    startDate: 'Agosto de 2019',
    endDate: 'Novembro de 2022',
    description: 'Na Devari Tecnologia, exerci a função de Desenvolvedor Full Stack, onde estive envolvido na criação de aplicações web e mobile. Utilizei um leque diversificado de tecnologias, para desenvolver soluções inovadoras e funcionais.',
    stack: ['ReactJS', 'React Native', 'Django', 'NodeJS', 'MongoDB', 'PostgreSQL'],
  },
  {
    companyName: 'IPLANFOR - Instituto de Planejamento de Fortaleza',
    position: 'Estagiário de TI',
    startDate: 'Outubro de 2015',
    endDate: 'Agosto de 2016',
    description: 'Durante meu período como Estagiário de TI no IPLANFOR, contribuí ativamente no desenvolvimento de mídias, diagramação de processos e produção de documentações.',
  },
];

const Experience: React.FC = () => {
  const [inView, setInView] = useState<boolean[]>([]);

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
    <section id="experience" className="p-4 md:px-24 md:py-12 bg-gray-50">
      <div className="container mx-auto relative bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 w-full md:w-[80%]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Experiências Profissionais</h2>
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