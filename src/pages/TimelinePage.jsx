import timelineData from "../data/timeLineData.js";
import TimelineCard from "../components/timelineCard.jsx";

// eslint-disable-next-line react/prop-types
const TimelinePage = ({ darkMode }) => {
  return (
    <section
      className={`py-12 px-4 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-center text-3xl font-bold mb-6">Cricket Match Timeline</h2>
      <p className="text-center mb-12">Memorable moments from our cricket matches</p>

      <div className="relative mx-auto max-w-4xl">
        <div
          className={`absolute left-7 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 ${
            darkMode ? "bg-blue-500" : "bg-blue-700"
          }`}
        ></div>

        <div className="flex flex-col space-y-5 sm:space-y-0">
          {timelineData.map((event, index) => (
            <div
              key={index}
              className={`relative flex w-full ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-7.5 sm:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  darkMode ? "bg-blue-500 border-[#101828]" : "bg-blue-700 border-[#F3F4F6]"
                } w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-[#101828] z-10`}
              ></div>

              {/* Timeline Card*/}
              <div
                className={`ml-10 sm:ml-0 w-full sm:w-1/2 px-6 flex ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <TimelineCard {...event} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelinePage;
