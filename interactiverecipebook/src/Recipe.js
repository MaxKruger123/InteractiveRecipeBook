import React from 'react';



const Recipe = ({ recipe }) => { //This functrion simply displays an individual recipes depending on what is chosen by the user
    return (
      <div className="recipe">
        <h3>{recipe.name}</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p><strong>Time to Cook:</strong> {recipe.cookTime}</p>
        <p><strong>Dietary Restrictions:</strong> {recipe.dietaryRestrictions}</p>
        
      </div>
    );
  };
 

  export default Recipe;