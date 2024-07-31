import React, { useState } from 'react'
import Card from '../components/Home/Card'
import { MdAddTask } from "react-icons/md";
import InputData from '../components/Home/InputData';

const AllTask = () => {
  const [inputDiv, setInputDiv] = useState("hidden");

  return (
    <>
      <div>
        <div className='w-full flex justify-end px-4 py-4'>
          <button onClick={() => setInputDiv('fixed')}>
            <MdAddTask className='text-5xl w-full flex hover:scale-100 transition-all duration-300' />
          </button>
        </div>
        <div>
          <Card home='true' />
        </div>
      </div>
      {inputDiv === 'fixed' && (
        <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} />
      )}
    </>
  )
}

export default AllTask;
