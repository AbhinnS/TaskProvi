import React, { useState } from 'react';

const AddTask = ({ isOpen, onClose, userid, onTaskAdded }:any) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    console.log("Submitting task:", { userId: userid, title });

    const newTask = {
      userId: userid,  // or change to user_id depending on backend
      title
    };

    try {
      const response = await fetch('http://192.168.1.91:8080/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      });

      if (response.ok) {
        console.log('Task created successfully');
        onTaskAdded && onTaskAdded();
        setTitle('');
        onClose();
      } else {
        console.error('Failed to create task:', response.statusText);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[rgba(99,99,99,0.35)] flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] max-w-xl p-6 rounded-lg border-2 border-black shadow-xl"
      >
        <h1 className="text-black font-bold text-center text-2xl mb-6">
          Add Task 
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
          <div className="w-full">
            <label className="text-black font-bold text-xl">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-10 mt-2 rounded-lg border-2 border-black px-3 text-black"
              placeholder="Enter task title"
              required
            />
          </div>
          <button
            type="submit"
            disabled={!title.trim()}
            className={`w-full h-10 rounded-lg font-bold transition-colors duration-300 
              ${!title.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
            `}
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
