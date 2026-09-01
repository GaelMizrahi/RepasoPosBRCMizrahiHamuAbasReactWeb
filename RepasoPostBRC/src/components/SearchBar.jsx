const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;