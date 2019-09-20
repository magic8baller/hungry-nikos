import React, {useContext} from 'react';
import {RecipeContext} from '../context';
const RecipeSearch = () => {
	const appContext = useContext(RecipeContext);
	const {handleSubmit, handleSearchChange} = appContext;

	return (
		<div className='container d-flex justify-content-center my-3'>
			
			<form onSubmit={e => handleSubmit(e)} className="form-inline">
				<label htmlFor='search'>Search:</label>
				<input data-age='Love' onChange={e => handleSearchChange(e)} type='text' className="form-control" id='search' placeholder='fried eggs' name='search' />
				<button type='submit' className="btn btn-primary"><i className="fa fa-search"></i></button>
			</form>
		</div>
	)
}

export default RecipeSearch
