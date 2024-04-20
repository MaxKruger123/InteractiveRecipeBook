import React from 'react';

const Recipe = ({ recipe, onToggleFavorite }) => {
  const { name, ingredients, cookTime, dietaryRestrictions, favorite } = recipe;

  const handleFavoriteChange = () => {
    onToggleFavorite(name);
  };

  return (
    <div className="recipe" style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <h2>{name}</h2>
      <p>Cook Time: {cookTime}</p>
      <p>Dietary Restrictions: {dietaryRestrictions}</p>
      <p>Ingredients:</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <label>
        <input
          type="checkbox"
          checked={favorite}
          onChange={handleFavoriteChange}
        />
        Favorite
      </label>
    </div>
  );
};

export default Recipe;