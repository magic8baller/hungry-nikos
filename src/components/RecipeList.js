import React, {useContext} from 'react';
import {RecipeContext} from '../context';
import RecipeCard from './RecipeCard';
import RecipeSearch from './RecipeSearch';
const RecipeList = () => {
	const appContext = useContext(RecipeContext)
	const {recipes, handleReturnHome, showHomeButton} = appContext
	return (
		<><h2 className='text-center'><em>what should i eat today?</em></h2>
			<RecipeSearch />
			<div className="container my-3 home-button">
				{showHomeButton && <button type='button' className='btn btn-warning' onClick={() => handleReturnHome()}>Return Home</button>}
				<div className="d-flex d-flex justify-content-center mb-2">
					<div className="col-10-mx-auto col-md-6 text-center text-uppercase mb-3">
						<h1 className="text-slaned text-center">Recipe List</h1>
					</div>
				</div>
				<div className="row recipe-list">
					{recipes.map(recipe => {return <RecipeCard key={recipe.recipe_id} recipe={recipe} />})}
				</div>
			</div>
		</>
	)
}
export default RecipeList