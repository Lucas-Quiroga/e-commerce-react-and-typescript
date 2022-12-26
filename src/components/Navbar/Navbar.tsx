import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/carrito'>Carrito</Link>
					</li>
					<li>
						<Link to='/remeras'>Remeras</Link>
					</li>
					<li>
						<Link to='/fetch'>Fetch</Link>
					</li>
				</ul>
			</nav>
  )
}

export default Navbar