// eslint-disable-next-line react/prop-types
const StatsCard = ({ rank, player, playType, darkMode }) => {
  // Function to safely format values before rendering
  const formatValue = (value) => {
    if (typeof value === "object") {
      return JSON.stringify(value); // Convert objects to strings
    }
    return value ?? "-"; // Handle null/undefined values
  };

  return (
    <div
      className={`flex sm:w-[95%] mx-auto items-center p-4 rounded-lg shadow-md mb-2 transition-all hover:scale-103 transform duration-300 ${
        darkMode ? "bg-[#0A0F1E] text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Rank Section */}
      <div
        className={`flex-shrink-0 ${
          darkMode ? "bg-indigo-600" : "bg-indigo-500"
        } text-white font-semibold rounded-lg w-12 h-12 flex items-center justify-center mr-6 shadow-lg`}
      >
        {formatValue(rank)}
      </div>

      {/* Player Name and Stats */}
      <div className="flex-grow">
        <h2
          className={`font-semibold text-lg mb-2 ${
            darkMode ? "text-white" : "text-indigo-600"
          }`}
        >
          {/* Player name with horizontal scrolling if the name is long */}
          <div className="overflow-x-auto whitespace-nowrap w-30 sm:w-35">
            {/* eslint-disable-next-line react/prop-types */}
            {formatValue(player?.name)}
          </div>
        </h2>
      </div>

      {/* Stats Display Based on Play Type */}
      <div className="flex-grow">
        {playType === "Batting" ? (
          <div className="grid grid-cols-10 gap-4 text-center min-w-max px-2">
            {[  
              // eslint-disable-next-line react/prop-types
              { label: "Matches", value: player?.matches },
              // eslint-disable-next-line react/prop-types
              { label: "Inns", value: player?.battingInnings },
              // eslint-disable-next-line react/prop-types
              { label: "Avg", value: player?.average },
              // eslint-disable-next-line react/prop-types
              { label: "SR", value: player?.strikeRate },
              // eslint-disable-next-line react/prop-types
              { label: "HS", value: player?.highestScore },
              // eslint-disable-next-line react/prop-types
              { label: "4's", value: player?.fours },
              // eslint-disable-next-line react/prop-types
              { label: "6's", value: player?.sixes },
              // eslint-disable-next-line react/prop-types
              { label: "50's", value: player?.fifties },
              // eslint-disable-next-line react/prop-types
              { label: "100's", value: player?.hundreds },
              // eslint-disable-next-line react/prop-types
              { label: "Runs", value: player?.battingRuns },
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-semibold">{formatValue(stat.value)}</p>
                <p className="text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-8 gap-2 text-center min-w-max px-2">
            {[  
              // eslint-disable-next-line react/prop-types
              { label: "Matches", value: player?.matches },
              // eslint-disable-next-line react/prop-types
              { label: "Inns", value: player?.bowlingInnings },
              // eslint-disable-next-line react/prop-types
              { label: "Wickets", value: player?.wickets },
              // eslint-disable-next-line react/prop-types
              { label: "Avg", value: player?.bowlingAverage },
              // eslint-disable-next-line react/prop-types
              { label: "Bowling Figure", value: player?.bowlingFigure},
              // eslint-disable-next-line react/prop-types
              { label: "Economy", value: player?.economy },
              // eslint-disable-next-line react/prop-types
              { label: "SR", value: player?.bowlingStrikeRate },
              // eslint-disable-next-line react/prop-types
              { label: "Runs", value: player?.bowlingRuns },
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-semibold">{formatValue(stat.value)}</p>
                <p className="text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
