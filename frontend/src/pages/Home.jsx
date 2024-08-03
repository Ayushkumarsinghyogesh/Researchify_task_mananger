import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Home/Sidebar";
import Navbar from "../components/Navbar/Navbar"; 
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className='flex flex-col h-[98vh]'>
      <Navbar onContactClick={handleContactClick} />
      <div className='flex flex-1 gap-4'>
        <div className='bg-white w-1/6 rounded-xl p-4 flex flex-col justify-between m-2 shadow-lg'>
          <Sidebar />
        </div>
        <div className='bg-gray-800 w-5/6 rounded-xl p-4'>
          <Outlet />
        </div>
      </div>
      {showContactForm && <ContactForm onClose={handleCloseContactForm} />}
      <Footer /> 
    </div>
  );
};

export default Home;
