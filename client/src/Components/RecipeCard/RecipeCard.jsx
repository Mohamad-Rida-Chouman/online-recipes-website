import React, { useState } from 'react';
import '../../base.css';
import './recipeCard.css';
import Sidebar from '../Sidebar/Sidebar';

const RecipeCard = ({ dish }) => {
	const [toggle, setToggle] = useState(false);

	const openSidebar = () => {
		setToggle((pre) => !pre);
	};

	if (toggle) {
		return (
			<div className="main-card-container">
				<div className="card" onClick={openSidebar}>
					<div
						className="card-image"
						style={{ backgroundImage: `url(${dish.image})` }}
					></div>
					<div className="card-content">
						<h3>{dish.name}</h3>
					</div>
				</div>
				<Sidebar url={String(window.location)} name={dish.name} cuisine={dish.cuisine} close={() => setToggle(false)} />
			</div>
		);
	} else {
		return (
			<div className="card" onClick={openSidebar}>
				<div
					className="card-image"
					style={{ backgroundImage: `url(${dish.image})` }}
				></div>
				<div className="card-content">
					<h3>{dish.name}</h3>
				</div>
			</div>
		);
	}
};

export default RecipeCard;
