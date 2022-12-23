import { Route, Routes, Link } from 'react-router-dom'
import Carrito from './pages/Carrito'
import NuevaRemera from './pages/NuevaRemera'
import Remera from './pages/Remera'
import Remeras from './pages/Remeras'

function App() {
	return (
		<>
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
				</ul>
			</nav>
			<Routes>
				<Route
					path='/'
					element={
						<h1
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							Eccomerce website
						</h1>
					}
				/>
				<Route path='/carrito' element={<Carrito />} />
				<Route path='/remeras' element={<Remeras />} />
				<Route path='/remeras/:id' element={<Remera />} />
				<Route path='/remeras/new' element={<NuevaRemera />} />
			</Routes>
		</>
	)
}

export default App
