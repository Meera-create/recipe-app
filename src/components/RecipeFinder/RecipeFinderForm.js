import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import IngredientsList from './IngredientsList';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_recipe-finder-form.scss'


const RecipeFinderForm = ({ setRecipes, setSearch, ingredientsList, setIngredientsList, setExtractedRecipe }) => {
 
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
    ingredient: "",
  };

  const [ingredient, setIngredient] = useState(initialState.ingredient);

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (ingredient.length > 0) {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient(initialState.ingredient);
      toast.success("Ingredient added!");
    } else {
      toast.error("Please enter an ingredient");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ingredientsList.length > 0) {
      try {
        const ingredientsSearch = ingredientsList.join(",+");
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsSearch}`, {
            headers: {
              "x-api-key": apiConfig.apiKey,
            },
          }
        );
        console.log(data) 
        setRecipes(data);
        setSearch(true);
        setExtractedRecipe({});
        setSearch(true);
        toast.success("Recipes found!");
      } catch (error) {
        console.log(error);
        setExtractedRecipe({});
        toast.error("No recipes found :(");
      }
    } else {
      toast.error("Please add an ingredient");
    }
  };

  return (
    <div className="form">
      <Toaster />
      <h1>Search for a recipe...</h1>
      <h2 className="instructions">Just type an ingredient into the search bar and click add. You 
        can add multiple ingredients. If the search returns no results, try removing and
        ingredient from the list.
      </h2>
      <form className="recipe-finder-form"> 
        <div className="search-box">
          <label>Type Ingredients to Search</label>
          <input
            className="input-ingredients"
            type="text"
            placeholder="Add ingredients"
            value={ingredient}
            onChange={handleIngredientChange}
          />
        </div>
        <button className="add-button" type="submit" onClick={handleAddIngredient}>Add</button>
        
        {ingredientsList.length >= 1 && <><IngredientsList ingredientsList={ingredientsList} setIngredientsList={setIngredientsList}/></>}
        <button className="submit-button" type="button" onClick={handleSubmit}>SEARCH INGREDIENTS</button>
      </form>
    </div>
  );
};

export default RecipeFinderForm;
