import React from 'react'
import { ButtonComponent } from '../../../ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'
import { useContext } from 'react'


interface CallFetch{
  id: number,
	userId: number,
  price: number,
	title: string,
	category: string
  }

const ItemsComponent = ({respuesta} : {respuesta: CallFetch}) => {




  return (
    <div>
      <h1>TITULO: {respuesta.title}</h1>
      <p>ID: {respuesta.id}</p>
      <span>USER ID: {respuesta.userId}</span>
      <br />
      <span>PRICE: {respuesta.price}</span>
      <br />
      <span>CATEGORY: {respuesta.category}</span>
      <hr />
      <Link to={'/carrito'}>
      <button>
        COMPRAR
      </button>
      </Link>
      
      <ButtonComponent />
      <Link to={`/detail/${respuesta.id}`}>
        <button>Ver detalle</button>
        </Link>
        <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemsComponent