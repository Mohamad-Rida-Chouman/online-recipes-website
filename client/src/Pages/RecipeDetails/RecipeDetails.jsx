import React, { useEffect, useState } from 'react';
import './recipeDetails.css';
import '../../base.css';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import CommentInput from '../../Components/CommentInput/CommentInput';
import Comment from '../../Components/Comment/Comment';
import axios from 'axios';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';

const RecipeDetails = () => {
	const [dish, setDish] = useState([]);
	const [ingredients, setIngredients] = useState([]);
	const [loadedImages, setLoadedImages] = useState([]);
	const [comments, setComments] = useState([]);
	const [liked, setLiked] = useState(false);
	const [axiosResponse, setAxiosResponse] = useState();
	const currentUrl = window.location.href;
	const recipe_id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
	const RECIPE_URL = 'http://127.0.0.1:8000/api/recipes/' + recipe_id;
	const COMMENT_URL = 'http://127.0.0.1:8000/api/comment/' + recipe_id;
	const LIKED_URL = 'http://127.0.0.1:8000/api/liked/' + recipe_id;
	const LIKE_URL = 'http://127.0.0.1:8000/api/like/' + recipe_id;
	const UNLIKE_URL = 'http://127.0.0.1:8000/api/unlike/' + recipe_id;
	const ADDTOSL_URL = 'http://127.0.0.1:8000/api/ingToSL/';
	const REMOVEFROMSL_URL = 'http://127.0.0.1:8000/api/ingFromSL/';

	const imageFiles = [];
	useEffect(() => {
		loadRecipe();
		checkIfLiked();
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

				// loadedImages = response.data[0].images.map((item) => item.image);

				const comments = response.data[0].comments.map((comment) => {
					const user = response.data[0].commenting_users.find(
						(user) => user.id === comment.user_id
					);
					return { username: user.username, text: comment.text };
				});
				setComments(comments);
			}
		} catch {
			console.log('failed to load recipe');
		}
	}
	async function checkIfLiked() {
		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};
			const response = await axios.get(LIKED_URL, config);
			if (response.data.value) {
				//it is liked previously
				setLiked(true);
				document.getElementById('switch').checked = true;
			}
		} catch {
			console.log('failed');
		}
	}
	async function onCommentSubmit(inputComment) {
		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const bodyParameters = {
				comment: inputComment,
			};

			const response = await axios.post(COMMENT_URL, bodyParameters, config);

			if (response) {
				console.log(response);
				loadRecipe();
			}
		} catch {
			console.log('failed to add comment');
		}
	}

	const url = window.location.href;
	const handleAddIngredient = (id) => {
		const addButton = document.getElementById('button' + id);
		if (addButton.innerHTML === '+') {
			addIngToSL(id);
			addButton.innerHTML = '-';
		} else {
			removeIngFromSL(id);
			addButton.innerHTML = '+';
		}
	};

	async function likeRecipe() {
		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const response = await axios.get(LIKE_URL, config);

			if (response) {
				console.log(response);
				loadRecipe();
			}
		} catch {
			console.log('failed to like');
		}
	}

	async function unlikeRecipe() {
		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const response = await axios.get(UNLIKE_URL, config);

			if (response) {
				console.log(response);
				loadRecipe();
			}
		} catch {
			console.log('failed to unlike');
		}
	}

	async function addIngToSL(id) {
		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const response = await axios.get(ADDTOSL_URL + id, config);

			if (response) {
				console.log(response);
				loadRecipe();
			}
		} catch {
			console.log('failed to add ing to shopping list');
		}
	}

	async function removeIngFromSL(id) {
		try {
			const token = localStorage.getItem('access_token');
			const config = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const response = await axios.get(REMOVEFROMSL_URL + id, config);

			if (response) {
				console.log(response);
				loadRecipe();
			}
		} catch {
			console.log('failed to remove ing from shopping list');
		}
	}

	function handleChangeLike() {
		const likeButton = document.getElementById('switch');
		if (likeButton.checked) {
			likeRecipe();
		} else {
			unlikeRecipe();
		}
	}
	return (
		<div className="main-details-container flex flex-col gap-l">
			<div className="upper-details-container flex justify-center">
				<ImageSlider />
			</div>
			<div className="lower-details-container flex justify-center align-center width-100 gap-m">
				<div className="left-details-container flex flex-col align-center gap-m">
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
				</div>
				<div className="right-details-container flex flex-col align-center justify-center">
					<div className="social-container flex gap-m">
						<div className="love">
							<input id="switch" type="checkbox" onChange={handleChangeLike} />
							<label className="love-heart" htmlFor="switch">
								<i className="left"></i>
								<i className="right"></i>
								<i className="bottom"></i>
								<div className="round"></div>
							</label>
						</div>
						<CommentInput inputChange={onCommentSubmit} />
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
			</div>
		</div>
	);
};

export default RecipeDetails;
