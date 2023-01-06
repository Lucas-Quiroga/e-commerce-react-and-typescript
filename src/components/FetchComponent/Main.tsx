import React, { useState, useEffect } from 'react'
import MapComponent from './MapComponent/MapComponent'
import CatalogueFilter from '../CatalogueFilter/CatalogueFilter'
import "./Main.css"
import { useParams } from 'react-router-dom'

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

	const {categoryId} = useParams();

	useEffect(() => {
		    fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'GET',
			})

			//min 15

            .then (response => response.json())
            .then (res => setResult(res.slice(0,5)))
		
	}, [])	
    
	console.log(result);
	

	return <>
		<h1>hola soy fetch</h1>
		<div className='view'>
		<CatalogueFilter />
		<MapComponent result={result} />
		</div>
    </>
}

export default Main
