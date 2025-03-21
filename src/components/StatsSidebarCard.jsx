import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// eslint-disable-next-line react/prop-types
const StatsSidebarCard = ({
  title,
  icon,
  options,
  selectedOption,
  setSelectedOption,
  setPlayType,
  darkMode
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setPlayType(title.includes("Bowling") ? "Bowling" : "Batting");
  };

  return (
    <div
      className={`rounded-lg shadow-md p-2 mb-4 transition-all ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white"
          : "bg-gradient-to-r from-white via-gray-100 to-white text-gray-800"
      }`}
    >
      <button
        className={`flex justify-between items-center w-full p-3 font-semibold rounded-lg transition-all ${
          darkMode
            ? "text-white bg-indigo-500 hover:bg-indigo-600"
            : "text-gray-800 bg-blue-200 hover:bg-blue-300"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="text-sm sm:text-base">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <ul className="mt-2 space-y-2">
          {options.map((option, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer rounded-md text-sm sm:text-base transition-all ${
                option === selectedOption
                  ? darkMode
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-blue-500 text-white shadow-md"
                  : darkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatsSidebarCard;
