import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="ul_navbar">
        <li className="sections">
          <Link to="/">Home</Link>
        </li>
        <li className="sections">
          <Link to="/carrito">Carrito</Link>
        </li>
        <li className="sections">
          <Link to="/category">Categorias</Link>
        </li>
        <li className="sections">
          <Link to="/login">Iniciar Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
