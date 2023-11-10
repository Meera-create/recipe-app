import React from 'react'

const Ingredient = ({ ingredientName, removeIngredient, ingredientIndex }) => {

  return (
    <p>{ingredientName} <span className='ingredient-remove' style={{color:"red"}} onClick={removeIngredient} ingredientindex={ingredientIndex}>x</span></p>
  )
}

export default Ingredient