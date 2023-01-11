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
	  categoryId: string
	  filtrado:[]
	}

const Main = ()  =>{
	const [result, setResult] = useState<CallFetch[]>([{
		id: 0,
		userId: 0,
		price: 0,
		title: "",
		category: "",
		categoryId: "",
		filtrado: []
	}])

	const [search, setSearch] = useState<CallFetch[]>([])

	const {categoryId} = useParams();

	const URL = 'https://apimocha.com/infoapi/posts'
	

	useEffect(() => {
		fetch(URL, {
			method: 'GET',
		})

		//min 15

		.then (response => response.json())
		.then (res => setResult(res.slice(0,5)))
	
}, [])	

//retocar la idea

 const filtrado = result.filter(elemento => elemento.category === categoryId)
 
 setSearch(filtrado);
 console.log(search);

	

	return <>
		<h1>hola soy fetch</h1>
		<div className='view'>
		<CatalogueFilter result={result}/>
		<MapComponent result={result} />
		</div>
    </>
}

export default Main
