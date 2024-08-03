import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendar, FaBell, FaSearch } from 'react-icons/fa';

const Navbar = ({ onContactClick }) => {
  return (
    <nav className='bg-gray-300 p-4 flex justify-between items-center shadow-md rounded-b-lg p-2'>
      <Link to="/" className='text-blue-500 text-lg font-bold animate-bounce'>
        Researchify
      </Link>
      
      <div className='flex space-x-6 gap-4'>
        <a href="/" className='text-gray-800 hover:text-purple-500 transition-transform duration-300 transform hover:scale-125'>
          <FaHome className='text-xl' />
        </a>
        <a href="/calendar" className='text-gray-800 hover:text-purple-500 transition-transform duration-300 transform hover:scale-125'>
          <FaCalendar className='text-xl' />
        </a>
        <a href="/notifications" className='text-gray-800 hover:text-purple-500 transition-transform duration-300 transform hover:scale-125'>
          <FaBell className='text-xl' />
        </a>
        <a href="/search" className='text-gray-800 hover:text-purple-500 transition-transform duration-300 transform hover:scale-125'>
          <FaSearch className='text-xl' />
        </a>
      </div>
      
      <div className='flex items-center'>
        <div>
          <Link to="/signup" className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300'>
            Signup/Login
          </Link>
        </div>
        <div>
          <button onClick={onContactClick} className='ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300'>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
