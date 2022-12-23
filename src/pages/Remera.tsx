import React from 'react'
import { useParams } from 'react-router-dom'

function Remera() {
	const { id } = useParams()
	return (
		<h1 style={{ display: 'flex', justifyContent: 'center' }}>
			Remera {id}
		</h1>
	)
}

export default Remera