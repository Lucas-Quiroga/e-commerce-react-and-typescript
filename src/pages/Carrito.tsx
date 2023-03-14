import React from 'react'
import { CartContext } from '../context/CartContext'
import { TodoContextType } from '../context/CartContext'
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'

type useStatential = {
	totalCart: () => void
}

function Carrito() {
	const { itemsCart } = React.useContext(CartContext) as TodoContextType

	const [total, setTotal] = React.useState<useStatential>()

	if (itemsCart.length === 0) {
		return <h2 style={{ textAlign: 'center' }}>No hay elementos</h2>
	}

	let totalPrice = itemsCart.reduce((acc, elem) => acc + elem.price, 0)

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				{itemsCart.map(({id, title, img, stock, price}) => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							borderBottom: '3px solid black',
							marginBottom: 5,
							padding: 5,
						}}
					>
						<h3>{title}</h3>
						<img
							src={img}
							alt='item'
							style={{ height: 200, width: 200 }}
						/>
						<p style={{ margin: 0 }}>Price: ${price}</p>
						<p>Stock: {stock}</p>

						<ButtonComponent id={id} totalPrice={totalPrice} />
					</div>
				))}
				
			</div>
      <div
					style={{
						display: 'flex',
						justifyContent: 'center',
            flexDirection: 'column',
						alignItems: 'center',
						gap: 5,
					}}
				>
					<h2 style={{ color: 'black', textAlign: 'center' }}>
						Total a pagar: ${Math.floor(totalPrice)}
					</h2>
					<Link to='/category'>
						<button>Volver</button>
					</Link>
				</div>
		</div>
	)
}

export default Carrito
