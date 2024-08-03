import React, { useState } from 'react';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
        <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            required
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded'
            rows='4'
            required
          />
          <button type='submit' className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
            Send
          </button>
          <button
            type='button'
            onClick={onClose}
            className='bg-red-500 text-white p-2 rounded hover:bg-red-600'
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
