import React, { useState } from 'react'
import Register from '../Register/Register'

interface usuarioDatos {
	nombre: string
	apellido: string
}

// type login = true | false;

// interface logear {
//   comprobarSesion(): login;
// }

const Login = () => {
	const comprobarSesion = () => {
		let sesion = localStorage.getItem('loginUsuario')
		if (sesion === `${true}`) {
			return JSON.parse(sesion) //true
		} else {
			return false
		}
	}

	const [login, setLogin] = useState(comprobarSesion())
	const [cambioDeComponente, setCambioDeComponente] = useState(false)
	const [datos, setDatos] = useState<usuarioDatos>({
		nombre: '',
		apellido: '',
	})

	const handleInputChange = (event: any) => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value,
		})
	}

	const enviarDatos = (event: any) => {
		event.preventDefault()

		if (datos.nombre.length === 0 || datos.apellido.length === 0) {
			alert('complete los datos por favor')
		} else {
			if (datos.nombre === 'admin' && datos.apellido === '123') {
				localStorage.setItem('loginUsuario', `${true}`)
				localStorage.setItem('usuario', datos.nombre)
			} else {
				setLogin(false)
				alert('error')
				setDatos({
					nombre: '',
					apellido: '',
				})
			}
		}

		console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
	}

	const registerComponent = () => {
		setCambioDeComponente(true)
	}

	return (
		<>
			{cambioDeComponente === false ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<h1>Formulario</h1>
					<form
						className='row'
						onSubmit={enviarDatos}
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 10,
						}}
					>
						<div className='col-md-3'>
							<input
								type='text'
								placeholder='Nombre'
								className='form-control'
								onChange={handleInputChange}
								name='nombre'
							></input>
						</div>
						<div className='col-md-3'>
							<input
								type='text'
								placeholder='Apellido'
								className='form-control'
								onChange={handleInputChange}
								name='apellido'
							></input>
						</div>
						<button
							type='submit'
							className='btn btn-primary'
							style={{ width: '100%' }}
						>
							Enviar
						</button>
						<button
							onClick={registerComponent}
							style={{ width: '100%' }}
						>
							Registrar
						</button>
					</form>
				</div>
			) : (
				<Register />
			)}
		</>
	)
}

export default Login
