import React, { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs"; // Import icons for dark/light mode

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light"
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-white text-gray-600 shadow-lg fixed w-full z-10 h-[10%] top-0 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home">
            <img
              src="image1.png"
              alt="Logo"
              className="h-10 w-auto hover:opacity-10 rounded-3xl border border-black border-3"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center justify-end flex-grow">
          <a
            href="#about"
            className="hover:text-green-500 transition duration-200"
          >
            About me
          </a>
          <a
            href="#projects"
            className="hover:text-green-500 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-green-500 transition duration-200"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-green-500 transition duration-200"
          >
            Contact
          </a>
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full focus:outline-none transition duration-300"
          >
            {darkMode ? (
              <BsMoonFill className="text-gray-700 text-2xl" />
            
            ) : (
              <BsSunFill className="text-yellow-400 text-2xl" />
            )}
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none bg-gray-200 dark:bg-gray-2  00 h-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 dark:bg-gray-800 h-[40rem] text-center py-10 text-3xl">
          <a
            href="#about"
            className="block px-4 py-4 hover:bg-gray-600 hover:text-orange-500"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-4 py-4 hover:bg-gray-600 hover:text-orange-500"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block px-4 py-4 hover:bg-gray-600 hover:text-orange-500"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block px-4 py-4  hover:bg-gray-600 hover:text-orange-500"
          >
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full focus:outline-none transition duration-300 "
          >
            {darkMode ? (
               <BsMoonFill className="text-gray-700 text-3xl" />
             
            ) : (
              <BsSunFill className="text-yellow-400 text-3xl" />
            )}
          </button>
        </div>
       
      )}
    </nav>
  );
};

export default Navbar;