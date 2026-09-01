const ItemCard = ({ item, onFavorite, isFavorite }) => {
  const { name, sprites, height, weight, types } = item;

  const image = sprites.front_default;
  const type = types[0].type.name;

  return (
    <div className="card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>Tipo: {type}</p>
      <p>Altura: {height}</p>
      <p>Peso: {weight}</p>

      <button onClick={() => onFavorite(item)}>
        {isFavorite ? "Ya está en favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default ItemCard;