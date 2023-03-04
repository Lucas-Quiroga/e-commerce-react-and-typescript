import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // const renderAuthButton = () => {
  //   if (isLoggedIn) {
  //     return (
  //       <li className="sections">
  //         <button onClick={handleLogout}>Cerrar Sesión</button>
  //       </li>
  //     );
  //   } else {
  //     return (
  //       <li className="sections">
  //         {isLoggedIn ? <Link to="/inicioSesion">Cerrar Sesión</Link> : <Link to="/inicioSesion">Iniciar Sesión</Link>}
  //       </li>
  //     );
  //   }
  // };

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
          {isLoggedIn ? (
            <Link to="/" onClick={handleLogout}>
              Cerrar Sesión
            </Link>
          ) : (
            <Link to="/inicioSesion">Iniciar Sesión</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
