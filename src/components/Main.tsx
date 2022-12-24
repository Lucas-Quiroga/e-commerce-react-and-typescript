import React, { useState, useEffect } from 'react'

// type resultProps = {
// 	name: string
// 	price: number
// 	description: string
// 	available?: boolean
//     id: string | number
// }

const Main = ()  =>{
	const [result, setResult] = useState([])

	useEffect(() => {
		    fetch('https://jsonplaceholdertodos.typicode.com/https://api.unsplash.com/photos?query=t-shirt&client_id=vVXwwNev7aLRGfzmwLGuI0sEWbPkv--WXVXPEq9jy4s', {
				method: 'GET',
			})
            .then (response => response.json())
            .then (res => setResult(res))
		
	}, [])	

    console.log(result);
    
	return <div>
{result.map( e=> (
    <p>{e.id}</p>
) )
    </div>
}

export default Main
