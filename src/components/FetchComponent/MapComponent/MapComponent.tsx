import React from 'react'
import ItemsComponent from './ItemsComponent/ItemsComponent'

interface CallFetch{
	  id: number,
	  userId: number,
	  price: number,
	  title: string,
	  category: string
	}


const MapComponent = ({result} : {result: CallFetch[]}) => {
  return (
    <>
	<div className="map">
		{result.map(resp =>(
			<ItemsComponent key={resp.id} respuesta={resp}/>
		))}</div>
		
	</>
  )
}

export default MapComponent