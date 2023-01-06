import React from 'react'
import { CartContext } from './CartContext'


interface props {
    children: JSX.Element | JSX.Element[]
}


const CartProvider = ({children}: props) => {
  return (
    // HIGH ORDER COMPONENT
    <CartContext.Provider value={{}}>
        {children}
    </ CartContext.Provider >
  )
}

export default CartProvider