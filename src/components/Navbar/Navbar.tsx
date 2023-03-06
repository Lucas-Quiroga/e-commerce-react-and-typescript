import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { firstName } from '../../atoms/firstName'
import './Navbar.css'

const Navbar = () => {
	const [name, setName] = useRecoilState(firstName)

	return (
		<nav className='navbar'>
			<ul className='ul_navbar'>
				<li className='sections'>
					<Link to='/'>Home</Link>
				</li>
				<li className='sections'>
					<Link to='/carrito'>Carrito</Link>
				</li>
				<li className='sections'>
					<Link to='/category'>Categorias</Link>
				</li>
				<li className='sections'>
					<Link to='/login'>
						{name != ''
							? `Hola, ${name}`
							: 'Iniciar Sesion'}
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
