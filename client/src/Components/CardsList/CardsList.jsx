import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

function CardsList({ dishes }) {
  return (
    <div className="card-list flex gap-l wrap">
      {dishes.map((dish, index) => (
        <RecipeCard key={index} dish={dish} />
      ))}
    </div>
  );
}

export default CardsList;