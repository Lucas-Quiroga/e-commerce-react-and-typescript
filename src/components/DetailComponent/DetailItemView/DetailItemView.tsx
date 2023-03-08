import React, { useState, useEffect } from 'react'
import { CallFetch } from '../../../interfaces/CallFetch'

const DetailItemView = ({ detailObject }: { detailObject: CallFetch }) => {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])

	return (
		<>
			{loading ? (
				<h2 style={{ textAlign: 'center' }}>Loading...</h2>
			) : (
				<div
					style={{
						display: 'flex',
            justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
					key={detailObject.id}
				>
					<h2>{detailObject.title}</h2>
					<img src={detailObject.img} height='700'></img>
          <p>Price: ${detailObject.price}</p>
          <p>user id: {detailObject.userId}</p>
				</div>
			)}
		</>
	)
}

export default DetailItemView
