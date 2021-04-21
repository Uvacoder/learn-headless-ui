import { useState } from 'react';
import Modal from '@/components/Modal';

export default function modal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className='bg-dark'>
        <article className='flex items-center justify-center min-h-screen text-white layout'>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
        </article>
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
