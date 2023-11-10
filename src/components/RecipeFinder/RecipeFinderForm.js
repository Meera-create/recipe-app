import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import Alert from './Alert';
import IngredientsList from './IngredientsList';
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
  const [alert, setAlert] = useState(initialState.alert);
  const [alert2, setAlert2] = useState(initialState.alert);

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  }

  const handleAddIngredient = (e) => {
    e.preventDefault();
    console.log(ingredient);
    if (ingredient.length > 0) {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient(initialState.ingredient);
    } else {
      setAlert({ message: "Please enter an ingredient", isSuccess: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ingredientsList.length > 0) {
      try {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}`, {
            headers: {
              "x-api-key": apiConfig.apiKey,
            },
          }
        );
        console.log(data);
        setRecipes(data);
        setSearch(true);
        setAlert(initialState.alert);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please enter an ingredient");
      setAlert2({ message: "Please enter an ingredient", isSuccess: false });
    }
  }

  return (
    
    <div className="form"> 
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
        {alert && <Alert message={alert.message} />}
        <button type="button" onClick={handleSubmit}>Search</button>
      </form>
      {alert2 && <Alert message={alert2.message} />}
    </div>
  );
}

export default RecipeFinderForm;
