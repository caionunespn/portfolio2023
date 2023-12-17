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
    <li className={`h-8 w-full md:w-fit-content bg-white ${first ? 'rounded-s-xl' : last ? 'rounded-e-xl' : ''}`}>
      <a
        href={`#${sectionId}`}
        className={`block flex justify-center items-center p-4 md:px-4 md:py-0 h-full text-xs font-semibold transition duration-300 ease-in-out ${first ? 'rounded-s-xl' : last ? 'rounded-e-xl' : ''} ${
          active ? 'bg-purple-600 text-white underline font-bold' : 'text-gray-700 hover:text-purple-500 hover:underline'
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
