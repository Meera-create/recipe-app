import React from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import '../../styles/components/_recipes-all.scss';

<<<<<<< HEAD
const RecipeAll = ({ recipes, search, setExtractedRecipe, cuisineType, setMissedIngredients, missedIngredients }) => {
  const selectRecipe = async (event, recipeId) => {
    event.preventDefault();
=======
const RecipeAll = ({ recipes, search, setExtractedRecipe, cuisineType, setMissedIngredients, missedIngredients, scrollToRecipe, clickHandler}) => {

  const selectRecipe = async (event) => {
     event.preventDefault();
    const recipeId = event.target.value;
>>>>>>> 6159b3aee7948597ac4018cf700a36fc2e34b1ef
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information`,
        {
          headers: {
            "x-api-key": apiConfig.apiKey,
          },
        }
      );

      const { data: recipeData } = await axios.get(
        `https://api.spoonacular.com/recipes/extract?url=${data.sourceUrl}`,
        {
          headers: {
            "x-api-key": apiConfig.apiKey,
          },
        }
      );

      setExtractedRecipe(recipeData);

      // Pass the entire recipe object to setMissedIngredients
      if (typeof setMissedIngredients === 'function') {
        setMissedIngredients(recipeData); // Pass the entire recipe object
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Filter recipes by cuisineType
  const filteredRecipes = cuisineType
    ? recipes.filter(recipe => recipe.cuisines.includes(cuisineType))
<<<<<<< HEAD
    : recipes;

=======
      : recipes;
  
>>>>>>> 6159b3aee7948597ac4018cf700a36fc2e34b1ef
  return (
    <div className="recipesAll">
      {search && <h1>Here is a list of recipes that match your search!</h1>}
  
      <ul className="recipes">
<<<<<<< HEAD
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id} className="recipeItem">
            <button
              className="eachRecipe"
              value={recipe.id}
              onClick={(e) => {
                selectRecipe(e, recipe.id);
              }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipeThumbnail"
              />
              <span className="recipeTitle">{recipe.title}</span>
            </button>
          </li>
=======
              {filteredRecipes.map((recipe) => (
                  <button
                      className="eachRecipe"
                      value={recipe.id}
                      key={recipe.id}
                      onClick={(e) => {
                          selectRecipe(e)
                          // clickHandler();
                          setMissedIngredients(recipe)
                      }}
                   >
         
         
                {recipe.title}
           
             
          </button>
>>>>>>> 6159b3aee7948597ac4018cf700a36fc2e34b1ef
        ))}
      </ul>
    </div>
  );
};

export default RecipeAll;








