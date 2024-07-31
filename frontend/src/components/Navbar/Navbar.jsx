import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendar, FaBell, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='bg-white p-4 flex justify-between items-center rounded-lg shadow-md'>
      {/* Header with logo or title */}
      <Link to="/" className='relative text-gray-800 text-lg font-bold hover:text-purple-500 transition-colors duration-300 animate-title'>
        Reseachify
      </Link>

            {/* Icons */}
            <div className='flex space-x-8'> {/* Increased spacing between icons */}
        <a href="/" className='text-gray-800 hover:text-purple-500 transition-colors duration-300 transform hover:scale-125'>
          <FaHome className='text-xl' />
        </a>
        <a href="/calendar" className='text-gray-800 hover:text-purple-500 transition-colors duration-300 transform hover:scale-125'>
          <FaCalendar className='text-xl' />
        </a>
        <a href="/notifications" className='text-gray-800 hover:text-purple-500 transition-colors duration-300 transform hover:scale-125'>
          <FaBell className='text-xl' />
        </a>
        <a href="/search" className='text-gray-800 hover:text-purple-500 transition-colors duration-300 transform hover:scale-125'>
          <FaSearch className='text-xl' />
        </a>
      </div>

      {/* Navigation links */}
      <div>
        <Link to="/signup" className='text-gray-800 mx-6 hover:text-purple-500 transition-colors duration-300'>Signup/Login</Link>
        <Link to="/contact" className='text-gray-800 hover:text-purple-500 transition-colors duration-300'>Contact Us</Link>
      </div>


    </nav>
  );
};

export default Navbar;
