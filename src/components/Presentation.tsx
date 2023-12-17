import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
      className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2 text-lg md:text-xl mr-4 hover:bg-purple-600 hover:underline text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
    >
      {children}
    </a>
  );
};

const Presentation: React.FC = () => {
  return (
    <motion.section
      id="presentation"
      className="flex w-screen md:h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center w-full bg-gray-50 px-8 pt-24 pb-8 md:px-32">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute top-2 left-2 bg-purple-600 w-32 h-32 md:w-48 md:h-48" />
          <Image
            className="relative object-cover w-32 h-32 md:w-48 md:h-48"
            width="512"
            height="512"
            src="/profile.jpg"
            alt="imagem de perfil"
          />
        </motion.div>
        <motion.p
          className="mt-8 font-bold leading-[1.2] text-2xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Oi! Me chamo <span className="text-purple-500">Caio Nunes</span> :)
        </motion.p>
        <motion.p
          className="mt-1 font-bold leading-[1.2] text-xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Sou Desenvolvedor Full Stack
        </motion.p>
        <motion.p
          className="leading-[1.2] text-xl md:text-4xl mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Trabalho com ReactJS, React Native, Flutter, Django e NodeJS
        </motion.p>
        <motion.div
          className="flex mt-8 justify-center md:justify-start"
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
