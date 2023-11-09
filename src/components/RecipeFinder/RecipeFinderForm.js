import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const RecipeFinderForm = ({ handleSubmit}) => {

  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([]);

   

  const handleIngredientChange = (e) => {
    setIngredients(e.target.value);
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
        <button type="button" onClick={()=>navigate('/recipe-list')}>Search</button>
        
      </form>
      </div>
  );
}

export default RecipeFinderForm;
