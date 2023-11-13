import React, { useState } from 'react';
import RecipeFinderForm from './RecipeFinderForm';
import RecipeAll from './RecipesAll';
import SingleRecipe from './SingleRecipe';

const RecipeHomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(false);
  const [recipeID, setRecipeID] = useState([]);
  const [singleRecipe, setSingleRecipe] = useState([]);
  const [index, setIndex] = useState();
  const [url, setURL] = useState();
  const [extractedRecipe, setExtractedRecipe] = useState([]);

  return (
    <div className='recipe-homepage'>
      <RecipeFinderForm recipes={recipes} setRecipes={setRecipes} setSearch={setSearch} setRecipeID={setRecipeID} />
      <RecipeAll recipes={recipes} search={search} recipeID={recipeID} setRecipeID={setRecipeID} setIndex={setIndex}  />
      <SingleRecipe singleRecipe={singleRecipe} setSingleRecipe={setSingleRecipe}
        recipeID={recipeID} setRecipeID={setRecipeID} index={index} setIndex={setIndex} recipes={recipes}
        url={url} setURL={setURL} extractedRecipe={extractedRecipe}  setExtractedRecipe={setExtractedRecipe}
      />
        
    </div>
  )
}

  export default RecipeHomePage;