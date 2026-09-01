import ItemCard from "./ItemCard";

const ItemList = ({ items, onFavorite, favoritos }) => {
  if (items.length === 0) {
    return <p>No encontramos resultados.</p>;
  }

  return (
    <div className="grid">
      {items.map((item) => {
        const isFavorite = favoritos.some(
          (favorito) => favorito.id === item.id
        );

        return (
          <ItemCard
            key={item.id}
            item={item}
            onFavorite={onFavorite}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
};

export default ItemList;