import React, { useState } from "react";
import DetailComponent from "../DetailComponent/DetailComponent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { TodoContextType } from "../../context/CartContext";

interface buttonProps {
  stock: number;
  intial: number;
  id: number;
}

export const ButtonComponent = ({ id }: any) => {
  // const [intial, setIntial] = useState<buttonProps["stock"]>(10);
  const [value, setValue] = useState<buttonProps["intial"]>(1);

  const { deleteToCart, itemsCart } = React.useContext(
    CartContext
  ) as TodoContextType;

  const handlebutton = (assignament: number) => {
    if (assignament == -1 && value >= 2) {
      setValue(value - 1);
    }
    if (assignament == +1 && value <= 9) {
      setValue(value + 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handlebutton(-1)}>-</button>
        <span>{value}</span>
        <button onClick={() => handlebutton(+1)}>+</button>
      </div>
      <button onClick={() => deleteToCart(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
