import React from 'react'
import { Link } from 'react-router-dom'

function Remeras() {
	return (
		<div>
			<h1 style={{display: 'flex', justifyContent: 'center'}}>Remeras</h1>
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
				<Link to='remeras/1'>Remera 1</Link>
				<br />
				<Link to='remeras/2'>Remera 2</Link>
				<br />
				<Link to='remeras/new'>Nueva Remera</Link>
			</div>
		</div>
	)
}

export default Remeras
