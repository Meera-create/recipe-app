import React, { useState } from 'react';
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm.js';

function App() {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <h1>Recipe Finder</h1>
      <RecipeFinderForm  />
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
