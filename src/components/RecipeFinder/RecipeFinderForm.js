import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import Alert from './Alert';
// import {useNavigate} from 'react-router-dom';

const RecipeFinderForm = ({ recipes, setRecipes, setSearch }) => {

  // const navigate = useNavigate();
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  }

  const [ingredients, setIngredients] = useState([]);
  const [alert, setAlert] = useState(initialState.alert)

  const handleIngredientChange = (e) => {
    setIngredients(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ingredients.length > 0) {
      try {
        const { data } = await axios.get(
          `https://api.edamam.com/search?app_id=${apiConfig.app_id}&app_key=${apiConfig.app_key}&q=${ingredients}`,
        );
        console.log(data);
        setRecipes(data.hits);
        setSearch(true);
        setAlert(initialState.alert);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please enter an ingredient");
      setAlert({ message: "Please enter an ingredient", isSuccess: false });
    }
  }

  return (
    
    <div className="form"> 
      <h1>Search for a recipe...</h1>
      <form onSubmit={handleSubmit}>
        <div className="search-box">
          <label>Type Ingredients to Search</label>
          <input
          type="text"
          placeholder="Add ingredients"
          value={ingredients}
          onChange={handleIngredientChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      {alert && <Alert message={alert.message} />}
    </div>
  );
}

export default RecipeFinderForm;
