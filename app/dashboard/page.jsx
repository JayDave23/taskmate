import Link from "next/link";

export default function DashboardHome() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Stay Organized, Stay Ahead! 🚀
        </h1>
        <p className="text-lg italic text-gray-500 mb-6 text-center">
          "Small steps every day lead to big achievements!"
        </p>
        <p className="text-md text-gray-500 text-center max-w-lg">
          Welcome back! Stay focused and get things done. Every task completed is a step closer to success!
          Your productivity starts here. Plan, organize, and achieve your goals effortlessly!
        </p>
        <div className="mt-8 flex space-x-4">
          <Link href="/dashboard/tasks/create" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
            Create Task ✏️
          </Link>
          <Link href="/dashboard/calendar" className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition">
            Go to Calendar 📅
          </Link>
        </div>
      </div>
    );
  }
  