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
      {/* Dropdown for filtering tasks */}
      <div className='mb-4'>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='p-2 rounded border border-gray-300'
        >
          <option value="All">All tasks</option>
          <option value="Important">Important Task</option>
          <option value="Completed">Completed Task</option>
          <option value="In Completed">In Completed Task</option>
        </select>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {filteredData.map((item, i) => (
          <div key={i} className='bg-yellow-300 flex flex-col justify-between rounded-sm p-4'>
            <div className="border border-red-600 rounded-xl p-4 bg-gray-200">
              <div>
                <h1 className='text-xl font-semibold'>{item.title}</h1>
                <p className='text-gray-900 my-2'>{item.desc}</p>
              </div>
            </div>
            <div className="mt-4 w-full flex flex-col items-center">
              <button
                className={`p-2 rounded ${
                  item.status === 'In Completed' ? 'bg-red-400' : 'bg-green-400'
                }`}
              >
                {item.status}
              </button>
              <div className="text-white p-2 w-full flex justify-around text-xl">
                <button className='fav-task hover:scale-50 duration-1000'>
                  <FaHeart />
                </button>
                <button>
                  <IoCheckmarkDoneCircleSharp />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
        {home === 'true' && (
          <div className='bg-gray-600 flex flex-col justify-center text-center p-4 hover:scale-105 transition-all duration-100'>
            <MdAddTask className='text-5xl' />
            <h2 className='bg-gray-400 text-white mt-4 text-2xl'>Add task</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
