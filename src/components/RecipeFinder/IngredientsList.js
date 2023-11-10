import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = ({ ingredientsList, setIngredientsList }) => {

  const handleRemoveIngredient = (e) => {
    e.preventDefault();
    const removedIngredient = e.target.parentElement.firstChild.data;
    const newIngredientsList = ingredientsList.filter((ingredient) => ingredient !== removedIngredient);
    setIngredientsList([...newIngredientsList]);
  }

  return (<div>
  {ingredientsList.map((ingredient, index) => {
    return <Ingredient ingredientName={ingredient} key={index} removeIngredient={handleRemoveIngredient} />
  })}
  </div>
  );
}

export default IngredientsList