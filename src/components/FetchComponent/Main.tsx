import React, { useState, useEffect } from 'react'
import MapComponent from './MapComponent/MapComponent'
import { CallFetch } from '../../interfaces/CallFetch'


interface PropsFetch {
	arrayCall: CallFetch
}


const Main = ()  =>{
	const [result, setResult] = useState<CallFetch[]>([])

	useEffect(() => {
		    fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'GET',
			})
            .then (response => response.json())
            .then (res => setResult(res))
		
	}, [])	
    
	return <>
	<h1>hola soy fetch</h1>
	{result.map (pro => {
		return(
			<div key={pro.id}>
				<p>{pro.id}</p>
				<h2>{pro.title}</h2>
			</div>
		)
	})}
	
    </>
}

export default Main
