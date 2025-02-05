"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  
  return (
    <div className="h-screen w-64 bg-gray-800 text-gray-200 p-6 flex flex-col shadow-lg">
      <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-400">Task Manager</h2>
      
      <nav className="flex-1">
        <Link href="/dashboard" className={`block p-4 rounded-lg transition duration-200 hover:bg-indigo-600 ${pathname === "/dashboard" ? "bg-indigo-600" : ""}`}>
          Dashboard🚀
        </Link>
        <Link href="/dashboard/tasks" className={`block p-4 rounded-lg transition duration-200 hover:bg-indigo-600 ${pathname === "/dashboard/tasks" ? "bg-indigo-600" : ""}`}>
          Tasks
        </Link>
        <Link href="/dashboard/tasks/create" className={`block p-4 rounded-lg transition duration-200 hover:bg-indigo-600 ${pathname === "/dashboard/tasks/create" ? "bg-indigo-600" : ""}`}>
          Create Task
        </Link>
        <Link href="/dashboard/calendar" className={`block p-4 rounded-lg transition duration-200 hover:bg-indigo-600 ${pathname === "/dashboard/calendar" ? "bg-indigo-600" : ""}`}>
          Calendar
        </Link>
      </nav>

      <div className="mt-6">
        <button onClick={() => signOut()} className="w-full bg-indigo-600 px-4 py-2 rounded-lg transition duration-200">
          Logout
        </button>
      </div>
    </div>
  );
};