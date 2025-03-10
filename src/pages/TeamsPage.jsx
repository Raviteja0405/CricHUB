import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";

const headers = {
  "accept": "application/json",
  "Content-Type": "application/json",
}

// eslint-disable-next-line react/prop-types
const TeamsPage = ({ darkMode }) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // Fetch data from both URLs
        const responses = await Promise.all([
          fetch("https://gateway.stumpsapp.com/users/-O25INygzbxwZwFgG1FX/teams", 
            {
              method: "POST",
              headers: headers,
              body: JSON.stringify({ method: "GET" }),
            }
          ),
          fetch("https://gateway.stumpsapp.com/users/-O3Lhwl42huppzdYe4k3/teams",
            {
              method: "POST",
              headers: headers,
              body: JSON.stringify({ method: "GET" }),
            }
          ),
        ]);

        // Parse JSON responses
        const [data1, data2] = await Promise.all(responses.map((res) => res.json()));

        // Merge both results
        const allTeams = [...data1.result, ...data2.result];

        // Remove duplicates based on the 'tmk' field
        const uniqueTeams = allTeams.filter((team, index, self) =>
          index === self.findIndex((t) => t.tmk === team.tmk)
        );

        // Set the unique teams data
        setTeams(uniqueTeams);
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
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center sm:w-[70%]">
          {teams.map((team) => (
            <TeamCard key={team.tmk} image={team.tmimg} name={team.tmn} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TeamsPage;
