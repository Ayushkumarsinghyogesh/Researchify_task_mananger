import React from 'react'
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const data = [
        {
            title: "All tasks",
            link: '/',
        },
        {
            title: "Important Task",
            link: '/importantTasks',
        },
        {
            title: "Completed Task",
            link: '/completedTasks',

        },
        {
            title: "Incompleted tasks" , 
            link: '/incompleteTasks', 
        },

    ];
  return (
    <>
        <div>
            <h2 className='text-white'>TASK MANAGER</h2>
            <h4 className='my-2 text-gray-600'>ayushkumar.com</h4>
            <hr/>
        </div>
        <div className='flex flex-col'>
                {data.map((items, i) => (
                    <Link to={items.link} key={i} className='my-2 border-red-400 rounded-2xl bg-red-400 text-black text-sm px-3 py-1 mt-2 hover:bg-white hover:scale-105 transition-all duration-50' style={{ padding: '6px 10px', fontSize: '12px', fontWeight: 'bold' }}>
                        {items.title}
                    </Link>
                ))}
            </div>
        <div>
           <button className='bg-gray-500 w-full p-2 rounded hover:bg-white'>sign out</button>
        </div>
    </>
  )
}

export default Sidebar
