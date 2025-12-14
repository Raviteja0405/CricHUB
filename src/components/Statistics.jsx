import { useEffect, useState } from "react";
import players from "../data/playerData";

const body = JSON.stringify({
  method: "GET",
  data: { uk: null },
});

// eslint-disable-next-line react/prop-types
const Statistics = ({ darkMode }) => {
  const [stats, setStats] = useState([
    {format: "Club Format", topScorer: "Loading...", bestBowler: "Loading...", icon: "🏅" },
    { format: "ODI Format", topScorer: "Loading...", bestBowler: "Loading...", icon: "🏆" },
    { format: "Test Format", topScorer: "Loading...", bestBowler: "Loading...", icon: "⭐" },
  ]);

  useEffect(() => {
    const fetchData = async (player) => {
      try {
        const response = await fetch(player.statisticsUrl, {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
          },
          body: body,
        });

        if (!response.ok) {
          console.error(`Error fetching stats for ${player.name}: Status ${response.status}`);
          return null;
        }

        const data = await response.json();
        const playerData = data.result || {};
        const clubStats = playerData["3"] || {};
        const odiStats = playerData["4"] || {};
        const testStats = playerData["5"] || {};

        return {
          name: player.name,
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
        highestClubWickets = 0,
        mostOdiWickets = 0,
        mostTestWickets = 0;

      let highestOdiPlayer = "Unknown",
        highestTestPlayer = "Unknown",
        highestClubPlayer = "Unknown",
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

          if(data.clubRuns > highestClubRuns) {
            highestClubRuns = data.clubRuns;
            highestClubPlayer = data.name;
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
        }
      });

      setStats([
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
    <section className={`py-12 px-4 ${darkMode ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-900"}`}>
      <h2 className="text-center text-3xl font-bold mb-6">Tournament Statistics</h2>
      <div className="mx-auto flex sm:flex-row flex-col items-center justify-center text-center gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md border bg-opacity-10">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {stat.icon} {stat.format}
            </h3>
            <p className="mt-2">
              <strong>Most Runs:</strong> {stat.topScorer}
            </p>
            <p>
              <strong>Most Wickets:</strong> {stat.bestBowler}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
