import  { useState } from "react";

// eslint-disable-next-line react/prop-types
const StatsHeroCard = ({ player, playType, selectedOption, darkMode }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const getBadgeValue = () => {
    switch (selectedOption) {
      case "Most Runs":
        // eslint-disable-next-line react/prop-types
        return player.battingRuns;
      case "Highest Score":
        // eslint-disable-next-line react/prop-types
        return player.highestScore;
      case "Highest Average":
        // eslint-disable-next-line react/prop-types
        return player.average;
      case "Most Fifties":
        // eslint-disable-next-line react/prop-types
        return player.fifties;
      case "Highest Strike Rate":
        // eslint-disable-next-line react/prop-types
        return player.strikeRate;
      case "Most Fours":
        // eslint-disable-next-line react/prop-types
        return player.fours;
      case "Most Sixes":
        // eslint-disable-next-line react/prop-types
        return player.sixes;
      case "Most Wickets":
        // eslint-disable-next-line react/prop-types
        return player.wickets;
      case "Best Average":
        // eslint-disable-next-line react/prop-types
        return player.bowlingAverage;
      case "Best Bowling Figure":
        // eslint-disable-next-line react/prop-types
        return player.bowlingFigure;
      case "Best Economy Rate":
        // eslint-disable-next-line react/prop-types
        return player.economy;
      case "Best Strike Rate":
        // eslint-disable-next-line react/prop-types
        return player.bowlingStrikeRate;
      default:
        return "-";
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false); // Image has loaded, hide loading spinner
  };

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg transition-all duration-300 transform ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Player Image */}
      <div className="relative">
        {/* Loading Spinner */}
        {imageLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-75 rounded-lg">
            <div className="animate-spin border-t-4 border-blue-500 border-solid w-10 h-10 rounded-full"></div>
          </div>
        )}
        <img
          // eslint-disable-next-line react/prop-types
          src={player.image}
          // eslint-disable-next-line react/prop-types
          alt={player.name}
          className="w-40 h-40 rounded-lg border-4 border-white shadow-lg transform transition duration-300 hover:scale-105"
          onLoad={handleImageLoad} // Trigger when the image has loaded
        />
        <div
          className={`absolute top-2 right-2 px-4 py-2 rounded-lg text-center text-sm font-semibold ${
            darkMode ? "bg-indigo-500" : "bg-blue-500 text-white"
          }`}
        >
          #1
        </div>
      </div>

      {/* Player Info */}
      <div className="ml-0 md:ml-8 mt-4 md:mt-0 flex flex-col text-center md:text-left">
        {/* eslint-disable-next-line react/prop-types */}
        <h2 className="text-4xl font-bold text-indigo-500">{player.name}</h2>
        <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{playType} Stats</p>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-4 sm:grid-cols-10 gap-6 mt-4 p-4 rounded-lg shadow-md bg-opacity-75 ${darkMode ? "bg-gray-800" : "bg-gray-200"} overflow-x-auto whitespace-nowrap`}
        >
          <div className="text-center">
            <span className={`block text-sm font-bold ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Matches</span>
            {/* eslint-disable-next-line react/prop-types */}
            <strong className="text-lg">{player.matches}</strong>
          </div>
          <div className="text-center">
            <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Inns</span>
            <strong className="text-lg">
              {/* eslint-disable-next-line react/prop-types */}
              {playType === "Batting" ? player.battingInnings : player.bowlingInnings}
            </strong>
          </div>
          <div className="text-center">
            <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`} >
              {playType === "Batting" ? "Avg" : "Wickets"}
            </span>
            <strong className="text-lg">
              {/* eslint-disable-next-line react/prop-types */}
              {playType === "Batting" ? player.average : player.wickets}
            </strong>
          </div>
          <div className="text-center">
            <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>SR</span>
            <strong className="text-lg">
              {/* eslint-disable-next-line react/prop-types */}
              {playType === "Batting" ? player.strikeRate : player.bowlingStrikeRate}
            </strong>
          </div>

          {playType === "Batting" ? (
            <>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>HS</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.highestScore}</strong>
              </div>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>4s</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.fours}</strong>
              </div>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>6s</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.sixes}</strong>
              </div>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>50s</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.fifties}</strong>
              </div>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>100s</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.hundreds}</strong>
              </div>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Runs</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.battingRuns}</strong>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Avg</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.bowlingAverage}</strong>
              </div>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Bowl. Fig.</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.bowlingFigure}</strong>
              </div>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Economy</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.economy}</strong>
              </div>
              <div className="text-center">
                <span className={`block text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Runs</span>
                {/* eslint-disable-next-line react/prop-types */}
                <strong className="text-lg">{player.bowlingRuns}</strong>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Badge for the Selected Stat */}
      <div
        className={`absolute top-4 right-4 px-6 py-3 rounded-lg hidden sm:block text-center shadow-md text-white ${
          darkMode ? "bg-gradient-to-r from-indigo-400 to-indigo-700" : "bg-gradient-to-r from-blue-400 to-blue-600"
        }`}
      >
        <h2 className="text-3xl font-bold">{getBadgeValue()}</h2>
        <p className="text-sm">{selectedOption}</p>
      </div>
    </div>
  );
};

export default StatsHeroCard;
