import HeroSection from "../components/HeroSection.jsx";
import Statistics from "../components/Statistics.jsx";
import Players from "../components/Players.jsx";

// eslint-disable-next-line react/prop-types
const Home = ({ darkMode }) => {

  return (
    <div >
      <HeroSection darkMode={darkMode} />
      <Statistics darkMode={darkMode} />
      <Players darkMode={darkMode} />
    </div>
  );
};

export default Home;
