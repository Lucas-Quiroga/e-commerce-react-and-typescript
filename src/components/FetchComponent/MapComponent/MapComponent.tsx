import React from 'react'
import ItemsComponent from './ItemsComponent/ItemsComponent'

interface CallFetch{
	userId: number,
	id: number,
	title: string,
	completed: boolean
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