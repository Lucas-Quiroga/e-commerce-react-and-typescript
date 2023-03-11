import React, { useState } from "react";
import DetailComponent from "../DetailComponent/DetailComponent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { TodoContextType } from "../../context/CartContext";
import { useRecoilState } from "recoil";
import { totalCartPrice } from "../../atoms/atoms";

type CallFetchCategory = "male" | "female";

interface buttonProps {
  id: number;
  userId: number;
  price: number;
  title: string;
  category: CallFetchCategory;
  stock: number;
  quantity: number;
  img: string;
}

export const ButtonComponent = ({
  stock,
  id,
  quantity,
  price,
}: buttonProps) => {
  // cambia la cantidad y el precio por individual
  const [cantidad, setCantidad] = useState<buttonProps["stock"]>(1);

  //cambia el precio total pero se suma el de todos al mismo tiempo
  const [totalCart, setTotalCart] = useRecoilState(totalCartPrice);

  const { deleteToCart, itemsCart, totalPrice } = React.useContext(
    CartContext
  ) as TodoContextType;

  const handlebutton = (assignament: number) => {
    const valueTotal = cantidad + assignament;
    if (valueTotal >= 1 && valueTotal <= stock) {
      setCantidad(valueTotal);
      console.log(valueTotal);
      setTotalCart(
        itemsCart.reduce((acc, item) => {
          if (item.id === id) {
            return acc + item.price * valueTotal;
          } else {
            return acc + item.price * item.quantity;
          }
        }, 0)
      );
    }
  };

  React.useEffect(() => {
    setTotalCart(
      itemsCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [itemsCart, setTotalCart]);

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  function precioporvalor(price: number, value: number) {
    return formatter.format(price * value);
  }

  return (
    <div>
      <div>
        <p>Price: {formatter.format(price)}</p>
        <p>Price x Quantity: {precioporvalor(price, cantidad)}</p>
        <button onClick={() => handlebutton(-1)}>-</button>
        <span>{cantidad}</span>
        <button onClick={() => handlebutton(+1)}>+</button>
      </div>
      <button onClick={() => deleteToCart(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
