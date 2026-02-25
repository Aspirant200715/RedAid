import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Donors from "./components/Donors";
import Favorites from "./components/Favorites";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
 const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="h-full"
  >
    {children}
  </motion.div>
);
  
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar favorites={favorites} />
      <div className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/donors"
              element={
                <PageWrapper>
                  <Donors favorites={favorites} setFavorites={setFavorites} />
                </PageWrapper>
              }
            />
            <Route
              path="/favorites"
              element={
                <PageWrapper>
                  <Favorites
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
