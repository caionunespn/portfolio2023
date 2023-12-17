import React from 'react';
import EducationCard, {Education} from './EducationCard';

const educations: Education[] = [
  {
    institutionName: 'Instituto Federal de Educação, Ciência e Tecnologia do Ceará',
    degree: 'Técnico em Informática',
    startDate: '2012',
    endDate: '2016',
  },
  {
    institutionName: 'Universidade Federal do Ceará',
    degree: 'Bacharelado em Sistemas e Mídias Digitais',
    startDate: '2017',
    endDate: '2022',
  },
  {
    institutionName: 'Universidade Federal do Ceará',
    degree: 'Mestrado em Ciência da Computação',
    startDate: '2023',
    endDate: 'até o momento',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-8 md:py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-12 text-center">Formação Acadêmica</h2>
        <ol className="items-center sm:flex w-full p-4 md:p-0">
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

export default Education;
