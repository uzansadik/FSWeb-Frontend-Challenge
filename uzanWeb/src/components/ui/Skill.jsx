import React from 'react';
import ParagraphH3 from './ParagraphH3';

export default function Skill({ title, summary }) {
  return (
    <div className='flex flex-col items-start font-inter gap-4 max-w-[320px] '>
      <ParagraphH3>{title}</ParagraphH3>
      <p className='text-xs text-left'>{summary}</p>
    </div>
  );
}
