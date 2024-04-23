import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import RecipeDropdown from './recipeDropdown';

// Define individual recipes as an array
const pizzaRecipe = {
  name: 'Homemade Pizza',
  ingredients: ['Cheese', 'Flour', 'Instant yeast', 'Origanum', 'Italian herbs', 'Water', 'Salt', 'Sugar'],
  cookTime: '12 minutes',
  dietaryRestrictions: 'Vegetarian',
  favorite: false,
};

const chickenKormaRecipe = {
  name: 'Chicken Korma',
  ingredients: ['Milk', 'Chicken', 'Condensed Milk', 'Spices', 'Herbs', 'Water', 'Salt', 'Sugar'],
  cookTime: '30 minutes',
  dietaryRestrictions: 'Meat-Lover',
  favorite: false,
};

const omelleteRecipe = {
  name: 'Omellete',
  ingredients: ['Milk', 'flour', '3 eggs', 'Salt', 'Tomato'],
  cookTime: '30 minutes',
  dietaryRestrictions: 'Gluten-Free',
  favorite: false,
};

//define states of all necessary features for the interactive recipe book
const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const [showAllFavorites, setShowAllFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([pizzaRecipe, chickenKormaRecipe, omelleteRecipe]);
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(() => {
    // Filter recipes based on search query and favorites from the user
    let filtered = recipes;
    if (searchQuery) {
      filtered = filtered.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (showAllFavorites) {
      filtered = filtered.filter(recipe => recipe.favorite);
    }
    if (selectedDietaryRestrictions.length > 0) {
      filtered = filtered.filter(recipe =>
        selectedDietaryRestrictions.some(restriction => recipe.dietaryRestrictions.includes(restriction))
      );
    }
    setSearchedRecipes(filtered);
  }, [recipes, searchQuery, selectedDietaryRestrictions, showAllFavorites]);

//handles functionality of the select recipe dropdown list where users can select an individual recipe to display.
  const handleSelectRecipe = recipeName => {
    const recipe = recipes.find(recipe => recipe.name === recipeName);
    setSelectedRecipe(recipe);
    setSearchQuery(''); // Clear the search query when a recipe is selected
    setShowAllRecipes(false);
  };
//handles functionality for ShowAllRecipes checkbox that when checked will show all of the recipes in the book.
  const handleShowAllRecipesChange = event => {
    setShowAllRecipes(event.target.checked);
    setSelectedRecipe(null); // Reset selected recipe to null when show all recipes checkbox is changed
    if (event.target.checked) {
      setSearchedRecipes(recipes); // Set searchedRecipes to all recipes when show all recipes is checked
    }
  };

  //handles functionality of showAllFavourites checkbox where when checked shows all of the recipes favourited by the user.
  const handleShowAllFavoritesChange = event => {
    setShowAllFavorites(event.target.checked);
    setSelectedRecipe(null); // Reset selected recipe to null when show all favorites checkbox is changed
  };

  //Updates state for when user wants to use the filted function
  const handleShowFilter = () => {
    setShowFilter(prevState => !prevState);
  };

  // handles functionality for when user filters by dietary restrictions.
  const handleDietaryRestrictionChange = restriction => {
    if (selectedDietaryRestrictions.includes(restriction)) {
      setSelectedDietaryRestrictions(selectedDietaryRestrictions.filter(item => item !== restriction));
    } else {
      setSelectedDietaryRestrictions([...selectedDietaryRestrictions, restriction]);
    }
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault(); // Prevent form submission
    // No need to filter here, useEffect will take care of it
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  //handles the toggling of favourite for each recipe and updates the recipes state.
  const handleToggleFavorite = recipeName => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.name === recipeName) {
        return { ...recipe, favorite: !recipe.favorite };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  //block of JSX represents the main user interface of the website
  return (
    <div className="container">
      <h1>Recipe Book</h1>
      <form onSubmit={handleSearchSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search recipes"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
          <button type="button" onClick={handleClearSearch}>Clear</button>
        </div>
      </form>
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
      <RecipeDropdown recipes={recipes} onSelectRecipe={handleSelectRecipe} searchQuery={searchQuery} />
      <div>
        <label>
          <input
            type="checkbox"
            checked={showAllRecipes}
            onChange={handleShowAllRecipesChange}
          />
          Show All Recipes
        </label>
        <label>
          <input
            type="checkbox"
            checked={showAllFavorites}
            onChange={handleShowAllFavoritesChange}
          />
          Show All Favorites
        </label>
      </div>
      {selectedRecipe && <Recipe recipe={selectedRecipe} onToggleFavorite={handleToggleFavorite} />}
      {!selectedRecipe && searchedRecipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} onToggleFavorite={handleToggleFavorite} />
      ))}
    </div>
  );
};

export default App;
