// eslint-disable-next-line react/prop-types
const TimelineCard = ({ date, title, description, mediaType, mediaUrl, darkMode }) => {
    return (
      <div
        className={`relative rounded-lg p-4 w-full sm:w-96 ${
          darkMode ? "bg-gray-800 text-white shadow-lg" : "bg-white text-gray-800 shadow-md"
        }`}
      >
        <p
          className={`font-bold text-sm ${darkMode ? "text-blue-400" : "text-blue-600"}`}
        >
          {date}
        </p>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <p className={`text-sm mt-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
  
        {mediaType === "image" && (
          <img
            src={mediaUrl}
            alt={title}
            className="mt-3 w-full h-40 sm:h-60 object-cover rounded-md"
          />
        )}
        {mediaType === "video" && (
          <iframe
            className="mt-3 w-full h-40 sm:h-60 rounded-md"
            src={mediaUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    );
  };
  
  export default TimelineCard;
  