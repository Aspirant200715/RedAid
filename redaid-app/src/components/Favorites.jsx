import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

function Favorites({ favorites, setFavorites }) {
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((donor) => donor.id !== id));
    toast.error("Removed from favorites");
  };
  return (
    <div className="min-h-screen bg-red-50 p-6 ">
      <h2 className="text-2xl font-bold mb-6">Favorite Donors</h2>

      {favorites.length === 0 ? (
        <p>No favorite donors yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favorites.map((donor) => (
            <div
              key={donor.id}
              className="bg-white p-5 rounded-lg shadow-md relative"
            >
              <button
                onClick={() => removeFavorite(donor.id)}
                className="absolute top-3 right-3 bg-red-100 p-2 rounded-full text-red-500 transition-all duration-200 hover:bg-red-200 hover:scale-110"
              >
                <FaTrash />
              </button>

              <h3 className="text-xl font-bold">{donor.name}</h3>
              <p>City: {donor.city}</p>
              <p>Blood Group: {donor.bloodGroup}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
