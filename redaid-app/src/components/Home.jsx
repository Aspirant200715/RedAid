import { Link } from "react-router-dom";
import bg from "../assets/bg.png"; // make sure folder name is correct (assets, not assests)
import drop from "../assets/drop.png";

function Home() {
  return (
    <div className="h-[calc(100vh-80px)] relative overflow-hidden flex items-center justify-center px-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="md:pl-12">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-700">
            Your Blood <br />
            <span className="text-red-600">Their Life</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 font-bold max-w-lg">
            RedAid connects blood donors with patients in need quickly,
            efficiently, and reliably during emergencies.
          </p>

          <Link
            to="/donors"
            className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white 
                       bg-gradient-to-r from-red-600 to-red-500 
                       rounded-full shadow-lg 
                       transition-all duration-300 
                       hover:scale-105 hover:shadow-2xl 
                       hover:from-red-700 hover:to-red-600"
          >
            Find Donors →
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-red-200 rounded-full animate-heartbeat opacity-50"></div>
            <div className="w-40 h-40 bg-red-600 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl relative z-10">
              <img
                src={drop}
                alt="Blood Drop"
                className="w-22 h-35 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
