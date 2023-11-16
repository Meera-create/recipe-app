import React from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import '../../styles/components/_recipes-all.scss';

const RecipeAll = ({ recipes, search, setExtractedRecipe }) => {
  
  const selectRecipe = async (event) => {
    event.preventDefault();
    const recipeId = event.target.value;
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information`,
        {
          headers: {
            "x-api-key": apiConfig.apiKey,
          },
        });

      console.log(data, "fefehfkahe");
      console.log(data.sourceUrl, 'URL WEBSITE');

      const { data: recipeData } = await axios.get(
        `https://api.spoonacular.com/recipes/extract?url=${data.sourceUrl}`,
        {
          headers: {
            "x-api-key": apiConfig.apiKey,
          },
        });
      console.log(recipeData, "extracted recipe");
      setExtractedRecipe(recipeData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="recipesAll">
      {search && <h1>Here is a list of recipes that match your search!</h1>}
    

      <ul className="recipes">
        {recipes.map((recipe) => (
          <button
            className="eachRecipe"
            value={recipe.id}
            key={recipe.id}
            onClick={selectRecipe}
          >
            {recipe.title}
            {recipe.id}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default RecipeAll;

