import React, { useState } from 'react';
import RecipeFinderForm from '/home/dylstar/Projects/recipe-app/src/components/recipeFinder.js/RecipeFinderForm.js';

function App() {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (ingredients) => {
   
  }

  return (
    <div>
      <h1>Recipe Finder</h1>
      <RecipeFinderForm onSearch={searchRecipes} />
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
