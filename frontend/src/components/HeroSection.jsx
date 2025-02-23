// eslint-disable-next-line react/prop-types
const HeroSection = ({ darkMode }) => {
    return (
      <header className={`w-full h-screen flex items-center justify-center text-center px-4 ${darkMode ? "bg-[#0a0f1e] text-white" : "bg-gray-100 text-gray-900"}`}>
        <div>
          <h1 className="text-4xl font-bold">Where Cricket Dreams Come Alive</h1>
          <p className="mt-3 text-lg">Experience the thrill of local cricket through passion, dedication, and teamwork.</p>
          <a href="#" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition">Explore Teams</a>
        </div>
      </header>
    );
  };
  
  export default HeroSection;
  