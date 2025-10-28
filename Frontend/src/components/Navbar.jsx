import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky ? "shadow-md bg-white dark:bg-slate-800" : "bg-white dark:bg-slate-800"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4 flex justify-between items-center h-16">
        {/* Navbar Start */}
        <div className="flex items-center space-x-4">
          <a className="text-2xl font-bold cursor-pointer">Readify</a>

          <ul className="hidden lg:flex menu menu-horizontal space-x-4">{navItems}</ul>
        </div>

        {/* Navbar End */}
        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="hidden md:flex">
            <input
              type="text"
              className="px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
              placeholder="Search"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>

          {/* Login/Logout */}
          <div className="flex items-center">
            {authUser ? (
              <Logout />
            ) : (
              <>
                <button
                  className="px-3 py-1 rounded-md bg-pink-500 text-white hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login/>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;