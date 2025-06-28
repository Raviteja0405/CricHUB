import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import sunIcon from "/lightMode.svg";
import moonIcon from "/nightMode.svg";
import CricHubIcon from "/CricHubIcon.svg";
import { Menu, X } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(menuRef);
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-full max-w-5xl h-16 z-50 flex items-center justify-between 
      px-6 shadow-lg backdrop-blur-md transition-all duration-300 rounded-lg border
      ${darkMode ? "bg-[#111827]/80 text-white border-gray-700" : "bg-white/70 text-gray-900 border-gray-300"}`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center text-xl font-bold">
        <img
          src={CricHubIcon}
          alt="CricHub Logo"
          className={`mr-2 w-6 h-6 sm:w-8 sm:h-8 ${darkMode ? "filter invert" : "filter invert-0"}`}
        />
        CricHUB
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium">
        <li><Link to="/" className="hover:text-blue-500 cursor-pointer">Home</Link></li>
        <li><Link to="/players" className="hover:text-blue-500 cursor-pointer">Players</Link></li>
        <li><Link to="/teams" className="hover:text-blue-500 cursor-pointer">Teams</Link></li>
        <li><Link to="/playerStats" className="hover:text-blue-500 cursor-pointer">Stats</Link></li>
        <li><Link to="/timeline" className="hover:text-blue-500 cursor-pointer">Timeline</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`absolute top-16 right-4 w-48 p-4 rounded-lg shadow-lg transform transition-all duration-300
        ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
        ${darkMode ? "bg-[#1f2937] text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"}
        md:hidden`}
      >
        <ul className="flex flex-col gap-4 font-medium">
          <li><Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/players" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Players</Link></li>
          <li><Link to="/teams" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Teams</Link></li>
          <li><Link to="/playerStats" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Stats</Link></li>
          <li><Link to="/timeline" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Timeline</Link></li>
        </ul>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-105
        ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
      >
        {darkMode ? (
          <img src={sunIcon} alt="Sun Icon" className="w-5 h-5 sm:w-6 sm:h-6 filter invert" />
        ) : (
          <img src={moonIcon} alt="Moon Icon" className="w-5 h-5 sm:w-6 sm:h-6 filter invert" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
