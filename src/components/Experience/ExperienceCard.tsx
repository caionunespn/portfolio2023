import React from 'react';

export interface Experience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  stack?: string[];
}

interface ExperienceCardProps extends Experience {
  index: number;
  lastCard: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyName,
  position,
  startDate,
  endDate,
  description,
  stack,
}) => {
  return (
    <li className="mb-4 lg:mb-10 ms-4 bg-white dark:bg-gray-500 p-4 rounded-lg">
        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-white">{startDate} - {endDate}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{companyName}</h3>
        <h3 className="text-md text-gray-600 mb-4 dark:text-white">{position}</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">{description}</p>
        {stack && (
            <div className="mt-4">
                <h4 className="font-semibold text-md dark:text-white">Stack:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {stack.map((technology, index) => (
                        <span key={index} className="px-2 py-1 bg-green-200 text-green-900 rounded-md text-md">
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        )}
    </li>
  );
};

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;
