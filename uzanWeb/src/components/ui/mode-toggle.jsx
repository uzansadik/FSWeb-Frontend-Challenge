import { useEffect, useState } from 'react';

import { useTheme } from '@/contexts/theme-provider';
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ModeToggle() {
  const [isChecked, setChecked] = useState(() =>
    localStorage.getItem('theme') === 'light' ? false : true
  );

  const { setTheme } = useTheme();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    isChecked ? setTheme('dark') : setTheme('light');
  }, [isChecked]);

  return (
    <div className='flex items-center space-x-2'>
      <Switch
        checked={isChecked}
        onCheckedChange={setChecked}
        id='toggle-theme'
      />
      <Label className='font-normal' htmlFor='toggle-theme'>
        {isChecked ? language.toggleLightMode : language.toggleDarkMode}
      </Label>
    </div>
  );
}
