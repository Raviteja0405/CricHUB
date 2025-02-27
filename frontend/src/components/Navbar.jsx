import sunIcon from "../assets/lightMode.svg";
import moonIcon from "../assets/nightMode.svg";
import CricHubIcon from "../assets/CricHubIcon.svg";

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-14 z-50 flex items-center justify-between 
      px-6 shadow-lg backdrop-blur-md transition-all duration-300 rounded-lg border-1
      ${darkMode ? "bg-[#111827]/80 text-white" : "bg-white/70 text-gray-900"}`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center text-2xl font-bold">
        <img
          src={CricHubIcon}
          alt="CricHub Logo"
          className={`mr-2 w-8 h-8 ${darkMode ? "filter invert" : "filter invert-0"}`}
        />
        CricHUB
      </a>

      {/* Menu Items (Hidden in Mobile) */}
      <ul className="hidden md:flex gap-6 font-medium">
        <li><a href="#" className="hover:text-blue-500">Home</a></li>
        <li><a href="#" className="hover:text-blue-500">Players</a></li>
        <li><a href="#" className="hover:text-blue-500">Tournaments</a></li>
        <li><a href="#" className="hover:text-blue-500">Stats</a></li>
      </ul>

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
