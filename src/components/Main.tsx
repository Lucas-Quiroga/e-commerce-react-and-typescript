import React, { useState, useEffect } from 'react'

type resultProps = {
	name: string
	price: number
	description: string
	available: boolean
}

const main = () => {
	const [result, setResult] = useState<resultProps[]>([])

	useEffect(() => {
		const api = async () => {
			const data = await fetch('', {
				method: 'GET',
			})
			const json = await data.json()
			setResult(json.result)
		}

		api()
	}, [])

	// https://api.unsplash.com/photos?query=t-shirt&client_id=vVXwwNev7aLRGfzmwLGuI0sEWbPkv--WXVXPEq9jy4s
	// proba con esta api a ver que onda

	return <div>main</div>
}

export default main
