import React, { useEffect, useRef, useState } from 'react';
import RecipeFinderForm from './RecipeFinderForm';
import RecipeAll from './RecipesAll';
import SingleRecipe from './SingleRecipe';
import '../../styles/pages/_recipe-home-page.scss'
import Pagination from '../Pagination';


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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

 
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [extractedRecipe]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = recipes.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='recipe-homepage'>
      <RecipeFinderForm recipes={recipes} setRecipes={setRecipes} setSearch={setSearch} ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList} setExtractedRecipe={setExtractedRecipe} setRandomSearch={setRandomSearch}
      />
        {ingredientsList.length >= 1 || randomSearch ? <RecipeAll recipes={currentPosts} search={search} setExtractedRecipe={setExtractedRecipe} setMissedIngredients={setMissedIngredients} missedIngredients={missedIngredients} /> : null}
        {ingredientsList.length >= 1 && recipes.length > 10 ? <Pagination totalPosts={recipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} /> : null}
      {extractedRecipe.title && <SingleRecipe extractedRecipe={extractedRecipe} missedIngredients={missedIngredients} ingredientsList={ingredientsList} ref={ref}
        />}
    </div>
  );
}

export default RecipeHomePage;
