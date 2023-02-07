import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
        <nav className='navbar'>
				<ul className='ul_navbar'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/carrito'>Carrito</Link>
					</li>
					{/* <li>
						<Link to='/remeras'>Remeras</Link>
					</li> */}
					<li>
						<Link to='/category'>Categorias</Link>
					</li>
					<li>
						<Link to='/login'>Iniciar Sesión</Link>
					</li>
					{/* <li>
						<Link to="./detail">Detalle</Link>
					</li> */}
				</ul>
			</nav>
  )
}

export default Navbar