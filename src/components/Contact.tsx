import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import { getKeys } from '@/languages';

const Contact: React.FC = () => {
  const router = useRouter();
  const languageTexts = getKeys("contact", router.locale) as any;

  const controls = useAnimation();
  const contactRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log('Formulário enviado!');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const top = contactRef.current.getBoundingClientRect().top;
        const bottom = contactRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom >= 0) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica a visibilidade inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <section id="contact" className="py-12 bg-gray-50" ref={contactRef}>
      <motion.div
        className="container mx-auto px-4"
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">{languageTexts.title}</h2>
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          <p className="text-gray-700 text-lg mb-4">
            {languageTexts.formDescription + ' '}
            <a href="mailto:caionunes3000@gmail.com" className="text-purple-500 hover:underline">
              caionunes3000@gmail.com
            </a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                {languageTexts.nameLabel}
              </label>
              <input type="text" id="name" name="name" className="border rounded-md px-3 py-2 w-full" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                E-mail:
              </label>
              <input type="email" id="email" name="email" className="border rounded-md px-3 py-2 w-full" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                {languageTexts.messageLabel}
              </label>
              <textarea id="message" name="message" className="border rounded-md px-3 py-2 w-full" required></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-700 transition duration-300 ease-in-out w-full"
            >
              {languageTexts.buttonLabel}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

Contact.displayName = 'Contact';

export default Contact;
