"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo -----------------------> */}
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        MyApp
      </h1>

      {/* Links -----------------------> */}
      <div className="flex gap-4 items-center">
        {!isLoggedIn ? (
          <>
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 rounded bg-red-500 hover:bg-red-700"
            >
              Login
            </button>

            <button
              onClick={() => router.push("/signup")}
              className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
            >
              Signup
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => router.push("/dashboard")}
              className="px-4 py-2 rounded bg-red-500 hover:bg-red-700" 
            >
              Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
