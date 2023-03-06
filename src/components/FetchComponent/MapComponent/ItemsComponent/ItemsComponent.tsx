import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, TodoContextType } from '../../../../context/CartContext'
import { CallFetch } from '../../../../interfaces/CallFetch'

const ItemsComponent = ({ respuesta }: { respuesta: CallFetch }) => {
	const { addToCart, deleteToCart, cleanCart } = useContext(
		CartContext
	) as TodoContextType

	const addItem = (item: CallFetch) => {
		addToCart({ ...item, id: Math.random() })
	}

	return (
		<div>
			<h3>{respuesta.title}</h3>
			<p>ID: {respuesta.id}</p>
			<span>USER ID: {respuesta.userId}</span>
			<br />
			<span>PRICE: {respuesta.price}</span>
			<br />
			<span>CATEGORY: {respuesta.category}</span>
			<hr />
			<Link to={'/carrito'}>
				<button>Ver carrito</button>
			</Link>

			{/* <ButtonComponent /> */}
			<Link to={`/detail/${respuesta.id}`}>
				<button>Ver detalle</button>
			</Link>
			<br/>
			<button onClick={() => addItem(respuesta)}>
				Agregar al carrito
			</button>
		</div>
	)
}

export default ItemsComponent
