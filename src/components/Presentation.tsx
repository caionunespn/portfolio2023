import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { getKeys } from '@/languages';

import SwitchButton from './SwitchButton';
import { FaGithub, FaLinkedin, FaRegSun, FaRegMoon } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import { useTheme } from 'next-themes';

interface LinkButtonProps {
  link: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-2 text-lg lg:text-xl mr-4 hover:bg-violet-600 hover:underline text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
    >
      {children}
    </a>
  );
};

const Presentation: React.FC = () => {
  const router = useRouter();
  const languageTexts = getKeys("presentation", router.locale) as any;
  const {theme, setTheme} = useTheme();

  return (
    <motion.section
      id="presentation"
      className="flex w-screen lg:h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-6 right-4 lg:top-6 lg:right-8 flex">
        <SwitchButton
          contentChecked={<FaRegMoon />}
          contentUnchecked={<FaRegSun />}
          bgColor='bg-violet-600'
          initialState={theme == 'dark' ? true : false}
          onSwitch={() => theme == "dark"? setTheme('light'): setTheme("dark")}
        />
        <LanguageSelector />
      </div>
      <div className="flex flex-col justify-center w-full bg-gray-50 px-8 pt-24 pb-8 lg:px-32 dark:bg-gray-900">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute top-2 left-2 bg-violet-600 w-32 h-32 lg:w-48 lg:h-48" />
          <Image
            className="relative object-cover w-32 h-32 lg:w-48 lg:h-48 dark:border-white dark:border-2"
            width="512"
            height="512"
            src="/profile.jpg"
            alt={languageTexts.profilePhoto}
          />
        </motion.div>
        <motion.p
          className="mt-8 font-bold leading-[1.2] text-2xl lg:text-5xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {languageTexts.name} <span className="text-violet-500">Caio Nunes</span> :)
        </motion.p>
        <motion.p
          className="mt-1 font-bold leading-[1.2] text-xl lg:text-4xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {languageTexts.position}
        </motion.p>
        <motion.p
          className="leading-[1.2] text-xl lg:text-3xl mt-1 lg:mt-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {languageTexts.stack}
        </motion.p>
        <motion.div
          className="flex mt-8 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <LinkButton link="https://github.com/caionunespn/">
            Github
            <FaGithub size={24} className="ml-2" />
          </LinkButton>
          <LinkButton link="https://www.linkedin.com/in/caio-eduardo-pereira-nunes-08b51317b/">
            LinkedIn
            <FaLinkedin size={24} className="ml-2" />
          </LinkButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

Presentation.displayName = 'Presentation';

export default Presentation;
