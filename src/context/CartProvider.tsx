import React, { useState, useEffect } from "react";
import { CallFetch } from "../interfaces/CallFetch";
import { CartContext } from "./CartContext";
import { TodoContextType } from "./CartContext";

const { Provider } = CartContext;

interface props {
  children: JSX.Element | JSX.Element[];
}

const CartProvider = ({ children }: any) => {
  const [itemsCart, setItemsCart] = React.useState<CallFetch[]>([]);
  // const [totalCartPrice, setTotalCartPrice] = useState<number>()

  const [getBuy, setGetBuy] = React.useState({});

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(itemsCart));
  }, [itemsCart]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setGetBuy(JSON.parse(storedCart));
    }
  }, []);

  const cleanCart = () => {
    setItemsCart([]);
  };

  const addToCart = (item: CallFetch) => {
    const existingItem = itemsCart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Si el producto ya está en el carrito, aumenta su cantidad
      existingItem.quantity += 1;
      setItemsCart([...itemsCart]);
    } else {
      // Si no, agrega uno nuevo con cantidad 1
      const newItem: CallFetch = {
        id: Math.random(),
        userId: Math.random(),
        price: item.price,
        title: item.title,
        category: item.category,
        stock: item.stock,
        quantity: 1,
        img: "",
      };
      setItemsCart([...itemsCart, newItem]);
    }
  };

  const deleteToCart = (id: number) => {
    setItemsCart(itemsCart.filter((product) => product.id !== id));
  };

  // const totalCart = () => {
  //   return itemsCart.reduce((acc, elem) => acc + elem.price, 0)
  // }

  return (
    // HIGH ORDER COMPONENT
    <CartContext.Provider
      value={{ itemsCart, cleanCart, addToCart, deleteToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
