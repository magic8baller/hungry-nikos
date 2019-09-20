import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails';
import {API_KEY} from '../utils'
const RecipeCard = ({recipe}) => {
	const {image_url, publisher, title, recipe_id, source_url} = recipe;
	const [showInfo, setShowInfo] = useState(false);
	const [recipeDetails, setRecipeDetails] = useState([]);
	const {ingredients, social_rank} = recipeDetails;

	const handleShowInfo = async (e) => {
		try {

			const {id} = e.target.dataset
			const apiResponse = await fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`)
			const {recipe} = await apiResponse.json()
			setRecipeDetails(recipe)
			setShowInfo(!showInfo)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>

			<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
				<div className="card">
					<img src={image_url} alt="recipe" className="img-card-top" style={{height: '12rem'}} />
					<div className="card-body text-capitalize">
						<h6>{title}</h6>
						<h6 className="text-warning"></h6>Get recipe: <a href={source_url}>{publisher}</a>
					</div>
					<div className="card-footer">
						<button key={recipe_id} aria-label='recipe details' style={{margin: '13px'}} className="btn btn-primary text-center" data-id={recipe_id} onClick={handleShowInfo}>Ingredients</button>

						<RecipeDetails key={recipe_id} ingredients={ingredients} social_rank={social_rank} showInfo={showInfo} />
					</div>
				</div>
			</div>
		</>
	)
}

export default RecipeCard
