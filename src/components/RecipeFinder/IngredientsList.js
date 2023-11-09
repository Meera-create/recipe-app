import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = ({ ingredientsList }) => {
  return (<div>
  {ingredientsList.map((ingredient, index) => {
    return <Ingredient ingredientName={ingredient} key={index} />
  })}
  </div>
  );
}

export default IngredientsList