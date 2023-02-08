import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import type {CallFetchCategory} from '../../interfaces/CallFetch'

const CatalogueFilter = () => {
	const [male, setMale] = useState(false)
	const [female, setFemale] = useState(false)

	console.log(female, male)

	const handleValue = (data: CallFetchCategory) => {
		if (data === 'male') {
			setMale(!male)
		}
		if (data === 'female') {
			setFemale(!female)
		}
	}

	const handleMaleClick = () => {
		setMale(!male)
		if (female === true) {
			setFemale(!female)
		}
	}

	const handleFemaleClick = () => {
		setFemale(!female)
		if (male === true) {
			setMale(!male)
		}
	}

	return (
		<div style={{ padding: 15, minWidth: 100 }}>
			<form>
				<h3>Filtros</h3>
				<input type='checkbox' id='buzos' />
				<label htmlFor='buzos'>Buzos</label>
				<br />
				<input type='checkbox' id='calzas' />
				<label htmlFor='calzas'>Calzas</label>
				<br />
				<input type='checkbox' id='camperas' />
				<label htmlFor='camperas'>Camperas</label>
				<br />
				<input type='checkbox' id='carteras' />
				<label htmlFor='carteras'>Carteras</label>
				<br />
			</form>
			<div>
				<h3>Gender</h3>
				<NavLink
					to='/category/male'
					style={{ textDecoration: 'none', color: 'black' }}
					onClick={handleMaleClick}
				>
					<input
						value='male'
						type='checkbox'
						id='male'
						name='male'
						onChange={e => handleValue('male')}
						checked={male}
					/>{' '}
					Male
				</NavLink>{' '}
				<br />
				
				<NavLink
					to='/category/female'
					style={{ textDecoration: 'none', color: 'black' }}
					onClick={handleFemaleClick}
				>
					<input
						value='Female'
						type='checkbox'
						id='female'
						name='female'
						onChange={e => handleValue('female')}
						checked={female}
					/>{' '}
					Female
				</NavLink>
			</div>
		</div>
	)
}

export default CatalogueFilter
