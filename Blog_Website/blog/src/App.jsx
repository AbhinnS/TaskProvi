import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import image from '../src/assets/Images/TeslaVsBMW.avif';
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(!open)
  }
  return (
<>
  <div className="relative">
    <nav className='w-full md:w-[75%] md:mx-auto h-14 flex md:h-16 justify-between'>
      <h1 className='text-xl font-bold p-3 md:p-4'>Blog Website</h1>
      {
        !open
          ? <IoMenu className='md:hidden text-3xl m-3' onClick={handleOpen} />
          : <IoClose className='md:hidden text-3xl m-3' onClick={handleOpen} />
      }
      <div className='md:flex m-3 p-2 hidden md:block'>
        <h1 className='pl-4 font-semibold'>Home</h1>
        <h1 className='pl-4 font-semibold'>About</h1>
        <h1 className='pl-4 font-semibold'>Contact</h1>
      </div>
    </nav>

    {
      open && (
        <div className={`absolute left-0 right-0 w-11/12 mx-auto bg-white shadow-lg transition-all duration-700 ease-in-out flex flex-col items-center z-50 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <h1 className='font-semibold pt-4 pb-4'>Home</h1>
          <h1 className='font-semibold pb-4'>About</h1>
          <h1 className='font-semibold pb-4'>Contact</h1>
        </div>
      )
    }
    <h1 className='text-center font-extrabold text-3xl'>My Blogs</h1>
    <h1 className='text-center font-bold text-xl mt-6'>GearHeads Garage</h1>
    <p className='text-center font-semibold'>Your Ultimate Pit Stop for Auto News, Reviews & More</p>
    <br />
    <div className='w-full flex flex-col md:flex-row md:mx-auto md:w-[75%] h-lvh md:h-[525px] p-2 md:p-0'>
      <div className='w-full md:w-[50%] h-full flex flex-col items-center justify-center'>
        <div className='border w-[90%] h-[90%]'>
          <img className='w-full h-[75%]' src={image} alt="" />
          <div>
            <h1 className='font-bold'>2025 Tesla Model S Vs BMW i4</h1>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[50%] h-full bg-slate-500'>dcds</div>
    </div>
  </div>
</>

  )
}

export default App
