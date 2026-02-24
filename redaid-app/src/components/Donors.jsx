import { useEffect, useState } from "react";
import axios from "axios";
import DonorCard from "../components/DonorCard";

function Donors({ favorites, setFavorites }) {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [requestStatus, setRequestStatus] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [requestedDonors, setRequestedDonors] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const customNames = [
          "Rahul Sharma",
          "Ananya Verma",
          "Arjun Mehta",
          "Priya Singh",
          "Vikram Rao",
          "Sneha Kapoor",
          "Karan Malhotra",
          "Ishita Gupta",
          "Rohan Desai",
          "Meera Nair",
        ];

        const customCities = [
          "Delhi",
          "Mumbai",
          "Bangalore",
          "Hyderabad",
          "Chennai",
          "Kolkata",
          "Pune",
          "Ahmedabad",
          "Jaipur",
          "Lucknow",
        ];

        const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
        const mappedDonors = res.data.map((user) => ({
          id: user.id,
          name: customNames[user.id % customNames.length],
          city: customCities[user.id % customCities.length],
          bloodGroup: bloodGroups[user.id % bloodGroups.length],
          available: user.id % 2 === 0,
        }));

        setDonors(mappedDonors);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading donors...
      </div>
    );
  }

  const filteredDonors = donors.filter((donor) => {
    const matchesBloodGroup =
      selectedBloodGroup === "" || donor.bloodGroup === selectedBloodGroup;

    const matchesCity =
      searchCity === "" ||
      donor.city.toLowerCase().includes(searchCity.toLowerCase());

    return matchesBloodGroup && matchesCity;
  });

  const displayedDonors = isSorted
    ? [...filteredDonors].sort((a, b) => b.available - a.available)
    : filteredDonors;

  const availableCount = filteredDonors.filter(
    (donor) => donor.available,
  ).length;

  const handleReset = () => {
    setSelectedBloodGroup("");
    setSearchCity("");
  };

  return (
    <div className="min-h-screen bg-red-50 p-6 ">
      <h2 className="text-3xl font-bold mb-6">Available Donors</h2>
      <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full shadow-sm border border-red-100">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p className="font-medium text-gray-600">
          <span className="font-bold text-gray-900 text-lg">
            {availableCount}
          </span>{" "}
          {availableCount === 1 ? "Donor" : "Donors"} Available
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-8 border border-gray-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1 md:flex-none">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Filter by Blood Group:
          </label>
          <div className="relative">
            <select
              value={selectedBloodGroup}
              onChange={(e) => setSelectedBloodGroup(e.target.value)}
              className="w-full md:w-48 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all cursor-pointer hover:bg-white text-gray-700 font-medium appearance-none pr-10 shadow-sm"
            >
              <option value="">All</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-red-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-end flex-1 md:justify-end">
          <div className="w-full md:w-auto">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Search by City:
            </label>
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Enter city name"
              className="w-full md:w-64 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all placeholder-gray-400"
            />
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleReset}
              className="flex-1 md:flex-none px-6 py-3 bg-white text-gray-700 border border-gray-200 font-bold rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Reset
            </button>
            <button
              onClick={() => setIsSorted(!isSorted)}
              className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {isSorted ? "Unsort" : "Sort by Availability"}
            </button>
          </div>
        </div>
      </div>

      {requestedDonors.length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Requested Donors:</h3>
          <ul className="list-disc list-inside font-bold">
            {requestedDonors.map((donor) => (
              <li key={donor.id}>
               Donor Name: {donor.name} , City: {donor.city} , Blood Group :{donor.bloodGroup}
              </li>
            ))}
          </ul>
        </div>
      )}

      {filteredDonors.length === 0 ? (
        <p className="text-gray-500 font-medium">
          No current donors found for this blood group.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {displayedDonors.map((donor) => (
            <DonorCard
              key={donor.id}
              donor={donor}
              requestStatus={requestStatus}
              setRequestStatus={setRequestStatus}
              favorites={favorites}
              setFavorites={setFavorites}
              requestedDonors={requestedDonors}
              setRequestedDonors={setRequestedDonors}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Donors;
