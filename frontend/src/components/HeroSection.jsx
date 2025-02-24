import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const players = [
  { name: "John Smith", img: "https://via.placeholder.com/800x400?text=John+Smith" },
  { name: "David Warner", img: "https://via.placeholder.com/800x400?text=David+Warner" },
  { name: "Mike Johnson", img: "https://via.placeholder.com/800x400?text=Mike+Johnson" },
  { name: "Steve Rogers", img: "https://via.placeholder.com/800x400?text=Steve+Rogers" },
];

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
    <section className={`w-full h-screen flex flex-col items-center justify-center text-center ${darkMode ? "bg-[#0a0f1e] text-white" : "bg-gray-100 text-gray-900"}`}>
      <h1 className="text-4xl font-bold mb-4">Where Cricket Dreams Come Alive</h1>
      <p className="text-lg mb-6">Experience the thrill of local cricket through passion, dedication, and teamwork.</p>

      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {players.map((player, index) => (
            <div key={index} className="relative">
              <img src={player.img} alt={player.name} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-bold">
                {player.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <a href="#" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition">Explore Teams</a>
    </section>
  );
};

export default HeroSection;
