import React from 'react';
import EducationCard, {Education} from './EducationCard';
import { useRouter } from 'next/router';
import { getKeys } from '@/languages';

const Education: React.FC = () => {
  const router = useRouter();
  const languageTexts = getKeys("education", router.locale) as any;

  const educations: Education[] = [
    {
      institutionName: languageTexts.tech.institutionName,
      degree: languageTexts.tech.degree,
      startDate: '2012',
      endDate: languageTexts.tech.endDate,
    },
    {
      institutionName: languageTexts.bach.institutionName,
      degree: languageTexts.bach.degree,
      startDate: '2017',
      endDate: languageTexts.bach.endDate,
    },
    {
      institutionName: languageTexts.master.institutionName,
      degree: languageTexts.master.degree,
      startDate: '2023',
      endDate: languageTexts.master.endDate,
    },
  ];

  return (
    <section id="education" className="py-8 lg:py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4 lg:px-24 w-full">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-12 text-center">{languageTexts.title}</h2>
        <ol className="items-center sm:flex w-full p-4 lg:p-0">
          {educations.map((education, index) => (
            <EducationCard
              key={index}
              institutionName={education.institutionName}
              degree={education.degree}
              startDate={education.startDate}
              endDate={education.endDate}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

Education.displayName = 'Education';

export default Education;
