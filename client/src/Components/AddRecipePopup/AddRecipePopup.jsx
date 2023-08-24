import React, { useState } from 'react';
import '../../base.css';
import './addRecipePopup.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import InputImage from '../InputImage/InputImage';
import axios from 'axios';

const AddRecipePopup = (props) => {
	const [name, setName] = useState('');
	const [cuisine, setCuisine] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [images, setImages] = useState('');

	const user_authentication = localStorage.getItem('access_token');

	async function handleAddRecipe(e) {
		e.preventDefault();

		try {
			const recipe_response = await addRecipe(name, cuisine);
			const recipe_id = recipe_response.data.id;
			console.log(ingredients);
			const ingredients_response = await addIngredients(ingredients, recipe_id);
			console.log(ingredients_response);
			for (const image of images) {
				const images_response = await addImages(image, recipe_id);
				console.log(images_response);
			}

			props.closePopup();
		} catch (error) {
			console.error('Error adding ingredients:', error);
			document.getElementById('register-failed').style.display = 'block';
		}
	}

	const RECIPE_URL = 'http://127.0.0.1:8000/api/recipes';
	const addRecipe = async (recipeName, cuisineName) => {
		const response = await axios.post(RECIPE_URL, {
			name: recipeName,
			cuisine: cuisineName,
		});
		return response;
	};

	const addIngredients = async (ingredientsNames, recipe_id) => {
		const INGREDIENT_URL = RECIPE_URL + '/' + recipe_id + '/ingredients';
		const response = await axios.post(INGREDIENT_URL, {
			ingredients: ingredientsNames,
		});
		return response;
	};

	const addImages = async (image, recipe_id) => {
		const RECIPE_IMAGE_URL = RECIPE_URL + '/' + recipe_id + '/images';
		console.log(image.length);
		const response = await axios.post(RECIPE_IMAGE_URL, { image: image });
		return response;
	};

	function hidePopup() {
		console.log('blocker clicked');
		props.closePopup();
	}

	return (
		<div className="popup">
			<div className="blocker" onClick={hidePopup}></div>
			{user_authentication ? (
				<div className="popup_inner flex flex-col justify-center align-center gap-m">
					<h2>Create a Recipe!</h2>
					<div className="input-container flex flex-col gap-m align-center">
						<Input onChange={(e) => setName(e.target.value)} value={name}>
							Name:
						</Input>
						<Input onChange={(e) => setCuisine(e.target.value)} value={cuisine}>
							Cuisine:
						</Input>
						<Input onChange={(e) => setIngredients(e.target.value)}>
							Ingredients (eg.: tomato, potato...):
						</Input>
						<InputImage
							onChange={(e) => setImages(e.target.value)}
							value={images}
							setImages={setImages}
						/>
					</div>
					<div id="register-failed" className="register-failed">
						Please Enter Correct Values
					</div>
					<Button onClick={handleAddRecipe}>Create Recipe</Button>
				</div>
			) : (
				<div className="popup_inner flex flex-col justify-center align-center gap-m">
					<h2>Please Login Before Posting A New Recipe</h2>
				</div>
			)}
		</div>
	);
};

export default AddRecipePopup;
