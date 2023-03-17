import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { TodoContextType } from "../../context/CartContext";
import "./ViewItemsButton.css";

const ViewItemsButton = () => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const { itemsCart } = useContext(CartContext) as TodoContextType;

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const totalQuantity = itemsCart.reduce((acc, b) => acc + b.quantity, 0);

  return (
    <div className="contenedor">
      <div className="circle-red" onClick={toggleCarrito}>
        <div className="circle-number">{totalQuantity}</div>
      </div>
      <div className={`carrito ${mostrarCarrito ? "mostrado" : ""}`}>
        <h1>
          <span>ITEMS</span>
        </h1>
        {/* Aquí irían los elementos del carrito */}
        <p>Hola, aquí irían los elementos del carrito.</p>
      </div>
    </div>
  );
};

export default ViewItemsButton;
