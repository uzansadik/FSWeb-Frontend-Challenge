import React from 'react';

export default function ProfileInformation({ info, infoValue }) {
  return (
    <div className='flex flex-row gap-10'>
      <h4 className='font-semibold min-w-36 text-left'>{info}</h4>
      <h5 className='text-left max-w-48'>{infoValue}</h5>
    </div>
  );
}
