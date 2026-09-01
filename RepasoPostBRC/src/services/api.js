import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async () => {
  const response = await axios.get(`${API_URL}?limit=30`);

  const listaPokemons = response.data.results;

  const pokemonsCompletos = await Promise.all(
    listaPokemons.map(async (pokemon) => {
      const detalle = await axios.get(pokemon.url);

      return detalle.data;
    })
  );

  return pokemonsCompletos;
};