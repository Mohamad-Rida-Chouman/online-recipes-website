import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import './sidebar.css';
import '../../base.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import CommentInput from '../CommentInput/CommentInput';
import Comment from '../Comment/Comment';

const Sidebar = ({ close, name, cuisine, url }) => {
	const ingredients = [
		{ name: 'potato', id: 1 },
		{ name: 'tomato', id: 2 },
		{ name: 'oregano', id: 3 },
		{ name: 'spinach', id: 4 },
		{ name: 'oat', id: 5 },
	];

    const comments = [
		{ username: 'user1', text: "comment 1 hihihihiihihihihihihihihi comment 1 hihihihiihihihihihihihihi comment 1 hihihihiihihihihihihihihi comment 1 hihihihiihihihihihihihihi " },
		{ username: 'user2', text: "comment 2" },
		{ username: 'user3', text: "comment 3" },
		{ username: 'user4', text: "comment 4" },
		{ username: 'user5', text: "comment 5" },
	];

	const handleAddIngredient = (id) => {
		const addButton = document.getElementById('button' + id);
		if (addButton.innerHTML === '+') {
			addButton.innerHTML = '-';
		} else {
			addButton.innerHTML = '+';
		}
	};

	return (
		<aside className="sidebar flex flex-col justigy-center align-center">
			<div className="close-div" onClick={() => close()}>
				<IoMdCloseCircle color="#fff" size={50} />
			</div>
			<div className="sidebar-content-container flex flex-col justify-center align-center width-100 gap-s">
				<h2 className="no-margin">{name}</h2>
				<h3 className="no-margin">{cuisine}</h3>
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
						<Comment name={comment.username} comment={comment.text}/>
					))}
				</div>
                </div>
			</div>
		</aside>
	);
};

export default Sidebar;
