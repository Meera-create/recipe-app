import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import {useNavigate} from 'react-router-dom'

function RecipeFinderForm() {

  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([]);

  const handleIngredientChange = (e) => {
    setIngredients(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://api.edamam.com/search?app_id=${apiConfig.app_id}&app_key=${apiConfig.app_key}&q=${ingredients}`,
      );
      console.log(data);
    } catch (error) {
      console.log(error);
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
      <button type="submit" onClick={()=>navigate('/recipe-list')}>Search</button>
      </form>
      </div>
  );
}

export default RecipeFinderForm;
