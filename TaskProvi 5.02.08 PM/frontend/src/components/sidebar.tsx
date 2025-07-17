import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';




const sidebar = ({firstname, userId}:any) => {
  const[extended, setExtended] = useState(false);
  const handleCLick = () => {
    setExtended(!extended);
  }
  return (
    <>
      <div className={`box-border border-2 border-gray-400 transition-all duration-300 ease-in-out  ${!extended ? 'md:w-[16%] w-[45%]' : 'md:w-[5%] w-[20%]'}`}>
    <div className='w-full h-7 relative'>
        <div className='rounded-full w-6 h-6 border-2 border-black absolute inset-y-1 right-[-15px] bg-white flex items-center justify-center'>
        <IoIosArrowForward 
            className={`text-black w-5 h-5 cursor-pointer transition-all duration-200 ease-in-out ${!extended ? 'rotate-0': 'rotate-180'}`} 
            onClick={handleCLick}
        />
        </div>
        <div className={`w-[95%] pl-3 pt-1 border-gray-500 ${!extended ? 'h-10' : 'h-12 mb-2'}`}>
            <h1 className={`text-black font-bold `}>{`${firstname}'s Project`}</h1>
        </div>
        <hr className='text-black'/>
            <div className='w-full border-2 h-8 mt-2 mb-2 '>
                <button className='w-full h-full rounded-lg  bg-[#5531DE] text-white text-center font-bold flex items-center justify-center'> <p className={`${!extended ? 'block':'hidden'} mr-1`}>Add </p> Project</button>
            </div>
            <NavLink to={`/dashboard/${userId}`} end state={{ firstName: firstname }} className={({ isActive }) => `ml-1 w-[95%] h-8 rounded-lg flex items-center pl-2 cursor-pointer ${isActive ? 'bg-[#B7ADDE] text-[#5531DE]' : 'hover:bg-[#B7ADDE] text-[#5531DE]'}`}>
                <MdSpaceDashboard className="w-6 h-6" />
                <h1 className={`text-[#5531DE] font-bold pl-2 ${!extended ? 'block' : 'hidden'}`}>Dashboard</h1>
                </NavLink>

                <NavLink 
                to={`/dashboard/${userId}/message`} 
                state={{ firstName: firstname }}
                className={({ isActive }) => 
                    `mt-2 ml-1 w-[95%] h-8 rounded-lg flex items-center pl-2 cursor-pointer 
                    ${isActive ? 'bg-[#B7ADDE]' : 'hover:bg-[#B7ADDE]'}`
                }
                >
                    <AiFillMessage className='text-[#9983EE] w-6 h-6'/>
                    <h1 className={`text-[#5531DE] font-bold pl-2 ${!extended ? 'block' : 'hidden'}`}>Messaging</h1>
                </NavLink>

            <div className={`mt-2 ml-1 w-[95%] h-8 rounded-lg  flex items-center  pl-2 cursor-pointer`}>
                <MdAnalytics className='text-[#9983EE] w-6 h-6'/>
                <h1 className={`text-[#5531DE] font-bold pl-2 ${!extended ? 'block' : 'hidden'}`}>Analytics</h1>
            </div>
            <div className={`mt-2 ml-1 w-[95%] h-8 rounded-lg  flex items-center  pl-2 cursor-pointer`}>
                <BsFillPeopleFill className='text-[#9983EE] w-6 h-6'/>
                <h1 className={`text-[#5531DE] font-bold pl-2 ${!extended ? 'block' : 'hidden'}`}>Teams</h1>
            </div>
            <br />
            <hr className='text-black'/>
            <br />
    </div>
</div>


    </>
  );
}

export default sidebar