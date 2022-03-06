import eventBus from './event-bus';
import { useEffect, useState } from 'react';

export function Loader() {
  const [modifiers, setModifiers] = useState('opacity-0 invisible');

  useEffect(() => {
    eventBus.loading.onToggle(({ payload }) => {
      if (payload) setModifiers('opacity-100 visible');
      else setModifiers('opacity-0 invisible');
    });
    return () => {
      eventBus.loading.off();
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center fixed z-10 h-screen w-screen bg-black/[0.8] transition-opacity will-change-auto ${modifiers}`}
    >
      <div className='animate-spin bg-transparent rounded-full w-20 h-20 border-8 border-b-indigo-500 mb-4'></div>
      <p className='text-center text-white'>Loading...</p>
    </div>
  );
}
