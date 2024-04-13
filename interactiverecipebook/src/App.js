import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Recipe from './Recipe'; 
import RecipeDropdown from './recipeDropdown';



  // Different individuaol recipes
  const pizzaRecipe = {
    name: 'Homemade Pizza',
    ingredients: [
      'Cheese',
      'Sausage',
      'Flour',
      'Instant yeast',
      'Origanum',
      'Italian herbs',
      'Water',
      'Salt',
      'Sugar'
    ],
    cookTime: '12 minutes',
    dietaryRestrictions: 'contains gluten and cheese'
  };

  const chickenKormaRecipe = {
    name: 'Chicken Korma',
    ingredients: [
      'Milk',
      'Chicken',
      'Condensed Milk',
      'Spices',
      'Herbs',
      'Water',
      'Salt',
      'Sugar'
    ],
    cookTime: '30 minutes',
    dietaryRestrictions: 'contains milk'
  };

  const omelleteRecipe = {
    name: 'Omellete',
    ingredients: [
      'Milk',
      'flour',
      '3 eggs',
      'chorico',
      'Salt',
      'Tomato',       
    ],
    cookTime: '30 minutes',
    dietaryRestrictions: 'contains milk'
  };

//App component
const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelectRecipe = (recipeName) => {
    const recipe = recipes.find(recipe => recipe.name === recipeName);
    setSelectedRecipe(recipe);
  };

  const recipes = [pizzaRecipe, chickenKormaRecipe, omelleteRecipe];
  
  return (
    <div>
      <h1>Recipe Book</h1>
      {/* Render the RecipeDropdown component and pass the recipes array and onSelectRecipe function */}
      <RecipeDropdown recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      {/* Render the Recipe component with the selected recipe details */}
      {selectedRecipe && <Recipe recipe={selectedRecipe} />}
    </div>
  );
};


export default App;

