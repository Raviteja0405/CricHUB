// import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import players from "../data/playerData";

// eslint-disable-next-line react/prop-types
const Players = ({ darkMode }) => {
  const navigate = useNavigate();

  const seletedPlayers = players.slice(0, 3);

  return (
    <section className={`py-12 px-4 ${darkMode ? "bg-[#0a0f1e] text-white" : "bg-white text-gray-900"}`}>
      <h2 className="text-center text-3xl font-bold mb-6">Our Players</h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {seletedPlayers.map((player, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md bg-opacity-10">
            <img
              src={player.img}
              alt={player.name}
              className="w-full h-[calc(40vh)] object-cover object-top rounded-lg shadow-lg"
            />
            <h3 className="text-xl text-center font-semibold mt-4">{player.name}</h3>
          </div>
        ))}
      </div>

      {/* View All Players Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/players")}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all cursor-pointer"
        >
          View All Players
        </button>
      </div>
    </section>
  );
};

export default Players;
