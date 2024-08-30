// src/components/Header.js

import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import logo from "../assets/logo.jpg"
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="fixed  top-0 left-0 w-full text-black border-b-2  border-gray-300 p-5 bg-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-8 h-8"/>
          <Link to={"/"} className="text-base md:text-2xl font-bold">
            Springdale Public School
          </Link>
        </div>
        <div className="hidden md:block">
          <nav className="flex text-sm items-center space-x-4">
            <Link to="/about-us" className="text-black font-semibold hover:text-gray-700">
              About Us
            </Link>
            <Link to="/academics" className="text-black font-semibold hover:text-gray-700">
              Academics
            </Link>
            <Link to="/admissions" className="text-black font-semibold hover:text-gray-700">
              Admissions
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black flex gap-1 items-center font-semibold focus:outline-none"
              >
                More {dropdownOpen ? <IoMdArrowDropup /> : <MdArrowDropDown />}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                  <Link
                    to="/faculty"
                    onClick={toggleDropdown}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Faculty
                  </Link>
                  <Link
                    to="/students"
                    onClick={toggleDropdown}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Students
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={toggleDropdown}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={toggleDropdown}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
