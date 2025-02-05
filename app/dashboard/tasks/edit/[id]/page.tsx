"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditTask({ id }: { id: string }) {
  const [task, setTask] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`/api/tasks/${id}`);
      const data = await response.json();
      setTask(data);
      setTitle(data.title);
      setDescription(data.description);
      setDueDate(data.dueDate);
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask = await fetch("/api/tasks", {
      method: "PUT",
      body: JSON.stringify({ id: task.id, title, description, dueDate, status: task.status }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (updatedTask.ok) {
      router.push("/dashboard/tasks");
    } else {
      alert("Failed to update task");
    }
  };

  return (
    task && (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Title:</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Description:</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Due Date:</span>
            <input
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Update Task
          </button>
        </form>
      </div>
    )
  );
}
