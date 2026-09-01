import ItemCard from "../components/ItemCard";

const Favorites = ({ favoritos, setFavoritos }) => {
  const quitarDeFavoritos = (item) => {
    const nuevosFavoritos = favoritos.filter(
      (favorito) => favorito.id !== item.id
    );

    setFavoritos(nuevosFavoritos);

    localStorage.setItem(
      "favoritos",
      JSON.stringify(nuevosFavoritos)
    );
  };

  return (
    <main className="container">
      <h2>Mis favoritos</h2>

      {favoritos.length === 0 ? (
        <p className="mensaje">
          Todavía no agregaste favoritos.
        </p>
      ) : (
        <div className="grid">
          {favoritos.map((item) => (
            <div key={item.id}>
              <ItemCard
                item={item}
                onFavorite={quitarDeFavoritos}
                isFavorite={true}
              />

              <button
                className="remove-button"
                onClick={() => quitarDeFavoritos(item)}
              >
                Quitar de favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Favorites;