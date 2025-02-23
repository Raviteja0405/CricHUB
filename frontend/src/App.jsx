import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Statistics from "./components/Statistics";
import Players from "./components/Players";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection darkMode={darkMode} />
      <Statistics darkMode={darkMode} />
      <Players darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
