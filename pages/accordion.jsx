import Accordion from '@/components/Accordion';

export default function accordion() {
  return (
    <>
      <section className='bg-dark'>
        <article className='flex flex-col items-center min-h-screen py-12 text-white layout'>
          <h1 className='mb-12'>Accordion Component</h1>
          <div className='w-11/12 max-w-3xl p-4 space-y-4 text-black bg-white rounded-md'>
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </article>
      </section>
    </>
  );
}
