import React from 'react';

const Footer: React.FC = () => {
  return (
    <section id="footer" className="px-24 pb-12 bg-gray-50 w-screen">
      <footer className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Caio Nunes. Todos os direitos reservados.
        <div className="flex justify-center items-center mt-2">
        <a href="https://www.linkedin.com/in/caio-eduardo-pereira-nunes-08b51317b/" className="text-gray-500 hover:text-purple-600 mr-4" target="_blank" rel="noopener noreferrer">
            LinkedIn
        </a>
        <a href="https://github.com/caionunespn" className="text-gray-500 hover:text-purple-600" target="_blank" rel="noopener noreferrer">
            GitHub
        </a>
        </div>
      </footer>
    </section>
  );
}

Footer.displayName = 'Footer';

export default Footer;