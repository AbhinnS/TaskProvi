import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Sidebar from '../components/sidebar';
import { FaRegTrashAlt } from "react-icons/fa";
import AddTask from '../Modal/AddTask';

const DashboardLayout = () => {
  const location = useLocation();
  const state = location.state || {};
  const [open, setOpen ] = useState(false);
  interface Task {
    status: string;
    taskId: string;
    title: string;
    // Add other properties of the task object if needed
  }
  const [task , setTask] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const {userId} = useParams();
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const firstName = state.firstName || storedUser.firstName || "Guest";
  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }
  const fetchData = async () => {
    try{
      const response =  await fetch(`http://192.168.1.91:8080/api/tasks/user/${userId}`);
      if(!response.ok) throw new Error("Failred to fetch file");
      const data = await response.json();
      setTask(data);
    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }
  }

  const markAsComplete = async (taskId: any) => {
    try {
      const response = await fetch(`http://192.168.1.91:8080/api/tasks/${taskId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "complete" }) 
      });
  
      if (response.ok) {
        console.log("Status updated");
        fetchData(); 
      } else {
        console.error("Failed to update status");
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  const deleteTask = async (taskId: any) => {
    try {
      const response = await fetch(`http://192.168.1.91:8080/api/tasks/${taskId}/delete`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Task deleted");
        fetchData(); 
      } else {
        console.error("Failed to delete task");
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    fetchData(); 
    const interval = setInterval(() => {
      console.log("Refreshing tasks...");
      fetchData();
    }, 1000); 
  
    return () => clearInterval(interval); 
  }, [userId]);
  return (
    <div className='flex flex-col h-screen bg-white'>
      <Navbar firstname={firstName} />
      {/* <div className='flex flex-1'>
        <Sidebar firstname={firstName} userId={userId} />
        <div className="flex-1 bg-white pl-6">
          <Outlet/>
        </div>
      </div> */}
      <button className='absolute top-18 right-2 w-48 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white font-extrabold cursor-pointer hover:bg-purple-400' onClick={handleOpen}> <FaPlus className='text-white mr-2'/> Add Tasks</button>
      <AddTask isOpen={open} onClose={handleClose} userid={userId} />
      <div>
      <h2 className="text-2xl font-bold mb-4 text-black pl-5 pt-5">Tasks:</h2>
      {loading ? (
          <p className='text-black'>Loading tasks...</p>
        ) : task.length === 0 ? (
          <p className='text-black' >No tasks found for this user.</p>
        ) : (
          <>
          <ul className="md:grid md:grid-cols-4 md:gap-4 p-6">
            {task.filter(task => task.status !== "complete").map((task) => (
              <li key={task.taskId} className="w-full border border-gray-300 rounded-lg shadow text-black p-2 md:p-5 mt-2 flex flex-col md:flex-row justify-between">
                {task.title}
                <div className='flex gap-x-3 flex-row'>
                  <div className='w-6 h-6 rounded-md border border-gray-300 flex items-center justify-center cursor-pointer ' onClick={() => markAsComplete(task.taskId)}>
                    <TiTick className='text-green-500'/>
                  </div>
                  <div className='w-6 h-6 rounded-md border border-gray-300 flex items-center justify-center cursor-pointer' onClick={() => deleteTask(task.taskId)}>
                  <FaRegTrashAlt className='text-red-500'/>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className='text-2xl font-bold mb-4 text-black pl-5 pt-5'>Completed Task</p>
          <ul className="md:grid md:grid-cols-4 md:gap-4 p-6">
            {task.filter(task => task.status === "complete").map((task) => (
              <li key={task.taskId} className="w-full border border-gray-300 rounded-lg shadow text-black p-2 md:p-5 mt-5 md:mt-2 flex flex-col md:flex-row justify-between">
              {task.title}
              <div className='flex gap-x-3'>
                  <div className='w-6 h-6 rounded-md border border-gray-300 flex items-center justify-center cursor-pointer' onClick={() => deleteTask(task.taskId)}>
                    <FaRegTrashAlt className='text-red-500'/>
                  </div>
              </div>
            </li>
            ))}
          </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;