import React, { useState, useEffect } from 'react'
import MapComponent from './MapComponent/MapComponent'

interface CallFetch{
	userId: number,
	id: number,
	title: string,
	completed: boolean
  }


const Main = ()  =>{
	const [result, setResult] = useState<CallFetch[]>([{
		userId: 0,
		id: 0,
		title: "",
		completed: false
	}])

	useEffect(() => {
		    fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'GET',
			})
            .then (response => response.json())
            .then (res => setResult(res))
		
	}, [])	
    
	console.log(result);
	

	return <>
		<h1>hola soy fetch</h1>
		<MapComponent result={result} />
    </>
}

export default Main
