import React from 'react';
import { Button } from './button';

export default function HireMeButton({ children }) {
  return (
    <Button className='h-12 w-32 text-xl  bg-white text-black border-2 border-blue-400 hover:bg-blue-400 font-normal'>
      {children}
    </Button>
  );
}
