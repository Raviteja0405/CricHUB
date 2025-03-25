import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import players from "../data/playerData";

const facedPlayers = players.filter((player) => player.hasFacedImage);

// eslint-disable-next-line react/prop-types
const HeroSection = ({ darkMode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section
      className={`w-full flex flex-col items-center justify-center text-center mt-10 mb-21 ${
        darkMode ? "bg-[#0a0f1e] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Where Cricket Dreams Come Alive
      </h1>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Experience the thrill of cricket through passion, dedication, and teamwork.
      </p>

      <div className="w-full max-w-3xl">
        <Slider {...settings}>
          {facedPlayers.map((player, index) => (
            <div key={index} className="relative">
              <img
                src={player.img}
                alt={player.name}
                className="w-full h-[calc(40vh)] md:h-[calc(60vh)] object-cover object-top rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;