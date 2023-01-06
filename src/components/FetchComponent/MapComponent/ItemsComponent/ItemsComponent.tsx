import React from 'react'
import { ButtonComponent } from '../../../ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'

interface CallFetch{
	userId: number,
	id: number,
	title: string,
	completed: boolean
  }

const ItemsComponent = ({respuesta} : {respuesta: CallFetch}) => {
  return (
    <div>
      <h1>TITULO: {respuesta.title}</h1>
      <p>ID: {respuesta.id}</p>
      <span>USER ID: {respuesta.userId}</span>
      <hr />
      <Link to={'/carrito'}>
      <button>
        COMPRAR {respuesta.completed}
      </button>
      </Link>
      
      <ButtonComponent />
      <Link to={`/detail/${respuesta.id}`}>
        <button>Ver detalle</button>
        </Link>
    </div>
  )
}

export default ItemsComponent