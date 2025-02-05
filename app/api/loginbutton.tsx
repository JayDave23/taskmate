"use client"; 

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
        <button 
          onClick={() => signIn("google")} 
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-1 px-3 rounded-md transition duration-200"
        >
          Login with Google
        </button>
      
    </div>
  );
}