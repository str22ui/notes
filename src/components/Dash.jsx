import React, { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Notes from "./Notes";
import axios from "axios";


const Dash = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Set to true if the user is logged in
  const [userName, setUserName] = useState("John Doe"); // Replace "John Doe" with the user's name after login
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to control the visibility of the dropdown
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

   const handleLogout = () => {
    // Menghapus token otentikasi dari local storage atau cookies
    localStorage.removeItem('token'); // Jika token disimpan di local storage
    // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;' // Jika token disimpan dalam cookies
    console.log('Logout berhasil.');
    // Redirect ke halaman login setelah logout
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle the dropdown visibility
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <nav className="bg-white border-gray-200 dark:bg-[#5296DE]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              NOTES
            </span>
          </Link>

          {loggedIn && (
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center">
                <span className="text-white mr-2">Hello, {userName}</span>
                <FaUser
                  className="text-gray-600 cursor-pointer"
                  onClick={toggleDropdown}
                  color="white"
                />
              </div>
              {dropdownVisible && (
                <div className="absolute mt-2 right-0 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                  <button
                    className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  {/* Add any additional dropdown items here */}
                  {/* For example: */}
                  {/* <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Account Settings
                  </a> */}
                </div>
              )}
            </div>
          )}
          
        </div>
        </nav>
        <nav  class="bg-white border-gray-200 dark:bg-[#5296DE]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <Link to="/">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline  dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Notes
              </a>
            </Link>
          </li>
          <li>
            <Link to="/schedule">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Schedule
              </a>
            </Link>
          </li>
          <li>
            <Link to="/journal">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Journal
              </a>
            </Link>
          </li>
        </ul>
       </div>
        </nav>
       
      
      <Notes />
    </div>
  );
};

export default Dash;
