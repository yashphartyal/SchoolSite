import React, { useState } from "react";
import { Link } from "react-router-dom";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-800 bg-white rounded-md focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed inset-y-0 right-0 bg-white w-1/2 shadow-xl p-4 transform transition-transform duration-500 ease-in-out z-50 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-[1rem] p-2 text-gray-800 bg-gray-100 rounded-full focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav
              onClick={toggleMenu}
              className="flex flex-col items-start justify-between mt-20 space-y-4"
            >
              <Link to="/about-us" className="text-black hover:text-blue-700">
                About Us
              </Link>
              <Link
                to="/academics"
                className="text-black hover:text-blue-700"
              >
                Academics
              </Link>
              <Link
                to="/admissions"
                className="text-black hover:text-blue-700"
              >
                Admissions
              </Link>
              <Link to="/faculty" className="text-black hover:text-blue-700">
                Faculty
              </Link>
              <Link to="/students" className="text-black hover:text-blue-700">
                Students
              </Link>
              <Link to="/gallery" className="text-black hover:text-blue-700">
                Gallery
              </Link>
              <Link
                to="/contact-us"
                className="text-black hover:text-blue-700"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default MobileNav;
