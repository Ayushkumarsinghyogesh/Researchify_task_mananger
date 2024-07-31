import React from 'react'
import Sidebar from "../components/Home/Sidebar"
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex h-[98vh] gap-4'>
        <div className='bg-red-400 w-1/6 rounded-xl border border-green-500 p-4 flex flex-col justify-between'><Sidebar/></div>
        <div className='bg-gray-800 w-5/6 rounded-xl border border-yellow-500 p-4 '><Outlet/></div>
    </div>
  )
}

export default Home
