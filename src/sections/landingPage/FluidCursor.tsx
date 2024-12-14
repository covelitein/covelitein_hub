'use client';
import { useEffect } from 'react';

import fluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className='absolute top-0 left-0 h-full w-full z-[999] pointer-events-none max-md:hidden'>
      <canvas id='fluid' className='w-full h-full' />
    </div>
  );
};
export default FluidCursor;
