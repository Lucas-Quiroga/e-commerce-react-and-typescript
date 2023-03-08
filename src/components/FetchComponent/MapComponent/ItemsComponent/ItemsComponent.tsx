import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext, TodoContextType } from "../../../../context/CartContext";

type CallFetchCategory = "male" | "female";

interface CallFetch {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: CallFetchCategory;
  stock: number;
  img: string;
}

const ItemsComponent = ({ respuesta }: { respuesta: CallFetch }) => {
  const [render, setRender] = useState(false);

  const { addToCart, deleteToCart, cleanCart } = React.useContext(
    CartContext
  ) as TodoContextType;

  // const additem = (item: CallFetch) => {
  //   addToCart({ ...item, id: Math.random() });
  //   setRender(true);
  // };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <h3>{respuesta.title}</h3>
      <span>ID: {respuesta.id}</span>
      <br />
      <span>USER ID: {respuesta.userId}</span>
      <br />
      <span>{respuesta.category}</span>
      <br />
      <span>STOCK: {respuesta.stock}</span>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={respuesta.img} height="300"></img>
      </div>
      <span>${respuesta.price}</span>
      <br />
      <hr style={{ width: "100%" }} />

      {render ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={"/carrito"}>
            <button>Ir a la compra</button>
          </Link>
          <Link to={`/detail/${respuesta.id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      ) : (
        ""
        // <button onClick={() => additem(respuesta)}>Agregar al carrito</button>
      )}
    </div>
  );
};

export default ItemsComponent;
