import React, { useContext } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

import { LanguageContext } from '@/contexts/LanguageContext';

export default function Navigation() {
  const { language } = useContext(LanguageContext);
  return (
    <div className='flex items-center mt-14  '>
      <img src='/images/logoUzan.svg' alt='' />
      <nav className='flex flex-row flex-1 justify-end items-center gap-16 text-xl font-normal'>
        <h4>{language.skils}</h4>
        <h4>{language.projects}</h4>
        <Button className=''>{language.hireMe}</Button>
      </nav>
    </div>
  );
}
