import { useEffect, useState } from "react";
import StatsSidebar from "../components/StatsSidebar";
import StatsHeroCard from "../components/StatsHeroCard";
import StatsCard from "../components/StatsCard";
import playersData from "../data/playerData"; // Import player data

// eslint-disable-next-line react/prop-types
const PlayersStatsPage = ({ darkMode }) => {
  const [playersStats, setPlayersStats] = useState([]);
  const [sortedStats, setSortedStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topPlayer, setTopPlayer] = useState(null);
  const [matchFormat, setMatchFormat] = useState("Test");
  const [selectedOption, setSelectedOption] = useState("Most Runs");
  const [playType, setPlayType] = useState("Batting");

  useEffect(() => {
    const fetchPlayerStats = async (player) => {
      try {
        const response = await fetch(player.statisticsUrl, {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({ method: "GET", data: { uk: null } }),
        });

        if (!response.ok) throw new Error(`Failed to fetch stats for ${player.name}`);

        const data = await response.json();
        const playerData = data.result || {};
        let matchStats = matchFormat === "ODI" ? playerData["4"] : playerData["5"] || {};

        return {
          name: player.name,
          image: player.hasFacedImage ? player.img : "https://www.bcci.tv/img/default-player-men-new1.svg",
          matches: matchStats.mat || 0,
          battingInnings: matchStats.btin || 0,
          average: matchStats.btavg || 0,
          strikeRate: matchStats.btstrt || 0,
          highestScore: matchStats.hs || 0,
          fours: matchStats.bt4 || 0,
          sixes: matchStats.bt6 || 0,
          thirties: matchStats.bt30 || 0,
          fifties: matchStats.bt50 || 0,
          battingRuns: matchStats.btrn || 0,
          bowlingInnings: matchStats.blin || 0,
          bowlingRuns: matchStats.blrn || 0,
          wickets: matchStats.blwkt || 0,
          bowlingAverage: matchStats.blavg || 0,
          bowlingFigure: matchStats.bbl || "0-0",
          economy: matchStats.bleco || 0,
          bowlingStrikeRate: matchStats.blsr || 0,
        };
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const fetchAllPlayers = async () => {
      setLoading(true);
      const stats = await Promise.all(playersData.map(fetchPlayerStats));
      setPlayersStats(stats.filter((player) => player !== null));
      setLoading(false);
    };

    fetchAllPlayers();
  }, [matchFormat]);

  useEffect(() => {
    if (playersStats.length === 0) return;
    let sortedPlayers = playersStats.filter((player) => player.matches > 0);
    // console.log(playersStats)

    const sortFunctions = {
      "Most Runs": (a, b) => b.battingRuns - a.battingRuns,
      "Highest Score": (a, b) => {
        const parseScore = (score) => {
          if (!score) return 0;
          return Number(score.toString().replace("*", "").trim());
        };
        return parseScore(b.highestScore) - parseScore(a.highestScore);
      },
      "Highest Average": (a, b) => b.average - a.average,
      "Most Fifties": (a, b) => b.fifties - a.fifties,
      "Highest Strike Rate": (a, b) => b.strikeRate - a.strikeRate,
      "Most Fours": (a, b) => b.fours - a.fours,
      "Most Sixes": (a, b) => b.sixes - a.sixes,
      "Most Wickets": (a, b) => b.wickets - a.wickets,
      "Best Average": (a, b) => a.bowlingAverage - b.bowlingAverage,
      "Best Bowling Figure": (a, b) => {
        const [wicketsA, runsA] = a.bowlingFigure.split("-");
        const [wicketsB, runsB] = b.bowlingFigure.split("-");
        return wicketsB !== wicketsA ? wicketsB - wicketsA : runsA - runsB;
      },
      "Best Economy Rate": (a, b) => a.economy - b.economy,
      "Best Strike Rate": (a, b) => a.bowlingStrikeRate - b.bowlingStrikeRate,
    };

    sortedPlayers.sort(sortFunctions[selectedOption] || (() => 0));
    const topPlayerFromStats = sortedPlayers[0];
    const topPlayerFromData = playersData.find(
      (player) => player.name === topPlayerFromStats.name
    );
    if (topPlayerFromData) {
      setTopPlayer({
        ...topPlayerFromStats,
        backgroundPosition: topPlayerFromData.backgroundPosition, 
        zoom: topPlayerFromData.zoom, // Add zoom
      });
    }
    
    setSortedStats(sortedPlayers);
  }, [selectedOption, playersStats, playType]);

  return (
    <div className={`flex flex-col sm:flex-row mt-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <div className={`w-full sm:w-1/4 min-w-[250px] ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-lg`}>
        <StatsSidebar
          matchFormat={matchFormat}
          setMatchFormat={setMatchFormat}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setPlayType={setPlayType}
          darkMode={darkMode}
        />
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-lg overflow-auto custom-scroll`}>
        {loading ? (
          <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Loading statistics...</p>
        ) : (
          <>
            {topPlayer && (
              <StatsHeroCard
                player={topPlayer}
                playType={playType}
                selectedOption={selectedOption}
                darkMode={darkMode}
              />
            )}

            <div className="mt-3 w-full">
              {sortedStats.slice(1, 10).map((player, index) => (
                <div key={index} className="overflow-x-auto mb-2">
                  <StatsCard
                    rank={index + 2}
                    player={player}
                    playType={playType}
                    darkMode={darkMode}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayersStatsPage;
