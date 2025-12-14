import { useEffect, useState } from "react";
import players from "../data/playerData";

const body = JSON.stringify({
  method: "GET",
  data: { uk: null },
});

// eslint-disable-next-line react/prop-types
const Statistics = ({ darkMode }) => {
  const [stats, setStats] = useState([
    {
      format: "T20 Format",
      topScorer: "Loading...",
      bestBowler: "Loading...",
      icon: "🏏",
    },
    {
      format: "Club Format",
      topScorer: "Loading...",
      bestBowler: "Loading...",
      icon: "🏅",
    },
    {
      format: "ODI Format",
      topScorer: "Loading...",
      bestBowler: "Loading...",
      icon: "🏆",
    },
    {
      format: "Test Format",
      topScorer: "Loading...",
      bestBowler: "Loading...",
      icon: "⭐",
    },
  ]);

  useEffect(() => {
    const fetchData = async (player) => {
      try {
        const response = await fetch(player.statisticsUrl, {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: body,
        });

        if (!response.ok) {
          console.error(
            `Error fetching stats for ${player.name}: Status ${response.status}`
          );
          return null;
        }

        const data = await response.json();
        const playerData = data.result || {};
        const t20Stats = playerData["2"] || {};
        const clubStats = playerData["3"] || {};
        const odiStats = playerData["4"] || {};
        const testStats = playerData["5"] || {};

        return {
          name: player.name,
          t20Runs: t20Stats.btrn || 0,
          t20Wickets: t20Stats.blwkt || 0,
          clubRuns: clubStats.btrn || 0,
          clubWickets: clubStats.blwkt || 0,
          odiRuns: odiStats.btrn || 0,
          odiWickets: odiStats.blwkt || 0,
          testRuns: testStats.btrn || 0,
          testWickets: testStats.blwkt || 0,
        };
      } catch (error) {
        console.error(`Error fetching stats for ${player.name}:`, error);
        return null;
      }
    };

    const fetchAllPlayerData = async () => {
      const playerStats = await Promise.all(players.map(fetchData));

      let highestOdiRuns = 0,
        highestTestRuns = 0,
        highestClubRuns = 0,
        highestT20Runs = 0,
        mostT20Wickets = 0,
        highestClubWickets = 0,
        mostOdiWickets = 0,
        mostTestWickets = 0;

      let highestOdiPlayer = "Unknown",
        highestTestPlayer = "Unknown",
        highestClubPlayer = "Unknown",
        highestT20Player = "Unknown",
        mostT20WicketsPlayer = "Unknown",
        mostClubWicketsPlayer = "Unknown",
        mostOdiWicketsPlayer = "Unknown",
        mostTestWicketsPlayer = "Unknown";

      playerStats.forEach((data) => {
        if (data) {
          if (data.odiRuns > highestOdiRuns) {
            highestOdiRuns = data.odiRuns;
            highestOdiPlayer = data.name;
          }

          if (data.testRuns > highestTestRuns) {
            highestTestRuns = data.testRuns;
            highestTestPlayer = data.name;
          }

          if (data.clubRuns > highestClubRuns) {
            highestClubRuns = data.clubRuns;
            highestClubPlayer = data.name;
          }

          if (data.t20Runs > highestT20Runs) {
            highestT20Runs = data.t20Runs;
            highestT20Player = data.name;
          }

          if (data.odiWickets > mostOdiWickets) {
            mostOdiWickets = data.odiWickets;
            mostOdiWicketsPlayer = data.name;
          }

          if (data.testWickets > mostTestWickets) {
            mostTestWickets = data.testWickets;
            mostTestWicketsPlayer = data.name;
          }

          if (data.clubWickets > highestClubWickets) {
            highestClubWickets = data.clubWickets;
            mostClubWicketsPlayer = data.name;
          }

          if (data.t20Wickets > mostT20Wickets) {
            mostT20Wickets = data.t20Wickets;
            mostT20WicketsPlayer = data.name;
          }
        }
      });

      setStats([
        {
          format: "T20 Format",
          topScorer: `${highestT20Player} - ${highestT20Runs} runs`,
          bestBowler: `${mostT20WicketsPlayer} - ${mostT20Wickets} wickets`,
          icon: "🏏",
        },
        {
          format: "Club Format",
          topScorer: `${highestClubPlayer} - ${highestClubRuns} runs`,
          bestBowler: `${mostClubWicketsPlayer} - ${highestClubWickets} wickets`,
          icon: "🏅",
        },
        {
          format: "ODI Format",
          topScorer: `${highestOdiPlayer} - ${highestOdiRuns} runs`,
          bestBowler: `${mostOdiWicketsPlayer} - ${mostOdiWickets} wickets`,
          icon: "🏆",
        },
        {
          format: "Test Format",
          topScorer: `${highestTestPlayer} - ${highestTestRuns} runs`,
          bestBowler: `${mostTestWicketsPlayer} - ${mostTestWickets} wickets`,
          icon: "⭐",
        },
      ]);
    };

    fetchAllPlayerData();
  }, []);

  return (
    <section
      className={`py-12 px-4 ${
        darkMode ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-center text-3xl font-bold mb-6">
        Tournament Statistics
      </h2>

      <div
        className="
      mx-auto 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6 
      max-w-6xl
    "
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
    p-6
    rounded-xl
    shadow-md
    border
    bg-opacity-10
    min-w-[280px]
    max-w-sm
  "
          >
            {/* Header */}
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-6">
              {stat.icon}
              <span>{stat.format}</span>
            </h3>

            {/* Most Runs */}
            <div className="flex justify-between items-center mb-4 gap-1">
              <span className="text-sm text-gray-400 font-medium">
                Most Runs
              </span>
              <span className="text-sm font-semibold whitespace-nowrap text-right">
                {stat.topScorer}
              </span>
            </div>

            {/* Most Wickets */}
            <div className="flex justify-between items-center gap-4">
              <span className="text-sm text-gray-400 font-medium">
                Most Wickets
              </span>
              <span className="text-sm font-semibold whitespace-nowrap text-right">
                {stat.bestBowler}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
