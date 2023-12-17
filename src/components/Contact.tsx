import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import { getKeys } from '@/languages';

const Contact: React.FC = () => {
  const router = useRouter();
  const languageTexts = getKeys("contact", router.locale) as any;

  const controls = useAnimation();
  const contactRef = useRef<HTMLDivElement>(null);
  const initialState = {
    email: "",
    name: "",
    message: ""
  };
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialState);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChangeValue = (field: string, value: string) => {
    setForm(previousState => ({...previousState, [field]: value}));
  }

  function validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(form.email)) return setError("E-mail inválido");

    setLoading(true);
    setError("");
    setSuccess("");
    
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        setForm(initialState);
        setSuccess("Mensagem enviada com sucesso");
      } else if (res.status === 400) {
        setError("Ocorreu um erro no envio de e-mail");
      }
    })
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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <section id="contact" className="py-12 bg-gray-50 dark:bg-gray-900" ref={contactRef}>
      <motion.div
        className="container mx-auto px-4"
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-violet-600 dark:text-white">{languageTexts.title}</h2>
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6 dark:bg-gray-500">
          <p className="text-gray-700 text-lg mb-4 dark:text-white">
            {languageTexts.formDescription + ' '}
            <a href="mailto:caionunes3000@gmail.com" className="text-violet-500 dark:text-white dark:underline hover:underline">
              caionunes3000@gmail.com
            </a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1 dark:text-white">
                {languageTexts.nameLabel}
              </label>
              <input
                disabled={loading}
                value={form.name}
                onChange={(e) => handleChangeValue("name", e.target.value)}
                type="text"
                id="name"
                name="name"
                className="border rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1 dark:text-white">
                E-mail:
              </label>
              <input
                disabled={loading}
                value={form.email}
                onChange={(e) => handleChangeValue("email", e.target.value)}
                type="email"
                id="email"
                name="email"
                className="border rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1 dark:text-white">
                {languageTexts.messageLabel}
              </label>
              <textarea
                disabled={loading}
                value={form.message}
                onChange={(e) => handleChangeValue("message", e.target.value)}
                id="message"
                name="message"
                className="border rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            {success && <p className="text-sm text-green-800 my-2">{success}</p>}
            {error && <p className="text-sm text-red-800 my-2">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-violet-500 to-violet-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-violet-700 transition duration-300 ease-in-out w-full"
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
