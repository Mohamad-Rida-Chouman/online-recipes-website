import React from "react";
import '../../base.css'
import './recipeCard.css'

const RecipeCard = ({ dish }) => {
    return (
        <div className="card">
          <div className="card-image" style={{ backgroundImage: `url(${dish.image})` }}></div>
          <div className="card-content">
            <h3>{dish.name}</h3>
            <p>{dish.cuisine}</p>
            <div className="ingredients">Ingredients: {dish.ingredients}</div>
          </div>
        </div>
      );
}
 
export default RecipeCard;