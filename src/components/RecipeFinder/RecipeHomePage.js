import React, { useState } from 'react';
import RecipeFinderForm from './RecipeFinderForm';
import RecipeAll from './RecipesAll';

const RecipeHomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(false);

  return (
    <div className='recipe-homepage'>
      <RecipeFinderForm recipes={recipes} setRecipes={setRecipes} setSearch={setSearch}/>
      <RecipeAll recipes={recipes} search={search}/>
    </div>
  )
}

export default RecipeHomePage;