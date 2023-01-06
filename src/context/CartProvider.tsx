import React, {useState} from 'react'
import { CartContext } from './CartContext'
import { Cart, CartState } from '../interfaces/interface'


// const INTIAL_STATE:CartState = {
//     //llenar 
// }


interface props {
    children: JSX.Element | JSX.Element[]
}




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
    <CartContext.Provider value={{clearCart,isInCart,removeItem}}>
        {children}
    </ CartContext.Provider >
  )
}

export default CartProvider