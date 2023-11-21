import React, { useState } from 'react';
import RecipeFinderForm from './RecipeFinderForm';
import RecipeAll from './RecipesAll';
import SingleRecipe from './SingleRecipe';
import '../../styles/pages/_recipe-home-page.scss'


const RecipeHomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(false);

  const [missedIngredients, setMissedIngredients] = useState([]);

  const [extractedRecipe, setExtractedRecipe] = useState({});
  const [ingredientsList, setIngredientsList] = useState([]);
  

  return (
    <div className='recipe-homepage'>
      <RecipeFinderForm recipes={recipes} setRecipes={setRecipes} setSearch={setSearch} ingredientsList={ingredientsList} 
        setIngredientsList={setIngredientsList} setExtractedRecipe={setExtractedRecipe}
        setMissedIngredients={setMissedIngredients} missedIngredients={missedIngredients}
        extractedRecipe={extractedRecipe}
      
      />
      {ingredientsList.length >= 1 && <RecipeAll recipes={recipes} search={search} setExtractedRecipe={setExtractedRecipe}
      setMissedIngredients={setMissedIngredients} 
      />}
      {extractedRecipe.title && <SingleRecipe extractedRecipe={extractedRecipe} ingredientsList={ingredientsList} missedIngredients={missedIngredients} />}
    </div>
  );
}

export default RecipeHomePage;
