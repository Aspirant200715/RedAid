import { FaHeart, FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
function DonorCard({
  donor,
  requestStatus,
  setRequestStatus,
  favorites,
  setFavorites,
  requestedDonors,
  setRequestedDonors,
}) {
  const isFavorite = favorites.some((fav) => fav.id === donor.id);

  const toggleFavorite = (e) => {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== donor.id));
      toast.error("Removed from favorites");
    } else {
      setFavorites([...favorites, donor]);
      toast.success("Added to favorites ❤️");
    }
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
      <button
        type="button" //no multiple page reloads on heart clicks
        onClick={toggleFavorite}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-50 hover:bg-red-50 transition-all duration-200 hover:scale-110 z-10"
      >
        {isFavorite ? (
          <FaHeart className="text-red-500 text-xl" />
        ) : (
          <FaRegHeart className="text-gray-400 text-xl hover:text-red-500" />
        )}
      </button>

      <h3 className="text-xl font-extrabold text-gray-800 mb-1 pr-10">
        {donor.name}
      </h3>

      <p className="text-gray-500 mb-3 font-extrabold">City: {donor.city}</p>

      <p className="inline-block bg-red-50 text-red-600 font-bold px-3 py-1 rounded-full text-sm mb-4 border border-red-100">
        Blood Group: {donor.bloodGroup}
      </p>

      <p
        className={`text-sm font-medium mb-4 ${donor.available ? "text-green-600" : "text-gray-400"}`}
      >
        {donor.available ? "Available" : "Not Available"}
      </p>

      <button
        onClick={() => {
          setRequestStatus((prev) => ({
            ...prev,
            [donor.id]: true,
          }));

          if (!requestedDonors.some((d) => d.id === donor.id)) {
            setRequestedDonors([...requestedDonors, donor]);
          }
        }}
        disabled={!donor.available || requestStatus[donor.id]}
        className={`w-full py-3 rounded-xl font-bold shadow-sm transition-all duration-300 ${
          donor.available
            ? "bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-lg hover:from-red-700 hover:to-red-600"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {!donor.available
          ? "Request Help"
          : requestStatus[donor.id]
            ? "Request Sent ✅"
            : "Request Help"}
      </button>
    </div>
  );
}

export default DonorCard;
