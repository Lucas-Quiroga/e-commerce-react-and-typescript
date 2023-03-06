import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { firstName } from '../../atoms/firstName'
import Login from '../Login/Login'

const Register = () => {
	const getRegister = () => {
		let datos = localStorage.getItem('register')
		if (datos) {
			return JSON.parse(datos)
		} else {
			return []
		}
	}

	const [register, setRegister] = useState(getRegister())
	const [nameUser, setNameUser] = useRecoilState(firstName)
	const [passwordUser, setPasswordUser] = useState('')
	const [cambioDeComponente, setCambioDeComponente] = useState(false)

	const enviarDatos = (e: any) => {
		e.preventDefault()

		let user = {
			nameUser,
			passwordUser,
		}

		setRegister([...register, user])
		setCambioDeComponente(true)
	}

	//cuando haya cambios en los registros los guarda en el localStorage (pero no es permanente)
	useEffect(() => {
		localStorage.setItem('register', JSON.stringify(register))
	}, [register])

	console.log(register)

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{cambioDeComponente === false ? (
				<div>
					<h1 style={{textAlign: 'center'}}>Por favor registrate</h1>
					<form
						onSubmit={enviarDatos}
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 15,
						}}
					>
						<div>
							<label>Enter your username: </label>
							<input
								id='text'
								type='text'
								name='text'
								onChange={e => setNameUser(e.target.value)}
								required
							/>
						</div>
						<div>
							<label>Enter your password: </label>
							<input
								type='password'
								name='password'
								onChange={e => setPasswordUser(e.target.value)}
								required
							/>
						</div>

						<button style={{ width: '100%' }}>Guardar datos</button>
					</form>
				</div>
			) : (
				<Login />
			)}
		</div>
	)
}

export default Register
