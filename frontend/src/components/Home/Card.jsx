import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdAddTask } from "react-icons/md";


const Card = ({home}) => {
    const data = [
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
    // const [ImportantButton , setImportantButton] = useState('Incomplete');
    
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
        {data && data.map((items, i) => (
            <div className='bg-yellow-300 flex flex-col justify-between rounded-sm p-4 '>
                <div key={i} className="border border-red-600 rounded-xl p-4 bg-gray-200 ">
                    <div>
                        <h1 className='text-xl font-semibold'>{items.title}</h1>
                        <p className='text-gray-900 my-2'>{items.desc}</p>
                    </div>
                </div>
                <div className="mt-4 w-full flex flex-col items-center ">
                    <button className={`${items.status === 'In Completed' ? "bg-red-400" : "bg-green-400" } p-2 rounded `}>{items.status}</button>
                    <div className="text-white p-2 w-full flex justify-around text-xl">
                        <button className='fav-task hover:scale-50 duration-1000'><FaHeart /></button>
                        <button><IoCheckmarkDoneCircleSharp /></button>
                        <button><MdDelete /></button>
                    </div>
                </div>
            </div>

        ))}
        {home === 'true' && (
        <div className='bg-gray-600 flex flex-col justify-center text-center p-4 hover:scale-105 transition-all duration-100'>
            <MdAddTask className='text-5xl' />
           <h2 className='bg-gray-400 text-white mt-4 text-2xl '>Add task</h2>  
        </div>
     )}
    </div>
  )
}

export default Card
