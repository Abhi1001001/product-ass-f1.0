"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}