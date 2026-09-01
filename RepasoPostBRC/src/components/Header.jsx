import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>PokéExplorer</h1>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
};

export default Header;