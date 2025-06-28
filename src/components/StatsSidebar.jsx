import StatsSidebarCard from "../components/StatsSidebarCard";

// eslint-disable-next-line react/prop-types
const StatsSidebar = ({ matchFormat, setMatchFormat, selectedOption, setSelectedOption, setPlayType, darkMode,}) => {
  const handleFormatChange = (format) => {
    setMatchFormat(format);
  };

  return (
    <div
      className={`w-full p-4 overflow-y-auto transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-b from-white via-gray-100 to-white text-gray-800"
      }`}
    >
      {/* Format Selector */}
      <div className="flex justify-center gap-4 mb-4 flex-wrap">
        {["Club", "T20", "ODI", "Test"].map((format) => (
          <button
            key={format}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all cursor-pointer ${
              matchFormat === format
                ? "bg-[#2F5D93] text-white shadow-md"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
            onClick={() => {
              handleFormatChange(format);
            }}
          >
            {format}
          </button>
        ))}
      </div>

      {/* Stats Sidebar Cards */}
      <StatsSidebarCard
        title="Batting Records"
        icon="🏏"
        options={[
          "Most Runs",
          "Highest Score",
          "Highest Average",
          "Most Fifties",
          "Highest Strike Rate",
          "Most Fours",
          "Most Sixes",
        ]}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        setPlayType={setPlayType}
        darkMode={darkMode}
      />
      <StatsSidebarCard
        title="Bowling Records"
        icon="🎯"
        options={[
          "Most Wickets",
          "Best Average",
          "Best Bowling Figure",
          "Best Economy Rate",
          "Best Strike Rate",
        ]}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        setPlayType={setPlayType}
        darkMode={darkMode}
      />
    </div>
  );
};

export default StatsSidebar;
