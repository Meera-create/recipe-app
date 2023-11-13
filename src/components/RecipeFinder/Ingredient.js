import React from 'react'

const Ingredient = ({ ingredientName, removeIngredient }) => {

  return (
    <p>{ingredientName} <button className='ingredient-remove' style={{color:"red"}} onClick={removeIngredient} type="button">x</button></p>
  )
}

export default Ingredient