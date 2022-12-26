import { Route, Routes } from 'react-router-dom'
import Carrito from './pages/Carrito'
import NuevaRemera from './pages/NuevaRemera'
import Remera from './pages/Remera'
import Remeras from './pages/Remeras'
import Navbar from './components/Navbar/Navbar'
import Main from './components/FetchComponent/Main'

function App() {
	return (
		<>
			<Navbar />
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
				<Route path='/fetch' element={<Main />} />
			</Routes>

		</>
	)
}

export default App
