import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PlayersPage from "./pages/PlayersPage.jsx";
import TournamentsPage from "./pages/TournamentsPage.jsx";
import StatsPage from "./pages/StatsPage.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="pt-14 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/players" element={<PlayersPage darkMode={darkMode} />} />
          <Route path="/tournaments" element={<TournamentsPage darkMode={darkMode} />} />
          <Route path="/stats" element={<StatsPage darkMode={darkMode} />} />
        </Routes>
      </div>
      <Footer darkMode={darkMode} />
    </div>
    </Router>
  );
};

export default App;
