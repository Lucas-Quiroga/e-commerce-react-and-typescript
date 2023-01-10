import React, { useState, useEffect } from 'react'
import MapComponent from './MapComponent/MapComponent'
import CatalogueFilter from '../CatalogueFilter/CatalogueFilter'
import "./Main.css"
import { useParams } from 'react-router-dom'

interface CallFetch{
	id: number,
	  userId: number,
	price: number,
	  title: string,
	  category: string
	}

const Main = ()  =>{
	const [result, setResult] = useState<CallFetch[]>([{
		id: 0,
		userId: 0,
		price: 0,
		title: "",
		category: ""
	}])

	const {categoryId} = useParams();

	useEffect(() => {
		fetch('https://apimocha.com/infoapi/posts', {
			method: 'GET',
		})

		//min 15

		.then (response => response.json())
		.then (res => setResult(res.slice(0,5)))
	
}, [])	

	// const getFetch = fetch('https://apimocha.com/infoapi/posts', {
	// 		method: 'GET',
	// 	})

	// 	useEffect(()=>{
	// 		if(categoryId){
	// 			getFetch.then(response => response.json())
	// 			.then(resolve=>setResult())
	// 		} 
	// 	},[])

	
    
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
