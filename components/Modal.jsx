import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        static
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed inset-0 z-10 overflow-y-auto'
      >
        <div className='flex items-center justify-center min-h-screen'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-30' />
          </Transition.Child>

          {/* Modal Body */}
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300 transform'
            enterFrom='opacity-0 translate-y-4'
            enterTo='opacity-100 translate-y-0'
            leave='ease-in duration-200 transform'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-4'
          >
            <div className='z-20 max-w-md p-8 mx-auto bg-white rounded'>
              <Dialog.Title>Deactivate account</Dialog.Title>
              <Dialog.Description>
                This will permanently deactivate your account
              </Dialog.Description>
              <p className='mt-2'>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
              <div className='mt-2 space-x-4'>
                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
