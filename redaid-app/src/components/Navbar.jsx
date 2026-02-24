import react from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ favorites, darkMode, setDarkMode }) {
  return (
    <nav className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="RedAid Logo"
            className="w-10 h-10 rounded-full object-cover bg-white p-1"
          />

          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-white-500">Red</span>
            <span className="text-blue-600">Aid</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 font-bold"
          >
            Home
          </Link>
          <Link
            to="/donors"
            className="px-4 py-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 font-bold"
          >
            Donors
          </Link>
          <Link
            to="/favorites"
            className="relative px-4 py-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 font-bold flex items-center gap-2"
          >
            Favorites
            {favorites.length > 0 && (
              <span className="bg-yellow-400 text-red-900 text-xs font-extrabold px-2 py-0.5 rounded-full shadow-sm transform hover:scale-110 transition-transform">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
