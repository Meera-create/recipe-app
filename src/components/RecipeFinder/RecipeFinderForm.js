import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import IngredientsList from './IngredientsList';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_recipe-finder-form.scss';

const RecipeFinderForm = ({ setRecipes, setSearch, ingredientsList, setIngredientsList, setExtractedRecipe }) => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
    ingredient: "",
  };

  const [ingredient, setIngredient] = useState(initialState.ingredient);
  const [cuisineType, setCuisineType] = useState("");

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

  const handleCuisineChange = (e) => {
    setCuisineType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ingredientsList.length > 0) {
      try {
        const ingredientsSearch = ingredientsList.join(",+");
        let apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsSearch}`;

        if (cuisineType) {
          apiUrl += `&cuisine=${cuisineType}`;
        }

        const { data } = await axios.get(apiUrl, {
          headers: {
            "x-api-key": apiConfig.apiKey,
          },
        });

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
      <form>
        <div className="search-box">
          <label>Type Ingredients to Search</label>
          <input
            type="text"
            placeholder="Add ingredients"
            value={ingredient}
            onChange={handleIngredientChange}
          />
        </div>
        <div className="cuisine-filter">
          <label>Select Cuisine Type</label>
          <select value={cuisineType} onChange={handleCuisineChange}>
            <option value="">All Cuisines</option>
            <option value="italian">African</option>
            <option value="indian">Asian</option>
            <option value="indian">American</option>
            <option value="indian">British</option>
            <option value="indian">Cajun</option>
            <option value="indian">Carribean</option>
            <option value="indian">Chinese</option>
            <option value="indian">Eastern European</option>
            <option value="indian">European</option>
            <option value="indian">French</option>
            <option value="indian">German</option>
            <option value="indian">Greek</option>
            <option value="indian">Indian</option>
            <option value="indian">Irish</option>
            <option value="indian">Italian</option>
            <option value="indian">Japanese</option>
            <option value="indian">Jewish</option>
            <option value="indian">Korean</option>
            <option value="indian">Latin American</option>
            <option value="indian">Mediterranean</option>
            <option value="indian">Mexican</option>
            <option value="indian">Middle Eastern</option>
            <option value="indian">Nordic</option>
            <option value="indian">Southern</option>
            <option value="indian">Spanish</option>
            <option value="indian">Thai</option>
            <option value="indian">Vietnamese</option>
          
          </select>
        </div>
        <button type="submit" onClick={handleAddIngredient}>Add</button>
        <br /><br />
        {ingredientsList.length >= 1 && <><IngredientsList ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} /> <br /><br /></>}
        <button type="button" onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

export default RecipeFinderForm;

