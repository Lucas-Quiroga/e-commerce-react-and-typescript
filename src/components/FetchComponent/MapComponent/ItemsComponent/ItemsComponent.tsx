import React, { useEffect } from "react";
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

  const { addToCart, deleteToCart, cleanCart, itemsCart, getBuy } =
    React.useContext(CartContext) as TodoContextType;

    useEffect(() => {
      const existeEnLocalStorage = localStorage.getItem("cart");
      if (existeEnLocalStorage) {
        const buscandoElObjeto = JSON.parse(existeEnLocalStorage).find(
          (e: any) => e.id === respuesta.id
        );
        if (buscandoElObjeto) {
          setExisteEnElCarrito(true);
          setRender(true);
        }
      }
    }, []);
  
    const additem = (item: CallFetch) => {
      addToCart({ ...item, id: item.id });
      setRender(true);
      handleButtonId(item.id);
    };
  
    const handleButtonId = (id: number) => {
      const existeEnLocalStorage = localStorage.getItem("cart");
      if (existeEnLocalStorage) {
        const buscandoElObjeto = JSON.parse(existeEnLocalStorage).find(
          (e: any) => e.id === id
        );
        if (buscandoElObjeto) {
          setExisteEnElCarrito(true);
        } else {
          setExisteEnElCarrito(false);
        }
      }
    };


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
          className={existeEnElCarrito ? "" : "desaparecer" }
        >
          <button onClick={() => additem(respuesta)} >Agregar al carrito</button>
          {/* <button onClick={() => handleButtonId(respuesta.id)}>
            Agarrar ID
          </button> */}
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
