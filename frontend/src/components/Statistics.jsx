const statistics = [
    { format: "ODI Format", topScorer: "John Smith - 892 runs", bestBowler: "Mike Johnson - 45 wickets", icon: "🏆" },
    // { format: "T20 Format", topScorer: "David Warner - 456 runs", bestBowler: "Chris Evans - 28 wickets", icon: "⚡" },
    { format: "Test Format", topScorer: "Steve Rogers - 1245 runs", bestBowler: "Tony Stark - 67 wickets", icon: "⭐" },
  ];
  
  // eslint-disable-next-line react/prop-types
  const Statistics = ({ darkMode }) => {
    return (
      <section className={`py-12 px-4 ${darkMode ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-900"}`}>
        <h2 className="text-center text-3xl font-bold mb-6">Tournament Statistics</h2>
        <div className=" mx-auto flex items-center justify-center text-center gap-10">
          {statistics.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md border bg-opacity-10">
              <h3 className="text-xl font-semibold flex items-center gap-2">{stat.icon} {stat.format}</h3>
              <p className="mt-2"><strong>Top Scorer:</strong> {stat.topScorer}</p>
              <p><strong>Best Bowler:</strong> {stat.bestBowler}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Statistics;
  