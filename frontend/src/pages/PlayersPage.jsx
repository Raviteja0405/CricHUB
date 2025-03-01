import { useState, useEffect } from "react";
import playersData from "../data/playerData";

// eslint-disable-next-line react/prop-types
const PlayersPage = ({ darkMode }) => {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const playersPerPage = 3;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const startIndex = (currentPage - 1) * playersPerPage;
      const endIndex = startIndex + playersPerPage;
      setPlayers(playersData.slice(startIndex, endIndex));
      setLoading(false);
    }, 800);
  }, [currentPage]);

  return (
    <section className={`py-12 px-4 ${darkMode ? "bg-[#0a0f1e] text-white" : "bg-white text-gray-900"}`}>
      <h2 className="text-center text-3xl font-bold mb-2">Our Players</h2>
      <p className="text-center text-gray-400 mb-6">Discover our talented roster of cricket players.</p>

      <div className="container mx-auto grid sm:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-4 flex justify-center items-center h-[200px]">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          players.map((player, index) => (
            <div key={index} className="p-4 rounded-lg shadow-md bg-gray-800">
              <img
                src={player.img}
                alt={player.name}
                className="w-full h-[calc(40vh)] object-cover object-top rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{player.name}</h3>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg cursor-pointer shadow-md hover:bg-blue-700 transition-all"
                onClick={() => window.location.href = player.profileUrl}
              >
                View Profile
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          className={`px-4 py-2 mx-1 rounded-md cursor-pointer ${currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          disabled={currentPage === 1 || loading}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          &lt;
        </button>
        <span className="px-4 py-2 bg-gray-700 text-white rounded-md">{currentPage}</span>
        <button
          className={`px-4 py-2 mx-1 rounded-md cursor-pointer ${playersData.length <= currentPage * playersPerPage ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          disabled={playersData.length <= currentPage * playersPerPage || loading}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default PlayersPage;
