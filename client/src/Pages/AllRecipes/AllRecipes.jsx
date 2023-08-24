import { useEffect, useState } from 'react';
import CardsList from '../../Components/CardsList/CardsList';
import Search from '../../Components/Search/Search';
import axios from 'axios';

const AllRecipes = () => {
	const [dishes, setDishes] = useState([]);
	useEffect(() => {
		loadRecipes();
	}, []);

	const RECIPES_URL = 'http://127.0.0.1:8000/api/recipe_with_images';
	async function loadRecipes() {
		try {
			const response = await axios.get(RECIPES_URL);
			if (response) {
				const dishes_array = response.data.map((recipe) => ({
					id: recipe.id,
					name: recipe.name,
					cuisine: recipe.cuisine,
					image: recipe.images.length > 0 ? recipe.images[0].image : null,
				}));
				setDishes(dishes_array);
			}
		} catch {
			console.log('failed to load recipes');
		}
	}
	// const handleRecipeAdded = () => {
	// 	loadRecipes();
	// };

	return (
		<div>
			<Search />
			<CardsList dishes={dishes} />
		</div>
	);
};

export default AllRecipes;
