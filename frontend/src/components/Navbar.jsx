import { FaSun, FaMoon } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`fixed top-0 w-full h-14 flex items-center justify-between px-6 shadow-md transition-all duration-300 
      ${darkMode ? "bg-[#111827] text-white" : "bg-white text-gray-900"}`}
    >
      <a href="#" className="text-2xl font-bold">
        CricHUB
      </a>
      <ul className="hidden md:flex gap-6 font-medium">
        <li>
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Players
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Tournaments
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Stats
          </a>
        </li>
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-gray-800 text-xl" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
