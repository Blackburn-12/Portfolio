import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoheadbb.png";
import "./sidebar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#262525] w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-2">
        {/* Left Links */}
        <div className="font-Quicksand hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-primary">
            Home
          </Link>
          <Link to="/projects" className="text-white hover:text-primary">
            Projects
          </Link>
        </div>

        {/* Center Logo */}
        <div>
          <Link to="/" className="text-white text-lg font-semibold">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Right Links */}
        <div className="font-Quicksand hidden md:flex items-center space-x-4">
          <Link to="/about" className="text-white hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-primary">
            Contact me
          </Link>
        </div>

        {/* Hamburger Menu (visible on tablet screens and below) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} p-6 sideBarBg absolute top-20 right-0 mx-2 my-1 min-w-[140px] rounded-lg sidebar`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1 md:gap-3">
          <Link
            className="font-Quicksand font-normal block py-2 px-3 rounded md:p-0 text-white hover:text-primary"
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-Quicksand font-normal block py-2 px-3 rounded md:p-0 text-white hover:text-primary"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="font-Quicksand font-normal block py-2 px-3 rounded md:p-0 text-white hover:text-primary"
            to="/about"
          >
            About
          </Link>
          <Link
            className="font-Quicksand font-normal block py-2 px-3 rounded md:p-0 text-white hover:text-primary"
            to="/contact"
          >
            Contact me
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
