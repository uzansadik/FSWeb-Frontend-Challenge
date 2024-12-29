import { LanguageContext } from '@/contexts/LanguageContext';
import React, { useContext } from 'react';

export default function LangToggle() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <div className='flex flex-row justify-center gap-2  hover:cursor-pointer'>
      <h5
        className={lang === 'tr' && 'font-bold text-blue-700 '}
        onClick={() => setLang('tr')}
      >
        TR
      </h5>
      <h5>|</h5>
      <h5
        className={lang === 'en' && 'font-bold text-blue-700'}
        onClick={() => setLang('en')}
      >
        EN
      </h5>
    </div>
  );
}
