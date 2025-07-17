import './App.css'
import loginLogo from '../src/assets/login.jpg';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function App() {

  const[open,setOpen] = useState(false);
  const[email,setEmail] = useState("");
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(!open){
      const payload = {email,password}
      try{
        const res = await fetch("http://192.168.1.91:8080/api/users/login", {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(payload)
        });
        if(res.ok){
          const data = await res.json();
          alert("Login Successful");
          localStorage.setItem("user", JSON.stringify({
            userId: data.id,
            firstName: data.firstName
          }));
          navigate(`/dashboard/${data.id}`, {
            state:{firstName: data.firstName} 
          });
        }
        else{
          const err = await res.text();
          alert(`Login alert: ${err}`);
        }
      }catch(err){
        alert(`Error: ${(err as Error).message}`);
      }
    }else{
      const payload = {firstName,lastName,email,password}
      try{
        const res = await fetch("http://192.168.1.91:8080/api/users/register" , {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(payload)
        });
        if(res.ok){
          alert("Registeration Successfull");
          setOpen(!open);
        }else{
          const err = await res.text();
          alert(`Registration alert: ${err}`)
        }
      }catch(err){
        alert(`Error: ${(err as Error).message}`);
      }
      
    }
  }
  return (
    <>
      <div className='w-full h-lvh bg-[#A6C9FF] flex items-center justify-center'>
        <div className='w-[95%] md:h-[90%] h-auto bg-white rounded-2xl shadow-lg flex p-5'>
          <div className='hidden md:block w-[70%] h-full items-center pt-5'>
            <img src={loginLogo} alt="" className=' w-full h-[98%] items-center'/>
          </div>
          <div className='w-full md:w-[30%] h-full'>
            {!open ? <h1 className='text-black font-bold text-[23px] pl-7  md:pt-[50%] md:text-[36px] font-Nunito'>Login to your Account</h1> :  <h1 className='text-black font-bold text-[23px] pl-7 pt-8 md:pt-[25%] md:text-[36px] font-Nunito'>Signin to your Account</h1> }
            <p className='text-black text-[12px] pl-7  md:text-[16px] font-Nunito'>See what is going on with your business</p>
            <form className='block mt-7 space-y-5' onSubmit={handleSubmit}>
              { !open ? <><label className='text-black ml-7'>Email</label><input type="text" className="text-black border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito" onChange={(e) => setEmail(e.target.value)} value={email}/></> : <><label className='text-black ml-7'>First Name:</label><input type="text" className="text-black border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito" onChange={(e) => setFirstName(e.target.value)} value={firstName}/></>}              
              { !open ? "" : <><label className='text-black ml-7'>Last Name:</label><input type="text" className="text-black border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito" onChange={(e) => setLastName(e.target.value)} value={lastName} /></>}              
              { !open ? "" : <><label className='text-black ml-7'>Email:</label><input type="text" className="text-black border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito" onChange={(e) => setEmail(e.target.value)} value={email} /></>}              
              <label className='text-black pt-5 ml-7'>Password</label>
              <input type="Password" className="text-black border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito" onChange={(e) => setPassword(e.target.value)} value={password}/>
              <input type="submit" value="Submit" className='text-white cursor-pointer font-bold border border-gray-400 w-[85%] h-10 ml-7 mt-2 px-3 rounded-md font-nunito bg-blue-400' />
            </form>
            {!open ? <h1 className='text-black font-bold text-center pt-7'>Already have a account?<span className='text-blue-500 font-bold cursor-pointer' onClick={handleOpen}> Create Account </span></h1> : <h1 className='text-black font-bold text-center pt-7'>New to account?<span className='text-blue-500 font-bold cursor-pointer' onClick={handleOpen}> Login Account </span></h1>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
