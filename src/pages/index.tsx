import Layout from '@/components/Layout';
import Presentation from '@/components/Presentation';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <Layout>
      <Presentation />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </Layout>
  );
}