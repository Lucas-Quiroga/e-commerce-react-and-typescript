import React, {useState} from 'react'
import { CallFetch } from '../interfaces/CallFetch';
import { CartContext } from './CartContext';
import { TodoContextType } from './CartContext';

const {Provider} = CartContext;

interface props {
    children: JSX.Element | JSX.Element[]
}


const CartProvider = ({children}:any) => {

  // const [todos, setTodos] = React.useState<CallFetch[]>([]);

  const [itemsCart, setItemsCart] = React.useState<CallFetch[]>([]);

  // const saveTodo = (todo: ITodo) => {
  //   const newTodo: ITodo = {
  //     id: Math.random(), // not really unique - but fine for this example
  //     title: todo.title,
  //     description: todo.description,
  //     status: false,
  //   }
  //   setTodos([...todos, newTodo])
  // }
  
  // const updateTodo = (id: number) => {
  //   todos.filter((todo: ITodo) => {
  //     if (todo.id === id) {
  //       todo.status = true
  //       setTodos([...todos])
  //     }
  //   })
  // }

  const cleanCart = () => {
    setItemsCart([])
  }

  const addToCart = (item:CallFetch) => {
    const itemIndex = itemsCart.findIndex((item) => item.id === item.id);
    if (itemIndex !== -1) {
      setItemsCart(
        itemsCart.map((p) =>
          p.id === item.id
            ? { ...p }
            : p
        )
      );
    } else {
      setItemsCart([item, ...itemsCart]);
    }
    console.log(itemsCart);
    
  };

  const deleteToCart = (id:number) => {
    setItemsCart(itemsCart.filter((product)=> product.id !== id))
  }


  return (
    // HIGH ORDER COMPONENT
    <CartContext.Provider value={{ itemsCart, cleanCart, addToCart, deleteToCart }}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider