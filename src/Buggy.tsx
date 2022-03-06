import { useState } from 'react';

import { brokenPromise } from './services';

export function Buggy() {
  const [err, setErr] = useState(false);
  async function handleClick() {
    try {
      await brokenPromise();
    } catch {
      setErr(true);
    }
  }
  if (err) throw new Error('Eu avisei!');
  return (
    <div className='flex items-center justify-center h-screen'>
      <button className='rounded bg-indigo-500 text-white p-8 text-center' onClick={handleClick}>
        Eu vou quebrar! 😳
      </button>
    </div>
  );
}
