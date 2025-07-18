import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TimelineCard = ({ date, title, description, mediaType, mediaUrl,zoom = "100",backgroundPosition = "center",  darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let maxDescriptionLength = 450;
  if(mediaType !== "none")
    maxDescriptionLength = 300;

  const handleToggleDescription = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative rounded-lg p-4 w-full sm:w-96 ${
        darkMode ? "bg-gray-800 text-white shadow-lg" : "bg-white text-gray-800 shadow-md"
      }`}
    >
      <p className={`font-bold text-sm ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
        {date}
      </p>
      <h3 className="text-lg font-bold mt-1">{title}</h3>
      <p className={`text-sm mt-1 whitespace-pre-line ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
         {/*eslint-disable-next-line react/prop-types*/}
        {isExpanded || description.length <= maxDescriptionLength
          ? description
          // eslint-disable-next-line react/prop-types
          : `${description.substring(0, maxDescriptionLength)}...`}
        {/*eslint-disable-next-line react/prop-types*/}
        {description.length > maxDescriptionLength && (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={handleToggleDescription}
          >
            {isExpanded ? ' less' : ' more...'}
          </span>
        )}
      </p>

      {mediaType === "image" && (
        <div
          className="mt-3 w-full h-40 sm:h-60 bg-cover bg-no-repeat rounded-md"
          style={{
            backgroundImage: `url(${mediaUrl})`,
            backgroundPosition,
            backgroundSize: `${zoom}%`,
          }}
          aria-label={title}
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