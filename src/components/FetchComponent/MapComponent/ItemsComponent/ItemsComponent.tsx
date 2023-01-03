import React from 'react'
import { ButtonComponent } from '../../../ButtonComponent/ButtonComponent'

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
      <button>
        COMPRAR {respuesta.completed}
      </button>
      <ButtonComponent />
    </div>
  )
}

export default ItemsComponent