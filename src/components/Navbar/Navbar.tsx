import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { firstName, login } from '../../atoms/atoms'
import './Navbar.css'

const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(login)
	const [name, setName] = useRecoilState(firstName)

	const handleLogout = () => {
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

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
						<Link to='/inicioSesion' onClick={handleLogout}>
							{isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión' }
						</Link>
				</li>
				<li className='sections'>
					{isLoggedIn === true ? `Hola, ${name}` : ''}
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
