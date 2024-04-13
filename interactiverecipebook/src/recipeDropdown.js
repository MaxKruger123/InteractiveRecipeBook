import React from 'react';

/*This functional component allows for the user to click on an drop down list which 
displays the individual recipes that the user can then click on. If the user clicks
on a recipe then the recipe will be displayed in its fullest.*/ 

const RecipeDropdown = ({ recipes, onSelectRecipe }) => { 
    return (
        
      <select onChange={(e) => onSelectRecipe(e.target.value)}> 
        {/* if there is no recipe selected then "Select Recipe" will be displayed*/}
        <option value="">Select a recipe</option>
        {/* maps out each recipe and assigns an index to each one */}
        {recipes.map((recipe, index) => (
          <option key={index} value={recipe.name}>{recipe.name}</option>

        ))}

      </select>
    );

  };
  
  export default RecipeDropdown;