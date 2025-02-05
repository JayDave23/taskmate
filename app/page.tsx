"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="bg-darkBlue text-gray-800 min-h-screen flex flex-col">
      <nav className="w-full p-6 flex justify-between items-center bg-lightBlue shadow-md">
        <h1 className="text-2xl font-bold text-accent">Task Manager</h1>
        <button
          onClick={() => signIn()}
          className="bg-accent text-darkBlue px-4 py-2 rounded hover:bg-white transition"
        >
          Login / Signup
        </button>
      </nav>
      <section className="mt-10 flex flex-col items-center justify-center text-center flex-grow px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 max-w-3xl">
          Organize Your Tasks, <span className="text-accent">Boost Productivity</span>
        </h2>
        <p className="mt-8 text-lg max-w-2xl text-gray-500">
          A smart, efficient task management system to help you stay organized and
          achieve more every day.
        </p>
        <button
          onClick={() => signIn()}
          className="mt-6 bg-accent text-darkBlue px-6 py-3 rounded text-lg font-semibold hover:bg-white transition"
        >
          Get Started
        </button>
      </section>
      <section className="bg-lightBlue py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-accent text-center mb-10">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div className="p-6 bg-darkBlue rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-accent">Task Management</h4>
              <p className="mt-2 text-gray-500">Create, edit, and delete tasks effortlessly.</p>
            </div>

            <div className="p-6 bg-darkBlue rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-accent">Calendar View</h4>
              <p className="mt-2 text-gray-500">Plan your tasks with an intuitive calendar.</p>
            </div>

            <div className="p-6 bg-darkBlue rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-accent">User Authentication</h4>
              <p className="mt-2 text-gray-500">Secure login with email and social authentication.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 text-center">
        <h3 className="text-3xl font-bold text-accent">Start Managing Your Tasks Today!</h3>
        <p className="mt-2 text-lg text-gray-500">Sign up now and boost your productivity.</p>
        <button
          onClick={() => signIn()}
          className="mt-6 bg-accent text-darkBlue px-6 py-3 rounded text-lg font-semibold hover:bg-white transition"
        >
          Join Now
        </button>
      </section>


      <footer className="py-6 text-center bg-lightBlue">
        <p className="text-gray-500">&copy; 2025 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}
