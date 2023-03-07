import React, { useState } from "react";
import DetailComponent from "../DetailComponent/DetailComponent";
import { Link } from "react-router-dom";

interface buttonProps {
  stock: number;
  intial: number;
}

export const ButtonComponent = ({ stock }: buttonProps) => {
  const [intial, setIntial] = useState<buttonProps["stock"]>(10);
  const [value, setValue] = useState<buttonProps["intial"]>(1);

  const handlebutton = (assignament: number) => {
    const valueDefect = intial + value;

    if (valueDefect <= value && valueDefect >= 1) {
      setValue(value + assignament);
    } else {
      alert("you can't add/remove more products");
    }
  };

  return (
    <div>
      <span>STOCK DISPONIBLE: {stock}</span>
      <button onClick={() => handlebutton(-1)}>-</button>
      <span>{value}</span>
      <button onClick={() => handlebutton(+1)}>+</button>
    </div>
  );
};
