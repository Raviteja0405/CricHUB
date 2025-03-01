const tournaments = [
  {
    trk: "-OEqFQEchSx0q9yH6NA5",
    trn: "ODI",
    trimg: "https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/tournament/0031.jpg",
    loc: "Dc Ground",
  },
  {
    trk: "-O3LODqfx1w7xJJUBuh6",
    trn: "THE ASHES",
    trimg: "https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/tournament/0008.jpg",
    loc: "Dc Ground",
  },
];

// eslint-disable-next-line react/prop-types
const TournamentsPage = ({ darkMode }) => {
  return (
    <section className={`py-12 px-4 min-h-screen ${darkMode ? 'bg-[#0a0f1e] text-white' : 'bg-gray-100 text-black'}`}>
      <h2 className="text-center text-3xl font-bold mb-8">Tournaments</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {tournaments.map((tournament) => (
          <div
            key={tournament.trk}
            className="relative w-full sm:w-64 md:w-80 lg:w-96 xl:w-125 h-80 rounded-3xl overflow-hidden shadow-lg mb-8"
          >
            <img
              src={tournament.trimg}
              alt={tournament.trn}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-bold">{tournament.trn}</h3>
              <p className="text-sm">{tournament.loc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default TournamentsPage;
