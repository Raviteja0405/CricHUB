import { useState } from "react";
import sunIcon from "/lightMode.svg";
import moonIcon from "/nightMode.svg";
import CricHubIcon from "/CricHubIcon.svg";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2  w-[90%] sm:w-full max-w-5xl h-14 z-50 flex items-center justify-between 
      px-6 shadow-lg backdrop-blur-md transition-all duration-300 rounded-lg border
      ${darkMode ? "bg-[#111827]/80 text-white border-gray-700" : "bg-white/70 text-gray-900 border-gray-300"}`}
    >
      {/* Logo */}
      <a href="/CricHUB" className="flex items-center text-2xl font-bold">
        <img
          src={CricHubIcon}
          alt="CricHub Logo"
          className={`mr-2 w-8 h-8 ${darkMode ? "filter invert" : "filter invert-0"}`}
        />
        CricHUB
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium">
        <li><a href="/CricHUB" className="hover:text-blue-500 cursor-pointer"></a></li>
        <li><a href="/CricHUB/players" className="hover:text-blue-500 cursor-pointer"></a></li>
        <li><a href="/CricHUB/tournaments" className="hover:text-blue-500 cursor-pointer"></a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-16 right-4 w-48 p-4 rounded-lg shadow-lg transform transition-all duration-300
        ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
        ${darkMode ? "bg-[#1f2937] text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"}
        md:hidden`}
      >
        <ul className="flex flex-col gap-4 font-medium">
          <li><a href="/CricHUB" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/CricHUB/players" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Players</a></li>
          <li><a href="/CricHUB/tournaments" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Tournaments</a></li>
        </ul>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer"
      >
        {darkMode ? (
          <img src={sunIcon} alt="Sun Icon" className="w-6 h-6" />
        ) : (
          <img src={moonIcon} alt="Moon Icon" className="w-6 h-6 filter invert" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
