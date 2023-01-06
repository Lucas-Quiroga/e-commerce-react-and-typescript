import React, {useState} from 'react'
import { CartContext } from './CartContext'
import { Cart, CartState } from '../interfaces/interface'


const INTIAL_STATE:CartState


interface props {
    children: JSX.Element | JSX.Element[]
}




const CartProvider = ({children}: props) => {

    const [cart, setCart] = useState([])

  return (
    // HIGH ORDER COMPONENT
    <CartContext.Provider value={{cart}}>
        {children}
    </ CartContext.Provider >
  )
}

export default CartProvider