import React, { useContext } from 'react'
import {CartContext} from "../context/CartContext"
import { TodoContextType } from '../context/CartContext';
import { CallFetch } from '../interfaces/CallFetch';

type useStatential = {
  totalCart:() => void;
}

function Carrito() {

  const {itemsCart, totalCart, totalCartPrice} = React.useContext(CartContext) as TodoContextType

  const [total, setTotal] = React.useState<useStatential>()

  const totalApagar = totalCartPrice

  return (
    <div>
      <div>
      {itemsCart.map(elementos => (
        <ul>
          <li key={elementos.id}>
            <h5>{elementos.title}</h5>
            <h6>Price: ${elementos.price}</h6>
          </li>
          <hr />
          <p className="p">The total of your purchase is: ${totalApagar}</p>
        </ul>
      ))}
   
    </div>
    </div>
  )
}

export default Carrito
