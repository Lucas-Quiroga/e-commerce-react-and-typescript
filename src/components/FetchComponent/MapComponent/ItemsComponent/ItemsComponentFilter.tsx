import React from "react";
import { ButtonComponent } from "../../../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

interface CallFetch {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: string;
  stock: number;
}

const ItemsComponentFilter = ({ respuesta }: { respuesta: CallFetch }) => {
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
    </div>
  );
};

export default ItemsComponentFilter;
