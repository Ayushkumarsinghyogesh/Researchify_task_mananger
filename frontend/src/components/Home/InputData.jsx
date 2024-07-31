import React from 'react'
import { IoClose } from "react-icons/io5";

const InputData = ({ inputDiv, setInputDiv }) => {
  return (
    <>
      <div className='fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full'></div>
      <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-full'>
        <div className='w-2/6 bg-gray-900 h-[80vh] p-4 rounded'>
          <div className='flex justify-end'>
            <button className='text-2xl' onClick={() => setInputDiv('hidden')}>
              <IoClose />
            </button>
          </div>
          <input type="text" placeholder='Title' name='title' className='px-3 py-2 rounded w-full bg-gray-700'/>
          <textarea type="text" cols='30' rows='10' placeholder='Enter the description' name='desc' className='px-3 py-2 rounded w-full my-3 bg-gray-700'></textarea>
          <button className='px-3 py-2 bg-blue-400 rounded text-black-xl font-semibold'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default InputData;
