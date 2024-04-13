import logo from './logo.svg';
import './App.css';
import React from 'react';

// Main App component
const App = () => {
  // Define recipe data
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

  const Recipe = ({ recipe }) => {
    return (
      <div className="recipe">
        <h3>{recipe.name}</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
        <p><strong>Dietary Restrictions:</strong> {recipe.dietaryRestrictions}</p>
        {/* Add more details about the recipe as needed */}
      </div>
    );
  };
}


export default App;

