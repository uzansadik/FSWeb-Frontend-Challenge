import React, { useContext } from 'react';
import ParagraphH3 from './ParagraphH3';
import { LanguageContext } from '@/contexts/LanguageContext';
import TechStack from './TechStack';

export default function ProjectCard({
  techStacks,
  title,
  githubURL,
  siteURL,
  desc,
  imgURL,
}) {
  const { language } = useContext(LanguageContext);
  return (
    <div className='flex flex-col items-start max-w-[300px] font-inter gap-4'>
      <img src={imgURL} alt='' />
      <ParagraphH3>Workintech</ParagraphH3>
      <p className='text-left text-[14px] text-[#6B7280] font-normal'>{desc}</p>
      <div className='flex justify-start gap-2'>
        {techStacks.map((tech, index) => (
          <TechStack key={index} tech={tech} />
        ))}
      </div>
      <div className='flex flex-row justify-between w-full'>
        <a
          className='text-[#3730A3] underline font-semibold text-lg'
          href={githubURL}
        >
          Github
        </a>
        <a
          className='text-[#3730A3] underline font-semibold text-lg '
          href={siteURL}
        >
          {language.viewSite}
        </a>
      </div>
    </div>
  );
}
