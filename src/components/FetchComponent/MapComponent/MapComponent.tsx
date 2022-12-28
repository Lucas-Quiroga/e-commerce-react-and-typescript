import React from 'react'

interface CallFetch{
	userId: number,
	id: number,
	title: string,
	completed: boolean
  }


const MapComponent = ({result} : {result: CallFetch[]}) => {
  return (
    <div>

		{result.map((e,i) =>(
			<div>{e.title}</div>
		))}
	</div>
  )
}

export default MapComponent