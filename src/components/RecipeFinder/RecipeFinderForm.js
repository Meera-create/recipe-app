import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
// import Alert from './Alert';
import IngredientsList from './IngredientsList';
import toast, { Toaster } from 'react-hot-toast';
// import {useNavigate} from 'react-router-dom';

const RecipeFinderForm = ({ recipes, setRecipes, setSearch, ingredientsList, setIngredientsList }) => {

  // const navigate = useNavigate();
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
    ingredient: "",
  }

  const [ingredient, setIngredient] = useState(initialState.ingredient);
  // const [alert, setAlert] = useState(initialState.alert);
  // const [alert2, setAlert2] = useState(initialState.alert);

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  }

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (ingredient.length > 0) {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient(initialState.ingredient);
      // setAlert(initialState.alert);
      toast.success("Ingredient added!");
    } else {
      // setAlert({ message: "Please enter an ingredient", isSuccess: false });
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
        setRecipes(data);
        setSearch(true);
        // setAlert(initialState.alert);
        toast.success("Recipes found!");
      } catch (error) {
        console.log(error);
        toast.error("No recipes found :(");
      }
    } else {
      toast.error("Please add an ingredient");
      // setAlert2({ message: "Please add an ingredient", isSuccess: false });
    }
  }

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
        <button type="submit" onClick={handleAddIngredient}>Add</button>
        <br /><br />
        {ingredientsList.length >= 1 && <><IngredientsList ingredientsList={ingredientsList} setIngredientsList={setIngredientsList}/> <br /><br /></>}
        {/* {alert && <Alert message={alert.message} />} */}
        <button type="button" onClick={handleSubmit}>Search</button>
      </form>
      {/* {alert2 && <Alert message={alert2.message} />} */}
    </div>
  );
}

export default RecipeFinderForm;
