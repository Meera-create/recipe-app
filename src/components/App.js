import React, { useState } from 'react';
import '../styles/App.css';
import { AuthContext } from '../Context/AuthContext';
import RecipeFinderForm from './RecipeFinder/RecipeFinderForm.js';

function App() {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
      <AuthContext>
        <div className="App">
          <h1>Recipe Finder</h1>
          <RecipeFinderForm  />
            <ul>
              {recipes.map((recipe, index) => (
                <li key={index}>{recipe.name}</li>
              ))}
            </ul>
        </div>
      </AuthContext>
  );
}

export default App;
