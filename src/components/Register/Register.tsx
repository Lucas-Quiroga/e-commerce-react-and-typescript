import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { firstName } from '../../atoms/atoms'
import Login from '../Login/Login'

interface User {
	name: string
	email: string
	password: string
}

const Register = () => {
	const [user, setUser] = useState<User>({
		name: '',
		email: '',
		password: '',
	})
	const [showLogin, setShowLogin] = useState<boolean>(false)
	const [name, setName] = useRecoilState(firstName)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [event.target.name]: event.target.value })
	}

	const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		localStorage.setItem(user.email, JSON.stringify(user))
		alert('User registered')
		setUser({ name: '', email: '', password: '' })
    setName(user.name)
    console.log(user)
	}

	return (
		<>
			{showLogin ? (
				<Login />
			) : (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<h2>Register</h2>
					<form
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 5,
							marginBottom: 20,
						}}
						onSubmit={handleRegister}
					>
						<label>
							Name:
							<br />
							<input
								type='text'
								name='name'
								style={{ width: '100%' }}
								value={user.name}
								onChange={handleInputChange}
								required
							/>
						</label>
						<br />
						<label>
							Email:
							<br />
							<input
								type='email'
								name='email'
								style={{ width: '100%' }}
								value={user.email}
								onChange={handleInputChange}
								required
							/>
						</label>
						<br />
						<label>
							Password:
							<br />
							<input
								type='password'
								name='password'
								style={{ width: '100%' }}
								value={user.password}
								onChange={handleInputChange}
								required
							/>
						</label>
						<br />
						<button type='submit'>Register</button>
					</form>
					<button onClick={() => setShowLogin(!false)}>Login</button>
				</div>
			)}
		</>
	)
}

export default Register
