import React from 'react'

const RecipeDetails = ({ingredients, showInfo, social_rank}) => {
	return (
		<>
			{showInfo &&
				<button type='button' aria-label='social rank' className='btn btn-success text-center font-weight-bold'>{social_rank}</button>
			}
			{showInfo ?
				ingredients.map((ing, index) => {
					return <ul key={index} className='list-group'>
						<li className='list-group-item'>{ing}</li>
					</ul>
				})
				: null}
		</>
	)
}

export default RecipeDetails
