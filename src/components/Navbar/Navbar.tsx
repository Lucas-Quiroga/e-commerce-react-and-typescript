import { useContext } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { firstName, login } from "../../atoms/atoms";
import { CartContext } from "../../context/CartContext";
import { TodoContextType } from "../../context/CartContext";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(login);
  const [name, setName] = useRecoilState(firstName);

  const { itemsCart } = useContext(CartContext) as TodoContextType;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <ul className="ul_navbar">
        <li className="sections">
          <Link to="/">Home</Link>
        </li>
        <li className="sections">
          <Link to="/category">Categorias</Link>
        </li>
        <li className="sections">
          <Link to="/inicioSesion" onClick={handleLogout}>
            {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
          </Link>
        </li>
        <li className="sections">
          {itemsCart.length === 0 ? (
            ""
          ) : (
            <Link to="/carrito">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          )}
        </li>
        <li className="sections">
          {isLoggedIn === true ? `Hola, ${name}` : ""}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
