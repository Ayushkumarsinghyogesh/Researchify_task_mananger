import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendar, FaBell, FaSearch } from 'react-icons/fa';

const Navbar = ({ onContactClick }) => {
  return (
    <nav className='bg-white p-4 flex justify-between items-center shadow-md rounded-b-lg'>
      <Link to="/" className='text-blue-500 text-lg font-bold'>Researchify</Link>
      <div>
        <Link to="/signup" className='text-gray-800 mx-4 hover:text-blue-500'>Signup/Login</Link>
        <button onClick={onContactClick} className='text-gray-800 hover:text-blue-500'>
          Contact Us
        </button>
      </div>

      <div className='flex space-x-6'>
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
    </nav>
  );
};

export default Navbar;
