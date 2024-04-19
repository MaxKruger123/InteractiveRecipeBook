import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Recipe from './Recipe'; 
import RecipeDropdown from './recipeDropdown';

// Define individual recipes
const pizzaRecipe = {
  name: 'Homemade Pizza',
  ingredients: [
    'Cheese',      
    'Flour',
    'Instant yeast',
    'Origanum',
    'Italian herbs',
    'Water',
    'Salt',
    'Sugar'
  ],
  cookTime: '12 minutes',
  dietaryRestrictions: 'Vegetarian'
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
  dietaryRestrictions: 'Meat-Lover'
};

const omelleteRecipe = {
  name: 'Omellete',
  ingredients: [
    'Milk',
    'flour',
    '3 eggs',
     'Salt',
    'Tomato',       
  ],
  cookTime: '30 minutes',
  dietaryRestrictions: 'Gluten-Free'
};

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showAllRecipes, setShowAllRecipes] = useState(false);

  const handleSelectRecipe = (recipeName) => {
    const recipe = recipes.find(recipe => recipe.name === recipeName);
    setSelectedRecipe(recipe);
    setShowAllRecipes(false);
  };

  const handleShowAllRecipesChange = (event) => {
    setShowAllRecipes(event.target.checked);
    setSelectedRecipe(null); // Reset selected recipe to null when show all recipes checkbox is changed
  };

  const handleShowFilter = () => { 
    setShowFilter(prevState => !prevState);
  };

  const handleDietaryRestrictionChange = (restriction) => {
    if (selectedDietaryRestrictions.includes(restriction)) {
      setSelectedDietaryRestrictions(selectedDietaryRestrictions.filter(item => item !== restriction));
    } else {
      setSelectedDietaryRestrictions([...selectedDietaryRestrictions, restriction]);
    }
  };

  const recipes = [pizzaRecipe, chickenKormaRecipe, omelleteRecipe];

  const filteredRecipes = showAllRecipes
  ? recipes
  : recipes.filter(recipe => {
      return selectedDietaryRestrictions.some(restriction =>
        recipe.dietaryRestrictions.includes(restriction)
      );
    });

  return (
    <div className="container">
      <h1>Recipe Book</h1>
      <div>
        <button onClick={handleShowFilter}>Filter Recipes</button>
        {showFilter && (
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedDietaryRestrictions.includes('Vegetarian')}
                onChange={() => handleDietaryRestrictionChange('Vegetarian')}
              />
              Vegetarian
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDietaryRestrictions.includes('Gluten-Free')}
                onChange={() => handleDietaryRestrictionChange('Gluten-Free')}
              />
              Gluten-Free
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDietaryRestrictions.includes('Meat-Lover')}
                onChange={() => handleDietaryRestrictionChange('Meat-Lover')}
              />
              Meat-Lover
            </label>
          </div>
        )}
      </div>
      <RecipeDropdown recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      <label>
        <input
          type="checkbox"
          checked={showAllRecipes}
          onChange={handleShowAllRecipesChange}
        />
        Show All Recipes
      </label>
      {selectedRecipe && <Recipe recipe={selectedRecipe} />}
      {!selectedRecipe && (
        <div>
          {filteredRecipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

