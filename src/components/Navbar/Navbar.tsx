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

  const totalQuantity = itemsCart.reduce((acc, b) => acc + b.quantity, 0);

  return (
    <nav className="navbar">
      <ul className="ul_navbar">
        <li className="sections">
          <Link to="/">Home</Link>
        </li>
        <li className="sections">
          <Link to="/category">Categories</Link>
        </li>
        <li className="sections">
          <Link to="/inicioSesion" onClick={handleLogout}>
            {isLoggedIn ? "Log out" : "Log In"}
          </Link>
        </li>

        <li className="sections">
          {isLoggedIn === true ? `Hola, ${name}` : ""}
        </li>
        <li className="sections">
          {itemsCart.length === 0 ? (
            ""
          ) : (
            <>
              <Link to="/carrito">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              <div className="circle-red">
                <div className="circle-number">{totalQuantity}</div>
              </div>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
