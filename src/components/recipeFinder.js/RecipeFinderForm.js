import React, { useState } from 'react';

function RecipeFinderForm({ onSearch }) {
  const [ingredients, setIngredients] = useState('');

  const handleIngredientChange = (e) => {
    setIngredients(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients);
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
