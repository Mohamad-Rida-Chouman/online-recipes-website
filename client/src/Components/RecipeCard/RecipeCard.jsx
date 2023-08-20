import React from "react";
import '../../base.css'

const RecipeCard = () => {
    return (
        <div className="recipe-card-container flex flex-col">
            <div className="recipe-name">
                Name
            </div>
            <div className="recipe-cuisine">
                Cuisine
            </div>
            <div className="recipe-ingredients">
                Ingredients
            </div>
            <div className="recipe-image">
                Image
            </div>
        </div>
    );
}
 
export default RecipeCard;