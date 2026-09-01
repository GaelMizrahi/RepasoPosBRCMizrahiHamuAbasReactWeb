import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const App = () => {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = localStorage.getItem("favoritos");

    if (favoritosGuardados) {
      return JSON.parse(favoritosGuardados);
    }

    return [];
  });

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favoritos={favoritos}
              setFavoritos={setFavoritos}
            />
          }
        />

        <Route
          path="/favoritos"
          element={
            <Favorites
              favoritos={favoritos}
              setFavoritos={setFavoritos}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;