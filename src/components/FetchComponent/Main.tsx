import { useState, useEffect } from 'react'
import MapComponent from './MapComponent/MapComponent'
import CatalogueFilter from '../CatalogueFilter/CatalogueFilter'
import "./Main.css"
import { useParams } from 'react-router-dom'

type CallFetchCategory = "male" | "female";

interface CallFetch{
	  id: number,
	  userId: number,
	  price: number,
	  title: string,
	  category: CallFetchCategory
	}

const Main = ()  =>{
	const [result, setResult] = useState<CallFetch[]>([{
		id: 0,
		userId: 0,
		price: 0,
		title: "",
		category: "female",
	}])

	const [search, setSearch] = useState<CallFetch[]>([])

	const {categoryId} = useParams();

	const URL = 'https://apimocha.com/infoapi/posts'
	

	useEffect(() => {
		fetch(URL)
		.then (response => response.json())
		.then (res => setResult(res.slice(0,5)))
}, [])	



	useEffect(() => {
		const filtrado = result.filter((elemento) => elemento.category === "male")
		setTimeout(() => {
			setSearch(filtrado);
		}, 3000);
	}, [])

	
	


	return <>
		<h1>hola soy fetch</h1>
		<div className='view'>
		<CatalogueFilter result={result}/>
		<MapComponent result={result} />
		<div>
			{search.map(e => (
				<div>
					<h1>HOLA SOY EL COMPONENTE SEARCH</h1>
				<ul>
					<li>{e.title}</li>
					<li>{e.category}</li>
				</ul>
				</div>
			))}
		</div>
		</div>
    </>
}

export default Main
