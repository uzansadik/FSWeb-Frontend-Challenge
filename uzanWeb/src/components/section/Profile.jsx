import React, { useContext } from 'react';
import ParagraphH2 from '../ui/ParagraphH2';
import { LanguageContext } from '@/contexts/LanguageContext';
import ParagraphH3 from '../ui/ParagraphH3';
import { Separator } from '../ui/separator';
import ProfileInformation from '../ui/ProfileInformation';
import { DataContext } from '@/contexts/DataContext';

export default function Profile() {
  const { language } = useContext(LanguageContext);
  const { profileInformations, aboutMe } = useContext(DataContext);
  return (
    <section id='profile' className='mt-10 flex flex-col  gap-10'>
      <ParagraphH2 displayText={language.profile} />
      <div className='flex flex-row items-start  gap-10'>
        <div className='flex flex-col items-start min-w-96 gap-2'>
          <ParagraphH3>{language.profile}</ParagraphH3>
          <div className='flex flex-col  '>
            {profileInformations.map((info, index) => (
              <ProfileInformation
                info={info.title}
                infoValue={info.value}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2  items-start'>
          <ParagraphH3>{language.aboutMe}</ParagraphH3>
          <h4 className='text-left'>{aboutMe}</h4>
        </div>
      </div>
      <Separator />
    </section>
  );
}
