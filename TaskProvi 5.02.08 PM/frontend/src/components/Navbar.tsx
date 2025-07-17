import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Logo.png'
const Navbar = ({firstname}:any) => {
  return (
    <>
        {/* <nav className='w-full h-16 border-1 border-black flex'>
            <Link to="/dashboard"> <img src={img} alt="" className='w-26 ml-5 h-full p-3' /></Link>
            <input type="search" className='w-[35%] h-12 text-black space-x-4 border-1 border-slate-500' name="" id="" />
            <div className='absolute right-2 w-32 flex items-center justify-center'>
                <b className='text-black mt-4'>{firstname}</b>
            </div>
        </nav> */}
        <nav className='w-full h-14 bg-black bg-gray-200 flex items-center justify-between p-6'>
            <div><img src={img} alt="Logo" className='w-12 h-7 md:w-26 md:h-10'/></div>
            <div className='w-[60%] md:w-[25%] h-9'>
                <input type="search" name="Search" className='w-full border-2 border-gray-300 text-black h-full rounded-lg bg-gray-300 font-bold p-2 text-center' placeholder='Search ...'/>
            </div>
            <div className='text-black font-bold'>{firstname}</div>
        </nav>
    </>
  )
}

export default Navbar