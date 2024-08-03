import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const data = [
    {
      title: "All tasks",
      link: '#',
      dropdown: [
        { title: "Important Task", link: '/importantTasks' },
        { title: "Completed Task", link: '/completedTasks' },
        { title: "Incompleted Tasks", link: '/incompleteTasks' },
      ],
    },
    // Other main links without dropdowns
    {
      title: "Another Link",
      link: '/anotherLink',
    },
  ];

  return (
    <div className='bg-white p-4 rounded-xl'>
      <h2 className='text-black text-xl font-bold'>Welcome User !</h2>
      <hr className='mb-4' />
      <div className='flex flex-col'>
        {data.map((item, index) => (
          <div key={index} className='relative'>
            <Link 
              to={item.link} 
              onClick={item.dropdown ? (e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              } : undefined}
              className='my-2 rounded-2xl bg-purple-500 text-white text-sm px-3 py-1 mt-2 hover:bg-white hover:text-black hover:scale-105 transition-all duration-150 flex items-center'
            >
              {item.title}
              {item.dropdown && (
                <span className='ml-2 text-xs'>{isOpen ? '▲' : '▼'}</span> // Arrow indicator
              )}
            </Link>
            {item.dropdown && isOpen && (
              <div className='absolute left-0 mt-1 bg-white rounded-md shadow-lg w-full'>
                {item.dropdown.map((subItem, subIndex) => (
                  <Link 
                    to={subItem.link} 
                    key={subIndex} 
                    className='block px-4 py-2 text-black bg-white'
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='mt-4'>
        <button className='bg-gray-500 w-full p-2 rounded hover:bg-white text-white hover:text-black'>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
