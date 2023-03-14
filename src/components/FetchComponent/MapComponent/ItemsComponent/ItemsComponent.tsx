import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext, TodoContextType } from "../../../../context/CartContext";
import { CallFetch } from "../../../../interfaces/CallFetch";
import { useRecoilState } from "recoil";
import { itemEnLocalStorage } from "../../../../atoms/atoms";
import "./itemsComponent.css";

const ItemsComponent = ({ respuesta }: { respuesta: CallFetch }) => {
  const [render, setRender] = useState(false);
  const [existeEnElCarrito, setExisteEnElCarrito] =
    useRecoilState(itemEnLocalStorage);

  const { addToCart, deleteToCart, cleanCart, itemsCart } = React.useContext(
    CartContext
  ) as TodoContextType;

  const additem = (item: CallFetch) => {
    addToCart({ ...item, id: Math.random() });
    setRender(true);
  };

  // (encontrar el producto correspondiente al botón al que se le ha dado click)
  //  React.useEffect(() => {
  //   const updatedItems = itemsCart.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, quantity: valueTotal };
  //     }
  //   }, [])

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={respuesta.img} height="300"></img>
      </div>
      <span style={{ fontWeight: 700 }}>${respuesta.price}</span>
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
          <h6>Artículo agregado al carrito</h6>
          <Link to={"/carrito"}>
            <button>Ir a la compra</button>
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 10,
          }}
        >
          <button
            className={existeEnElCarrito ? "desaparecer" : ""}
            onClick={() => additem(respuesta)}
          >
            Agregar al carrito
          </button>
          <Link
            to={`/detail/${respuesta.id}`}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textDecoration: "none",
            }}
          >
            <button>Ver detalle</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemsComponent;
