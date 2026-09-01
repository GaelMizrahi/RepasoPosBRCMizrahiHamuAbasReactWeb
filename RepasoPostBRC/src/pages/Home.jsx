import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ItemList from "../components/ItemList";
import { getPokemons } from "../services/api";

const Home = ({ favoritos, setFavoritos }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cargarPokemons = async () => {
      try {
        setLoading(true);

        const data = await getPokemons();

        setPokemons(data);
        setError(false);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    cargarPokemons();
  }, []);

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const agregarAFavoritos = (item) => {
    const yaExiste = favoritos.some(
      (favorito) => favorito.id === item.id
    );

    if (!yaExiste) {
      const nuevosFavoritos = [...favoritos, item];

      setFavoritos(nuevosFavoritos);

      localStorage.setItem(
        "favoritos",
        JSON.stringify(nuevosFavoritos)
      );
    }
  };

  if (loading) {
    return <p className="mensaje">Cargando información...</p>;
  }

  if (error) {
    return (
      <p className="mensaje">
        No fue posible obtener la información.
      </p>
    );
  }

  return (
    <main className="container">
      <h2>Explorá Pokémon</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ItemList
        items={pokemonsFiltrados}
        onFavorite={agregarAFavoritos}
        favoritos={favoritos}
      />
    </main>
  );
};

export default Home;