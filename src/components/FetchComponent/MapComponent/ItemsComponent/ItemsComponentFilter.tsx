import React, { useState } from "react";
import { ButtonComponent } from "../../../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import { CartContext, TodoContextType } from "../../../../context/CartContext";

type CallFetchCategory = "male" | "female";

interface CallFetch {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: CallFetchCategory;
  stock: number;
}

const ItemsComponentFilter = ({ respuesta }: { respuesta: CallFetch }) => {
  const [render, setRender] = useState(false);

  const { addToCart, deleteToCart, cleanCart } = React.useContext(
    CartContext
  ) as TodoContextType;

  const additem = (item: CallFetch) => {
    addToCart({ ...item, id: Math.random() });
    setRender(true);
  };
  return (
    <div>
      <h3>Nombre: {respuesta.title}</h3>
      <p>ID: {respuesta.id}</p>
      <span>USER ID: {respuesta.userId}</span>
      <br />
      <span>PRICE: {respuesta.price}</span>
      <br />
      <span>CATEGORY: {respuesta.category}</span>
      <hr />
      {render ? (
        <div>
          <Link to={"/carrito"}>
            <button>Ir a la compra</button>
          </Link>
          <Link to={`/detail/${respuesta.id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      ) : (
        <button onClick={() => additem(respuesta)}>Agregar al carrito</button>
      )}
    </div>
  );
};

export default ItemsComponentFilter;
