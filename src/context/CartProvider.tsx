import React, {useState} from 'react'
import { CallFetch } from '../interfaces/CallFetch';
import { CartContext } from './CartContext';
import { TodoContextType } from './CartContext';

const {Provider} = CartContext;

interface props {
    children: JSX.Element | JSX.Element[]
}


const CartProvider = ({children}:any) => {

  const [itemsCart, setItemsCart] = React.useState<CallFetch[]>([]);
  const [totalCartPrice, setTotalCartPrice] = useState<number>()

  const cleanCart = () => {
    setItemsCart([])
  }

  const addToCart = (item:CallFetch) => {
    const newItem: CallFetch = {
          id: Math.random(), 
          userId: Math.random(),
          price: item.price,
	        title: item.title,
	        category: item.category
        }
        setItemsCart([...itemsCart, newItem])
        console.log(itemsCart);
        
  };

  const deleteToCart = (id:number) => {
    setItemsCart(itemsCart.filter((product)=> product.id !== id))
  }

  const totalCart = () => {
    setTotalCartPrice(itemsCart.reduce((acc, elem) => acc + elem.price, 0))
  }


  return (
    // HIGH ORDER COMPONENT
    <CartContext.Provider value={{ itemsCart,totalCartPrice, cleanCart, addToCart, deleteToCart, totalCart }}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider