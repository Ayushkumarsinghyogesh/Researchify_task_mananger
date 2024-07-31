import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { MdDelete, MdAddTask } from 'react-icons/md';

const Card = ({ home }) => {
  const [filter, setFilter] = useState('All'); // State to manage selected filter

  // Task data
  const allData = [
    {
      title: 'Card1',
      desc: 'Youre welcome! If you have any more questions or need further assistance',
      status: 'Completed'
    },
    {
      title: 'Card2',
      desc: 'Youre welcome! If you have any more questions or need further assistance',
      status: 'In Completed'
    },
  ];

  // Filter data based on selected filter
  const filteredData = allData.filter(item => 
    filter === 'All' || item.status === filter
  );

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='p-2 rounded border border-gray-300 bg-gray-200'
        >
          <option value="All">All tasks</option>
          <option value="Important">Important Task</option>
          <option value="Completed">Completed Task</option>
          <option value="In Completed">In Completed Task</option>
        </select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {filteredData.map((item, i) => (
          <div key={i} className='bg-gray-100 border border-gray-300 flex flex-col rounded-md shadow-md'>
            <div className='p-4'>
              <h1 className='text-xl font-semibold mb-2'>{item.title}</h1>
              <p className='text-gray-700'>{item.desc}</p>
            </div>
            <div className='flex flex-col items-center justify-between p-4 border-t border-gray-300'>
              <button
                className={`py-1 px-3 rounded text-white ${
                  item.status === 'In Completed' ? 'bg-red-500' : 'bg-green-500'
                }`}
              >
                {item.status}
              </button>
              <div className="mt-4 flex justify-around text-xl text-gray-700">
                <button className='hover:text-red-500 transition-colors'>
                  <FaHeart />
                </button>
                <button className='hover:text-green-500 transition-colors'>
                  <IoCheckmarkDoneCircleSharp />
                </button>
                <button className='hover:text-gray-500 transition-colors'>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
        {home === 'true' && (
          <div className='bg-gray-600 flex flex-col items-center justify-center text-center p-4 rounded-md hover:bg-gray-700 transition-all duration-300'>
            <MdAddTask className='text-5xl text-white' />
            <h2 className='bg-gray-400 text-white mt-4 text-2xl p-2 rounded'>Add task</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
