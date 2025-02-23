const players = [
    { name: "John Smith", role: "All-rounder", matches: 45, img: "player1.jpg" },
    { name: "David Warner", role: "Batsman", matches: 38, img: "player2.jpg" },
    { name: "Mike Johnson", role: "Bowler", matches: 42, img: "player3.jpg" },
    { name: "Steve Rogers", role: "Wicket Keeper", matches: 40, img: "player4.jpg" },
  ];
  
  // eslint-disable-next-line react/prop-types
  const Players = ({ darkMode }) => {
    return (
      <section className={`py-12 px-4 ${darkMode ? "bg-[#0a0f1e] text-white" : "bg-white text-gray-900"}`}>
        <h2 className="text-center text-3xl font-bold mb-6">Our Players</h2>
        <div className="container mx-auto grid md:grid-cols-4 gap-6">
          {players.map((player, index) => (
            <div key={index} className="p-4 rounded-lg shadow-md bg-opacity-10">
              <img src={player.img} alt={player.name} className="rounded-lg w-full h-40 object-cover" />
              <h3 className="text-xl font-semibold mt-4">{player.name}</h3>
              <p>{player.role}</p>
              <p className="text-sm">Matches: {player.matches}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Players;
  