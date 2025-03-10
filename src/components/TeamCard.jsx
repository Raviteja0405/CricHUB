// eslint-disable-next-line react/prop-types
const TeamCard = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover shadow-md"
      />
      <h3 className="mt-2 text-lg font-semibold capitalize">{name}</h3>
    </div>
  );
};

export default TeamCard;
