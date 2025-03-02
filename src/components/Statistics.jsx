import { useEffect, useState } from "react";
import players from "../data/playerData";

const headers = {
  "Accept-Language": "en-US,en;q=0.7",
  "Connection": "keep-alive",
  "Origin": "https://stumpsapp.com",
  "Referer": "https://stumpsapp.com/",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  "Sec-GPC": "1",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
  "accept": "application/json",
  "content-type": "application/json",
  "sec-ch-ua": '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
};

const body = JSON.stringify({
  method: "GET",
  data: { uk: null },
});

// eslint-disable-next-line react/prop-types
const Statistics = ({ darkMode }) => {
  const [stats, setStats] = useState([
    { format: "ODI Format", topScorer: "Loading...", bestBowler: "Loading...", icon: "🏆" },
    { format: "Test Format", topScorer: "Loading...", bestBowler: "Loading...", icon: "⭐" },
  ]);

  useEffect(() => {
    const fetchData = async (player) => {
      try {
        const response = await fetch(player.statisticsUrl, {
          method: "POST",
          headers: headers,
          body: body,
        });

        if (!response.ok) {
          console.error(`Error fetching stats for ${player.name}: Status ${response.status}`);
          return null;
        }

        const data = await response.json();
        const playerData = data.result || {};
        const odiStats = playerData["4"] || {};
        const testStats = playerData["5"] || {};

        return {
          name: player.name,
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
        mostOdiWickets = 0,
        mostTestWickets = 0;

      let highestOdiPlayer = "Unknown",
        highestTestPlayer = "Unknown",
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

          if (data.odiWickets > mostOdiWickets) {
            mostOdiWickets = data.odiWickets;
            mostOdiWicketsPlayer = data.name;
          }

          if (data.testWickets > mostTestWickets) {
            mostTestWickets = data.testWickets;
            mostTestWicketsPlayer = data.name;
          }
        }
      });

      setStats([
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
