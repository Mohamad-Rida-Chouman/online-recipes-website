import React, { useEffect, useState } from 'react';
import './recipeDetails.css';
import '../../base.css';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import CommentInput from '../../Components/CommentInput/CommentInput';
import Comment from '../../Components/Comment/Comment';
import axios from 'axios';

const RecipeDetails = () => {
	const [dish, setDish] = useState([]);
	const [ingredients, setIngredients] = useState([]);
	const [images, setImages] = useState([]);
	const [comments, setComments] = useState([]);
	const currentUrl = window.location.href;
	const recipe_id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
	const RECIPE_URL = 'http://127.0.0.1:8000/api/recipes/' + recipe_id;
	useEffect(() => {
		loadRecipe();
	}, []);

	async function loadRecipe() {
		try {
			const response = await axios.get(RECIPE_URL);
			if (response) {
				const recipe = {
					id: response.data[0].id,
					name: response.data[0].name,
					cuisine: response.data[0].cuisine,
				};
				setDish(recipe);
				setIngredients(response.data[0].recipe_ingredient);
				setImages(response.data[0].images);
				const comments = response.data[0].comments.map((comment) => {
					const user = response.data[0].commenting_users.find(
						(user) => user.id === comment.user_id
					);
					return { username: user.username, text: comment.text };
				});
				setComments(comments);
			}
		} catch {
			console.log('failed to load recipes');
		}
	}

	// const comments = [
	// 	{
	// 		username: 'user1',
	// 		text:
	// 			'comment 1 hihihihiihihihihihihihihi comment 1 hihihihiihihihihihihihihi comment 1 hihihihiihihihihihihihihi comment 1 hihihihiihihihihihihihihi ',
	// 	},
	// 	{ username: 'user2', text: 'comment 2' },
	// 	{ username: 'user3', text: 'comment 3' },
	// 	{ username: 'user4', text: 'comment 4' },
	// 	{ username: 'user5', text: 'comment 5' },
	// ];

	const url = window.location.href;
	const handleAddIngredient = (id) => {
		const addButton = document.getElementById('button' + id);
		if (addButton.innerHTML === '+') {
			addButton.innerHTML = '-';
		} else {
			addButton.innerHTML = '+';
		}
	};
	return (
		<div className="sidebar-content-container flex flex-col justify-center align-center width-100 gap-s">
			<h2 className="no-margin">{dish.name}</h2>
			<h3 className="no-margin">{dish.cuisine}</h3>
			<h4 className="flex justify-center align-center no-margin">
				Ingredients:
			</h4>
			<div className="ingredients-list flex flex-col width-40 gap-s">
				{ingredients.map((ingredient) => (
					<label
						key={ingredient.id}
						className="ingredient-label flex justify-between"
					>
						<span>{ingredient.name}</span>
						<button
							className="add-button"
							type="submit"
							name="ingredient"
							value={ingredient.id}
							id={'button' + ingredient.id}
							onClick={() => handleAddIngredient(ingredient.id)}
						>
							+
						</button>
					</label>
				))}
			</div>
			<div className="social-container flex gap-m">
				<div className="love">
					<input id="switch" type="checkbox" />
					<label className="love-heart" htmlFor="switch">
						<i className="left"></i>
						<i className="right"></i>
						<i className="bottom"></i>
						<div className="round"></div>
					</label>
				</div>
				<CommentInput />
				<SocialMedia url={url} />
			</div>
			<div className="comments-list-continer width-80 flex flex-col align-center">
				<h4>Comments:</h4>
				<div className="comment-list flex flex-col width-80 gap-s">
					{comments.map((comment) => (
						<Comment name={comment.username} comment={comment.text} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
