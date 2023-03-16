import React, { useContext, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { CartContext } from "../context/CartContext";
import { TodoContextType } from "../context/CartContext";
import { CallFetch } from "../interfaces/CallFetch";
import { ButtonComponent } from "../components/ButtonComponent/ButtonComponent";
import { totalCartPrice } from "../atoms/atoms";

type useStatential = {
  totalCart: () => void;
};

function Carrito() {
  const { itemsCart, totalPrice } = React.useContext(
    CartContext
  ) as TodoContextType;

  const [totalCart, setTotalCart] = useRecoilState(totalCartPrice);

  if (itemsCart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No hay elementos</h2>;
  }

  return (
    <div>
      <div>
        {itemsCart.map((elementos) => (
          <ul key={elementos.id}>
            <li key={elementos.id}>
              <h5>{elementos.title}</h5>
              <img src={elementos.img} style={{ height: "10rem" }} />
              {/* <h6>Price general: ${elementos.price}</h6> */}
            </li>
            <ButtonComponent
              id={elementos.id}
              userId={elementos.userId}
              price={elementos.price}
              title={elementos.title}
              category={elementos.category}
              stock={elementos.stock}
              quantity={elementos.quantity}
              img={elementos.img}
            />
            <hr />
          </ul>
        ))}
        <h2 style={{ color: "black", textAlign: "center" }}>
          Total a pagar: ${Math.round(totalCart)}
        </h2>
      </div>
    </div>
  );
}

export default Carrito;
