import React, { useState, useEffect } from 'react';
import {RiMenu4Fill} from 'react-icons/ri';
import HeaderButton from './HeaderButton';
import { useRouter } from 'next/router';
import { getKeys } from '@/languages';

const Header: React.FC = () => {
  const router = useRouter();
  const languageTexts = getKeys("header", router.locale) as any;

  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    '#presentation',
    '#projects',
    '#skills',
    '#experience',
    '#education',
    '#contact',
  ];
  const sectionsLabel = [
    languageTexts.presentation,
    languageTexts.projects,
    'Skills',
    languageTexts.professional,
    languageTexts.education,
    languageTexts.contact ,
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
      const currentSection = document.querySelector(
        sections[i]
      ) as HTMLElement;
      if (currentSection) {
        const sectionTop = currentSection.offsetTop - 300;
        const sectionBottom = sectionTop + currentSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sections[i]);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.querySelector(
      sectionId
    ) as HTMLElement;
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed lg:top-5 z-50 lg:shadow-lg rounded-xl w-full lg:w-auto">
      <div className="flex justify-between items-center p-4 lg:hidden">
        <button
          className="bg-gray-50 rounded-full p-2 text-gray-600 focus:outline-none focus:text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <RiMenu4Fill className="text-2xl transition duration-300 ease-in-out" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="bg-gray-50 py-4 px-2 lg:hidden">
          <ul className="flex flex-col items-center">
            {sections.map((section, index) => (
              <HeaderButton
                key={section}
                sectionId={section}
                label={sectionsLabel[index]}
                active={activeSection === section}
                onClick={() => scrollToSection(section)}
              />
            ))}
          </ul>
        </nav>
      )}

      <nav className="hidden lg:flex justify-center">
        <ul className="flex">
          {sections.map((section, index) => (
            <HeaderButton
              key={section}
              first={section === '#presentation'}
              last={section === '#contact'}
              sectionId={section}
              label={sectionsLabel[index]}
              active={activeSection === section}
              onClick={() => scrollToSection(section)}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
