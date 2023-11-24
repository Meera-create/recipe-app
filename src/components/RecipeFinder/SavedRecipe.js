import React, { forwardRef } from 'react';
import parse from 'html-react-parser';
import "../../styles/components/_saved-recipe.scss";

const SavedRecipe = ({ recipe }, ref) => {
  
  return (
    <div ref={ref} className="single_recipe">
      <div className="clicked-recipe">
        <button >Hidden Button</button>

        {recipe.image !== undefined && (
          <div>
            <img className="image" alt="pic of food" src={recipe.image} />
          </div>
        )}

        <h2>{recipe.title}</h2>

        <div>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original ? ingredient.original : ingredient}</li>
            ))}
          </ul>
        </div>

        <h3>Instructions:</h3>
        {parse(`${recipe.instructions}`)}

        <h3>Time to cook: {recipe.readyInMinutes} minutes </h3>
      </div>
    </div>
  );
};

export default forwardRef(SavedRecipe);