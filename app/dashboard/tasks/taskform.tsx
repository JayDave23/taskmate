'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const router = useRouter();
  
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = session?.user?.id;
    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description, dueDate, userId, status }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      router.push("/dashboard/tasks");
    } else {
      alert("Failed to create task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create New Task</h2>
      
      <label className="block mb-2">
        <span className="text-gray-700">Title:</span>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
          className="mt-1 block w-full p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />
      </label>
      
      <label className="block mb-2">
        <span className="text-gray-700">Description:</span>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="mt-1 block w-full text-gray-800 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Due Date:</span>
        <input 
          type="datetime-local" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
          className="mt-1 block text-gray-800 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Status:</span>
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          className="mt-1 block w-full p-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        >
          <option value="pending">Pending</option>
          <option value="done">Done</option>
        </select>
      </label>

      <button 
        type="submit" 
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md transition duration-200"
      >
        Create Task
      </button>
    </form>
  );
}