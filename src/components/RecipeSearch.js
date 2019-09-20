import React, {useContext} from 'react';
import {RecipeContext} from '../context';
const RecipeSearch = () => {
	const appContext = useContext(RecipeContext);
	const {handleSubmit, handleSearchChange} = appContext;

	return (
		<div className='container d-flex justify-content-center'>

			<form onSubmit={e => handleSubmit(e)} className="form-inline">
				<label htmlFor='search'></label>

				<input data-age='Love' onChange={e => handleSearchChange(e)} type='text' className="form-control" id='search' placeholder='example: fried eggs' name='search' />
				<br/>
				<button type='submit' className="btn btn-primary">GIMME FOOD</button>
			</form>
		</div>
	)
}

export default RecipeSearch
