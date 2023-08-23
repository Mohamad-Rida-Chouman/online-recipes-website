import React, { useState } from 'react';
import '../../base.css';
import './recipeCard.css';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const RecipeCard = ({ dish }) => {
	return (
		<div className="main-card-container">
			<Link to={`Recipe/${dish.id}`} className="link-button ">
				<div className="card">
					<div
						className="card-image"
						style={{ backgroundImage: `url(${dish.image})` }}
					></div>
					<div className="card-content flex justify-center align-center">
						<h3>{dish.name}</h3>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default RecipeCard;
