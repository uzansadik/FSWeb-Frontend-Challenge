import { LanguageContext } from '@/contexts/LanguageContext';
import { Section } from 'lucide-react';
import React, { useContext } from 'react';
import Skill from '../ui/Skill';
import { DataContext } from '@/contexts/DataContext';
import { Separator } from '../ui/separator';
import ParagraphH2 from '../ui/ParagraphH2';

export default function Skills() {
  const { language } = useContext(LanguageContext);
  const { skills } = useContext(DataContext);
  return (
    <section id='skills' className='mt-24 flex flex-col gap-10'>
      <ParagraphH2 displayText={language.skills}></ParagraphH2>

      <div className='flex gap-x-32 gap-y-10 justify-start flex-wrap'>
        {skills.map((skill, index) => {
          return (
            <Skill
              key={index}
              title={skill.technology}
              summary={skill.description}
            />
          );
        })}
        <Separator />
      </div>
    </section>
  );
}
