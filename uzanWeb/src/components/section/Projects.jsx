import React, { useContext } from 'react';
import ParagraphH2 from '../ui/ParagraphH2';
import ProjectCard from '../ui/ProjectCard';
import { DataContext } from '@/contexts/DataContext';
import { LanguageContext } from '@/contexts/LanguageContext';

const tech = ['react', 'axios', 'tailwinds'];

export default function Projects() {
  const { projects } = useContext(DataContext);
  const { lang, language } = useContext(LanguageContext);
  return (
    <section id='projects' className='mt-10 flex flex-col gap-8'>
      <ParagraphH2 displayText={language.projects} />
      <div className='flex justify-start gap-28 flex-wrap'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            techStacks={project.techStacks}
            title={project.title}
            githubURL={project.github}
            imgURL={project.img}
            desc={project.desc[lang]}
            siteURL={project.siteURL}
          />
        ))}
      </div>
    </section>
  );
}
