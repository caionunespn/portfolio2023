import { getKeys } from '@/languages';
import { useRouter } from 'next/router';
import React from 'react';

const Footer: React.FC = () => {
  const router = useRouter();
  const languageTexts = getKeys("footer", router.locale) as any;
  
  return (
    <section id="footer" className="px-24 pb-8 bg-gray-50 w-screen dark:bg-gray-800">
      <footer className="text-center text-gray-500 text-sm mt-8 dark:text-white">
        © {new Date().getFullYear()} Caio Nunes. {languageTexts.rights}
        <p>{languageTexts.developed}</p>
        <div className="flex justify-center items-center mt-2">
        <a href="https://www.linkedin.com/in/caio-eduardo-pereira-nunes-08b51317b/" className="text-gray-500 hover:text-violet-600 mr-4 dark:text-white" target="_blank" rel="noopener noreferrer">
            LinkedIn
        </a>
        <a href="https://github.com/caionunespn" className="text-gray-500 hover:text-violet-600 dark:text-white" target="_blank" rel="noopener noreferrer">
            GitHub
        </a>
        </div>
      </footer>
    </section>
  );
}

Footer.displayName = 'Footer';

export default Footer;