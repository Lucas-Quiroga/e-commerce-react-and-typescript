import React from "react";
// import { ButtonComponent } from '../../../ButtonComponent/ButtonComponent'
import { Link } from "react-router-dom";
// import { useContext } from 'react'
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

const ItemsComponent = ({ respuesta }: { respuesta: CallFetch }) => {
  const { addToCart, deleteToCart, cleanCart } = React.useContext(
    CartContext
  ) as TodoContextType;

  const additem = (item: CallFetch) => {
    addToCart({ ...item, id: Math.random() });
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
      <Link to={"/carrito"}>
        <button>COMPRAR</button>
      </Link>

      {/* <ButtonComponent /> */}
      <Link to={`/detail/${respuesta.id}`}>
        <button>Ver detalle</button>
      </Link>
      <button onClick={() => additem(respuesta)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemsComponent;
