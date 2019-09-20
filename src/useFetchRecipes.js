import {useEffect, useState} from 'react'
import {URL} from './utils';
export const useFetchRecipes = () => {

	const [data, setData] = useState({recipes: []});
	const [query, setQuery] = useState('omelet');
	const [search, setSearch] = useState();
	const [url, setUrl] = useState(`${URL}&	q=omelet`)
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				url
			);
			setData(result.data);
		};
		fetchData();
	}, [url]);
}