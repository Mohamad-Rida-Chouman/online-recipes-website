import React, { useState } from 'react';
import '../../base.css';
import './addRecipePopup.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import InputImage from '../InputImage/InputImage';

const AddRecipePopup = (props) => {
	const [name, setName] = useState('');
	const [cuisine, setCuisine] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [image, setImage] = useState('');

	function handleAddRecipe(e) {
		e.preventDefault();
		console.log('Recipe Added Successfully!');
		props.closePopup();
	}

	return (
		<div className="popup">
			<div className="popup_inner flex flex-col justify-center align-center gap-m">
				<h2>Create a Recipe!</h2>
				<div className="input-container flex flex-col gap-m align-center">
					<Input onChange={(e) => setName(e.target.value)} value={name}>
						Name:
					</Input>
					<Input onChange={(e) => setCuisine(e.target.value)} value={cuisine}>
						Cuisine:
					</Input>
                    <Input onChange={(e) => setIngredients(e.target.value)} value={ingredients}>
						Ingredients (eg.: tomato, potato...):
					</Input>
                    <InputImage onChange={(e) => setImage(e.target.value)} value={image}/>
				</div>
				<Button onClick={handleAddRecipe}>Create Recipe</Button>
			</div>
		</div>
	);
};

export default AddRecipePopup;
