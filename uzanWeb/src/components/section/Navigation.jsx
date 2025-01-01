import React, { useContext } from 'react';
import { Button } from '../ui/button';

import { LanguageContext } from '@/contexts/LanguageContext';

export default function Navigation() {
  const { language } = useContext(LanguageContext);
  return (
    <div className='flex items-center mt-14'>
      <img src='/images/logoUzan.svg' alt='' />
      <nav className='flex flex-row flex-1 justify-end items-center gap-16 text-xl font-normal'>
        <a href='#skills'>
          <h4>{language.skills}</h4>
        </a>
        <a href='#projects'>
          <h4>{language.projects}</h4>
        </a>
        <Button className=''>{language.hireMe}</Button>
      </nav>
    </div>
  );
}
