import React from 'react'

interface CallFetch{
	userId: number,
	id: number,
	title: string,
	completed: boolean
  }

const ItemsComponent = ({respuesta} : {respuesta: CallFetch}) => {
  return (
    <div>
      {respuesta.title}
      {respuesta.id}
      {respuesta.userId}
    </div>
  )
}

export default ItemsComponent