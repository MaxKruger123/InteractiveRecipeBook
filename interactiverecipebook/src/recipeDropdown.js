import React from 'react';

//filters the list of recipes based on a search query that is entered by the user.
const RecipeDropdown = ({ recipes, onSelectRecipe, searchQuery }) => {
  const filteredRecipes = searchQuery
    ? recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : recipes;

    //returns the JSX of the recipe dropdown allowing users to select an individual recipe to display.
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