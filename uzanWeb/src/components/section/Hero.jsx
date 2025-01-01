import { Github, Linkedin } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContext';
import { LanguageContext } from '@/contexts/LanguageContext';

function Hero() {
  const { hero } = useContext(DataContext);
  const { language } = useContext(LanguageContext);
  return (
    <section id='hero' className='flex flex-row mt-16 justify-between'>
      <div className='flex flex-col items-start gap-10 max-w-[596px]'>
        <h5> ______ Sadık Uzan</h5>
        <h1 className=' text-7xl font-bold text-left font-inter '>
          {hero.title}
        </h1>
        <div className='bio-summary text-left'>{hero.summary}</div>
        <div className='flex gap-5'>
          <Button className=''>{language.hireMe}</Button>
          <Button>
            <Github />
            Github
          </Button>
          <Button>
            <Linkedin />
            LinkedIn
          </Button>
        </div>
      </div>
      <img
        className='h-96 w-96  rounded-3xl drop-shadow-2xl

'
        src='/images/sadik-uzan.jpg'
        alt='Sadık Uzan'
      />
    </section>
  );
}

export default Hero;
