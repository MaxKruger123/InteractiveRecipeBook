import React from 'react';

const RecipeDropdown = ({ recipes, onSelectRecipe, searchQuery }) => {
  const filteredRecipes = searchQuery
    ? recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : recipes;

  return (
    <div>
      <select onChange={(e) => onSelectRecipe(e.target.value)}>
        <option value="">Select a recipe...</option>
        {filteredRecipes.map((recipe, index) => (
          <option key={index} value={recipe.name}>
            {recipe.name}
          </option>
        ))}
      </select>
    </div>
  );
};
  
export default RecipeDropdown;