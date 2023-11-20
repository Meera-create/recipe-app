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
    console.log("ingredientsList:", ingredientsList);
  console.log("cuisineType:", cuisineType);
    if (ingredientsList.length > 0) {
      try {
        const ingredientsSearch = ingredientsList.join(",+");
        let apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsSearch}&number=20`;

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
      <form className="searchForm">
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
            <option value="asian">Asian</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="cajun">Cajun</option>
            <option value="carribean">Carribean</option>
            <option value="chinese">Chinese</option>
            <option value="eastern european">Eastern European</option>
            <option value="european">European</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="irish">Irish</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="jewish">Jewish</option>
            <option value="korean">Korean</option>
            <option value="latin american">Latin American</option>
            <option value="meditteranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="middle eastern">Middle Eastern</option>
            <option value="nordic">Nordic</option>
            <option value="southern">Southern</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
            <option value="vivatnamese">Vietnamese</option>
          
          </select>
        </div>
        <button type="submit" onClick={handleAddIngredient}>Add</button>
       
        {ingredientsList.length >= 1 && <><IngredientsList ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} /></>}
        <button type="button" onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

export default RecipeFinderForm;

