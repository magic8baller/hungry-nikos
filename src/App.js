import React, {useContext} from 'react';
import Banner from './components/Banner';
import RecipeList from './components/RecipeList';
import './App.css'
import {RecipeContext} from './context';
const App = () => {
	const appContext = useContext(RecipeContext)
	// const {loading, query} = appContext
	return (
		<div style={{paddingTop: '3rem'}}>
			<Banner />
			{/* {loading ? <h1>...fetching {query} Recipe</h1> : null
			} */}
			<RecipeList />
		</div>

	)
}

export default App;
