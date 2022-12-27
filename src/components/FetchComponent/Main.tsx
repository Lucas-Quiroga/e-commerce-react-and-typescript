import React, { useState, useEffect } from 'react'
import MapComponent from './MapComponent/MapComponent'
import { CallFetch } from '../../interfaces/CallFetch'
import userEvent from '@testing-library/user-event'


// interface PropsFetch {
// 	result: CallFetch[];
// 	id: string;
// 	title:string;
// }

interface AppState {
	resultProp: Array<CallFetch>
}


const Main = ()  =>{
	const [result, setResult] = useState<AppState["resultProp"]>([])

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
		{result.map(e =>(
			<MapComponent key={e.id} />
		))}
    </>
}
// tanteando

export default Main
