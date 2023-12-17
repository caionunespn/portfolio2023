import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, {Project} from './ProjectCard';

interface ProjectsProps {}

const myProjects: Project[] = [
  {
    name: 'AGNES escola',
    image: '/escola.png',
    technologies: ['React Native', 'Node JS'],
    description: 'Essa aplicação foi desenvolvida para a disciplina que integra disciplinas do 7° semestre da faculdade. Ela é uma extensão da aplicação AGNES, voltada para ajudar mulheres trans a encontrarem escolas que estão alinhadas com o respeito aos direitos das pessoas trans.',
    learned: ['Web scraping', 'Testes automatizados', 'Gerenciamento de projetos'],
  },
  {
    name: 'Contatos de Emergência',
    image: '/emergency.png',
    technologies: ['Kotlin', 'Firebase'],
    description: 'Essa aplicação foi desenvolvida para a disciplina Programação para Dispositivos Móveis. O objetivo da aplicação é salvar no sistema contatos de emergência que podem ser discados rapidamente.',
    learned: ['Desenvovimento nativo (Android)', 'Acesso de recursos nativos', 'Firebase'],
  },
  {
    name: 'AGNES',
    image: '/agnes.png',
    technologies: ['React Native', 'Node JS'],
    description: 'Essa aplicação foi desenvolvida para a disciplina Tópicos Avançados em Design de Interfaces Gráficas. O objetivo da aplicação é fornecer uma rede de apoio que conecta mulheres trans estudantes do ensino médio com suas escolas. Através da aplicação, elas têm diversas ferramentas disponíveis para se comunicar como postagens de outras estudantes, denúncia para a escola, dentre outras',
    learned: ['Arquitetura de sistemas', 'Glassmorphism', 'Gerenciamento de projetos'],
  },
  {
    name: 'SMD Carpool',
    image: '/smdcarpool.png',
    technologies: ['React Native', 'Laravel', 'Google Cloud Storage'],
    description: 'Essa aplicação foi desenvolvido no projeto que integra disciplinas do 3° semestre da faculdade. O objetivo da aplicação é ser utilizada para gerenciamento de caronas de estudantes do curso Sistemas e Mídias Digitais da Universidade Federal do Ceará. Nela, motoristas e passageiros podem se cadastrar para realizarem essa parceria.',
    learned: ['Desenvolvimento móvel multiplataforma', 'Material Design', 'Desenvolvimento de API Rest com Laravel', 'Integração de APIs externas', 'Gerenciamento de projetos'],
  },
  {
    name: 'Notitas',
    image: '/notitas.png',
    technologies: ['Javascript', 'P5.js'],
    description: 'Essa é uma aplicação web que foi desenvolvida no projeto que integra disciplinas do 2° semestre da faculdade. O objetivo da aplicação é ser utilizada como recurso criativo para crianças criarem músicas na disciplina de Música da Unidade Universitária de Educação Infantil (UUNDC).',
    learned: ['Criação de MVPs', 'Conceitos básicos de desenvolvimento de WebApps', 'Gerenciamento de projetos'],
  },
  {
    name: 'Satyr',
    image: '/satyr.png',
    technologies: ['Game Maker Language'],
    description: 'Esse jogo foi desenvolvido no projeto que integra disciplinas do 1° semestre da faculdade. A temática do jogo giram em torno de Satyr, um sátiro defensor da natureza que desperta para lutar contra a corporação Ômega, que tem desmatado florestas com propósitos malignos.',
    learned: ['Conceitos básicos de desenvolvimento de jogos', 'Gerenciamento de projetos'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="flex w-screen">
      <div className="flex flex-col justify-center w-full p-8 md:p-16 bg-gradient-to-r from-purple-500 to-purple-600">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-2 md:mb-8 self-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos
        </motion.h2>
        <div className="grid grid-cols-1 gap-4">
          {myProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;