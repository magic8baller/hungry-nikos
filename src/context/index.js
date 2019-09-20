import React, {useEffect, useState} from 'react';
import {DEFAULT_URL, URL} from '../utils';
const RecipeContext = React.createContext()
const RecipeProvider = (props) => {

	const [recipes, setRecipes] = useState([]);
	const [showHomeButton, setShowHomeButton] = useState(false);
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(true)

	const fetchRecipe = async () => {
		try {
			const recipeData = await fetch(DEFAULT_URL);
			const {recipes} = await recipeData.json()
			setRecipes(recipes)
			setLoading(false)
			console.log(recipes)
		}
		catch (err) {
			if (err) {
				console.log(err.message, 'update api key')
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			const searchUrl = `${URL}&q=${query}`
			const searchRecipeData = await fetch(searchUrl)
			const {recipes} = await searchRecipeData.json()
			setRecipes(recipes)
			setLoading(false)
			setShowHomeButton(true)
		} catch (e) {
			console.log(e)
		}
	}

	const handleSearchChange = e => {
		setQuery(e.target.value)
	}

	const handleReturnHome = () => {
		fetchRecipe()
		setShowHomeButton(false)
	}

	useEffect(() => {
		fetchRecipe()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps


	return (
		<RecipeContext.Provider value={{
			loading,
			query,
			recipes,
			handleSearchChange,
			handleSubmit,
			handleReturnHome,
			showHomeButton
		}}>
			{props.children}
		</RecipeContext.Provider>
	)
}

const RecipeConsumer = RecipeContext.Consumer;

export {RecipeProvider, RecipeConsumer, RecipeContext};
