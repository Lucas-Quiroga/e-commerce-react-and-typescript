import React, { useContext } from 'react'
import {CartContext} from "../context/CartContext"
import { TodoContextType } from '../context/CartContext';


function Carrito() {

  const {itemsCart} = React.useContext(CartContext) as TodoContextType



  return (
    <div>
      {itemsCart.map(elementos => (
        <ul>
          <li>
            {elementos.title}
          </li>
        </ul>
      ))}
    </div>
   
  )
}

export default Carrito
