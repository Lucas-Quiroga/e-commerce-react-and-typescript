import React, { useState } from "react";
import DetailComponent from "../DetailComponent/DetailComponent";
import { Link } from "react-router-dom";

interface buttonProps {
  stock: number;
}

export const ButtonComponent = ({ stock }: any) => {
  const [intial, setIntial] = useState<buttonProps["stock"]>(10);

  const handlebutton = (value: number) => {
    const valueDefect = intial + value;

    if (valueDefect) {
    }
  };

  return (
    <>
      <div>
        <h3>Titulo</h3>
        <div>
          <button onClick={() => handlebutton(-1)}>-</button>
          <span>{intial}</span>
          <button onClick={() => handlebutton(+1)}>+</button>
        </div>
      </div>
    </>
  );
};
