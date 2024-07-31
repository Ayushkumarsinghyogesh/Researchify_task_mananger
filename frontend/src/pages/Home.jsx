import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Home/Sidebar";
import Navbar from "../components/Navbar/Navbar"; 
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className='flex flex-col h-[98vh]'>
      <Navbar />
      <div className='flex flex-1 gap-4'>
        <div className='bg-white w-1/6 rounded-xl p-4 flex flex-col justify-between'>
          <Sidebar />
        </div>
        <div className='bg-white w-5/6 rounded-xl p-4'>
          <Outlet />
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
