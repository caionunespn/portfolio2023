import React, { useState, useEffect } from 'react';

const SectionNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = ['#presentation', '#projects', '#skills', '#experience', '#education', '#contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
      const currentSection = document.querySelector(sections[i]) as HTMLElement;
      if (currentSection) {
        const sectionTop = currentSection.offsetTop - 300;
        const sectionBottom = sectionTop + currentSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(i);
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

  const scrollToSection = (index: number) => {
    const targetSection = document.querySelector(sections[index]) as HTMLElement;
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed top-[85%] left-[96%] transform -translate-y-1/2 flex flex-col justify-center items-center hidden  md:flex">
      {sections.map((section, index) => (
        <div key={index}>
            <div
            className={`w-4 h-4 rotate-45 cursor-pointer transition duration-300 ease-in-out ${
                activeSection === index ? 'bg-purple-400' : 'bg-gray-300 mb-3'
            }`}
            onClick={() => scrollToSection(index)}
            ></div>
            {(activeSection === index && index < sections.length - 1) && <div className={`w-2 h-4 border-r-2 border-black transition duration-300 ease-in-out`}/>}
        </div>
      ))}
    </div>
  );
};

export default SectionNav;
