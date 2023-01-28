import React, {useContext, useState} from 'react'
import { CartContext } from './CartContext'
import { Cart, CartState } from '../interfaces/interface'


// const INTIAL_STATE:CartState = {
//     //llenar 
// }


interface props {
    children: JSX.Element | JSX.Element[]
}

const {Provider} = CartContext;
export const ContextCart = () => useContext(CartContext);


const CartProvider = ({children}: props) => {

    const [cart, setCart] = useState([])

    const clearCart = () => {
      setCart([]);
    };
  
    const isInCart = (id:any) => {
      return cart.find((prod:any) => prod.id === id) ? true : false;
    };
  
    const removeItem = (id:any) => {
      setCart(cart.filter((prod:any) => prod.id !== id));
    };


  return (
    // HIGH ORDER COMPONENT
    <Provider value={{clearCart,isInCart,removeItem}}>
        {children}
    </ Provider >
  )
}

export default CartProvider