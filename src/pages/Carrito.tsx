import React from 'react'
import {CartContext} from "../context/CartContext"
import { TodoContextType } from '../context/CartContext';

// type useStatential = {
//   totalCart:() => void;
// }

function Carrito() {

  const {itemsCart} = React.useContext(CartContext) as TodoContextType

  // const [total, setTotal] = React.useState<useStatential>()

  if (itemsCart.length === 0) {
    return <h2 style={{textAlign: 'center'}}>No hay elementos</h2>
  }
  
  
  let totalCart = itemsCart.reduce((acc, elem) => acc + elem.price, 0)
  

  return (
    <div>
      <div>
      {itemsCart.map(elementos => (
        <ul key={elementos.id}>
          <li key={elementos.id}>
            <h5>{elementos.title}</h5>
            <h6>Price: ${elementos.price}</h6>
          </li>
          <hr />
        </ul>
        
      ))}
      <h2 style={{color: "black", textAlign: 'center'}}>Total a pagar: ${Math.round(totalCart)}</h2>
    </div>
    </div>
  )
}

export default Carrito
