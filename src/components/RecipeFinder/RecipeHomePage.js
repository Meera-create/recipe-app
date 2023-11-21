import React, { useState } from 'react';
import RecipeFinderForm from './RecipeFinderForm';
import RecipeAll from './RecipesAll';
import SingleRecipe from './SingleRecipe';
import '../../styles/pages/_recipe-home-page.scss'


const RecipeHomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(false);
  const [randomSearch, setRandomSearch] = useState(false);

  // const [recipeID, setRecipeID] = useState("");
  // const [singleRecipe, setSingleRecipe] = useState([]);
  // const [index, setIndex] = useState();
  // const [url, setURL] = useState();
  const [extractedRecipe, setExtractedRecipe] = useState({});
  const [ingredientsList, setIngredientsList] = useState([]);

  // added below:
  const [missedIngredients, setMissedIngredients] = useState([]);
  

  return (
    <div className='recipe-homepage'>
      <RecipeFinderForm recipes={recipes} setRecipes={setRecipes} setSearch={setSearch} ingredientsList={ingredientsList} 
<<<<<<< HEAD
        setIngredientsList={setIngredientsList} setExtractedRecipe={setExtractedRecipe}/>
      {ingredientsList.length >= 1 && <RecipeAll recipes={recipes} search={search} setExtractedRecipe={setExtractedRecipe}
        // added below:
        setMissedIngredients={setMissedIngredients} missedIngredients={missedIngredients}
      />}
      {extractedRecipe.title && <SingleRecipe extractedRecipe={extractedRecipe}
        // added line:
        missedIngredients={missedIngredients}
      />}
=======
        setIngredientsList={setIngredientsList} setExtractedRecipe={setExtractedRecipe} setRandomSearch={setRandomSearch}/>
        {ingredientsList.length >= 1 || randomSearch ? <RecipeAll recipes={recipes} search={search} setExtractedRecipe={setExtractedRecipe}/> : null}
      {extractedRecipe.title && <SingleRecipe extractedRecipe={extractedRecipe} />}
      {/* {randomSearch && <SingleRecipe extractedRecipe={extractedRecipe} />} */}
>>>>>>> fd78a8a79d10539dae6401ece3b619d00c5d9fd6
    </div>
  );
}

export default RecipeHomePage;
