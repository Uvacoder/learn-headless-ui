import { Disclosure, Transition } from '@headlessui/react';

export default function Accordion() {
  return (
    <Disclosure as='div'>
      {({ open }) => (
        <>
          <Disclosure.Button className='w-full p-4 font-bold rounded-md bg-primary-400 bg-opacity-30'>
            Is team pricing available?
          </Disclosure.Button>

          <Transition
            show={open}
            // ? Transition with scale
            // enter='transition-transform duration-300 ease-out origin-top'
            // enterFrom='transform scale-y-0'
            // enterTo='transform scale-y-100'
            // leave='transition-transform duration-300 ease-out origin-top'
            // leaveFrom='transform scale-y-100'
            // leaveTo='transform scale-y-0'
            // ? Transitiion with max-h
            enter='transition-all duration-300 linear'
            enterFrom='max-h-0 opacity-0'
            enterTo='max-h-24 opacity-100'
            leave='transition-all duration-300 linear'
            leaveFrom='max-h-24 opacity-100'
            leaveTo='max-h-0 opacity-0'
          >
            <Disclosure.Panel
              className='flex flex-col items-center p-4 border border-t-0 border-white'
              static
            >
              <p>Probably</p>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

/* 
enter='transition-all duration-250 ease-out'
enterFrom='max-h-0'
enterTo='max-h-24'
leave='transition-all duration-250 ease-out'
leaveFrom='max-h-24'
leaveTo='max-h-0' 
*/
