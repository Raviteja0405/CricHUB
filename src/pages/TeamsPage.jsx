import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";

// eslint-disable-next-line react/prop-types
const TeamsPage = ({ darkMode }) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://gateway.stumpsapp.com/users/-O25INygzbxwZwFgG1FX/teams",
          {
            method: "POST",
            headers: {
              "accept": "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify({ method: "GET" }),
          }
        );

        const data = await response.json();
        if (data.status === "success") {
          setTeams(data.result);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <section className={`py-12 px-4 ${darkMode ? "bg-[#0a0f1e] text-white" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      <h2 className="text-center text-3xl font-bold mb-6">Our Teams</h2>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {teams.map((team) => (
            <TeamCard key={team.tmk} image={team.tmimg} name={team.tmn} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TeamsPage;
