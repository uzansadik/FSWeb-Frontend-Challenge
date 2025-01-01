import { LanguageContext } from '@/contexts/LanguageContext';
import React, { useContext } from 'react';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { Label } from '../ui/Label';
import { ModeToggle } from '../ui/mode-toggle';
import LangToggle from '../ui/lang-toggle';

export default function Header() {
  return (
    <header className='flex flex-row justify-end gap-10 '>
      <ModeToggle></ModeToggle>
      <div>
        <LangToggle></LangToggle>
      </div>
    </header>
  );
}
