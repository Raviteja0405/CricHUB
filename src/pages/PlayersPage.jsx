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

  // Calculate total pages
  const totalPages = Math.ceil(playersData.length / playersPerPage);

  return (
    <section className={`py-16 px-4 ${darkMode ? "bg-[#0a0f1e] text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold mb-3">Our Players</h2>
        <p className="text-center text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Discover our talented roster of cricket players who bring excellence to every match.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            players.map((player, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                  darkMode ? "bg-[#1a1f2e] shadow-lg shadow-blue-900/20" : "bg-white shadow-lg shadow-gray-200/60"
                }`}
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={player.img}
                    alt={player.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{player.name}</h3>
                  <button
                    className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => window.open(player.profileUrl, '_blank')}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Fixed Pagination */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center">
            <button
              className={`flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-md text-base font-bold mx-1 ${
                currentPage === 1 
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={currentPage === 1 || loading}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              aria-label="Previous page"
            >
              &lt;
            </button>

            <div className="overflow-x-auto" style={{ maxWidth: "calc(100vw - 120px)" }}>
              <div className="flex">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`h-8 w-8 sm:h-10 sm:w-10 text-base font-medium rounded-md mx-1 ${
                      currentPage === index + 1 
                        ? "bg-blue-600 text-white" 
                        : darkMode 
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <button
              className={`flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-md text-base font-bold mx-1 ${
                currentPage === totalPages 
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={currentPage === totalPages || loading}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              aria-label="Next page"
            >
              &gt;
            </button>
          </div>
          
          {/* Page indicator */}
          <div className="mt-4 text-base font-medium text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayersPage;