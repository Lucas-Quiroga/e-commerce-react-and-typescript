import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const INTIAL_STATE = {
	checked: true,
}

type valueReferences = 'male' | 'female'

interface CallFetch {
	id: number
	userId: number
	price: number
	title: string
	category: string
}

const CatalogueFilter = () => {
	const [male, setMale] = useState(INTIAL_STATE['checked'])
	const [female, setFemale] = useState(INTIAL_STATE['checked'])

	const { categoryId } = useParams()

	const handleValue = (data: valueReferences) => {
		if (data === 'male') {
			if (male === true) {
				console.log(data, 'our value')
			}
			setMale(!male)
			console.log({ female })
		}
		if (data === 'female') {
			if (female === true) {
				console.log(data, 'our value')
				setMale(!male)
				console.log(male)
			}
			setFemale(!female)
			console.log({ male })
		}
	}

	return (
		<div style={{padding: 15, minWidth: 100}}>
			<form>
				<h3>Filtros</h3>
				<input type='checkbox' id='buzos' />
        <label htmlFor='buzos'>Buzos</label><br/>
				<input type='checkbox' id='calzas' /> 
        <label htmlFor='calzas'>Calzas</label><br/>
				<input type='checkbox' id='camperas' /> 
        <label htmlFor='camperas'>Camperas</label><br/>
				<input type='checkbox' id='carteras' /> 
        <label htmlFor='carteras'>Carteras</label><br/>
			</form>
			<div className='Genero'>
				<h3>Gender</h3>
				<NavLink to='/category/male' style={{textDecoration: 'none', color: 'black'}}>
					<input
						value='male'
						type='checkbox'
						id='male'
						name='male'
						onChange={e => handleValue('male')}
					/>{' '}
					Male
				</NavLink> <br/>
				{/* los values tendrian que ir sin las comillas */}
				<NavLink to='/category/female' style={{textDecoration: 'none', color: 'black'}}>
					<input
						value='Female'
						type='checkbox'
						id='female'
						name='female'
						onChange={e => handleValue('female')}
					/>{' '}
					Female
				</NavLink>
			</div>
		</div>
	)
}

export default CatalogueFilter
