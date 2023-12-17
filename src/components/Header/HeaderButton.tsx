import React from 'react';

interface HeaderButtonProps {
  key: string;
  sectionId: string;
  label: string;
  active: boolean;
  onClick: () => void;
  first?: boolean;
  last?: boolean;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ sectionId, label, active, onClick, first, last }) => {
  return (
    <li className={`h-8 w-full lg:w-fit-content bg-white dark:bg-gray-500 ${first ? 'rounded-s-xl' : last ? 'rounded-e-xl' : ''}`}>
      <a
        href={sectionId}
        className={`block flex justify-center items-center p-4 lg:px-4 lg:py-0 h-full text-xs font-semibold transition duration-300 ease-in-out ${first ? 'rounded-s-xl' : last ? 'rounded-e-xl' : ''} ${
          active ? 'bg-violet-600 dark:bg-gray-700 text-white underline font-bold' : 'text-gray-700 dark:text-white hover:text-violet-500 hover:underline'
        }`}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
};

HeaderButton.displayName = 'HeaderButton';

export default HeaderButton;
