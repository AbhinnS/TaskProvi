import './App.css'
import loginLogo from '../src/assets/login.jpg';

function App() {

  return (
    <>
      <div className='w-full h-lvh bg-[#A6C9FF] flex items-center justify-center'>
        <div className='w-[95%] h-[90%] bg-white rounded-2xl shadow-lg flex'>
          <div className='hidden md:block w-[70%] h-full items-center pt-5'>
            <img src={loginLogo} alt="" className=' w-full h-[98%] items-center'/>
          </div>
          <div className='w-full md:w-[30%] h-full border border-black'>
            <h1 className='text-black font-bold text-[23px] pl-7 pt-8 md:pt-[40%] md:text-[36px] font-Nunito'>Login to your Account</h1>
            <p className='text-black text-[12px] pl-7  md:text-[16px] font-Nunito'>See what is going on with your business</p>
            <form className='block mt-7 space-y-5'>
              <label className='text-black ml-7'>Email</label>
              <input type="text" className="text-black border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito"/>
              <label className='text-black pt-5 ml-7'>Password</label>
              <input type="Password" className="text-black border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito"/>
              <input type="submit" value="Submit" className='text-white cursor-pointer font-bold border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito bg-blue-400' />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
