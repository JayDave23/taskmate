'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TasksPage() {
  interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    };
    
    fetchTasks();
  }, []);

  const handleDelete = async (id: number) => {
    const response = await fetch("/api/tasks", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setTasks(tasks.filter((task) => task.id !== id));
    } else {
      alert("Failed to delete task");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Tasks</h1>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-gray-500">{new Date(task.dueDate).toLocaleString()}</p>
            <div className="mt-4 flex space-x-2">
              <button 
                onClick={() => handleDelete(task.id)} 
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-1 px-3 rounded-md transition duration-200"
              >
                Delete
              </button>
              <button 
                onClick={() => router.push(`/dashboard/tasks/edit/${task.id}`)} 
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-1 px-3 rounded-md transition duration-200"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}