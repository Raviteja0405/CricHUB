import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PlayersPage from "./pages/PlayersPage.jsx";
// import TournamentsPage from "./pages/TournamentsPage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import TimelinePage from "./pages/TimelinePage.jsx";
import PlayersStatsPage from "./pages/PlayersStatsPage.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div
        className={
          darkMode
            ? "bg-[#0a0f1e] text-white min-h-screen"
            : "bg-white text-gray-900 min-h-screen"
        }
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div
          className={`pt-14 overflow-x-hidden ${
            darkMode ? "bg-[#0a0f1e] text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <Routes>
            {/* <Route path="/" element={<Navigate to="/" />} /> Redirect root to /CricHUB */}
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route
              path="/players"
              element={<PlayersPage darkMode={darkMode} />}
            />
            {/* <Route
              path="/tournaments"
              element={<TournamentsPage darkMode={darkMode} />}
            /> */}
            <Route path="/teams" element={<TeamsPage darkMode={darkMode} />} />
            <Route
              path="/playerStats"
              element={<PlayersStatsPage darkMode={darkMode} />}
            />
            <Route
              path="/timeline"
              element={<TimelinePage darkMode={darkMode} />}
            />
          </Routes>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;
