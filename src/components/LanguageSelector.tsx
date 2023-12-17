import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';

const LanguageSelector = () => {
    const router = useRouter();
    const [language, setLanguage] = useState(router.locale);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedLanguage = e.target.value;
      router.push('/', '/', { locale: selectedLanguage })
      setLanguage(selectedLanguage);
    };
  
    return (
      <div className="flex items-center bg-white border border-gray-300 w-fit-content h-7 px-2 rounded-full dark:text-white  dark:bg-gray-700">
        <div className="w-6 h-6 mr-1 flex items-center justify-center">
          <Image
            src={language == "en-US" ? "/usa.png" : "/br.png"}
            alt={language == "en-US" ? "USA Flag" : "Bandeira brasileira"}
            className="w-5 h-5 rounded-full object-cover"
            width="100"
            height="100"
          />
        </div>
        <select
          value={language}
          onChange={handleChange}
          className="bg-white text-gray-700 focus:outline-none focus:border-blue-500 text-sm dark:text-white dark:bg-gray-700"
        >
          <option value="pt-BR">Português</option>
          <option value="en-US">English</option>
        </select>
      </div>
    );
  };
  
  export default LanguageSelector;
  