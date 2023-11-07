import React, { useState } from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';

function RecipeFinderForm() {
  const [ingredients, setIngredients] = useState('');

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add ingredients"
        value={ingredients}
        onChange={handleIngredientChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default RecipeFinderForm;
