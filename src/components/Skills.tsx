import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DiReact, DiNodejs, DiPhp, DiLaravel, DiPython, DiJava, 
  DiHtml5, DiCss3, DiSass, DiGit, DiMysql, DiDocker, DiPostgresql, DiMongodb, 
  DiGoogleCloudPlatform, DiFirebase  
} from 'react-icons/di';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';

interface SkillsSectionProps {
  color?: string;
}

interface Skill {
  label: string;
  icon: React.ReactNode;
  color: string;
  view: string;
}

const skillsList: Skill[] = [
  { label: 'JavaScript', icon: <BiLogoJavascript />, color: '#f7df1e', view: 'javascript-icon' },
  { label: 'TypeScript', icon: <BiLogoTypescript />, color: '#007acc', view: 'typescript-icon' },
  { label: 'ReactJS', icon: <DiReact />, color: '#61dbfb', view: 'reactjs-icon' },
  { label: 'NodeJS', icon: <DiNodejs />, color: '#68a063', view: 'nodejs-icon' },
  { label: 'PHP', icon: <DiPhp />, color: '#777bb3', view: 'php-icon' },
  { label: 'Laravel', icon: <DiLaravel />, color: '#ff2d20', view: 'laravel-icon' },
  { label: 'Python', icon: <DiPython />, color: '#306998', view: 'python-icon' },
  { label: 'Java', icon: <DiJava />, color: '#007396', view: 'java-icon' },
  { label: 'HTML', icon: <DiHtml5 />, color: '#e34c26', view: 'html-icon' },
  { label: 'CSS', icon: <DiCss3 />, color: '#2965f1', view: 'css-icon' },
  { label: 'SCSS', icon: <DiSass />, color: '#c96195', view: 'scss-icon' },
  { label: 'Git', icon: <DiGit />, color: '#f05032', view: 'git-icon' },
  { label: 'MySQL', icon: <DiMysql />, color: '#4479a1', view: 'mysql-icon' },
  { label: 'Docker', icon: <DiDocker />, color: '#2496ed', view: 'docker-icon' },
  { label: 'PostgreSQL', icon: <DiPostgresql />, color: '#336791', view: 'postgresql-icon' },
  { label: 'MongoDB', icon: <DiMongodb />, color: '#4db33d', view: 'mongodb-icon' },
  { label: 'Google Cloud', icon: <DiGoogleCloudPlatform />, color: '#4285f4', view: 'google cloud-icon' },
  { label: 'Firebase', icon: <DiFirebase />, color: '#ffca28', view: 'firebase-icon' },
];

const Skills: React.FC<SkillsSectionProps> = () => {
  const iconProps = { size: 64 };
  const iconRefs = useRef<Array<HTMLDivElement | null>>(new Array(skillsList.length).fill(null));
  const [inViewIcons, setInViewIcons] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewIcons((prevInViewIcons) => [
              ...prevInViewIcons,
              entry.target.id,
            ]);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    iconRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col max-w-7xl">
        <h2 className="text-4xl font-semibold mb-8 self-center">Skills</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsList.map((skill, index) => (
            <ColoredIcon
              key={index}
              icon={skill.icon}
              color={skill.color}
              label={skill.label}
              {...iconProps}
              inView={inViewIcons.includes(skill.view)}
              ref={(el) => (iconRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ColoredIconProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  size: number;
  inView: boolean;
  ref: React.Ref<HTMLDivElement>;
}

const ColoredIcon = React.forwardRef<HTMLDivElement, ColoredIconProps>(({
  icon,
  color,
  label,
  size,
  inView,
}, ref) => {
  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      id={`${label.toLowerCase()}-icon`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={iconVariants}
      ref={ref}
    >
      {React.cloneElement(icon as React.ReactElement<any>, { color, size })}
      <span className="text-lg font-regular">{label}</span>
    </motion.div>
  );
});

ColoredIcon.displayName = 'ColoredIcon';
Skills.displayName = 'Skills';

export default Skills;