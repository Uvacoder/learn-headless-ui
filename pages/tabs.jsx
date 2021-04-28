import { useState } from 'react';

const tabList = [
  { name: 'My Account', id: 1, current: false },
  { name: 'Company', id: 2, current: false },
  { name: 'Team Members', id: 3, current: true },
  { name: 'Billing', id: 4, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function tabs() {
  const [selected, setSelected] = useState(1);

  return (
    <div className='layout'>
      <div>
        <div className=''>
          <nav
            className='flex justify-center -mb-px space-x-8'
            aria-label='Tabs'
          >
            {tabList.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelected(tab.id)}
                className={classNames(
                  tab.id === selected
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none'
                )}
                aria-current={tab.id === selected ? 'page' : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <h2>{selected}</h2>
    </div>
  );
}
